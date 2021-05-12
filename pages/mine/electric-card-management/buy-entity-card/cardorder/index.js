var t = require("../../../../../utils/http.js"), a = require("../../../../../utils/pay.js");

Page({
    data: {
        rechargeAmount: "",
        num: 1,
        minusStatus: "disabled",
        changeShippingMode: !1,
        payWay: "邮费在线支付",
        area: "",
        postType: 2,
        postObject: [],
        isShowPicker: !1,
        miniType: 1
    },
    denominationId: "",
    oldChangeValue: [ 0, 0, 0 ],
    resulitcityinfo: "",
    onLoad: function(t) {
        this.setData({
            miniType: wx.getStorageSync("miniType")
        }), this.denominationId = Number(t.denominationId), this.setData({
            rechargeAmount: Number(t.rechargeAmount)
        }), this.buyCardParam();
    },
    onReady: function(t) {},
    bindMinus: function() {
        var t = this.data.num;
        t > 1 && t--;
        var a = t <= 1 ? "disabled" : "normal";
        this.setData({
            num: t,
            minusStatus: a
        });
    },
    bindPlus: function() {
        var t = this.data.num, a = ++t < 1 ? "disabled" : "normal";
        this.setData({
            num: t,
            minusStatus: a
        });
    },
    bindManual: function(t) {
        var a = t.detail.value;
        if (0 == a && "" != a) return 1;
        "" === a ? this.setData({
            postFee: 0
        }) : this.setData({
            postFee: this.recordpostFee
        }), this.setData({
            num: a
        });
    },
    bindRegionChange: function(t) {
        var a = t.detail.value, i = a[0] + " " + a[1] + " " + a[2];
        this.setData({
            area: i
        });
    },
    onChange: function(t) {
        for (var a = t.detail.value, i = 0; i < a.length; i++) if (a[i] != this.oldChangeValue[i]) switch (console.log(i, "change变化的是那个"), 
        i) {
          case 0:
            this.chooseprovince(this.data.provincesArray[a[i]].id, a);
            break;

          case 1:
            this.choosecity(this.data.citiesArray[a[i]].id, a);
            break;

          case 2:
            this.setfinally(a);
        }
        this.oldChangeValue = t.detail.value;
    },
    chooseprovince: function(t, a) {
        var i = this;
        console.log(t, "省份ID"), this.httpGetCity("/comm/cities", {
            provinceId: t
        }, function(t) {
            i.setData({
                citiesArray: t.data
            }, function() {
                var e;
                e = i.shiIndex && t.data.length >= i.shiIndex + 1 ? t.data[i.shiIndex].id : t.data[0].id, 
                i.httpGetCity("/comm/districts", {
                    cityId: e
                }, function(t) {
                    console.log(t), i.setData({
                        districtsArray: t.data
                    }, function() {
                        i.setfinally(a);
                    });
                });
            });
        });
    },
    choosecity: function(t, a) {
        var i = this;
        this.shiIndex = a[1], this.httpGetCity("/comm/districts", {
            cityId: t
        }, function(t) {
            i.setData({
                districtsArray: t.data
            }, function() {
                console.log(), i.setfinally(a);
            });
        });
    },
    setfinally: function(t) {
        var a, i;
        a = this.data.citiesArray.length < t[1] + 1 ? this.data.citiesArray[0].name : this.data.citiesArray[t[1]].name, 
        i = this.data.districtsArray.length < t[2] + 1 ? this.data.districtsArray[0].name : this.data.districtsArray[t[2]].name, 
        this.resulitcityinfo = this.data.provincesArray[t[0]].name + " " + a + " " + i;
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
        this.httpGetCity("/comm/provinces", function(a) {
            t.setData({
                provincesArray: a.data
            }, function() {
                t.httpGetCity("/comm/cities", {
                    provinceId: a.data[0].id
                }, function(a) {
                    t.setData({
                        citiesArray: a.data
                    }, function() {
                        t.httpGetCity("/comm/districts", {
                            cityId: a.data[0].id
                        }, function(a) {
                            t.setData({
                                districtsArray: a.data
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
        for (var a = arguments.length, i = Array(a), e = 0; e < a; e++) i[e] = arguments[e];
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
    },
    showChangeShippingMode: function() {
        this.setData({
            changeShippingMode: !0
        }), wx.setNavigationBarColor({
            frontColor: "#000000",
            backgroundColor: "#666666"
        });
    },
    hidechangeShippingMode: function() {
        this.setData({
            changeShippingMode: !1
        }), wx.setNavigationBarColor({
            frontColor: "#000000",
            backgroundColor: "#ffffff"
        });
    },
    changeoPerate: function(t) {
        this.setData({
            changeShippingMode: !1
        }), wx.setNavigationBarColor({
            frontColor: "#000000",
            backgroundColor: "#ffffff"
        });
        var a = Number(t.currentTarget.dataset.posttype);
        1 == a ? this.setData({
            payWay: "邮费到付",
            postType: a
        }) : 2 == a && this.setData({
            payWay: "邮费在线支付",
            postType: a
        });
    },
    buyCardSubmit: function(t) {
        var a = t.detail.value;
        a.denominationId = this.denominationId, a.channel = 1, a.postType = this.data.postType, 
        "" != a.cardCount ? "" !== a.receiverName ? "" !== a.receiverPhone ? /^1\d{10}$/.test(a.receiverPhone) ? "" !== a.district ? "" !== a.addressDetail ? this.send(a) : wx.showToast({
            title: "请输入详细地址",
            icon: "none"
        }) : wx.showToast({
            title: "请选择所在地",
            icon: "none"
        }) : wx.showToast({
            title: "手机号码格式不正确",
            icon: "none",
            duration: 2e3
        }) : wx.showToast({
            title: "手机号不能为空",
            icon: "none",
            duration: 2e3
        }) : wx.showToast({
            title: "收货人不能为空",
            icon: "none",
            duration: 2e3
        }) : wx.showToast({
            title: "请至少购买一个",
            icon: "none",
            duration: 2e3
        });
    },
    send: function(a) {
        var i = this;
        t.post({
            url: "/card/online-buy-card",
            showLoading: !0,
            requireAuth: !0,
            data: a,
            success: function(t) {
                i.wx_zfbTopup(t.data);
            }
        });
    },
    buyCardParam: function() {
        var a = this;
        t.get({
            url: "/card/buy-card-param",
            requireAuth: !0,
            success: function(t) {
                a.recordpostFee = t.data.postFee, a.setData({
                    postFee: t.data.postFee,
                    postObject: t.data.postType,
                    cardFee: t.data.cardFee
                });
            }
        });
    },
    wx_zfbTopup: function(t) {
        a.pay(t).then(function(t) {
            wx.redirectTo({
                url: "/pages/mine/electric-card-management/buy-entity-card/success/index"
            });
        }).catch(function(t) {});
    }
});