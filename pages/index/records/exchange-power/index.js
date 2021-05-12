var t = require("../../../../utils/http.js");

Page({
    data: {
        isnull: !1,
        loading: !1,
        hasMore: !1,
        recordList: []
    },
    params: {
        page: 0,
        size: 15
    },
    page: 0,
    deg: 0,
    onLoad: function(t) {
        this.getRercordList();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        this.data.loading || (this.setData({
            loading: !0
        }), this.getNextrecord());
    },
    onShareAppMessage: function() {},
    getRercordList: function() {
        var a = this;
        t.get({
            url: "/exchange-battery/index",
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
    getNextrecord: function() {
        var a = this;
        this.data.hasMore ? this.setData({
            loading: !1
        }) : (this.updateRefreshIcon(), t.post({
            url: "/exchange-battery/index",
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
    }
});