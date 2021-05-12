var t = require("../../../../utils/http.js");

Page({
    data: {
        time: "获取验证码",
        VerificationCode: !0,
        currentTime: 60,
        Activationtypelist: []
    },
    captchaClick: !1,
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    mobileInputEvent: function(t) {
        this.mobile = t.detail.value;
    },
    getVerificationCode: function(t) {
        var o = this.mobile;
        return o ? /^1\d{10}$/.test(o) ? !this.captchaClick && "countdownnow" != t.currentTarget.id && (this.captchaClick = !0, 
        void this.getCode()) : (wx.showToast({
            title: "预留号码格式不正确",
            icon: "none",
            duration: 2e3
        }), !1) : (wx.showToast({
            title: "获取验证码之前请先填写手机号",
            icon: "none",
            duration: 2e3
        }), !1);
    },
    getCode: function(o) {
        var e = this, i = this.mobile;
        t.post({
            url: "/comm/captcha",
            showLoading: !0,
            loadingText: "正在获取验证码...",
            data: {
                phone: i
            },
            requireAuth: !0,
            success: function(t) {
                if (200 === t.statusCode) {
                    var o = e.data.currentTime, i = setInterval(function() {
                        o--, e.setData({
                            time: o + "秒",
                            VerificationCode: !1
                        }), o <= 0 && (clearInterval(i), e.setData({
                            time: "重新发送",
                            currentTime: 60,
                            VerificationCode: !0
                        }), e.captchaClick = !1);
                    }, 1e3);
                    wx.showToast({
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
    formSubmit: function(o) {
        var e = o.detail.value;
        return "" == e.cardNo ? (wx.showToast({
            title: "充电卡号不能为空",
            icon: "none",
            duration: 2e3
        }), !1) : 10 != e.cardNo.length ? (wx.showToast({
            title: "充电卡号长度为10位",
            icon: "none",
            duration: 2e3
        }), !1) : "" === e.phone ? (wx.showToast({
            title: "预留号码不能为空",
            icon: "none",
            duration: 2e3
        }), !1) : /^1\d{10}$/.test(e.phone) ? "" == e.captcha ? (wx.showToast({
            title: "验证码不能为空",
            icon: "none",
            duration: 2e3
        }), !1) : void t.post({
            url: "/card/add",
            data: e,
            showLoading: !0,
            loadingText: "正在添加...",
            requireAuth: !0,
            success: function(t) {
                200 == t.statusCode ? (wx.showToast({
                    title: "添加电卡成功",
                    icon: "none",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }, 1100)) : wx.showToast({
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
        }) : (wx.showToast({
            title: "预留号码格式不正确",
            icon: "none",
            duration: 2e3
        }), !1);
    },
    saocard: function() {
        var t = this;
        wx.scanCode({
            success: function(o) {
                /^[0-9]{10}$/.test(o.result) ? t.setData({
                    cardNo: o.result
                }) : wx.showToast({
                    title: "扫码错误请手动输入卡号",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    }
});