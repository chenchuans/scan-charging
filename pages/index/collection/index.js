var e = require("../../../utils/http.js"), t = (require("../../../utils/util.js"), 
require("../../../utils/location.js")), a = getApp();

Page({
    data: {
        searchValue: "",
        name: "",
        loading: !1,
        hasMore: !1,
        nearSiteList: [],
        nonearsite: !1,
        showEV: !1,
        isShowPrice: !1
    },
    deg: 0,
    chargesiteObj: {},
    nearSiteListStorage: [],
    onLoad: function(e) {},
    onReady: function() {},
    onShow: function() {
        var e = this;
        a.getConfig().then(function(t) {
            e.setData({
                showEV: t.config.showAutomobile,
                isShowPrice: t.config.pilePrice
            });
        }), t.getLocation(function(t) {
            e.chargesiteObj = {
                latitude: t.latitude,
                longitude: t.longitude
            }, e.loadnearSiteList();
        });
    },
    loadnearSiteList: function() {
        var t = this;
        e.get({
            url: "/charge-pile-collect/index",
            data: this.chargesiteObj,
            requireAuth: !0,
            showLoading: !0,
            loadingText: "正在加载中...",
            success: function(e) {
                200 === e.statusCode && (0 === e.data.length && t.setData({
                    nonearsite: !0
                }), t.nearSiteListStorage = e.data, t.setData({
                    nearSiteList: e.data
                }));
            }
        });
    },
    collecteBtn: function(t) {
        var a = this;
        e.get({
            url: "/charge-pile-collect/add",
            requireAuth: !0,
            data: {
                chargePileId: t.currentTarget.dataset.chargepileid
            },
            success: function(e) {
                200 === e.statusCode ? wx.showToast({
                    title: "取消收藏",
                    icon: "success",
                    duration: 2e3,
                    success: function() {
                        a.loadnearSiteList();
                    }
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
    },
    searchValueInput: function(e) {
        this.searchNotes(this.data.nearSiteList, e.detail.value), "" == e.detail.value && this.setData({
            nearSiteList: this.nearSiteListStorage
        });
    },
    searchNotes: function(e, t) {
        var a = e.filter(function(e) {
            return -1 != e.siteName.indexOf(t) || -1 != e.pileNo.indexOf(t) || -1 != e.address.indexOf(t);
        });
        this.setData({
            nearSiteList: a
        });
    },
    navToSite: function(e) {
        var t = e.currentTarget.dataset.siteinfo.latitude, a = e.currentTarget.dataset.siteinfo.longitude, i = e.currentTarget.dataset.siteinfo.name, n = e.currentTarget.dataset.siteinfo.location;
        wx.openLocation({
            latitude: t,
            longitude: a,
            name: i,
            address: n,
            scale: 28
        });
    },
    navTositedetail: function(e) {
        if (1 != e.currentTarget.dataset.status && !e.currentTarget.dataset.offlinecharge) return wx.showToast({
            title: "该桩已离线，暂不支持手机端启动充电",
            icon: "none",
            duration: 2e3
        }), !1;
        var t = e.currentTarget.dataset.pileno, a = encodeURIComponent(t);
        if (-1 != e.currentTarget.dataset.distance.indexOf("千米") && parseFloat(e.currentTarget.dataset.distance) > 3 && e.currentTarget.dataset.needforge) {
            var i = e.currentTarget.dataset.avaliable;
            wx.navigateTo({
                url: "/pages/charge/detail/index?scene=" + a + "&avaliable=" + i
            });
        } else wx.navigateTo({
            url: "/pages/charge/detail/index?scene=" + a
        });
    }
});