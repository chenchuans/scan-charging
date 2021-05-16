var e = require("./utils/http.js"), t = require("./utils/auth.js"), a = require("./utils/client.js"), r = require("./utils/constant.js"), s = require("./utils/location.js");

App({
    userInfo: {
        username: '',
        password: '',
        phone: '',
        uid: ''
    },
    firstShow: !0,
    chargeStatus: r.NO_CHARGING,
    chargeStatusCallbacks: [],
    chargeStatusData: {},
    chagePageShowing: !1,
    listenDone: !1,
    lastChargeDoneEmitedTime: 0,
    ermpileNo: "",
    appName: "",
    onLaunch: function(a) {
        var r = this;
        if ("alipay" === wx.__target__) {
            if (wx.setStorageSync("miniType", "2"), console.log("I am alipay mini-program."), 
            a.query && a.query.qrCode) {
                var s = a.query.qrCode.split("?")[0];
                s = s.substring(s.lastIndexOf("/") + 1), this.ermpileNo = s;
            }
        } else wx.setStorageSync("miniType", "1"), console.log("I am wechat mini-program.");
        wx.getNetworkType({
            success: function(e) {
                wx.setStorageSync("networkType", e.networkType);
            }
        }), wx.onNetworkStatusChange(function(e) {
            wx.setStorageSync("networkType", e.networkType);
        }), e.get({
            url: "/user/brief-info",
            requireAuth: !0,
            success: function(e) {
                if (200 === e.statusCode) {
                    var a = e.data;
                    t.saveUserInfo(a), "alipay" === wx.__target__ && t.setAuthorized(), r.recoverChargeStatus();
                } else wx.removeStorageSync("user-info"), wx.removeStorageSync("recordId"), wx.removeStorageSync("curPileId"), 
                wx.removeStorageSync("curPileTimeInfo");
            },
            fail: function(e) {
                wx.removeStorageSync("user-info"), wx.removeStorageSync("recordId"), wx.removeStorageSync("curPileId"), 
                wx.removeStorageSync("curPileTimeInfo");
            }
        }), this.firstShow = !0;
    },
    onShow: function() {
        var e = this;
        s.assertCanUse();
        var a = wx.getStorageSync("miniType");
        this.firstShow || "1" != a || t.checkSession(function() {
            e.recoverChargeStatus();
        }), this.firstShow || "2" != a || this.recoverChargeStatus(), this.firstShow = !1;
    },
    startListenStompMessage: function(e) {
        var t = this;
        this.getChargeStatus() != r.WAIT_NOTICE && this.getChargeStatus() != r.CHARG_STARTING || a.topic("/app-charge-started", function(e) {
            0 == e.status ? t.updateChargeStatus(r.WAIT_CHARGE, e) : 1 == e.status ? t.updateChargeStatus(r.CHARGING, e) : t.updateChargeStatus(r.CHARG_FINISH, e);
        }), a.topic("/app-charge-power", function(e) {
            t.updateChargeStatus(r.CHARG_POWER, e);
        }), a.topic("/app-charge-payload", function(e) {
            t.updateChargeStatus(r.CHARGING, e);
        }), a.topic("/app-charge-suspend", function(e) {
            t.updateChargeStatus(r.CHARG_SUSPEND, e);
        }), a.topic("/app-charge-continue", function(e) {
            t.updateChargeStatus(r.CHARGING, e);
        }), a.topic("/app-charge-done", function(e) {
            var a = Date.now() / 1e3;
            a - t.lastChargeDoneEmitedTime > 5 && (t.updateChargeStatus(r.CHARG_FINISH, e), 
            t.lastChargeDoneEmitedTime = a);
        }), a.start(wx.getStorageSync("user-info").id, function() {
            t.listenDoneCallback && t.listenDoneCallback(), t.listenDone = !0;
        }), a.onStoped(function() {
            t.listenDone = !1;
        }), wx.setStorageSync("recordId", e);
    },
    stopListenStompMessage: function() {
        wx.removeStorageSync("recordId"), wx.removeStorageSync("expectedconsume"), this.resetChargeStatus(), 
        a.stop();
    },
    resetChargeStatus: function() {
        this.clearChargeStatusCallbacks(), this.updateChargeStatus(r.NO_CHARGING);
    },
    getChargeStatus: function() {
        return this.chargeStatus;
    },
    updateChargeStatus: function(e, t) {
        this.chargeStatus = e, this.chargeStatusCallbacks.forEach(function(a) {
            a.status == e && a.callback && a.callback(t);
        }), t && (this.chargeStatusData[e] = t), this.checkChargeStatusAndPage();
    },
    checkChargeStatusAndPage: function() {
        this.chargeStatus != r.CHARG_SUSPEND || this.chagePageShowing || wx.redirectTo({
            url: "/pages/charge/control/index"
        });
    },
    registeChargeStatusCallback: function(e, t) {
        this.getChargeStatus() == e && t(this.chargeStatusData[e]), this.chargeStatusCallbacks.push({
            status: e,
            callback: t
        });
    },
    registeListenDoneCallback: function(e) {
        this.listenDone ? e() : this.listenDoneCallback = e;
    },
    clearChargeStatusCallbacks: function() {
        this.chargeStatusCallbacks.splice(0, this.chargeStatusCallbacks.length), this.listenDoneCallback = null, 
        this.listenDone = !1;
    },
    setChagePageShowing: function(e) {
        this.chagePageShowing = e;
    },
    recoverChargeStatus: function() {
        var t = this, a = function(e) {
            var a = e.data.id;
            wx.setStorageSync("chargeRecord", encodeURIComponent(JSON.stringify(e.data)));
            var s = e.data.status;
            1 == s && (t.updateChargeStatus(r.CHARGING), t.startListenStompMessage(a)), 2 == s && t.updateChargeStatus(r.CHARG_FINISH, {
                recordId: a,
                message: "充电已完成"
            }), 4 == s && (t.updateChargeStatus(r.CHARG_SUSPEND, {
                recordId: a,
                message: "充电已暂停"
            }), t.startListenStompMessage(a));
        }, s = wx.getStorageSync("recordId");
        s ? e.get({
            url: "/charge-record/show/" + s,
            success: a
        }) : e.get({
            url: "/charge-record/mine",
            requireAuth: !0,
            success: function(e) {
                200 == e.statusCode && a(e);
            }
        });
    },
    getRect: function(e, t) {
        var a = wx.createSelectorQuery();
        return new Promise(function(r) {
            a[t ? "selectAll" : "select"](e).boundingClientRect(function(e) {
                t && Array.isArray(e) && e.length && r(e), !t && e && r(e);
            }).exec();
        });
    },
    getConfig: function() {
        return new Promise(function(t) {
            e.get({
                url: "/platform/index",
                success: function(e) {
                    if (200 === e.statusCode) {
                        var a = {};
                        a.config = e.data, a.appName = "1" === wx.getStorageSync("miniType") ? e.data.wxAppletName : e.data.zfbAppletName, 
                        t(a);
                    }
                }
            });
        });
    }
});