var e = getApp(), t = require("../../utils/http.js"), a = require("../../utils/auth.js");

Page({
    data: {
        whetherthelogin: !0,
        phoneBound: !1,
        miniType: 1,
        logoImg: ""
    },
    redirect_url: null,
    shouldRegiste: !0,
    shouldUpdate: !1,
    onLoad: function(e) {
        this.setData({
            miniType: wx.getStorageSync("miniType")
        }), e.redirect_url && (this.redirect_url = decodeURIComponent(e.redirect_url));
    },
    onReady: function() {},
    onShow: function() {
        var t = this;
        e.getConfig().then(function(e) {
            t.setData({
                logoImg: e.config.appletsLogoUrl
            }), wx.setNavigationBarTitle({
                title: e.appName
            });
        });
    },
    onHide: function() {},
    onUnload: function() {},
    noLogin: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    bindGetUserInfo: function(e) {
        var t = this, a = e.detail.userInfo;
        a.nickName && a.avatarUrl ? this.getUserData(a) : wx.showModal({
            title: "提示",
            content: "为了更好的体验小程序，请确保设置了" + ("alipay" === wx.__target__ ? "支付宝" : "微信") + "账号的昵称和头像！",
            showCancel: !1,
            confirmText: "知道啦！",
            success: function(e) {
                e.confirm ? t.getUserData(a) : e.cancel && t.getUserData(a);
            }
        });
    },
    getUserData: function(e) {
        var n = this;
        t.get({
            url: "/user/brief-info",
            requireAuth: !0,
            success: function(t) {
                if (200 === t.statusCode) {
                    var i = t.data;
                    e.avatarUrl !== i.avatar || e.nickName !== i.nickname ? n.updateUserInfo(e) : (a.saveUserInfo(i), 
                    n.redirectToTarget()), a.setAuthorized();
                } else n.setData({
                    phoneBound: !0
                }), wx.clearStorageSync(), wx.setStorageSync("miniType", n.data.miniType), a.saveUserInfo(e);
            },
            fail: function(t) {
                n.setData({
                    phoneBound: !0
                }), wx.clearStorageSync(), wx.setStorageSync("miniType", n.data.miniType), a.saveUserInfo(e);
            }
        });
    },
    getUserInfo: function() {
        var e = this;
        t.get({
            url: "/user/brief-info",
            requireAuth: !0,
            success: function(t) {
                if (200 === t.statusCode) {
                    var n = t.data;
                    a.saveUserInfo(n), e.redirectToTarget();
                }
            }
        });
    },
    updateUserInfo: function(e) {
        var a = this;
        t.post({
            url: "/user/update",
            requireAuth: !0,
            data: {
                nickname: e.nickName,
                avatar: e.avatarUrl
            },
            success: function(e) {
                a.getUserInfo();
            }
        });
    },
    onRegisteSuccess: function() {
        a.setAuthorized(), this.closeRegistDialog(), this.redirectToTarget();
    },
    closeRegistDialog: function() {
        this.setData({
            phoneBound: !1
        });
    },
    redirectToTarget: function() {
        this.redirect_url ? wx.redirectTo({
            url: this.redirect_url
        }) : wx.reLaunch({
            url: "/pages/index/index"
        });
    }
});