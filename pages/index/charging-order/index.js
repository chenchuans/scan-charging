var t = require("../../../utils/http.js"), e = require("../../../utils/util.js");

Page({
    data: {
        multipleChargingList: [],
        nonearsite: !1
    },
    currentDevice: [],
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        this.loadMultipleChargingOrders();
    },
    onHide: function() {},
    loadMultipleChargingOrders: function() {
        var n = this;
        t.post({
            url: "/charge-record/recordStatus",
            requireAuth: !0,
            showLoading: !0,
            success: function(t) {
                if (200 == t.statusCode) if (n.currentDevice = t.data, 0 != t.data.length) {
                    var o = t.data.map(function(t) {
                        return 0 == t.consumeSeconds ? t.consumeSeconds : t.consumeSeconds = e.formatMinutes(t.consumeSeconds), 
                        t;
                    });
                    n.setData({
                        multipleChargingList: o
                    });
                } else n.setData({
                    nonearsite: !0,
                    multipleChargingList: t.data
                });
            }
        });
    },
    toChargingControl: function(t) {
        var e = t.currentTarget.dataset.item, n = {
            port: "A" == e.port ? 1 : "B" == e.port ? 2 : e.port,
            hour: e.planHour
        };
        wx.setStorageSync("pileDetail", encodeURIComponent(JSON.stringify(e))), wx.setStorageSync("recordId", e.id), 
        wx.setStorageSync("curPileTimeInfo", n);
        var o = void 0;
        o = 1 == t.currentTarget.dataset.item.vehicleType ? "control" : "ev-control", wx.navigateTo({
            url: "/pages/charge/" + o + "/index"
        });
    },
    onUnload: function() {},
    onReachBottom: function() {}
});