var a = require("../../../../utils/http.js"), t = require("../../../../utils/auth.js");

Page({
    data: {
        viewCardNum: ""
    },
    cardNo: 0,
    onLoad: function(a) {
        a.viewCardNum && (this.setData({
            viewCardNum: a.viewCardNum
        }), this.cardNo = a.viewCardNum);
    },
    onReady: function() {},
    onShow: function() {},
    getCardNo: function(a) {
        this.cardNo = a.detail.value;
    },
    nextStep: function() {
        var e = this;
        if (this.cardNo.length) {
            var i = "/pages/mine/electric-card-management/replacement-card/index" + (this.cardNo ? "?viewCardNum=" + this.cardNo : "");
            t.authorized(!0, !0, i) && a.post({
                url: "/card/info",
                requireAuth: !0,
                data: {
                    cardNo: this.cardNo
                },
                success: function(a) {
                    200 === a.statusCode ? 3 == a.data.type && 1 == a.data.activityEnable ? wx.navigateTo({
                        url: "/pages/mine/topup/index?cardNo=" + e.cardNo + "&siteId=" + a.data.siteId + "&rechargeType=4"
                    }) : 1 == a.data.type || 2 == a.data.type ? wx.navigateTo({
                        url: "/pages/mine/topup/index?cardNo=" + e.cardNo + "&rechargeType=3"
                    }) : 3 == a.data.type && 0 == a.data.activityEnable && wx.showToast({
                        title: "专用账户充值活动已停止！",
                        icon: "none",
                        duration: 2e3
                    }) : wx.showToast({
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
        } else wx.showToast({
            title: "请输入卡号",
            icon: "none",
            duration: 2e3
        });
    }
});