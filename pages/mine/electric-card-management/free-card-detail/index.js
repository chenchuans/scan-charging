var t = require("../../../../utils/http.js");

Page({
    data: {
        id: "",
        freeDetailList: []
    },
    onLoad: function(t) {
        this.setData({
            id: t.id
        }), this.getFreeDetail();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    getFreeDetail: function() {
        var e = this, i = {
            id: this.data.id
        };
        t.post({
            url: "/card/show-free-card",
            data: i,
            showLoading: !0,
            requireAuth: !0,
            success: function(t) {
                200 == t.statusCode && e.setData({
                    freeDetailList: t.data
                });
            }
        });
    }
});