var a = require("../../../utils/http.js");

Page({
    data: {
        isShowCardList: !1,
        amount: 0,
        cardList: [ 1 ],
        walletId: 0,
        isShowThisTitle: !1
    },
    onLoad: function(a) {},
    onReady: function() {},
    onShow: function() {
        this.onloadCardaccount();
    },
    onloadCardaccount: function() {
        var t = this;
        a.post({
            url: "/wallet/index",
            showLoading: !0,
            requireAuth: !0,
            success: function(a) {
                200 == a.statusCode ? (t.setData({
                    isShowCardList: !0,
                    cardList: a.data.sites,
                    amount: a.data.balance.amount,
                    walletId: a.data.balance.id
                }), a.data.sites.length > 0 && t.setData({
                    isShowThisTitle: !0
                })) : wx.showToast({
                    title: a.data,
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function(a) {
                wx.showToast({
                    title: a.data,
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    navtoTopup: function(a) {
        var t = a.currentTarget.dataset.walletid;
        wx.navigateTo({
            url: "/pages/mine/topup/index?walletId=" + t + "&rechargeType=1"
        });
    },
    toCardExplain: function() {
        wx.navigateTo({
            url: "/pages/mine/user-card/card-explain/index"
        });
    },
    toRechargecard: function(a) {
        var t = a.currentTarget.dataset.siteid, e = a.currentTarget.dataset.walletid;
        a.currentTarget.dataset.activityenabled ? wx.navigateTo({
            url: "/pages/mine/topup/index?siteId=" + t + "&walletId=" + e + "&rechargeType=5"
        }) : wx.navigateTo({
            url: "/pages/mine/topup/index?walletId=" + e + "&rechargeType=2"
        });
    },
    toAvailablepile: function(a) {
        var t = a.currentTarget.dataset.chargesiteid;
        wx.navigateTo({
            url: "./available-pile/index?chargesiteid=" + t
        });
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});