var t = require("../../../utils/http.js");

Page({
    data: {
        phoneBound: !1,
        selected: !0,
        area: "",
        time: "获取验证码",
        VerificationCode: !0,
        currentTime: 60,
        applyTips: "",
        isShowPicker: !1,
        miniType: 1
    },
    oldChangeValue: [ 0, 0, 0 ],
    resulitcityinfo: "",
    onLoad: function(t) {
        this.setData({
            miniType: wx.getStorageSync("miniType")
        }), this.onloadApplyTip();
    },
    onReady: function() {
        var t = wx.getStorageSync("networkType"), e = wx.getStorageSync("networkNomeShowModal");
        if ("none" == t && !e) return wx.showModal({
            title: "当前没有网络，请检查网络设置",
            content: "",
            showCancel: !1,
            success: function(t) {
                wx.setStorageSync("networkNomeShowModal", !1);
            }
        }), void wx.setStorageSync("networkNomeShowModal", !0);
    },
    onloadApplyTip: function() {
        var e = this;
        t.get({
            url: "/agent/apply-des",
            success: function(t) {
                console.log(t), 200 === t.statusCode ? e.setData({
                    applyTips: t.data.des
                }) : wx.showToast({
                    title: t.data,
                    icon: "none",
                    duration: 2e3
                });
            },
            fali: function(t) {
                wx.showToast({
                    title: t.data,
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    personal: function(t) {
        this.setData({
            selected1: !1,
            selected: !0,
            condition: !1
        });
    },
    Corp: function(t) {
        this.setData({
            selected: !1,
            selected1: !0,
            condition: !0
        });
    },
    getVerificationCode: function(t) {
        "countdownnow" !== t.currentTarget.id && this.getCode();
    },
    getCode: function() {
        var e = this, i = this.data.mobile;
        if (!i) return wx.showToast({
            title: "请先填写手机号",
            icon: "none",
            duration: 2e3
        }), !1;
        if (!/^1\d{10}$/.test(i)) return wx.showToast({
            title: "手机号码格式不正确",
            icon: "none",
            duration: 2e3
        }), !1;
        t.post({
            url: "/comm/captcha",
            showLoading: !0,
            loadingText: "正在获取验证码...",
            requireAuth: !0,
            success: function(t) {
                200 === t.statusCode ? wx.showToast({
                    title: "发送短信验证码成功，请注意查看您的手机",
                    icon: "none",
                    duration: 2e3
                }) : wx.showToast({
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
        var a = this.data.currentTime, n = setInterval(function() {
            a--, e.setData({
                time: a + "秒",
                VerificationCode: !1
            }), a <= 0 && (clearInterval(n), e.setData({
                time: "重新发送",
                currentTime: 10,
                VerificationCode: !0
            }));
        }, 1e3);
    },
    onMyEvent: function(t) {
        this.setData({
            phoneBound: !1
        });
    },
    formSubmit: function(e) {
        var i = e.detail.value;
        if (i.realName = i.realName.replace(/\s/g, ""), "" == i.realName) return wx.showToast({
            title: "姓名不能为空",
            icon: "none",
            duration: 2e3
        }), !1;
        if (i.address = i.address.replace(/\s/g, ""), "" === i.address) return wx.showToast({
            title: "请选择所在地",
            icon: "none",
            duration: 2e3
        }), !1;
        if (i.hasOwnProperty("orgCode")) {
            if (i.type = 2, i.orgCode = i.orgCode.replace(/\s/g, ""), "" == i.orgCode) return wx.showToast({
                title: "请填写组织机构代码",
                icon: "none",
                duration: 2e3
            }), !1;
        } else i.type = 1;
        t.post({
            url: "/agent/apply",
            showLoading: !0,
            loadingText: "正在提交申请...",
            data: i,
            requireAuth: !0,
            success: function(t) {
                var e = t;
                200 === t.statusCode ? wx.showModal({
                    title: "申请成功请耐心等候",
                    content: "",
                    showCancel: !1,
                    success: function(t) {
                        if (t.confirm) {
                            var i = wx.getStorageSync("user-info"), a = Object.assign(i, e.data);
                            wx.setStorageSync("user-info", a), wx.redirectTo({
                                url: "../complete/index"
                            });
                        }
                    }
                }) : wx.showToast({
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
    bindRegionChange: function(t) {
        var e = t.detail.value, i = e[0] + " " + e[1] + " " + e[2];
        this.setData({
            area: i
        });
    },
    onChange: function(t) {
        for (var e = t.detail.value, i = 0; i < e.length; i++) if (e[i] != this.oldChangeValue[i]) switch (console.log(i, "change变化的是那个"), 
        i) {
          case 0:
            this.chooseprovince(this.data.provincesArray[e[i]].id, e);
            break;

          case 1:
            this.choosecity(this.data.citiesArray[e[i]].id, e);
            break;

          case 2:
            this.setfinally(e);
        }
        this.oldChangeValue = t.detail.value;
    },
    chooseprovince: function(t, e) {
        var i = this;
        console.log(t, "省份ID"), this.httpGetCity("/comm/cities", {
            provinceId: t
        }, function(t) {
            i.setData({
                citiesArray: t.data
            }, function() {
                var a;
                a = i.shiIndex && t.data.length >= i.shiIndex + 1 ? t.data[i.shiIndex].id : t.data[0].id, 
                i.httpGetCity("/comm/districts", {
                    cityId: a
                }, function(t) {
                    console.log(t), i.setData({
                        districtsArray: t.data
                    }, function() {
                        i.setfinally(e);
                    });
                });
            });
        });
    },
    choosecity: function(t, e) {
        var i = this;
        this.shiIndex = e[1], this.httpGetCity("/comm/districts", {
            cityId: t
        }, function(t) {
            i.setData({
                districtsArray: t.data
            }, function() {
                console.log(), i.setfinally(e);
            });
        });
    },
    setfinally: function(t) {
        var e, i;
        e = this.data.citiesArray.length < t[1] + 1 ? this.data.citiesArray[0].name : this.data.citiesArray[t[1]].name, 
        i = this.data.districtsArray.length < t[2] + 1 ? this.data.districtsArray[0].name : this.data.districtsArray[t[2]].name, 
        this.resulitcityinfo = this.data.provincesArray[t[0]].name + " " + e + " " + i;
    },
    showpicker: function() {
        var t = this;
        this.setData({
            isShowPicker: !0
        }, function() {
            t.initlinkage();
        });
    },
    cancelProvinces: function() {
        this.setData({
            isShowPicker: !1
        });
    },
    sureProvinces: function() {
        this.setData({
            isShowPicker: !1,
            area: this.resulitcityinfo
        });
    },
    initlinkage: function() {
        var t = this;
        this.httpGetCity("/comm/provinces", function(e) {
            t.setData({
                provincesArray: e.data
            }, function() {
                t.httpGetCity("/comm/cities", {
                    provinceId: e.data[0].id
                }, function(e) {
                    t.setData({
                        citiesArray: e.data
                    }, function() {
                        t.httpGetCity("/comm/districts", {
                            cityId: e.data[0].id
                        }, function(e) {
                            t.setData({
                                districtsArray: e.data
                            }, function() {
                                t.resulitcityinfo = t.data.provincesArray[0].name + " " + t.data.citiesArray[0].name + " " + t.data.districtsArray[0].name;
                            });
                        });
                    });
                });
            });
        });
    },
    httpGetCity: function() {
        for (var e = arguments.length, i = Array(e), a = 0; a < e; a++) i[a] = arguments[a];
        3 === i.length ? t.get({
            url: i[i.length - 3],
            data: i[i.length - 2],
            success: function(t) {
                i[i.length - 1](t);
            }
        }) : t.get({
            url: i[i.length - 2],
            showLoading: !0,
            success: function(t) {
                i[i.length - 1](t);
            }
        });
    }
});