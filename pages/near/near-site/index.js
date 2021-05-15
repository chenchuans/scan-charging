var t = require("../../../utils/http.js"), e = require("../../../utils/util.js"), a = require("../../../utils/location.js"), i = getApp();

Page({
    data: {
        setList: []
    },
    params: {
        page: 0,
        size: 10,
        distance: !0,
        latitude: 0,
        longitude: 0,
        name: "",
        vehicleType: 1
    },
    changeVehicleType: !0,
    deg: 0,
    mapCtx: null,
    onLoad: function(t) {
        // this.loadData = e.throttle(this.inputSearch.bind(this), 1e3), this.mapCtx = wx.createMapContext("map"), 
        // a.assertCanUse(), this.moveToCurrentLocation();
        this.getSetList();
    },
    onReady: function() {
    },
    onShow: function() {
         wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#24c771"
        });
    },
    getSetList: function() {
        t.post({
            url: "/home/set/list",
            data: {},
            success: function(t) {
                console.log(333, t)
            }
        });
    }
});