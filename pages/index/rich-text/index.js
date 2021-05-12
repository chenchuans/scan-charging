var n = require("../../../utils/http.js");

Page({
    data: {
        content: ""
    },
    onLoad: function(n) {
        this.richId = n.richId, this.onloadData();
    },
    onReady: function() {},
    onShow: function() {},
    onloadData: function() {
        var t = this;
        n.post({
            url: "/banner/detail/" + this.richId,
            success: function(n) {
                200 == n.statusCode ? t.setData({
                    content: n.data.content
                }) : wx.showToast({
                    title: n.data,
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function(n) {
                wx.showToast({
                    title: n.data,
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});