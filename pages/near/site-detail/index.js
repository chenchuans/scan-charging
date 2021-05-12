var e = require("../../../utils/http.js"), t = require("../../../utils/location.js"), a = getApp();

Page({
    data: {
        isShowPrice: !1,
        pilepointList: "",
        siteId: "",
        sitedetail: "",
        activityOpened: !1,
        showRecharge: !1,
        vehicleType: 1
    },
    onLoad: function(e) {
        this.setData({
            siteId: e.siteId,
            vehicleType: e.vehicleType
        });
    },
    onShow: function() {
        var i = this;
        a.getConfig().then(function(e) {
            i.setData({
                isShowPrice: e.config.pilePrice
            });
        }), e.get({
            url: "/charge-site/show/" + this.data.siteId,
            success: function(e) {
                200 === e.statusCode ? (i.setData({
                    sitedetail: e.data
                }), e.data.activityEnabled && i.setData({
                    activityOpened: !0
                })) : wx.showToast({
                    title: e.data,
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function(e) {
                wx.showToast({
                    title: e.data,
                    icon: "none",
                    duration: 2e3
                });
            }
        }), t.getLocation(function(e) {
            i.data.longitude = e.longitude, i.data.latitude = e.latitude, i.chargesiteObj = {
                latitude: e.latitude,
                longitude: e.longitude
            }, n(i.chargesiteObj);
        });
        var n = function(t) {
            t.siteId = i.data.siteId, e.get({
                url: "/charge-pile/index",
                data: t,
                success: function(e) {
                    200 === e.statusCode ? 0 == e.data.length ? i.setData({
                        nopilepointlist: !0
                    }) : i.setData({
                        pilepointList: e.data
                    }) : wx.showToast({
                        title: e.data,
                        icon: "none",
                        duration: 2e3
                    });
                },
                fail: function(e) {
                    wx.showToast({
                        title: e.data,
                        icon: "none",
                        duration: 2e3
                    });
                }
            });
        };
    },
    toUsercardRecharge: function(e) {
        this.setData({
            showRecharge: !0
        });
    },
    closeShowRecharge: function() {
        this.setData({
            showRecharge: !1
        });
    },
    chooseRecharge: function(e) {
        var t = e.currentTarget.dataset, a = t.siteid, i = "";
        i = 5 == t.type ? "/pages/mine/topup/index?siteId=" + a + "&rechargeType=5" : "/pages/mine/topup/index?cardNo=&siteId=" + a + "&rechargeType=4", 
        wx.navigateTo({
            url: i
        }), this.closeShowRecharge();
    },
    navToChargedetail: function(e) {
        if (1 == e.currentTarget.dataset.status || e.currentTarget.dataset.offlinecharge) if (e.currentTarget.dataset.pilejudge) {
            var t = e.currentTarget.dataset.pileno, a = encodeURIComponent(t);
            wx.navigateTo({
                url: "/pages/charge/detail/index?scene=" + a
            });
        } else wx.showToast({
            title: "该桩是加盟桩，请线下扫描设备码充电",
            icon: "none",
            duration: 2e3
        }); else wx.showToast({
            title: "该桩已离线，暂不支持手机端启动充电",
            icon: "none",
            duration: 2e3
        });
    },
    navTopile: function(e) {
        var t = e.currentTarget.dataset.pileinfo, a = t.latitude, i = t.longitude, n = t.pileNo, o = t.location;
        wx.openLocation({
            latitude: a,
            longitude: i,
            name: n,
            address: o,
            scale: 28
        });
    }
});