var a = require("../../../utils/http.js"), t = require("../../../utils/pay.js");

Page({
    data: {
        pileNo: "",
        amount: 200,
        mixPayEnabled: !1,
        chooseWhichPayment: 1,
        walletId: "",
        siteWalletId: "",
        weChatPayment: !1,
        balancePayment: !1,
        specialPayment: !1,
        siteBalance: 0,
        isShowPaymentMethod: !1,
        isShowMask: !1,
        miniPayLogo: ""
    },
    pileNo: "",
    onLoad: function(a) {
        var t = wx.getStorageSync("miniType");
        this.setData({
            isWeChat: 1 == t,
            miniPayName: 1 == t ? "微信支付" : "支付宝支付",
            miniPayLogo: 1 == t ? "https://charge-pile.oss-cn-hangzhou.aliyuncs.com/icon/icon_wechatpayment2x.png" : "https://charge-pile.oss-cn-hangzhou.aliyuncs.com/icon/icon_zhifubao.png"
        }), this.pileNo = a.pileNo, this.setData({
            pileNo: this.pileNo
        }), this.getpaymentMethod();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    clickMask: function() {
        this.setData({
            isShowMask: !1,
            isShowPaymentMethod: !1
        });
    },
    choossPayment: function(a) {
        var t = a.currentTarget.dataset.method;
        this.setData({
            chooseWhichPayment: t,
            isShowPaymentMethod: !1,
            isShowMask: !1
        });
    },
    choosePaymentMethod: function() {
        this.setData({
            isShowPaymentMethod: !0,
            isShowMask: !0
        });
    },
    getpaymentMethod: function() {
        var t = this;
        a.get({
            url: "/user/pay-type",
            requireAuth: !0,
            data: {
                pileNo: this.pileNo
            },
            success: function(a) {
                200 === a.statusCode ? (t.setData({
                    mixPayEnabled: a.data.mixPayEnabled
                }), 1 == a.data.extPayFirst ? (t.setData({
                    chooseWhichPayment: 3,
                    weChatPayment: !0,
                    balancePayment: !0,
                    balance: a.data.balance
                }), a.data.siteBalance && t.setData({
                    specialPayment: !0,
                    siteBalance: a.data.siteBalance
                })) : a.data.siteBalance ? t.setData({
                    chooseWhichPayment: 2,
                    siteWalletId: a.data.siteWalletId,
                    specialPayment: !0,
                    balancePayment: !0,
                    balance: a.data.balance,
                    siteBalance: a.data.siteBalance
                }) : t.setData({
                    chooseWhichPayment: 1,
                    walletId: a.data.walletId,
                    balancePayment: !0,
                    balance: a.data.balance
                })) : wx.showToast({
                    title: a.data,
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function(a) {
                wx.showToast({
                    title: a.data,
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    nowExchange: function() {
        var a = this;
        1 == this.data.chooseWhichPayment && this.data.balance < this.data.otpPrice && !this.data.mixPayEnabled ? wx.showModal({
            title: "温馨提示",
            showCancel: !0,
            content: "余额不足，请先充值",
            cancelText: "取消",
            confirmText: "去充值",
            success: function(t) {
                t.confirm ? a.navtobalance() : t.cancel;
            }
        }) : 2 == this.data.chooseWhichPayment && this.data.siteBalance < this.data.otpPrice ? wx.showModal({
            title: "温馨提示",
            showCancel: !0,
            content: "专用账户余额不足，请先充值",
            cancelText: "取消",
            confirmText: "去充值",
            success: function(t) {
                t.confirm ? a.navtobalance() : t.cancel;
            }
        }) : this.exchange();
    },
    exchange: function() {
        var e = this;
        a.post({
            url: "/exchange-battery/exchange-battery",
            requireAuth: !0,
            showLoading: !0,
            loadingText: "请稍等",
            data: {
                pileNo: this.pileNo,
                amount: this.data.amount,
                channel: this.data.isWeChat ? 1 : 2,
                payType: this.data.chooseWhichPayment
            },
            success: function(a) {
                var n = a.data;
                if (n || e.success(), 200 === a.statusCode) switch (n.status) {
                  case 10:
                    t.pay(n.payInfo).then(function(a) {
                        e.success();
                    }).catch(function(a) {});
                    break;

                  case 20:
                    wx.showModal({
                        title: "温馨提示",
                        showCancel: !0,
                        content: "余额不足，请先充值",
                        cancelText: "取消",
                        confirmText: "去充值",
                        success: function(a) {
                            a.confirm && e.navtobalance();
                        }
                    });
                }
            },
            fail: function(a) {
                wx.showModal({
                    title: "设备未响应，请求超时！",
                    showCancel: !1
                });
            }
        });
    },
    navtobalance: function() {
        var a = this.data.walletId, t = 2;
        2 == this.data.chooseWhichPayment && (a = this.data.siteWalletId, t = 5), wx.navigateTo({
            url: "/pages/mine/topup/index?siteId=" + this.siteId + "&walletId=" + a + "&rechargeType=" + t
        });
    },
    success: function() {
        wx.showModal({
            title: "温馨提示",
            showCancel: !0,
            content: "支付成功，请线下换电！",
            cancelText: "回到首页",
            confirmText: "确定",
            success: function(a) {
                a.cancel && wx.switchTab({
                    url: "/pages/index/index"
                });
            }
        });
    }
});