var a = require("../../../../utils/http.js");

Page({
    data: {
        wrong: !1,
        wrongResult: "",
        Result: "",
        inputbalance: "",
        type: ""
    },
    viewamount: "",
    withdrawal: "",
    drawal: "",
    cardId: "",
    onLoad: function(a) {
        this.availablebalance = a.availablebalance, this.cardId = a.id, this.setData({
            type: a.type,
            cardNum: a.cardNum
        }), 0 == this.data.type ? wx.setNavigationBarTitle({
            title: "转出到余额"
        }) : wx.setNavigationBarTitle({
            title: "转入到电卡"
        }), this.setData({
            Result: "可用余额" + this.availablebalance / 100 + "元"
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    sure: function() {
        var t = this, e = /\./g;
        this.drawal.indexOf(".") > -1 && this.drawal.match(e).length >= 2 && (this.setData({
            inputbalance: ""
        }), this.drawal = "", wx.showToast({
            title: "金额格式不正确",
            icon: "none",
            duration: 2e3
        })), !this.data.wrong && this.drawal && (0 == this.data.type ? wx.showModal({
            title: "确定转出到余额吗",
            content: "",
            success: function(e) {
                e.confirm && a.post({
                    url: "/card/transfer-to-wallet",
                    showLoading: !0,
                    loadingText: "正在转出...",
                    requireAuth: !0,
                    data: {
                        id: t.cardId,
                        amount: Math.round(100 * t.drawal)
                    },
                    success: function(a) {
                        200 === a.statusCode && (t.updateCardAmount(), wx.showToast({
                            title: "转出成功",
                            icon: "none",
                            duration: 2e3
                        }), setTimeout(function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 1e3));
                    }
                });
            }
        }) : wx.showModal({
            title: "确定转入到卡片吗",
            content: "",
            success: function(e) {
                e.confirm && a.post({
                    url: "/wallet/transfer-to-card",
                    showLoading: !0,
                    loadingText: "正在转入...",
                    requireAuth: !0,
                    data: {
                        cardId: t.cardId,
                        amount: Math.round(100 * t.drawal)
                    },
                    success: function(a) {
                        200 === a.statusCode && (t.updateWalletAmount(), wx.showToast({
                            title: "转入成功",
                            icon: "none",
                            duration: 2e3
                        }), setTimeout(function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 1e3));
                    }
                });
            }
        }));
    },
    updateCardAmount: function() {
        this.availablebalance = this.availablebalance - Math.round(100 * this.drawal), this.setData({
            Result: "可用余额" + this.availablebalance / 100 + "元"
        }), this.setData({
            inputbalance: ""
        }), this.drawal = "";
    },
    updateWalletAmount: function() {
        var t = this;
        this.setData({
            inputbalance: ""
        }), this.drawal = "", a.get({
            url: "/wallet/balance",
            requireAuth: !0,
            success: function(a) {
                200 === a.statusCode && (t.availablebalance = a.data.amount, t.setData({
                    Result: "可用余额" + t.availablebalance / 100 + "元"
                }));
            }
        });
    },
    input: function(a) {
        var t = a.detail.value;
        if (t < 1 ? this.setData({
            wrong: !0,
            wrongResult: "!最小金额为1.00"
        }) : t > this.availablebalance / 100 ? this.setData({
            wrong: !0,
            wrongResult: "!余额不足"
        }) : this.setData({
            wrong: !1,
            Result: "可用余额" + this.availablebalance / 100 + "元"
        }), t.indexOf(".") > 0) {
            t.split(".").length - 1 > 1 && (t = t.substring(0, t.indexOf(".")), this.availablebalance / 100 < t && this.setData({
                wrong: !0,
                wrongResult: "!余额不足"
            }));
            var e = t.split(".")[1];
            e && e.length > 2 && (t = t.substring(0, t.indexOf(".") + 3));
        }
        return "" == t && this.setData({
            wrong: !1,
            Result: "可用余额" + this.availablebalance / 100 + "元"
        }), this.drawal = t, t;
    }
});