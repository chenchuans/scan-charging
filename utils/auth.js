var e = require("./http.js"), n = function(e) {
    e && e.accessToken && e.expiresIn && (e.expiresAt = Date.now() + 1e3 * e.expiresIn, 
    delete e.expiresIn, wx.setStorageSync("access-token", e));
}, t = function() {
    var e = wx.getStorageSync("access-token");
    if (e && e.accessToken && e.expiresAt && e.expiresAt > Date.now() + 3e4) return e.accessToken;
}, o = !1, c = [], i = function(t) {
    if (t && c.push(t), !o) {
        o = !0;
        var i = {
            aborted: !1,
            abort: function() {
                i.aborted = !0, o = !1, c.splice(0, c.length);
            }
        };
        return wx.login({
            success: function(t) {
                if (!i.aborted) {
                    var s = e.post({
                        url: "/oauth/sign-in",
                        data: {
                            code: t.code,
                            type: wx.getStorageSync("miniType")
                        },
                        success: function(e) {
                            if (n(e.data), o = !1, !i.aborted) {
                                var t = [];
                                c.forEach(function(n) {
                                    var o = n(e.data.accessToken);
                                    o && "function" == typeof o.abort && t.push(o);
                                }), c.splice(0, c.length), i.abort = function() {
                                    t.forEach(function(e) {
                                        e.abort();
                                    });
                                };
                            }
                        },
                        fail: function(e) {
                            o = !1, c.splice(0, c.length);
                        }
                    });
                    i.abort = function() {
                        i.aborted = !0, s.abort();
                    };
                }
            },
            fail: function() {
                o = !1, c.splice(0, c.length);
            }
        }), i;
    }
};

module.exports = {
    login: i,
    checkSession: function(e) {
        wx.checkSession({
            success: function() {
                e && e();
            },
            fail: function() {
                i(e);
            }
        });
    },
    token: function(e) {
        var n = t();
        return n ? e(n) : i(e);
    },
    scope: function(e, n, t) {
        wx.getSetting({
            success: function(o) {
                o.authSetting["scope." + e] ? n() : wx.authorize({
                    scope: "scope." + e,
                    success: function() {
                        n && n();
                    },
                    fail: function() {
                        t && t();
                    }
                });
            }
        });
    },
    saveUserInfo: function(e) {
        wx.setStorageSync("user-info", e);
    },
    getUserInfo: function() {
        return wx.getStorageSync("user-info");
    },
    authorized: function() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], t = arguments[2], o = wx.getStorageSync("authorized");
        if (o) return o;
        !o && e && wx.showModal({
            title: "未绑定手机",
            content: "是否前去授权绑定手机号，否则无法使用小程序",
            success: function(e) {
                e.confirm ? wx.navigateTo({
                    url: "/pages/authorization/index" + (t ? "?redirect_url=" + encodeURIComponent(t) : "")
                }) : e.cancel && n && wx.switchTab({
                    url: "/pages/index/index"
                });
            }
        });
    },
    setAuthorized: function() {
        wx.setStorageSync("authorized", !0);
    }
};