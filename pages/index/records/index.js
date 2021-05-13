var t = require("../../../utils/http.js"), a = getApp();

Page({
    data: {
        isnull: !1,
        loading: !1,
        hasMore: !1,
        recordList: [],
        flag: !1,
        count: 0,
        showEV: !1
    },
    params: {
        page: 0,
        size: 15,
        card: ""
    },
    page: 0,
    deg: 0,
    onLoad: function(t) {
        t.cardNo && (this.params.cardNo = t.cardNo, this.setData({
            flag: !0
        })), this.setData({
            count: t.count || 0
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = this;
        a.getConfig().then(function(a) {
            t.setData({
                showEV: a.config.showAutomobile
            });
        }), this.getChargeRecord();
    },
    onHide: function() {},
    onUnload: function() {},
    continueCharge: function(a) {
        var e = a.currentTarget.dataset.pileid, n = a.currentTarget.dataset.pileno, o = a.currentTarget.dataset.port;
        t.post({
            url: "/charge-record/checkContinue",
            data: {
                pileId: e
            },
            success: function(t) {
                200 == t.statusCode ? wx.navigateTo({
                    url: "../../charge/detail/index?scene=" + n + "&pileNumSite=" + o
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
    feedbackAlready: function(t) {
        var a = t.currentTarget.dataset.commentstatus, e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "./evaluate/index?commentStatus=" + a + "&recordId=" + e
        });
    },
    onReachBottom: function() {
        this.data.loading || (this.setData({
            loading: !0
        }), this.getNextChargecord());
    },
    navToDetai: function(t) {
        this.data.flag || wx.navigateTo({
            url: "/pages/index/records/detail/index?recordId=" + t.currentTarget.dataset.recordid + "&minejump=" + !1
        });
    },
    updateRefreshIcon: function() {
        var t = this, a = wx.createAnimation({
            duration: 500,
            timingFunction: "linear",
            delay: 0
        }), e = setInterval(function() {
            t.data.loading || clearInterval(e), t.deg = t.data.deg += 360, a.rotateZ(t.deg).step(), 
            t.setData({
                refreshAnimation: a.export()
            });
        }, 1e3);
    },
    getChargeRecord: function() {
        var a = this;
        this.params.page = 0, t.post({
            url: "/charge-record/index",
            requireAuth: !0,
            showLoading: !0,
            data: this.params,
            success: function(t) {
                if (200 === t.statusCode) {
                    if (0 === t.data.length) return void a.setData({
                        isnull: !0
                    });
                    a.params.page++, a.setData({
                        recordList: t.data
                    });
                }
            }
        });
    },
    getNextChargecord: function() {
        var a = this;
        this.data.hasMore ? this.setData({
            loading: !1
        }) : (this.updateRefreshIcon(), t.post({
            url: "/charge-record/index",
            requireAuth: !0,
            data: this.params,
            success: function(t) {
                if (200 === t.statusCode) {
                    if (0 === t.data.length) return a.setData({
                        hasMore: !0
                    }), void a.setData({
                        loading: !1
                    });
                    a.params.page++, a.setData({
                        recordList: a.data.recordList.concat(t.data),
                        loading: !1
                    });
                }
            }
        }));
    },
    doAlreadyRead: function() {
        var a = this;
        t.get({
            url: "/charge-record/allRead",
            requireAuth: !0,
            success: function(t) {
                200 === t.statusCode ? (wx.showToast({
                    title: "全部已读成功",
                    icon: "none",
                    duration: 2e3
                }), a.setData({
                    count: 0
                }), a.getChargeRecord()) : wx.showToast({
                    title: "全部已读失败",
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function() {
                wx.showToast({
                    title: "全部已读失败",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    }
});