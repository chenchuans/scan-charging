var e = require("../../../utils/auth.js"), o = require("../../../utils/config.js");

Page({
    data: {
        webViewUrl: ""
    },
    onLoad: function(n) {
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#24C771"
        });
        var r = void 0, i = n.url;
        r = -1 == i.indexOf("?") ? "?userId=" : "&userId=";
        var t = e.getUserInfo(), a = encodeURIComponent(t.id), s = encodeURIComponent(t.nickname), u = encodeURIComponent(t.phone), d = i + r + a + "&username=" + encodeURIComponent(t.username) + "&nickname=" + s + "&phone=" + u + "&uriPrefix=" + encodeURIComponent(o.uriPrefix);
        this.setData({
            webViewUrl: d
        }), console.log(a);
    }
});