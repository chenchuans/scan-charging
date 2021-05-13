var t = function() {
    function t(t, e) {
        var i = [], n = !0, a = !1, r = void 0;
        try {
            for (var s, o = t[Symbol.iterator](); !(n = (s = o.next()).done) && (i.push(s.value), 
            !e || i.length !== e); n = !0) ;
        } catch (t) {
            a = !0, r = t;
        } finally {
            try {
                !n && o.return && o.return();
            } finally {
                if (a) throw r;
            }
        }
        return i;
    }
    return function(e, i) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, i);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), e = getApp(), i = require("../../utils/http.js"), n = require("../../utils/auth.js"), a = require("../../utils/util.js"), r = require("../../utils/config.js");

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
    onLoad: function() {
        this.loadData = a.throttle(this.judgePileNum.bind(this), 2e3), this.resetAnimation = wx.createAnimation({
            duration: 0,
            timingFunction: "linear"
        });
    },
    onShow: function() {
        e.getConfig().then(function(t) {
            wx.setNavigationBarTitle({
                title: t.appName
            });
        }), this.getSlide(), this.getCount(), this.getSystemNotice();
    },
    onHide: function() {
        this.timer && clearTimeout(this.timer);
    },
    getSlide: function() {
        var t = this;
        i.post({
            url: "/banner/index",
            data: {
                place: 1
            },
            success: function(e) {
                200 == e.statusCode && t.setData({
                    imgUrls: e.data
                });
            }
        });
    },
    jumpOther: function(t) {
        var e = t.currentTarget.dataset.type, n = t.currentTarget.dataset.url, a = t.currentTarget.dataset.origin, r = t.currentTarget.dataset.richid, s = t.currentTarget.dataset.miniprogrampage;
        2 == a && i.post({
            url: "/banner/clickBanner",
            requireAuth: !0,
            data: {
                id: r
            }
        }), 3 == e && wx.navigateTo({
            url: "/pages/index/outurl/index?url=" + n
        }), 2 == e && wx.navigateToMiniProgram({
            appId: n,
            path: s || "pages/index/index",
            success: function(t) {}
        }), 4 == e && wx.navigateTo({
            url: "/pages/index/rich-text/index?richId=" + r
        });
    },
    getSystemNotice: function() {
        var t = this;
        i.post({
            url: "/banner/index",
            data: {
                place: 3
            },
            success: function(e) {
                console.log(e), 200 == e.statusCode && (0 == e.data.length ? t.setData({
                    isShowSystemInfo: !1
                }) : (t.setData({
                    isShowSystemInfo: !0,
                    systemInfo: e.data[0]
                }), t.noticeAnimation()));
            }
        });
    },
    noticeAnimation: function() {
        var i = this;
        Promise.all([ e.getRect(".notice-bar-wrap"), e.getRect(".notice-bar-content") ]).then(function(e) {
            var n = t(e, 2), a = n[0], r = n[1], s = a.width / i.speed * 1e3;
            i.wrapWidth = a.width, i.contentWidth = r.width, i.duration = s, i.animation = wx.createAnimation({
                duration: s,
                timingFunction: "linear",
                delay: i.delay
            }), i.scroll();
        });
    },
    scroll: function() {
        var t = this;
        this.timer && clearTimeout(this.timer), this.timer = null, this.setData({
            animationData: this.resetAnimation.translateX(this.wrapWidth).step().export()
        }), setTimeout(function() {
            t.setData({
                animationData: t.animation.translateX(-t.contentWidth).step().export()
            });
        }, 20), this.timer = setTimeout(function() {
            t.scroll();
        }, this.duration);
    },
    getCount: function() {
        var t = this;
        i.post({
            url: "/charge-record/record-summary",
            requireAuth: !0,
            success: function(e) {
                200 == e.statusCode && t.setData({
                    chargingCount: e.data.chargingCount,
                    revertCount: e.data.revertCount
                });
            }
        });
    },
    getpileNo: function(t) {
        this.pileNum = t.detail.value;
    },
    sureSearchPile: function() {
        "" != this.pileNum ? this.loadData(this.pileNum) : wx.showToast({
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
    sweepCode: function() {
        var t = this;
        n.authorized(!0) && wx.scanCode({
            success: function(e) {
                var i = e.path, n = e.result, s = r.uriPrefix;
                if (i && i.includes("pages/charge/detail/index?scene=")) wx.navigateTo({
                    url: "/" + i
                }); else if (n && (n.includes("api-cdz.ejlchina-app.com") || n.includes("api-mini.cdyun.vip")) && (n.includes(s + "/mini-app/") || n.includes(s + "/mini-app-zfb/"))) {
                    if ((l = (c = decodeURIComponent(n)).substring(c.lastIndexOf("/") + 1)).length < 7) {
                        var o = c.substring(c.indexOf("mini-app/") + 9, c.lastIndexOf("/")), u = o.slice(4, 6) + o.slice(2, 4) + o.slice(0, 2);
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
        });
    },
    isCreateBrief: function(t) {
        n.authorized(!0) && wx.navigateTo({
            url: t
        });
    },
    judgePileNum: function(t) {
        var e = this;
        if (t.includes("-")) var n = t.split("-")[0], a = t.split("-")[1]; else n = t;
        i.get({
            url: "/charge-pile/show",
            requireAuth: !0,
            data: {
                pileNo: n
            },
            success: function(i) {
                if (200 == i.statusCode) {
                    if (i.data.offlineCharge && 2 === i.data.status) return t.includes("-") ? wx.navigateTo({
                        url: "/pages/charge/detail/index?scene=" + n + "&pileNumSite=" + a
                    }) : wx.navigateTo({
                        url: "/pages/charge/detail/index?scene=" + n
                    }), void e.cancelInputNum();
                    1 === i.data.status ? (t.includes("-") ? wx.navigateTo({
                        url: "/pages/charge/detail/index?scene=" + n + "&pileNumSite=" + a
                    }) : wx.navigateTo({
                        url: "/pages/charge/detail/index?scene=" + n
                    }), e.cancelInputNum()) : wx.showToast({
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
            fail: function(t) {
                wx.showToast({
                    title: "该站点未上线,请更换站点！",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    }
});