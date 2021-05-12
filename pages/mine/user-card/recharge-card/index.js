function t(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = i, t;
}

var e = require("../../../../utils/http.js");

Page({
    data: {
        topupType: [],
        curtopup: "",
        id: "",
        siteName: "",
        checked: !1
    },
    onLoad: function(t) {
        var i = this;
        this.siteid = t.siteid, this.walletid = t.walletid, e.get({
            url: "/agent-denomination/index",
            data: {
                siteId: this.siteid
            },
            success: function(t) {
                i.setData({
                    topupType: t.data.list,
                    siteName: t.data.siteName
                });
            }
        });
    },
    onShow: function() {},
    ontapTopup: function(t) {
        var e = t.currentTarget.dataset.curtopupindex, i = t.currentTarget.dataset.id;
        this.setData({
            curtopup: e
        }), this.id = i;
    },
    navTotopupagreement: function() {
        wx.navigateTo({
            url: "/pages/mine/topup/topup-agreement/index"
        });
    },
    checkboxChange: function() {
        this.setData({
            checked: !this.data.checked
        });
    },
    nowPay: function() {
        var i, a = this;
        return 0 === this.data.curtopup || this.data.curtopup ? 0 == this.data.checked ? (wx.showToast({
            title: "请同意《充值活动协议》",
            icon: "none",
            duration: 2e3
        }), !1) : void e.post((i = {
            url: "/agent-denomination/recharge/" + this.id,
            showLoading: !0,
            data: {
                channel: 1,
                siteId: this.siteid
            },
            requireAuth: !0
        }, t(i, "showLoading", !0), t(i, "success", function(t) {
            200 === t.statusCode && a.wxTopup(t.data);
        }), i)) : (wx.showToast({
            title: "请选择充值面额",
            icon: "none",
            duration: 2e3
        }), !1);
    },
    wxTopup: function(t) {
        wx.requestPayment({
            timeStamp: t.timestamp,
            nonceStr: t.noncestr,
            package: t.packageValue,
            signType: t.signType,
            paySign: t.sign,
            success: function(t) {
                "requestPayment:ok" === t.errMsg && setTimeout(function() {
                    wx.showToast({
                        title: "充值成功",
                        icon: "success",
                        duration: 2e3
                    }), setTimeout(function() {
                        wx.navigateBack({
                            delta: 1
                        }), wx.hideToast();
                    }, 2e3);
                }, 100);
            },
            fail: function(t) {
                wx.showToast({
                    title: "您取消了支付",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    }
});