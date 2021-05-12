var a = getApp();

Page({
    data: {
        appName: ""
    },
    onShow: function() {
        var t = this;
        a.getConfig().then(function(a) {
            t.setData({
                appName: a.appName
            });
        });
    }
});