Page({
    data: {
        balance: ""
    },
    onLoad: function(n) {
        this.setData({
            balance: n.balance
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    naVtopAmount: function() {
        wx.navigateTo({
            url: "/pages/mine/topup/index"
        });
    }
});