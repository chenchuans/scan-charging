var t = require("../../../utils/http.js"), e = require("../../../utils/pay.js");

Page({
    data: {
        topupType: [],
        curtopup: "",
        checked: !1,
        rechargeType: 0,
        isWeChat: !0,
        siteName: "",
        cardNo: "",
        avalibleInput: !1,
        buttonText: "立即充值",
        showRechargeTips: !0
    },
    siteId: "",
    walletId: 0,
    id: "",
    miniType: 1,
    onLoad: function(t) {
        var e = t.rechargeType;
        console.log(e), this.setData({
            rechargeType: e
        }), this.miniType = wx.getStorageSync("miniType");
        var a = "充值";
        switch (e) {
          case "1":
            a = "余额充值", this.getRechargeDenomination(1);
            break;

          case "2":
            a = "专用账户充值", this.walletId = t.walletId, this.getRechargeDenomination(1);
            break;

          case "3":
            a = "电卡充值", this.setData({
                cardNo: t.cardNo
            }), this.getRechargeDenomination(2);
            break;

          case "4":
            a = "专用电卡充值", this.siteId = t.siteId, this.setData({
                cardNo: t.cardNo,
                avalibleInput: !!t.cardNo
            }), this.getRechargeAgentDenomination(this.siteId);
            break;

          case "5":
            a = "专用活动钱包充值", this.siteId = t.siteId, this.walletId = t.walletId, this.getRechargeAgentDenomination(this.siteId);
            break;

          case "6":
            a = "购买电卡", this.setData({
                buttonText: "立即购买"
            }), this.getRechargeDenomination(4);
        }
        wx.setNavigationBarTitle({
            title: a
        });
    },
    onShow: function() {},
    getRechargeAgentDenomination: function(e) {
        var a = this;
        t.get({
            url: "/agent-denomination/index",
            data: {
                siteId: e
            },
            success: function(t) {
                wx.hideLoading(), a.setData({
                    topupType: t.data.list,
                    siteName: t.data.siteName
                });
            }
        });
    },
    getRechargeDenomination: function(e) {
        var a = this;
        t.get({
            url: "/denomination/index",
            data: {
                type: e
            },
            success: function(t) {
                wx.hideLoading(), a.setData({
                    topupType: t.data
                });
            }
        });
    },
    ontapTopup: function(t) {
        var e = t.currentTarget.dataset.curtopupindex, a = t.currentTarget.dataset.id;
        this.setData({
            curtopup: e
        }), this.id = a;
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
        var e = this;
        if (this.id || 0 === this.id) if (this.data.checked) if (4 != this.data.rechargeType || this.data.cardNo.trim()) {
            if (1 != this.data.rechargeType && 2 != this.data.rechargeType || t.post({
                url: "/denomination/recharge/" + this.id,
                data: {
                    channel: this.miniType,
                    walletId: this.walletId
                },
                requireAuth: !0,
                success: function(t) {
                    200 === t.statusCode && e.wx_zfbTopup(t.data);
                }
            }), 3 == this.data.rechargeType && this.eleCardRecharge(), 5 != this.data.rechargeType && 4 != this.data.rechargeType || t.post({
                url: "/agent-denomination/recharge/" + this.id,
                data: {
                    channel: this.miniType,
                    siteId: this.siteId,
                    cardNo: this.data.cardNo
                },
                requireAuth: !0,
                success: function(t) {
                    200 === t.statusCode ? e.wx_zfbTopup(t.data) : wx.showToast({
                        title: t.data,
                        icon: "none",
                        duration: 2e3
                    });
                },
                fail: function(t) {
                    wx.showToast({
                        title: t.data,
                        icon: "none",
                        duration: 2e3
                    });
                }
            }), 6 == this.data.rechargeType) {
                var a = this.data.topupType[this.data.curtopup];
                wx.navigateTo({
                    url: "/pages/mine/electric-card-management/buy-entity-card/cardorder/index?denominationId=" + a.id + "&rechargeAmount=" + a.rechargeAmount
                });
            }
        } else wx.showToast({
            title: "请填写正确的充值电卡号！",
            icon: "none",
            duration: 2e3
        }); else wx.showToast({
            title: "请同意《充值活动协议》",
            icon: "none",
            duration: 2e3
        }); else wx.showToast({
            title: "请选择充值面额",
            icon: "none",
            duration: 2e3
        });
    },
    eleCardRecharge: function() {
        var e = this;
        t.get({
            url: "/denomination/check-card-offline",
            requireAuth: !0,
            data: {
                cardNo: this.data.cardNo
            },
            success: function(a) {
                200 === a.statusCode ? t.post({
                    url: "/denomination/recharge/" + e.id,
                    requireAuth: !0,
                    data: {
                        cardNo: e.data.cardNo,
                        channel: e.miniType
                    },
                    success: function(t) {
                        200 === t.statusCode ? e.wx_zfbTopup(t.data) : wx.showToast({
                            title: t.data,
                            icon: "none",
                            duration: 2e3
                        });
                    },
                    fail: function(t) {
                        wx.showToast({
                            title: t.data,
                            icon: "none",
                            duration: 2e3
                        });
                    }
                }) : wx.showToast({
                    title: a.data,
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: t.data,
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    wx_zfbTopup: function(t) {
        e.pay(t).then(function(t) {
            wx.navigateBack({
                delta: 1
            });
        }).catch(function(t) {});
    },
    bindInput: function(e) {
        var a = this;
        10 == e.detail.value.length && (this.setData({
            cardNo: e.detail.value
        }), t.post({
            url: "/card/info",
            requireAuth: !0,
            data: {
                cardNo: e.detail.value
            },
            success: function(t) {
                if (200 === t.statusCode) if (3 == t.data.type) {
                    if (t.data.siteId != a.siteId) return wx.showToast({
                        title: "该卡不支持在该站点充值",
                        icon: "none",
                        duration: 2e3
                    }), void a.cleanCardNo();
                } else if (1 == t.data.type) {
                    if (0 == t.data.hasOwnProperty("siteId")) {
                        return;
                    }
                    a.startRecharge();
                } else 2 == t.data.type && (wx.showToast({
                    title: "该卡不支持在该站点充值",
                    icon: "none",
                    duration: 2e3
                }), a.cleanCardNo()); else wx.showToast({
                    title: t.data,
                    icon: "none",
                    duration: 2e3
                }), a.cleanCardNo();
            },
            fail: function(t) {
                wx.showToast({
                    title: t.data,
                    icon: "none",
                    duration: 2e3
                }), a.cleanCardNo();
            }
        }));
    },
    cleanCardNo: function() {
        var t = this;
        setTimeout(function() {
            t.setData({
                cardNo: ""
            });
        }, 2e3);
    }
});