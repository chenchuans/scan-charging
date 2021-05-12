require("../../../utils/config.js");

Page({
    data: {
        url: "",
        jumpUrl: "",
        formData: "",
        params: ""
    },
    onLoad: function(t) {
        console.log(t), t.url && this.setData({
            url: decodeURIComponent(t.url)
        }), this.setData({
            jumpUrl: t.jumpUrl,
            formData: t.formData,
            params: t.params
        }), "getLocation" == t.type && this.getCenterLocation();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getCenterLocation: function() {
        var t = this;
        wx.getLocation({
            type: "wgs84",
            success: function(a) {
                var o = a.latitude, n = a.longitude;
                wx.chooseLocation({
                    latitude: o,
                    longitude: n,
                    scale: 28,
                    success: function(a) {
                        var o = t.data.jumpUrl + "?address=" + (a.address + a.name) + "&formData=" + t.data.formData + "&params=" + t.data.params + "&lat=" + a.latitude + "&long=" + a.longitude;
                        t.setData({
                            url: o
                        });
                    }
                });
            }
        });
    }
});