var t = "--location--";

module.exports = {
    assertCanUse: function(n) {
        wx.getLocation({
            success: function(o) {
                wx.setStorage({
                    key: t,
                    data: o
                }), n && n();
            },
            fail: function(t) {
                "getLocation:fail:auth denied" == t.errMsg ? wx.openSetting() : wx.showModal({
                    title: "无法获取定位",
                    content: "请授权获取地理位置",
                    showCancel: !1,
                    success: function(t) {
                        t.confirm && wx.openSetting();
                    }
                });
            }
        });
    },
    getLocation: function(n) {
        var o = !1;
        wx.getLocation({
            success: function(e) {
                wx.setStorage({
                    key: t,
                    data: e
                }), o || (o = !0, n(e));
            },
            fail: function(t) {
                console.error("未能获得位置：" + JSON.stringify(t));
            }
        });
    }
};