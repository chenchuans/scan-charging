var e = function() {
    function e(e, t) {
        var i = [], n = !0, a = !1, r = void 0;
        try {
            for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (i.push(o.value), 
            !t || i.length !== t); n = !0) ;
        } catch (e) {
            a = !0, r = e;
        } finally {
            try {
                !n && s.return && s.return();
            } finally {
                if (a) throw r;
            }
        }
        return i;
    }
    return function(t, i) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, i);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), t = getApp(), i = require("../../utils/http.js"), n = require("../../utils/auth.js"), a = require("../../utils/util.js"), r = require("../../utils/config.js");

Page({
    data: {
        imgUrls: [],
        indicatorDots: !0,
        autoplay: !0,
        interval: 3e3,
        duration: 1e3,
        circular: !0,
        mask: !1,
        pileNumPopup: !1,
        chargingCount: 0,
        revertCount: 0,
        isShowSystemInfo: !1,
        systemInfo: "",
        showCharge: !1,
        showExchange: !1,
        imgList: [ "https://charge-pile.oss-cn-hangzhou.aliyuncs.com/icon/pic_diyibu.png", "https://charge-pile.oss-cn-hangzhou.aliyuncs.com/icon/pic_dieribu.png", "https://charge-pile.oss-cn-hangzhou.aliyuncs.com/icon/pic_disanbu.png" ]
    },
    wrapWidth: 0,
    contentWidth: 0,
    duration: 0,
    speed: 30,
    delay: 1,
    animation: null,
    resetAnimation: null,
    timer: null,
    type: "charge",
    onLoad: function() {
        this.loadData = a.throttle(this.judgePileNum.bind(this), 2e3), this.resetAnimation = wx.createAnimation({
            duration: 0,
            timingFunction: "linear"
        });
    },
    onShow: function() {
        var e = this;
        t.getConfig().then(function(t) {
            e.setData({
                showCharge: !t.config.batteriesSharingEnable,
                showExchange: !!t.config.batteriesSharingEnable
            }), wx.setNavigationBarTitle({
                title: t.appName
            });
        }), this.getSlide(), this.getCount(), this.getSystemNotice();
    },
    onHide: function() {
        this.timer && clearTimeout(this.timer);
    },
    getSlide: function() {
        var e = this;
        i.post({
            url: "/banner/index",
            data: {
                place: 1
            },
            success: function(t) {
                200 == t.statusCode && e.setData({
                    imgUrls: t.data
                });
            }
        });
    },
    jumpOther: function(e) {
        var t = e.currentTarget.dataset.ad, n = t.type;
        1 != n && (t.operator || i.post({
            url: "/banner/clickBanner",
            requireAuth: !0,
            data: {
                id: t.id,
                outerId: t.outerId
            }
        }), 3 == n ? wx.navigateTo({
            url: "/pages/index/outurl/index?url=" + t.linkUrl
        }) : 2 == n ? wx.navigateToMiniProgram({
            appId: t.linkUrl,
            path: t.miniprogramPage || "pages/index/index",
            success: function(e) {}
        }) : 4 == n && wx.navigateTo({
            url: "/pages/index/rich-text/index?richId=" + t.id
        }));
    },
    getSystemNotice: function() {
        var e = this;
        i.post({
            url: "/banner/index",
            data: {
                place: 3
            },
            success: function(t) {
                console.log(t), 200 == t.statusCode && (0 == t.data.length ? e.setData({
                    isShowSystemInfo: !1
                }) : (e.setData({
                    isShowSystemInfo: !0,
                    systemInfo: t.data[0]
                }), e.noticeAnimation()));
            }
        });
    },
    noticeAnimation: function() {
        var i = this;
        Promise.all([ t.getRect(".notice-bar-wrap"), t.getRect(".notice-bar-content") ]).then(function(t) {
            var n = e(t, 2), a = n[0], r = n[1], o = a.width / i.speed * 1e3;
            i.wrapWidth = a.width, i.contentWidth = r.width, i.duration = o, i.animation = wx.createAnimation({
                duration: o,
                timingFunction: "linear",
                delay: i.delay
            }), i.scroll();
        });
    },
    scroll: function() {
        var e = this;
        this.timer && clearTimeout(this.timer), this.timer = null, this.setData({
            animationData: this.resetAnimation.translateX(this.wrapWidth).step().export()
        }), setTimeout(function() {
            e.setData({
                animationData: e.animation.translateX(-e.contentWidth).step().export()
            });
        }, 20), this.timer = setTimeout(function() {
            e.scroll();
        }, this.duration);
    },
    getCount: function() {
        var e = this;
        i.post({
            url: "/charge-record/record-summary",
            requireAuth: !0,
            success: function(t) {
                200 == t.statusCode && e.setData({
                    chargingCount: t.data.chargingCount,
                    revertCount: t.data.revertCount
                });
            }
        });
    },
    getpileNo: function(e) {
        this.pileNum = e.detail.value;
    },
    sureSearchPile: function() {
        "" != this.pileNum ? (this.type = "charge", this.loadData(this.pileNum)) : wx.showToast({
            title: "请输入桩号",
            icon: "none",
            duration: 2e3
        });
    },
    inputPileNum: function() {
        this.setData({
            mask: !0,
            pileNumPopup: !0
        });
    },
    cancelInputNum: function() {
        this.setData({
            mask: !1,
            pileNumPopup: !1
        }), this.pileNum = "";
    },
    chargingBtn: function() {
        this.isCreateBrief("/pages/index/charging-order/index");
    },
    collecteBtn: function() {
        this.isCreateBrief("/pages/index/collection/index");
    },
    chargeRecordBtn: function() {
        this.isCreateBrief("/pages/index/records/index?count=" + this.data.revertCount);
    },
    exchangeRecord: function() {
        this.isCreateBrief("/pages/index/records/exchange-power/index");
    },
    sweepCode: function(e) {
        var t = this;
        n.authorized(!0) && (this.type = e.currentTarget.dataset.type, wx.scanCode({
            success: function(e) {
                var i = e.path, n = e.result, o = r.uriPrefix;
                if (i && i.includes("pages/charge/detail/index?scene=")) wx.navigateTo({
                    url: "/" + i
                }); else if (n && (n.includes("api-cdz.ejlchina-app.com") || n.includes("api-mini.cdyun.vip")) && (n.includes(o + "/mini-app/") || n.includes(o + "/mini-app-zfb/"))) {
                    if ((l = (c = decodeURIComponent(n)).substring(c.lastIndexOf("/") + 1)).length < 7) {
                        var s = c.substring(c.indexOf("mini-app/") + 9, c.lastIndexOf("/")), u = s.slice(4, 6) + s.slice(2, 4) + s.slice(0, 2);
                        l = "ff" === l ? a.hex2int(u).toString() : a.hex2int(u).toString() + "-" + (a.hex2int(l) + 1);
                    }
                    t.judgePileNum(l);
                } else if (n && n.includes("weixin.qq.com")) {
                    var c = decodeURIComponent(n), l = c.substring(c.lastIndexOf("/") + 1);
                    t.judgePileNum(l);
                } else wx.showToast({
                    title: "请扫正确的小程序码",
                    icon: "none",
                    duration: 2e3
                });
            }
        }));
    },
    isCreateBrief: function(e) {
        n.authorized(!0) && wx.navigateTo({
            url: e
        });
    },
    judgePileNum: function(e) {
        var t = this;
        if (e.includes("-")) var n = e.split("-")[0], a = e.split("-")[1]; else n = e;
        "exchange" !== this.type ? i.get({
            url: "/charge-pile/show",
            requireAuth: !0,
            data: {
                pileNo: n
            },
            success: function(i) {
                if (200 == i.statusCode) {
                    if (i.data.offlineCharge && 2 === i.data.status) return e.includes("-") ? wx.navigateTo({
                        url: "/pages/charge/detail/index?scene=" + n + "&pileNumSite=" + a
                    }) : wx.navigateTo({
                        url: "/pages/charge/detail/index?scene=" + n
                    }), void t.cancelInputNum();
                    1 === i.data.status ? (e.includes("-") ? wx.navigateTo({
                        url: "/pages/charge/detail/index?scene=" + n + "&pileNumSite=" + a
                    }) : wx.navigateTo({
                        url: "/pages/charge/detail/index?scene=" + n
                    }), t.cancelInputNum()) : wx.showToast({
                        title: "该桩已离线，暂不支持手机端启动充电",
                        icon: "none",
                        duration: 2e3
                    });
                } else wx.showToast({
                    title: "该站点未上线,请更换站点！",
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function(e) {
                wx.showToast({
                    title: "该站点未上线,请更换站点！",
                    icon: "none",
                    duration: 2e3
                });
            }
        }) : wx.navigateTo({
            url: "/pages/charge/exchange/index?pileNo=" + n
        });
    }
});