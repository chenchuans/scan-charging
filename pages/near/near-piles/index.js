var t = require("../../../utils/http.js"), e = require("../../../utils/util.js"), a = require("../../../utils/location.js"), i = getApp();

Page({
    data: {
        isShowPrice: !1,
        searchValue: "",
        name: "",
        loading: !1,
        hasMore: !1,
        nearSiteList: [],
        nonearsite: !1
    },
    deg: 0,
    page: 0,
    params: {
        page: 0,
        size: 10,
        latitude: 0,
        longitude: 0,
        name: "",
        vehicleType: 1
    },
    onLoad: function(t) {
        this.params.vehicleType = t.vehicleType, this.loadData = e.throttle(this.inputSearch.bind(this), 1e3);
    },
    onReady: function() {},
    onShow: function() {
        var t = this;
        i.getConfig().then(function(e) {
            t.setData({
                isShowPrice: e.config.pilePrice
            });
        }), a.getLocation(function(e) {
            t.params.latitude = e.latitude, t.params.longitude = e.longitude, t.getPileList();
        });
    },
    onHide: function() {
        this.setData({
            searchValue: ""
        });
    },
    getPileList: function() {
        var e = this;
        this.setData({
            hasMore: !1
        }), t.get({
            url: "/charge-pile/index",
            requireAuth: !0,
            data: this.params,
            success: function(t) {
                if (200 === t.statusCode) {
                    if (0 === t.data.length) return e.setData({
                        nonearsite: !0
                    }), !1;
                    e.setData({
                        nearSiteList: t.data
                    });
                }
            }
        });
    },
    collecteBtn: function(e) {
        var a = this, i = e.currentTarget.dataset.index;
        this.chargePileId = e.currentTarget.dataset.chargepileid;
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
        var e = this;
        1 != this.data.hasMore && (this.setData({
            loading: !0
        }), this.updateRefreshIcon(), this.params.page++, t.get({
            url: "/charge-pile/index",
            requireAuth: !0,
            data: this.params,
            success: function(t) {
                if (200 === t.statusCode) {
                    if (0 === t.data.length) return e.setData({
                        hasMore: !0,
                        loading: !1
                    }), void (e.params.page = 0);
                    var a = e.data.nearSiteList.concat(t.data);
                    e.setData({
                        nearSiteList: a
                    }), e.setData({
                        loading: !1
                    });
                }
            }
        }));
    },
    searchValueInput: function(t) {
        this.loadData(t.detail.value);
    },
    inputSearch: function(t) {
        this.setData({
            name: t,
            hasMore: !1,
            nonearsite: !1
        }), this.params.page = 0, this.params.name = t, this.getPileList();
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
    updateRefreshIcon: function() {
        var t = this, e = wx.createAnimation({
            duration: 500,
            timingFunction: "linear",
            delay: 0
        }), a = setInterval(function() {
            t.data.loading || clearInterval(a), t.deg = t.deg += 360, e.rotateZ(t.deg).step(), 
            t.setData({
                refreshAnimation: e.export()
            });
        }, 1e3);
    },
    navTositedetail: function(t) {
        if (this.params.page = 0, 1 == t.currentTarget.dataset.status || t.currentTarget.dataset.offlinecharge) if (t.currentTarget.dataset.pilejudge) {
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
    }
});