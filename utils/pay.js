module.exports = {
    pay: function(t) {
        var e = wx.getStorageSync("miniType");
        return new Promise(function(n, o) {
            if (1 == e && wx.requestPayment({
                timeStamp: t.timestamp,
                nonceStr: t.noncestr,
                package: t.packageValue,
                signType: t.signType,
                paySign: t.sign,
                success: function(t) {
                    wx.showToast({
                        title: "支付成功",
                        icon: "none",
                        duration: 2e3
                    }), n(t);
                },
                fail: function(t) {
                    wx.showToast({
                        title: "您取消了支付",
                        icon: "none",
                        duration: 2e3
                    }), o(t);
                }
            }), 2 == e) {
                var i = function(t) {
                    wx.showToast({
                        title: "支付失败:" + JSON.stringify(t),
                        icon: "none",
                        duration: 2e3
                    }), o(t);
                }, a = function(t) {
                    9e3 == t.resultCode ? (wx.showToast({
                        title: "支付成功",
                        icon: "none",
                        duration: 2e3
                    }), n(t)) : (wx.showToast({
                        title: "已取消支付",
                        icon: "none",
                        duration: 2e3
                    }), o(t));
                };
                "string" == typeof t ? _my.tradePay({
                    orderStr: t,
                    success: a,
                    fail: i
                }) : _my.tradePay({
                    tradeNO: t.tradeNo,
                    success: a,
                    fail: i
                });
            }
        });
    }
};