var t = require("../../../utils/auth.js"), e = require("../../../utils/http.js");

Page({
    data: {
        wrong: !1,
        result: "",
        initValue: "",
        remitFee: 0,
        feeRate: 0,
        rateFee: 0,
        realName: "",
        finalAmount: 0,
        time: "获取验证码",
        VerificationCode: !0,
        currentTime: 60,
        writeRealName: !1
    },
    totalAmount: 0,
    minAmount: 0,
    maxAmount: 0,
    submitAmount: 0,
    wxAppSettleMsgTmplId: "",
    onLoad: function(t) {
        this.totalAmount = t.withdrawalbalance, this.setData({
            result: "账户余额：" + this.totalAmount / 100 + "元"
        }), this.getMessageTemplate();
    },
    onReady: function() {
        var t = this;
        e.get({
            url: "/bonus/settle-info",
            requireAuth: !0,
            success: function(e) {
                if (200 === e.statusCode) {
                    t.minAmount = e.data.minAmount, t.maxAmount = e.data.maxAmount;
                    var a = e.data.remitFee, i = e.data.feeRate;
                    void 0 == i && (i = e.data.wxRemitFee), t.setData({
                        remitFee: a,
                        feeRate: i,
                        realName: e.data.realName,
                        writeRealName: !e.data.realName
                    });
                }
            }
        });
    },
    getVerificationCode: function() {
        var t = this;
        this.data.wrong ? wx.showToast({
            title: "请输入符合条件的提现金额，再获取验证码！",
            icon: "none"
        }) : e.post({
            url: "/bonus/captcha",
            requireAuth: !0,
            success: function(e) {
                if (console.log(e, "这是获取验证码"), 200 === e.statusCode) {
                    var a = t.data.currentTime, i = setInterval(function() {
                        a--, t.setData({
                            time: a + "秒",
                            VerificationCode: !1
                        }), a <= 0 && (clearInterval(i), t.setData({
                            time: "重新发送",
                            currentTime: 60,
                            VerificationCode: !0
                        }), t.captchaClick = !1);
                    }, 1e3);
                    wx.showToast({
                        title: "发送短信验证码成功，请注意查看您的手机",
                        icon: "none"
                    });
                } else wx.showToast({
                    title: "获取验证码失败,请联系客服人员",
                    icon: "none"
                }), t.captchaClick = !1;
            }
        });
    },
    getRealName: function(t) {
        this.realName = t.detail.value;
    },
    onSubmit: function(t) {
        var e = this;
        if (this.data.realName.trim()) if (this.data.wrong) wx.showToast({
            title: "提现信息错误",
            icon: "none"
        }); else if ("" != this.captcha && void 0 != this.captcha) {
            var a = this;
            wx.requestSubscribeMessage({
                tmplIds: [ this.wxAppSettleMsgTmplId ],
                success: function(t) {
                    a.submitRequest();
                },
                fail: function(t) {
                    a.submitRequest();
                }
            });
        } else wx.showToast({
            title: "请填写验证码",
            icon: "none"
        }); else wx.showModal({
            title: "提示",
            content: "请先进行实名认证再确认提现",
            success: function(t) {
                t.confirm ? (console.log("用户点击确定"), e.setData({
                    writeRealName: !0
                })) : t.cancel && console.log("用户点击取消");
            }
        });
    },
    getMessageTemplate: function() {
        var t = this;
        e.get({
            url: "/MiniApp/findMsgTmplId",
            success: function(e) {
                200 === e.statusCode ? t.wxAppSettleMsgTmplId = e.data.wxAppSettleMsgTmplId : wx.showToast({
                    title: e.data,
                    icon: "none"
                });
            }
        });
    },
    onInput: function(t) {
        var e = t.detail.value, a = e.indexOf(".");
        return 0 == a ? "0." : a > 0 && e.length - a > 3 ? e.substring(0, a + 3) : (a = e.indexOf(".", a + 1)) > 0 ? e = e.substring(0, a) : e.length > 1 && "0" == e.charAt(0) && "0" == e.charAt(1) ? e = e.substring(1) : ("" == e && (e = "0"), 
        void this.calculate(100 * e));
    },
    allTurnOut: function() {
        this.setData({
            initValue: this.totalAmount / 100 + ""
        }), this.calculate(this.totalAmount);
    },
    calculate: function(t) {
        var e = parseFloat(t), a = !1, i = "账户余额" + this.totalAmount / 100 + "元";
        e < this.minAmount ? (a = !0, i = "最小提现金额为" + this.minAmount / 100 + "元！") : e > this.totalAmount ? (a = !0, 
        i = "余额不足！") : e > this.maxAmount && (a = !0, i = "最高提现金额" + this.maxAmount / 100 + "元！");
        var s = Math.ceil(e * this.data.feeRate), n = e - s - this.data.remitFee;
        this.setData({
            wrong: a,
            result: i,
            finalAmount: n.toFixed(2),
            rateFee: s
        }), this.submitAmount = e.toFixed(0);
    },
    getCaptcha: function(t) {
        this.captcha = t.detail.value;
    },
    submitRequest: function() {
        var a = t.getUserInfo();
        e.post({
            url: "/bonus/settle",
            requireAuth: !0,
            data: {
                amount: this.submitAmount,
                realName: this.data.realName,
                nickName: a.nickname,
                captcha: this.captcha
            },
            success: function(t) {
                200 === t.statusCode ? (wx.showToast({
                    title: "提现申请成功！",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.navigateBack();
                }, 2e3)) : wx.showToast({
                    title: t.data,
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    closePop: function() {
        this.setData({
            writeRealName: !1,
            realName: ""
        });
    },
    confirm: function() {
        var t = this;
        e.get({
            url: "/user/save-realname?name=" + this.realName,
            requireAuth: !0,
            success: function(e) {
                200 === e.statusCode ? (wx.showToast({
                    title: "实名认证成功",
                    icon: "none"
                }), t.setData({
                    writeRealName: !1,
                    realName: t.realName
                })) : wx.showToast({
                    title: e.data,
                    icon: "none"
                });
            }
        });
    }
});