var t = require("../../utils/http.js"), e = require("../../utils/auth.js"), i = getApp();

Component({
    properties: {
        registerType: {
            type: String,
            value: "1"
        }
    },
    data: {
        time: "获取验证码",
        VerificationCode: !0,
        currentTime: 60,
        phone: "",
        isCode: !1,
        isShow: !0,
        title: "",
        buttonText: ""
    },
    interval: null,
    captchaClick: !1,
    attached: function() {
        var t = wx.getStorageSync("mobile");
        t && (this.mobile = t, this.setData({
            phone: t
        }));
        var e = "", i = "", a = !1, o = !0;
        switch (this.data.registerType.toString()) {
          case "1":
            e = "为了您的账户安全,请绑定手机号!", i = "立即绑定", "alipay" === wx.__target__ && (a = !0, o = !1);
            break;

          case "2":
            e = "更换手机号!", i = "立即绑定", a = !0, o = !1;
            break;

          case "3":
            e = "切换账号!", i = "立即切换", a = !0, o = !1;
        }
        this.setData({
            title: e,
            buttonText: i,
            isCode: a,
            isShow: o
        });
    },
    ready: function() {},
    methods: {
        getVerificationCode: function(t) {
            var e = this.mobile;
            e ? /^1\d{10}$/.test(e) ? this.captchaClick || "countdownnow" == t.currentTarget.id || (this.captchaClick = !0, 
            this.getCode()) : wx.showToast({
                title: "手机号码格式不正确",
                icon: "none",
                duration: 2e3
            }) : wx.showToast({
                title: "获取验证码之前请先填写手机号",
                icon: "none",
                duration: 2e3
            });
        },
        getCode: function(e) {
            var i = this, a = this.mobile;
            t.post({
                url: "/comm/captcha",
                requireAuth: !0,
                showLoading: !0,
                loadingText: "正在获取验证码...",
                data: {
                    phone: a
                },
                success: function(t) {
                    if (200 === t.statusCode) {
                        var e = i.data.currentTime;
                        i.interval = setInterval(function() {
                            e--, i.setData({
                                time: e + "秒",
                                VerificationCode: !1
                            }), e <= 0 && (clearInterval(i.interval), i.setData({
                                time: "重新发送",
                                currentTime: 60,
                                VerificationCode: !0
                            }), i.captchaClick = !1);
                        }, 1e3), wx.showToast({
                            title: "发送短信验证码成功，请注意查看您的手机",
                            icon: "none",
                            duration: 2e3
                        });
                    } else wx.showToast({
                        title: "请联系客服人员",
                        icon: "none",
                        duration: 2e3
                    }), i.captchaClick = !1;
                },
                fail: function(t) {
                    wx.showToast({
                        title: "请联系客服人员",
                        icon: "none",
                        duration: 2e3
                    }), i.captchaClick = !1;
                }
            });
        },
        getPhoneNumber: function(e) {
            var i = this;
            console.log(e), "getPhoneNumber:fail user deny" == e.detail.errMsg ? wx.showToast({
                title: "未授权",
                icon: "none",
                duration: 2e3
            }) : t.get({
                url: "/user/wx-user-phone",
                requireAuth: !0,
                data: {
                    encryptedData: e.detail.encryptedData,
                    iv: e.detail.iv
                },
                success: function(t) {
                    200 === t.statusCode && "" != t.data.phoneNumber ? (i.setData({
                        phone: t.data.phoneNumber
                    }), wx.showToast({
                        title: "同意授权",
                        icon: "none",
                        duration: 2e3
                    })) : (wx.showToast({
                        title: "未获取到微信手机号，请手动绑定",
                        icon: "none",
                        duration: 2e3
                    }), i.setData({
                        isCode: !0,
                        isShow: !1
                    }));
                }
            });
        },
        formSubmit: function(t) {
            var e = t.detail.value, i = this.data.isCode, a = this.data.isShow;
            if (1 == i && 0 == a) {
                if (!e.phone.trim()) return void wx.showToast({
                    title: "手机号码不能为空",
                    icon: "none",
                    duration: 2e3
                });
                if (!/^1\d{10}$/.test(e.phone)) return void wx.showToast({
                    title: "手机号码格式不正确",
                    icon: "none",
                    duration: 2e3
                });
                if (!e.captcha.trim()) return void wx.showToast({
                    title: "验证码不能为空",
                    icon: "none",
                    duration: 2e3
                });
            } else if (e.phone = this.data.phone, !this.data.phone.trim()) return void wx.showToast({
                title: "手机号码不能为空",
                icon: "none",
                duration: 2e3
            });
            var o = wx.getStorageSync("user-info");
            switch (this.data.registerType.toString()) {
              case "1":
                this.doRegister(o, e);
                break;

              case "2":
                this.replacePhone(o, e);
                break;

              case "3":
                this.changeAccount(o, e);
            }
        },
        doRegister: function(e, i) {
            var a = this;
            i.nickname = e.nickName, i.avatar = e.avatarUrl;
            var o = void 0;
            o = "alipay" === wx.__target__ ? "/user/zfb-save" : "/user/wx-save", t.post({
                url: o,
                showLoading: !0,
                loadingText: "正在注册...",
                data: i,
                requireAuth: !0,
                success: function(t) {
                    200 === t.statusCode ? (wx.showToast({
                        title: "注册用户成功",
                        icon: "success",
                        duration: 2e3
                    }), a.checkBriefInfo()) : wx.showToast({
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
            });
        },
        replacePhone: function(e, i) {
            var a = this;
            t.post({
                url: "/user/changePhone",
                showLoading: !0,
                loadingText: "正在更换手机号...",
                requireAuth: !0,
                data: i,
                success: function(t) {
                    200 == t.statusCode ? (clearInterval(a.interval), a.triggerEvent("onRegisteSuccess")) : wx.showModal({
                        title: t.data,
                        content: "",
                        showCancel: !1,
                        success: function(t) {
                            t.confirm && this.setData({
                                time: "重新发送",
                                VerificationCode: !0
                            });
                        }
                    });
                },
                fail: function(t) {
                    wx.showModal({
                        title: t.data,
                        content: "",
                        showCancel: !1,
                        success: function(t) {
                            t.confirm && this.setData({
                                time: "重新发送",
                                VerificationCode: !0
                            });
                        }
                    });
                }
            });
        },
        changeAccount: function(e, a) {
            var o = this;
            a.client = wx.getStorageSync("miniType"), a.nickname = e.nickname, a.avatar = e.avatar, 
            t.post({
                url: "/user/switchUser",
                showLoading: !0,
                loadingText: "正在切换账户...",
                requireAuth: !0,
                data: a,
                success: function(t) {
                    200 == t.statusCode ? (i.stopListenStompMessage(), i.recoverChargeStatus(), wx.showToast({
                        title: "账号切换成功",
                        icon: "none",
                        duration: 2e3
                    }), clearInterval(o.interval), o.triggerEvent("onRegisteSuccess")) : wx.showModal({
                        title: t.data,
                        content: "",
                        showCancel: !1,
                        success: function(t) {
                            t.confirm && (clearInterval(this.interval), this.setData({
                                time: "重新发送",
                                VerificationCode: !0
                            }));
                        }
                    });
                },
                fail: function(t) {
                    wx.showModal({
                        title: t.data,
                        content: "",
                        showCancel: !1,
                        success: function(t) {
                            t.confirm && (clearInterval(this.interval), this.setData({
                                time: "重新发送",
                                VerificationCode: !0
                            }));
                        }
                    });
                }
            });
        },
        checkBriefInfo: function() {
            var i = this;
            t.get({
                url: "/user/brief-info",
                requireAuth: !0,
                success: function(t) {
                    if (200 === t.statusCode) {
                        var a = t.data;
                        e.saveUserInfo(a), i.triggerEvent("onRegisteSuccess");
                    }
                }
            });
        },
        mobileInputEvent: function(t) {
            this.mobile = t.detail.value;
        },
        closeDialog: function() {
            this.triggerEvent("shouldCloseRegistDialog");
        }
    }
});