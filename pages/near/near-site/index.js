var t = require("../../../utils/http.js"), e = require("../../../utils/util.js"), a = require("../../../utils/location.js"), i = getApp();

Page({
    data: {
        searchValue: "",
        name: "",
        loading: !1,
        hasMore: !1,
        nearSiteList: [],
        noNearSite: !1,
        whatPattern: !0,
        searchRes: "搜索附近充电桩",
        longitude: 120.64247,
        latitude: 31.36897,
        markers: [],
        condition: !1,
        tapSiteDetail: "",
        title: "我要当桩主!限时抢桩主名额,每个充电桩发放10个.",
        size: 14,
        scale: 16,
        modularTabs: [ "电动车桩", "汽车桩" ],
        currentModularIndex: 0,
        subkey: "",
        showEV: !1,
        isShowPrice: !1
    },
    params: {
        page: 0,
        size: 10,
        distance: !0,
        latitude: 0,
        longitude: 0,
        name: "",
        vehicleType: 1
    },
    changeVehicleType: !0,
    deg: 0,
    mapCtx: null,
    onLoad: function(t) {
        this.loadData = e.throttle(this.inputSearch.bind(this), 1e3), this.mapCtx = wx.createMapContext("map"), 
        a.assertCanUse(), this.moveToCurrentLocation();
    },
    onReady: function() {
        var t = this;
        a.getLocation(function(e) {
            t.params.latitude = e.latitude, t.params.longitude = e.longitude, t.getSiteList();
        });
    },
    onShow: function() {
        var t = this;
        i.getConfig().then(function(e) {
            t.setData({
                subkey: e.config.subkey,
                showEV: e.config.showAutomobile,
                isShowPrice: e.config.pilePrice
            });
        }), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#24c771"
        });
    },
    onReachBottom: function() {
        var e = this;
        this.data.loading || this.data.hasMore || (this.setData({
            loading: !0
        }), this.updateRefreshIcon(), this.params.page++, t.get({
            url: "/charge-site/index",
            data: this.params,
            success: function(t) {
                if (200 === t.statusCode) {
                    if (0 === t.data.length) return e.setData({
                        hasMore: !0,
                        loading: !1
                    }), void (e.params.page = 0);
                    e.setData({
                        nearSiteList: e.data.nearSiteList.concat(t.data),
                        loading: !1
                    });
                }
            }
        }));
    },
    onPullDownRefresh: function() {
        var e = this;
        wx.showNavigationBarLoading(), this.params.page = 0, this.setData({
            hasMore: !1,
            nearSiteList: []
        }), t.get({
            url: "/charge-site/index",
            data: this.params,
            success: function(t) {
                if (200 === t.statusCode) {
                    if (0 === t.data.length) return e.setData({
                        noNearSite: !0
                    }), !1;
                    e.setData({
                        noNearSite: !1,
                        nearSiteList: t.data
                    }), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
                }
            }
        });
    },
    getSiteList: function() {
        var e = this;
        t.get({
            url: "/charge-site/index",
            data: this.params,
            showLoading: !0,
            loadingText: "正在加载...",
            success: function(t) {
                if (200 === t.statusCode) {
                    if (0 === t.data.length) return e.setData({
                        noNearSite: !0
                    }), e.changeVehicleType = !0, !1;
                    e.setData({
                        noNearSite: !1,
                        nearSiteList: e.data.nearSiteList.concat(t.data)
                    });
                }
                e.changeVehicleType = !0;
            }
        });
    },
    searchValueInput: function(t) {
        this.loadData(t.detail.value);
    },
    changeModular: function(t) {
        if (this.changeVehicleType) {
            this.changeVehicleType = !1;
            var e = t.currentTarget.dataset.index;
            this.setData({
                currentModularIndex: e,
                nearSiteList: [],
                hasMore: !1
            }), this.params.vehicleType = e ? 2 : 1, this.params.page = 0, this.data.whatPattern ? this.getSiteList() : this.renderMarkers();
        } else wx.showToast({
            title: "尚未加载完，请稍后切换！",
            icon: "none",
            duration: 2e3
        });
    },
    inputSearch: function(t) {
        this.setData({
            searchValue: t,
            name: t,
            hasMore: !1,
            noNearSite: !1
        }), this.params.name = t, this.getSearchSiteList();
    },
    getSearchSiteList: function() {
        var e = this;
        this.params.page = 0, t.get({
            url: "/charge-site/index",
            data: this.params,
            showLoading: !0,
            loadingText: "正在加载...",
            success: function(t) {
                if (200 === t.statusCode) {
                    if (0 === t.data.length) return e.setData({
                        noNearSite: !0
                    }), e.changeVehicleType = !0, !1;
                    e.setData({
                        noNearSite: !1,
                        nearSiteList: t.data
                    });
                }
                e.changeVehicleType = !0;
            }
        });
    },
    listNavToSite: function(t) {
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
        var e = t.currentTarget.dataset, a = e.siteid, i = e.vehicletype;
        wx.navigateTo({
            url: "/pages/near/site-detail/index?siteId=" + a + "&vehicleType=" + i
        });
    },
    toMapModel: function() {
        this.setData({
            whatPattern: !1
        }), this.renderMarkers();
    },
    toListModel: function() {
        this.setData({
            whatPattern: !0,
            nearSiteList: []
        }), this.getSiteList();
    },
    renderMarkers: function() {
        var t = this;
        this.mapCtx.getCenterLocation({
            success: function(e) {
                t.createMarkers(e);
            }
        });
    },
    onControlTap: function() {
        this.mapCtx.moveToLocation(), this.positioning = !0;
    },
    markertap: function(t) {
        var e = this;
        console.log(t, "点击标记事件");
        for (var i = this.data.markers, n = 0; n < i.length; n++) {
            var s = i[n];
            s.id == t.markerId ? (s.width = 50, s.height = 50, a.getLocation(function(a) {
                e.showbox(t.markerId, a.longitude, a.latitude);
            })) : (s.width = 30, s.height = 30);
        }
        this.setData({
            markers: i
        });
    },
    maptap: function() {
        this.setData({
            condition: !1,
            isCondition: !1
        });
        for (var t = this.data.markers, e = 0; e < t.length; e++) {
            var a = t[e];
            a.width = 30, a.height = 30;
        }
        this.setData({
            markers: t
        });
    },
    showbox: function(e, a, i) {
        var n = this;
        t.post({
            url: "/charge-site/show/" + e,
            data: {
                longitude: a,
                latitude: i
            },
            success: function(t) {
                200 === t.statusCode ? n.setData({
                    tapSiteDetail: t.data,
                    condition: !0
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
    navToSite: function() {
        var t = this.data.tapSiteDetail;
        wx.openLocation({
            latitude: t.latitude,
            longitude: t.longitude,
            name: t.name,
            address: t.address,
            scale: 28
        });
    },
    searchNearby: function() {
        wx.navigateTo({
            url: "/pages/near/near-piles/index?vehicleType=" + this.params.vehicleType
        });
    },
    moveToCurrentLocation: function(t) {
        var e = this;
        a.getLocation(function(t) {
            e.setData({
                longitude: t.longitude,
                latitude: t.latitude
            }), t ? e.createMarkers(t) : e.renderMarkers();
        });
    },
    createMarkers: function(e) {
        var a = this, i = [];
        t.get({
            url: "/charge-site/index",
            data: {
                longitude: e.longitude,
                latitude: e.latitude,
                vehicleType: this.params.vehicleType,
                radius: 5e4
            },
            success: function(t) {
                200 === t.statusCode ? (t.data.forEach(function(t) {
                    var e = Object.assign(t, {
                        iconPath: "/icons/chongdian.png",
                        vehicleType: a.params.vehicleType,
                        width: 30,
                        height: 30
                    });
                    i.push(e);
                }), a.setData({
                    markers: i
                }), a.positioning && wx.showToast({
                    title: "附近有" + a.data.markers.length + "个站点",
                    icon: "none",
                    duration: 2e3
                }), a.positioning = !1, a.changeVehicleType = !0) : (wx.showToast({
                    title: t.data,
                    icon: "none",
                    duration: 2e3
                }), a.changeVehicleType = !0);
            },
            fail: function(t) {
                wx.showToast({
                    title: t.data,
                    icon: "none",
                    duration: 2e3
                }), a.changeVehicleType = !0;
            }
        });
    }
});