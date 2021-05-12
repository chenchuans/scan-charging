var t = require("../../../../utils/http.js"), e = (require("../../../../utils/util.js"), 
require("../../../../utils/location.js"));

Page({
    data: {
        isShowPrice: !1,
        searchValue: "",
        name: "",
        nearSiteList: [],
        nonearsite: !1
    },
    deg: 0,
    page: 0,
    params: {
        page: 0,
        size: 6,
        siteId: "",
        latitude: "",
        longitude: ""
    },
    chargesiteObj: {},
    onLoad: function(t) {
        this.params.page = 0, this.params.siteId = t.chargesiteid;
    },
    onReady: function() {},
    onShow: function() {
        var a = this;
        e.getLocation(function(e) {
            a.params.latitude = e.latitude, a.params.longitude = e.longitude, t.get({
                url: "/wallet/findWalletPackagePile",
                requireAuth: !0,
                data: a.params,
                success: function(t) {
                    if (200 === t.statusCode) {
                        if (0 === t.data.length) return a.setData({
                            nonearsite: !0
                        }), !1;
                        a.setData({
                            nearSiteList: t.data
                        }), a.params.page++;
                    }
                }
            });
        });
    },
    onHide: function() {
        this.setData({
            searchValue: ""
        });
    },
    collecteBtn: function(e) {
        var a = this, i = e.currentTarget.dataset.index;
        this.chargePileId = e.currentTarget.dataset.chargepileid, console.log(e);
        var n = this.data.nearSiteList, s = n[i];
        t.get({
            url: "/charge-pile-collect/add",
            requireAuth: !0,
            data: {
                chargePileId: this.chargePileId
            },
            success: function(t) {
                200 === t.statusCode ? (n[i].collected = !n[i].collected, a.setData({
                    nearSiteList: n
                }), wx.showToast({
                    title: s.collected ? "收藏成功" : "取消收藏",
                    icon: "success",
                    duration: 2e3
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
        });
    },
    onReachBottom: function() {
        this.nextPageSearch();
    },
    searchValueInput: function(t) {
        this.loadData(t.detail.value);
    },
    nextPageSearch: function() {
        var e = this;
        this.params.page ? t.get({
            url: "/wallet/findWalletPackagePile",
            requireAuth: !0,
            data: this.params,
            success: function(t) {
                if (200 === t.statusCode) {
                    if (0 == t.data.length) return wx.showToast({
                        title: "已全部加载完！",
                        icon: "none",
                        duration: 2e3
                    }), void (e.params.page = 0);
                    var a = e.data.nearSiteList.concat(t.data);
                    e.setData({
                        nearSiteList: a
                    }), e.params.page++;
                }
            }
        }) : wx.showToast({
            title: "没有更多内容了",
            icon: "none",
            duration: 2e3
        });
    },
    navToSite: function(t) {
        var e = t.currentTarget.dataset.siteinfo.latitude, a = t.currentTarget.dataset.siteinfo.longitude, i = t.currentTarget.dataset.siteinfo.name, n = t.currentTarget.dataset.siteinfo.location;
        wx.openLocation({
            latitude: e,
            longitude: a,
            name: i,
            address: n,
            scale: 28
        });
    },
    navTositedetail: function(t) {
        if (this.params.page = 0, 1 != t.currentTarget.dataset.status) return wx.showToast({
            title: "该桩已离线，暂不支持手机端启动充电",
            icon: "none",
            duration: 2e3
        }), !1;
        var e = t.currentTarget.dataset.pileno, a = encodeURIComponent(e);
        if (-1 != t.currentTarget.dataset.distance.indexOf("千米") && parseFloat(t.currentTarget.dataset.distance) > 3 && t.currentTarget.dataset.needforge) {
            var i = t.currentTarget.dataset.avaliable;
            wx.navigateTo({
                url: "/pages/charge/detail/index?scene=" + a + "&avaliable=" + i
            });
        } else wx.navigateTo({
            url: "/pages/charge/detail/index?scene=" + a
        });
    }
});