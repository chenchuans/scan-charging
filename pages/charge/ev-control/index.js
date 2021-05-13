var e = getApp(), t = require("../../../utils/http.js"), a = require("../../../utils/constant.js"), r = require("../../../utils/util.js");

require("../../../utils/client.js");

Page({
    data: {
        chargeStatus: null,
        power: 0,
        Isthetiming: "00:00:00",
        countdown: "00:00:00",
        realConsumption: 0,
        showModalStatus: !1,
        showFinshDialogue: !1,
        context: "",
        finshtext: "",
        txtColor: "",
        finshreason: "",
        siteName: "",
        pageDeep: 0,
        controlCharginginfo: !1,
        feeType: 1,
        expectedconsume: 0,
        waveHeight: 0,
        collected: !1,
        showWelcome: !1,
        adContent: {},
        adContent1: {},
        chargedPower: 0,
        realTimeTemperature: 0,
        realTimeVoltage: 0,
        realTimeCurrent: 0,
        showBreakPower: !1,
        closeTime: 10
    },
    closeTimer: null,
    recordId: "",
    viewUnloaded: !1,
    curPileId: 0,
    curPileTimeInfo: null,
    textTimer: "",
    showed: !0,
    minusTimer: null,
    plusTimer: null,
    positiveobj: "",
    countdown: "",
    hidetriggered: !1,
    handleExpectedconsume: !1,
    wave: "",
    surplusTime: 0,
    lastSurplusTime: 0,
    timer: null,
    onLoad: function(t) {
        var r = this;
        if (this.getAdImg(), console.log(t.item), t.item) {
            var i = JSON.parse(decodeURIComponent(t.item));
            console.log(i), i && this.setData({
                siteName: i.siteName,
                siteAddress: i.siteAddress,
                pileNo: i.pileNo,
                portNum: i.port
            });
        } else this.curPileTimeInfo = wx.getStorageSync("curPileTimeInfo"), this.setData({
            siteName: wx.getStorageSync("siteName"),
            siteAddress: wx.getStorageSync("siteAddress"),
            pileNo: wx.getStorageSync("pileNo"),
            portNum: this.curPileTimeInfo.port,
            pileAddress: wx.getStorageSync("pileAddress")
        });
        this.recordId = wx.getStorageSync("recordId"), e.setChagePageShowing(!0), this.renderRunStatus(), 
        e.registeChargeStatusCallback(a.CHARG_POWER, function(e) {
            r.setData({
                showBreakPower: !1
            }), e && r.setData({
                chargedPower: e.quantity,
                realTimeTemperature: e.temperature,
                realTimeVoltage: e.voltage,
                realTimeCurrent: e.flows,
                expectedconsume: e.amount / 100
            });
        });
        var s = e.getChargeStatus();
        s != a.WAIT_CHARGE && s != a.CHARGING || this.renderRunStatus(), s == a.WAIT_NOTICE && e.registeListenDoneCallback(function() {
            r.renderRunStatus();
        }), s == a.CHARG_STARTING && (this.renderPageForChargeStarting(), this.renderRunStatus()), 
        e.registeChargeStatusCallback(a.WAIT_CHARGE, function() {
            r.renderPageForWaitCharge(), r.renderRunStatus();
        }), e.registeChargeStatusCallback(a.CHARGING, function(e) {
            console.log("获取到功率"), r.setData({
                showBreakPower: !1
            }), e && e.power && r.setData({
                power: e.power
            }), r.renderPageForCharging(), r.renderRunStatus();
        }), e.registeChargeStatusCallback(a.CHARG_SUSPEND, function() {
            r.setData({
                showBreakPower: !0
            }), r.renderPageForWaitCharge(), r.suspendStateQuery();
        }), e.registeChargeStatusCallback(a.CHARG_FINISH, function(e) {
            r.recordId = e.recordId, r.afterChargeFinished(e.message);
        }), e.registeChargeStatusCallback(a.NO_CHARGING, function(e) {
            r.afterChargeFinished("在线手动停止");
        }), this.setData({
            pageDeep: getCurrentPages().length
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = this;
        this.handleExpectedconsume = !1, this.recordId = wx.getStorageSync("recordId"), 
        this.shownowtime = Date.now(), this.showed = !0, this.hidetriggered && (this.thetiming = this.hidethetiming, 
        this.Thecountdown = this.hideThecountdown, this.thetiming += (this.shownowtime - this.hidenowtime) / 1e3, 
        this.Thecountdown -= (this.shownowtime - this.hidenowtime) / 1e3), setTimeout(function() {
            var r = wx.getStorageSync("ws-open"), i = e.getChargeStatus();
            0 == r && i != a.CHARG_FINISH && i != a.NO_CHARGING && (e.registeListenDoneCallback(function() {
                t.renderRunStatus();
            }), e.startListenStompMessage(t.recordId));
        }, 3e3), this.viewUnloaded = !1;
    },
    onHide: function() {
        this.showed = !1, this.hidenowtime = Date.now(), this.hidethetiming = this.thetiming, 
        this.hideThecountdown = this.Thecountdown, this.hidetriggered = !0;
    },
    onUnload: function() {
        e.clearChargeStatusCallbacks(), e.setChagePageShowing(!1), clearInterval(this.minusTimer), 
        clearInterval(this.plusTimer), this.viewUnloaded = !0;
    },
    getAdImg: function() {
        var e = this;
        t.post({
            url: "/banner/index",
            data: {
                place: 4
            },
            success: function(t) {
                200 === t.statusCode ? 0 != t.data.length && (e.setData({
                    showWelcome: !0,
                    adContent: t.data[0]
                }), e.closeTimer = setInterval(function() {
                    e.data.closeTime || (clearInterval(e.closeTimer), e.closeTimer = null, e.setData({
                        showWelcome: !1
                    })), e.setData({
                        closeTime: e.data.closeTime - 1
                    });
                }, 1e3)) : wx.showToast({
                    title: t.data,
                    icon: "none",
                    duration: 2e3
                });
            }
        }), t.post({
            url: "/banner/index",
            data: {
                place: 5
            },
            success: function(t) {
                200 === t.statusCode ? 0 != t.data.length && e.setData({
                    adContent1: t.data[0]
                }) : wx.showToast({
                    title: t.data,
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    hidePicture: function() {
        clearInterval(this.closeTimer), this.closeTimer = null, this.setData({
            closeTime: 10,
            showWelcome: !1
        });
    },
    jump: function(e) {
        var a = this.data.adContent.type;
        1 != a && (2 == this.data.adContent.origin && t.post({
            url: "/banner/clickBanner",
            requireAuth: !0,
            data: {
                id: this.data.adContent.id
            }
        }), 3 == a ? wx.navigateTo({
            url: "/pages/index/outurl/index?url=" + this.data.adContent.linkUrl
        }) : 2 == a ? wx.navigateToMiniProgram({
            appId: this.data.adContent.linkUrl,
            path: this.data.adContent.miniprogramPage || "pages/index/index",
            success: function(e) {}
        }) : 4 == a && wx.navigateTo({
            url: "/pages/index/rich-text/index?richId=" + this.data.adContent.id
        }));
    },
    loadMultipleChargingOrders: function() {
        var r = this;
        t.post({
            url: "/charge-record/recordStatus",
            requireAuth: !0,
            showLoading: !0,
            success: function(t) {
                200 == t.statusCode && (0 == t.data.length ? (clearInterval(r.minusTimer), clearInterval(r.plusTimer), 
                e.updateChargeStatus(a.NO_CHARGING), e.stopListenStompMessage()) : e.updateChargeStatus(a.CHARGING));
            }
        });
    },
    onButtonClick: function() {
        var e = this;
        wx.showModal({
            title: "是否结束充电",
            content: "",
            success: function(t) {
                t.confirm && e.stopCharging(e.recordId);
            }
        });
    },
    renderPageForChargeStarting: function() {
        this.setData({
            chargeStatus: 2
        }), this.viewUnloaded || (wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#FE5A03"
        }), this.transferBarColor = !1);
    },
    renderPageForWaitCharge: function() {
        this.setData({
            chargeStatus: 0
        }), this.viewUnloaded || (wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#eb5150"
        }), this.transferBarColor = !1);
    },
    renderPageForCharging: function() {
        this.textTimer && clearInterval(this.textTimer), this.setData({
            chargeStatus: 1
        }), this.viewUnloaded || (wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#24c771"
        }), this.transferBarColor = !0);
    },
    renderRunStatus: function() {
        var r = this;
        t.get({
            url: "/charge-record/status/" + this.recordId,
            requireAuth: !0,
            data: this.curPileTimeInfo,
            success: function(t) {
                if (200 == t.statusCode) {
                    r.setData({
                        collected: t.data.collected
                    });
                    var i = t.data;
                    switch (i.status) {
                      case 0:
                        break;

                      case 1:
                        r.renderPageForCharging(), r.timingStatus(t), r.setData({
                            power: i.power
                        });
                        break;

                      case 2:
                      case 3:
                        e.updateChargeStatus(a.CHARG_FINISH, i);
                        break;

                      case 4:
                        r.setData({
                            showBreakPower: !0
                        }), r.renderPageForWaitCharge(), r.suspendStateQuery();
                        break;

                      case 5:
                        r.renderPageForWaitCharge(), r.timingStatus(t);
                    }
                }
            }
        });
    },
    continueWait: function() {
        this.setData({
            showBreakPower: !1
        });
    },
    onpowerToStop: function() {
        var e = this;
        wx.showModal({
            title: "是否结束充电",
            content: "",
            success: function(t) {
                t.confirm && (e.setData({
                    showBreakPower: !1
                }), e.stopCharging(e.recordId));
            }
        });
    },
    suspendStateQuery: function() {
        clearInterval(this.minusTimer), clearInterval(this.plusTimer);
    },
    timingStatus: function(e) {
        var t = this;
        clearInterval(this.minusTimer), clearInterval(this.plusTimer), this.setData({
            feeType: e.data.feeType
        });
        var a = e.data;
        this.Thecountdown = 60 * a.totalMinutes - a.consumeSeconds, console.log("这是进来的总时间", a.totalMinutes), 
        this.setData({
            power: a.power
        }), this.minusTimer = setInterval(function() {
            t.Thecountdown <= 0 && clearInterval(t.minusTimer), t.countdown = r.formatSeconds(t.Thecountdown), 
            t.Thecountdown--, t.showed && t.setData({
                countdown: t.countdown
            }), t.surplusTime = 100 - ~~(100 * t.Thecountdown / (60 * a.totalMinutes)), t.surplusTime !== t.lastSurplusTime && (t.lastSurplusTime = t.surplusTime);
        }, 1e3), this.thetiming = e.data.consumeSeconds;
        var i = 60 * e.data.totalMinutes;
        this.plusTimer = setInterval(function() {
            t.thetiming > i && clearInterval(t.plusTimer), t.positiveobj = r.theTimeSeconds(t.thetiming, e.data.sitePrice / 10), 
            t.thetiming++, t.showed && t.setData({
                Isthetiming: t.positiveobj.result
            });
        }, 1e3);
    },
    afterChargeFinished: function(e) {
        clearInterval(this.minusTimer), clearInterval(this.plusTimer), this.setData({
            finshtext: e,
            showFinshDialogue: !0
        }), this.transferBarColor ? wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#126338"
        }) : wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#752828"
        });
    },
    stopCharging: function(e) {
        var a = this;
        t.post({
            url: "/charge-record/stop/" + e,
            requireAuth: !0,
            showLoading: !0,
            loadingText: "正在停止",
            success: function(e) {
                console.log("停止充电", e), 200 === e.statusCode ? a.loadMultipleChargingOrders() : wx.showModal({
                    title: e.data,
                    showCancel: !1
                });
            }
        });
    },
    chargeFinshConfirm: function() {
        this.loadMultipleChargingOrders(), this.recordId ? wx.redirectTo({
            url: "/pages/index/records/detail/index?recordId=" + this.recordId
        }) : wx.navigateBack();
    }
});