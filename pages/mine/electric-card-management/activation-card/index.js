var t = require("../../../../utils/http.js");

Page({
    data: {
        time: "获取验证码",
        canGetCode: !0,
        currentTime: 60,
        Activationtypelist: [],
        added: !1,
        checked: !1,
        telePhone: "",
        cardNo: "",
        phoneDisabled: !1,
        isFreeCard: !1,
        errMsg: ""
    },
    captchaClick: !1,
    onReady: function() {},
    getChargeNum: function(e) {
        var a = this;
        10 == e.detail.value.length && t.post({
            url: "/card/get-phone-by-cardNo",
            requireAuth: !0,
            data: {
                cardNo: e.detail.value
            },
            success: function(t) {
                if (console.log(t), 200 === t.statusCode) {
                    a.setData({
                        isFreeCard: t.data.freeCard
                    });
                    var e = {}, n = [];
                    e.showtext = "暂不充值", e.denominationId = 0, n.push(e), t.data.denomination.forEach(function(t) {
                        var e = {};
                        e.showtext = "充" + t.rechargeAmount / 100 + "元 ,送" + t.bonusAmount / 100 + "元", 
                        e.denominationId = t.id, n.push(e);
                    }), a.setData({
                        Activationtypelist: n
                    }), 1 == t.data.bind && (a.mobile = t.data.phone, a.setData({
                        telePhone: t.data.phone,
                        phoneDisabled: !0
                    }));
                } else a.setData({
                    errMsg: t.data
                }), wx.showToast({
                    title: t.data,
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function(t) {
                a.setData({
                    errMsg: t.data
                }), wx.showToast({
                    title: t.data,
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    mobileInputEvent: function(t) {
        this.mobile = t.detail.value;
    },
    getVerificationCode: function(t) {
        if (this.data.errMsg) wx.showToast({
            title: this.data.errMsg + ",不可获取验证码！",
            icon: "none",
            duration: 2e3
        }); else {
            var e = this.mobile;
            e ? /^1\d{10}$/.test(e) ? this.captchaClick || "countdownnow" == t.currentTarget.id || (this.captchaClick = !0, 
            this.getCode()) : wx.showToast({
                title: "预留号码格式不正确",
                icon: "none",
                duration: 2e3
            }) : wx.showToast({
                title: "获取验证码之前请先填写手机号",
                icon: "none",
                duration: 2e3
            });
        }
    },
    getCode: function(e) {
        var a = this, n = this.mobile;
        t.post({
            url: "/comm/captcha",
            showLoading: !0,
            loadingText: "正在获取验证码...",
            requireAuth: !0,
            data: {
                phone: n
            },
            success: function(t) {
                if (200 === t.statusCode) {
                    var e = a.data.currentTime, n = setInterval(function() {
                        e--, a.setData({
                            time: e + "秒",
                            canGetCode: !1
                        }), e <= 0 && (clearInterval(n), a.setData({
                            time: "重新发送",
                            currentTime: 60,
                            canGetCode: !0
                        }), a.captchaClick = !1);
                    }, 1e3);
                    wx.showToast({
                        title: "发送短信验证码成功，请注意查看您的手机",
                        icon: "none",
                        duration: 2e3
                    });
                } else a.captchaClick = !1;
            },
            fail: function(t) {
                a.captchaClick = !1;
            }
        });
    },
    bindPowerChange: function(t) {
        this.setData({
            showActivation: this.data.Activationtypelist[t.detail.value].showtext
        }), 0 == this.data.Activationtypelist[t.detail.value].denominationId ? this.denominationId = null : this.denominationId = this.data.Activationtypelist[t.detail.value].denominationId;
    },
    makepricerange: function() {
        var e = this;
        t.get({
            url: "/denomination/index",
            data: {
                type: 3
            },
            success: function(t) {
                var a = {
                    showtext: "暂不充值",
                    denominationId: 0
                }, n = [];
                n.push(a), t.data.forEach(function(t) {
                    a.showtext = "充" + t.rechargeAmount / 100 + "元 ,送" + t.bonusAmount / 100 + "元", 
                    a.denominationId = t.id, n.push(a);
                }), e.setData({
                    Activationtypelist: n
                });
            }
        });
    },
    addedChange: function(t) {
        this.setData({
            added: t.detail.value
        });
    },
    formSubmit: function(t) {
        var e = this, a = t.detail.value;
        a.denominationId = this.denominationId, a.channel = 1, a.added = this.data.added, 
        a.cardNo.trim() ? 10 == a.cardNo.length ? a.phone.trim() ? /^1\d{10}$/.test(a.phone) ? a.captcha.trim() ? this.data.checked ? wx.showModal({
            title: "确认添加该卡吗",
            content: "",
            success: function(t) {
                t.confirm && e.enableCard(a);
            }
        }) : wx.showToast({
            title: "请同意《充值活动协议》",
            icon: "none",
            duration: 2e3
        }) : wx.showToast({
            title: "验证码不能为空",
            icon: "none",
            duration: 2e3
        }) : wx.showToast({
            title: "预留号码格式不正确",
            icon: "none",
            duration: 2e3
        }) : wx.showToast({
            title: "预留号码不能为空",
            icon: "none",
            duration: 2e3
        }) : wx.showToast({
            title: "充电卡号长度为10位",
            icon: "none",
            duration: 2e3
        }) : wx.showToast({
            title: "充电卡号不能为空",
            icon: "none",
            duration: 2e3
        });
    },
    enableCard: function(e) {
        var a = this;
        t.post({
            url: "/card/add-and-enable",
            data: e,
            showLoading: !0,
            requireAuth: !0,
            success: function(t) {
                200 === t.statusCode ? void 0 === e.denominationId || null == e.denominationId ? wx.navigateBack({
                    delta: 1
                }) : a.wxTopup(t.data) : wx.showModal({
                    title: t.data,
                    showCancel: !1,
                    content: ""
                });
            },
            fail: function(t) {
                wx.showModal({
                    title: t.data,
                    showCancel: !1,
                    content: ""
                });
            }
        });
    },
    navTotopupagreement: function() {
        wx.navigateTo({
            url: "/pages/mine/topup/topup-agreement/index"
        });
    },
    wxTopup: function(t) {
        wx.requestPayment({
            timeStamp: t.timestamp,
            nonceStr: t.noncestr,
            package: t.packageValue,
            signType: t.signType,
            paySign: t.sign,
            success: function(t) {
                "requestPayment:ok" === t.errMsg && wx.showToast({
                    title: "支付成功",
                    duration: 3e3,
                    complete: function() {
                        setTimeout(function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 3e3);
                    }
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: "您取消了支付",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    checkboxChange: function() {
        this.setData({
            checked: !this.data.checked
        });
    }
});