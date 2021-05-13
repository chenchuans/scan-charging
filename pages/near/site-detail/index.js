var t = require("../../../utils/http.js"), e = require("../../../utils/location.js"), a = getApp();

Page({
    data: {
        isShowPrice: !1,
        pilepointList: "",
        siteId: "",
        sitedetail: "",
        activityOpened: !1,
        showRecharge: !1
    },
    onLoad: function(t) {
        this.setData({
            siteId: t.siteId
        });
    },
    onShow: function() {
        var i = this;
        a.getConfig().then(function(t) {
            i.setData({
                isShowPrice: t.config.pilePrice
            });
        }), t.get({
            url: "/charge-site/show/" + this.data.siteId,
            success: function(t) {
                200 === t.statusCode ? (i.setData({
                    sitedetail: t.data
                }), t.data.activityEnabled && i.setData({
                    activityOpened: !0
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
        }), e.getLocation(function(t) {
            i.data.longitude = t.longitude, i.data.latitude = t.latitude, i.chargesiteObj = {
                latitude: t.latitude,
                longitude: t.longitude
            }, n(i.chargesiteObj);
        });
        var n = function(e) {
            e.siteId = i.data.siteId, t.get({
                url: "/charge-pile/index",
                data: e,
                success: function(t) {
                    200 === t.statusCode ? 0 == t.data.length ? i.setData({
                        nopilepointlist: !0
                    }) : i.setData({
                        pilepointList: t.data
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
        };
    },
    toUsercardRecharge: function(t) {
        this.setData({
            showRecharge: !0
        });
    },
    closeShowRecharge: function() {
        this.setData({
            showRecharge: !1
        });
    },
    chooseRecharge: function(t) {
        var e = t.currentTarget.dataset, a = e.siteid, i = "";
        i = 5 == e.type ? "/pages/mine/topup/index?siteId=" + a + "&rechargeType=5" : "/pages/mine/topup/index?cardNo=&siteId=" + a + "&rechargeType=4", 
        wx.navigateTo({
            url: i
        }), this.closeShowRecharge();
    },
    navToChargedetail: function(t) {
        if (1 == t.currentTarget.dataset.status || t.currentTarget.dataset.offlinecharge) if (t.currentTarget.dataset.pilejudge) {
            var e = t.currentTarget.dataset.pileno, a = encodeURIComponent(e);
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
    navTopile: function(t) {
        var e = t.currentTarget.dataset.pileinfo, a = e.latitude, i = e.longitude, n = e.pileNo, o = e.location;
        wx.openLocation({
            latitude: a,
            longitude: i,
            name: n,
            address: o,
            scale: 28
        });
    }
});