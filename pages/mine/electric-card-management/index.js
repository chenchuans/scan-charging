function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a = require("../../../utils/http.js");

Page({
    data: {
        cardList: [],
        nocard: !1,
        selectedList: [],
        time: "获取验证码",
        VerificationCode: !0,
        currentTime: 60,
        showcardmodal: !1,
        isShowMask: !1,
        phone: "",
        captcha: "",
        bankCardNo: "",
        isShowBankCardNo: !1
    },
    captchaClick: !1,
    showmoreMdoal: [],
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        var t = this;
        a.get({
            url: "/card/index",
            requireAuth: !0,
            loading: !0,
            success: function(a) {
                if (200 == a.statusCode) {
                    for (var e = 0; e < a.data.length; e++) a.data[e].moreShowStau = !1;
                    t.setData({
                        cardList: a.data
                    });
                }
            }
        });
    },
    onHide: function() {},
    showbankCardNo: function(t) {
        console.log(t), this.setData({
            isShowMask: !0,
            bankCardNo: t.currentTarget.dataset.bankcardno,
            isShowBankCardNo: !0
        });
    },
    navtoTopup: function(t) {
        var a = t.currentTarget.dataset.type, e = t.currentTarget.dataset.cardno;
        if (1 == a || 2 == a) wx.navigateTo({
            url: "/pages/mine/topup/index?cardNo=" + e + "&rechargeType=3"
        }); else if (3 == a) {
            var i = t.currentTarget.dataset.activityenable, n = t.currentTarget.dataset.siteid;
            i ? wx.navigateTo({
                url: "/pages/mine/topup/index?cardNo=" + e + "&siteId=" + n + "&rechargeType=4"
            }) : wx.navigateTo({
                url: "/pages/mine/topup/index?cardNo=" + e + "&rechargeType=3"
            });
        }
    },
    bindCardTips: function() {
        wx.navigateTo({
            url: "/pages/mine/user-card/card-explain/index"
        });
    },
    navtoActivationCard: function() {
        wx.navigateTo({
            url: "./activation-card/index"
        });
    },
    navtoSubStitute: function() {
        wx.navigateTo({
            url: "./replacement-card/index"
        });
    },
    navtoAddElecard: function() {
        this.data.cardList.length >= 5 ? wx.showToast({
            title: "最多可添加5张电卡！",
            icon: "none",
            duration: 2e3
        }) : wx.navigateTo({
            url: "./activation-card/index"
        });
    },
    navtoBuyEntitycard: function() {
        wx.navigateTo({
            url: "/pages/mine/topup/index?rechargeType=6"
        });
    },
    Delete: function(t) {
        var e = this, i = t.currentTarget.dataset, n = i.cardno, o = i.delid;
        wx.showModal({
            title: "确认解绑电卡:" + n + "吗?",
            content: "",
            success: function(t) {
                t.confirm && a.delete({
                    url: "/card/delete/" + o,
                    requireAuth: !0,
                    success: function(t) {
                        if (t.isOk()) {
                            var a = [];
                            e.data.cardList.forEach(function(t) {
                                t.id != o && a.push(t);
                            }), e.setData({
                                cardList: a
                            });
                        } else wx.showToast({
                            title: t.data,
                            icon: "none",
                            duration: 2e3
                        });
                    },
                    fail: function(t) {}
                });
            }
        });
    },
    loss: function(t) {
        var a = this;
        this.curglobalcardNo = t.currentTarget.dataset.cardno, wx.showModal({
            title: "确认挂失电卡:" + this.curglobalcardNo + "吗?",
            content: "",
            success: function(e) {
                e.confirm && (a.mobile = "", clearInterval(a.interval), a.setData({
                    phone: "",
                    captcha: "",
                    time: "获取验证码",
                    currentTime: 60,
                    VerificationCode: !0
                }), a.captchaClick = !1, a.setData({
                    judge: 0
                }), a.curglobalcardId = t.currentTarget.dataset.id, a.setData({
                    showcardmodal: !0,
                    isShowMask: !0
                }));
            }
        });
    },
    backto: function(t) {
        var a = this;
        this.curglobalcardNo = t.currentTarget.dataset.cardno, wx.showModal({
            title: "确认找回电卡:" + this.curglobalcardNo + "吗?",
            content: "",
            success: function(e) {
                e.confirm && (a.mobile = "", clearInterval(a.interval), a.setData({
                    phone: "",
                    captcha: "",
                    time: "获取验证码",
                    currentTime: 60,
                    VerificationCode: !0
                }), a.captchaClick = !1, a.setData({
                    judge: 1
                }), a.curglobalcardNo = t.currentTarget.dataset.cardno, a.curglobalcardId = t.currentTarget.dataset.id, 
                a.setData({
                    showcardmodal: !0,
                    isShowMask: !0
                }));
            }
        });
    },
    searchRecord: function(t) {
        wx.navigateTo({
            url: "/pages/index/records/index?cardNo=" + t.currentTarget.dataset.cardno
        });
    },
    changeName: function(a) {
        var e = a.currentTarget.dataset.index;
        this.setData(t({}, "selectedList[" + e + "]", this.data.selectedList[e] ? null : e + 1));
        for (var i = 0; i < this.data.selectedList.length; i++) this.data.selectedList[i] || (this.data.cardList[i].moreShowStau = !1);
        this.setData({
            cardList: this.data.cardList
        });
    },
    pullcardList: function() {
        var t = this;
        a.get({
            url: "/card/index",
            requireAuth: !0,
            success: function(a) {
                if (200 == a.statusCode) if (0 == a.data.length) t.setData({
                    nocard: !0,
                    cardList: a.data
                }); else {
                    var e = t.data.cardList.map(function(t, e) {
                        return Object.assign(t, a.data[e]);
                    });
                    t.setData({
                        cardList: e
                    });
                }
            }
        });
    },
    getVerificationCode: function(t) {
        var a = this.mobile;
        return a ? /^1\d{10}$/.test(a) ? !this.captchaClick && "countdownnow" != t.currentTarget.id && (this.captchaClick = !0, 
        void this.getCode()) : (wx.showToast({
            title: "手机号码格式不正确",
            icon: "none",
            duration: 2e3
        }), !1) : (wx.showToast({
            title: "获取验证码之前请先填写手机号",
            icon: "none",
            duration: 2e3
        }), !1);
    },
    getCode: function(t) {
        var e = this, i = this.mobile;
        a.post({
            url: "/comm/captcha",
            showLoading: !0,
            loadingText: "正在获取验证码...",
            requireAuth: !0,
            data: {
                phone: i
            },
            success: function(t) {
                if (200 === t.statusCode) {
                    var a = e.data.currentTime;
                    e.interval = setInterval(function() {
                        a--, e.setData({
                            time: a + "秒",
                            VerificationCode: !1
                        }), a <= 0 && (clearInterval(e.interval), e.setData({
                            time: "重新获取",
                            currentTime: 60,
                            VerificationCode: !0
                        }), e.captchaClick = !1);
                    }, 1e3), wx.showToast({
                        title: "发送短信验证码成功，请注意查看您的手机",
                        icon: "none",
                        duration: 2e3
                    });
                } else e.captchaClick = !1;
            },
            fail: function() {
                e.captchaClick = !1;
            }
        });
    },
    formSubmit: function(t) {
        var e = this, i = t.detail.value;
        return "" === i.phone ? (wx.showToast({
            title: "手机号码不能为空",
            icon: "none",
            duration: 2e3
        }), !1) : /^1\d{10}$/.test(i.phone) ? "" == i.captcha ? (wx.showToast({
            title: "验证码不能为空",
            icon: "none",
            duration: 2e3
        }), !1) : void (0 == this.data.judge ? a.post({
            url: "/card/set-lost/" + this.curglobalcardId,
            requireAuth: !0,
            showLoading: !0,
            data: i,
            success: function(t) {
                200 == t.statusCode ? (e.pullcardList(), e.setData({
                    showcardmodal: !1,
                    isShowMask: !1
                }), wx.showToast({
                    title: "挂失成功",
                    icon: "none",
                    duration: 2e3
                })) : wx.showToast({
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
        }) : a.post({
            url: "/card/get-back/" + this.curglobalcardId,
            data: i,
            showLoading: !0,
            requireAuth: !0,
            success: function(t) {
                200 == t.statusCode ? (e.pullcardList(), e.setData({
                    showcardmodal: !1,
                    isShowMask: !1
                }), wx.showToast({
                    title: "找回成功",
                    icon: "none",
                    duration: 2e3
                })) : wx.showToast({
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
        })) : (wx.showToast({
            title: "手机号码格式不正确",
            icon: "none",
            duration: 2e3
        }), !1);
    },
    mobileInputEvent: function(t) {
        this.mobile = t.detail.value;
    },
    maskhide: function() {
        this.setData({
            showcardmodal: !1,
            isShowMask: !1
        });
    },
    rollOut: function(t) {
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.availablebalance, i = t.currentTarget.dataset.cardnum;
        wx.navigateTo({
            url: "./rollinorout/index?id=" + a + "&cardNum=" + i + "&availablebalance=" + e + "&type=0"
        });
    },
    serachWalletBalance: function(t, e) {
        a.get({
            url: "/wallet/balance",
            requireAuth: !0,
            success: function(a) {
                if (200 == a.statusCode) {
                    var i = a.data.amount;
                    wx.navigateTo({
                        url: "./rollinorout/index?id=" + t + "&cardNum=" + e + "&availablebalance=" + i + "&type=1"
                    });
                }
            }
        });
    },
    rollIn: function(t) {
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.cardnum;
        this.serachWalletBalance(a, e);
    },
    controlmoresuspension: function(t) {
        for (var a = 0; a < this.data.cardList.length; a++) a == t.currentTarget.dataset.i ? this.data.cardList[a].moreShowStau = !t.currentTarget.dataset.moreshowstau : this.data.cardList[a].moreShowStau = !1;
        this.setData({
            cardList: this.data.cardList
        });
    },
    showRange: function(t) {
        if (t.currentTarget.dataset.cardsite) {
            var a = t.currentTarget.dataset.id;
            wx.navigateTo({
                url: "/pages/mine/electric-card-management/card-avaliable-site/index?id=" + a
            });
        } else wx.showToast({
            title: "该电卡适用于所有站点！",
            icon: "none",
            duration: 2e3
        });
    },
    closeMask: function() {
        this.setData({
            isShowMask: !1,
            isShowBankCardNo: !1
        });
    },
    showCardDetail: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/mine/electric-card-management/free-card-detail/index?id=" + a
        });
    }
});