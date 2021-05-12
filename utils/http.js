function e(e) {
    var n = wx.getStorageSync("networkType"), a = wx.getStorageSync("networkNomeShowModal");
    if ("none" == n && !a) return wx.showModal({
        title: "当前没有网络，请检查网络设置",
        content: "",
        showCancel: !1,
        success: function(e) {
            wx.setStorageSync("networkNomeShowModal", !1);
        }
    }), void wx.setStorageSync("networkNomeShowModal", !0);
    new RegExp("^/").test(e.url) && (e.url = t + e.url, e.data = e.data || {}, e.data.lang = "zh"), 
    e.showLoading && (e.loadingText ? wx.showLoading({
        title: e.loadingText,
        mask: !0
    }) : wx.showLoading({
        title: "  ",
        mask: !0
    }));
    var r = e.complete;
    e.complete = function() {
        e.showLoading && wx.hideLoading(), r && r();
    };
    var i = e.success;
    if (e.success = function(t) {
        if (e.showLoading && wx.hideLoading(), 500 == t.statusCode) wx.showModal({
            title: "后台出错啦",
            content: JSON.stringify(t.data)
        }); else if (1e3 == t.statusCode) wx.showModal({
            title: "您的版本太老啦，请杀掉进程重新打开小程序来触发更新吧",
            content: ""
        }); else {
            if (t.isOk = function() {
                return t.statusCode >= 200 && t.statusCode <= 300;
            }, "alipay" === wx.__target__) {
                var o = t.data;
                try {
                    t.data = JSON.parse(o);
                } catch (e) {
                    t.data = o;
                }
            }
            i && i(t);
        }
    }, "alipay" === wx.__target__ && (e.dataType = "text"), !e.requireAuth) return wx.request(e);
    o || (o = require("./auth.js")), o.token(function(t) {
        return e.header = e.header || {}, 1 == wx.getStorageSync("miniType") ? e.header["WX-Token"] = t : e.header["ZFB-Token"] = t, 
        wx.request(e);
    });
}

var t = require("./config.js").endpoint.https, o = null;

module.exports = {
    get: function(t) {
        return t.method = "GET", e(t);
    },
    post: function(t) {
        return t.method = "POST", t.header = t.header || {}, t.header["content-type"] = "application/x-www-form-urlencoded", 
        e(t);
    },
    put: function(t) {
        return t.method = "PUT", e(t);
    },
    delete: function(t) {
        return t.method = "DELETE", e(t);
    }
};