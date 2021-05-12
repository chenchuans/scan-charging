var t = require("../../../../utils/http.js"), e = (require("../../../../utils/util.js"), 
require("../../../../utils/location.js"));

getApp();

Page({
    data: {
        id: "",
        isShowPrice: !0,
        nearSiteList: [],
        longitude: 120.64247,
        latitude: 31.323
    },
    onLoad: function(t) {
        this.setData({
            id: t.id
        });
    },
    onReady: function() {
        var t = this;
        e.getLocation(function(e) {
            t.setData({
                latitude: e.latitude,
                longitude: e.longitude
            });
        });
    },
    onShow: function() {
        this.getCardSite();
    },
    onReachBottom: function() {},
    navTositedetail: function(t) {
        var e = t.currentTarget.dataset.siteid;
        wx.navigateTo({
            url: "/pages/index/site-detail/index?siteId=" + e
        });
    },
    listNavToSite: function(t) {
        var e = t.currentTarget.dataset.siteinfo.latitude, i = t.currentTarget.dataset.siteinfo.longitude, a = t.currentTarget.dataset.siteinfo.name, n = t.currentTarget.dataset.siteinfo.location;
        wx.openLocation({
            latitude: e,
            longitude: i,
            name: a,
            address: n,
            scale: 28
        });
    },
    getCardSite: function() {
        var e = this, i = {
            id: this.data.id,
            latitude: this.data.latitude,
            longitude: this.data.longitude
        };
        t.post({
            url: "/card/apply-to-site",
            data: i,
            showLoading: !0,
            requireAuth: !0,
            success: function(t) {
                console.log(t), 200 == t.statusCode && e.setData({
                    nearSiteList: t.data
                });
            }
        });
    }
});