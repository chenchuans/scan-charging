var n = getApp();

Page({
    data: {
        logoImg: ""
    },
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {
        var o = this;
        n.getConfig().then(function(n) {
            o.setData({
                logoImg: n.config.appletsLogoUrl
            });
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});