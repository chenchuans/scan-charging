var n = getApp();

Page({
    data: {
        address: "",
        appName: ""
    },
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {
        var o = this;
        n.getConfig().then(function(n) {
            o.setData({
                address: n.config.agreementAddress,
                appName: n.appName
            });
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});