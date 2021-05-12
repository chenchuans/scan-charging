var t = getApp();

Page({
    data: {
        helpJson: [],
        videoshow: !1,
        closebutton: !1,
        startbutton: !0,
        isHasVideo: !0,
        miniType: 1,
        customerServicePhone: ""
    },
    onLoad: function(t) {},
    onReady: function() {
        this.setData({
            miniType: wx.getStorageSync("miniType")
        });
    },
    onShow: function() {
        var o = this;
        t.getConfig().then(function(t) {
            var e = JSON.parse(t.config.paperwork).map(function(t) {
                return t.istap = !1, t;
            });
            o.setData({
                helpJson: e,
                customerServicePhone: t.config.customerServicePhone
            });
        });
    },
    onHide: function() {},
    onUnload: function() {},
    videoplay: function() {
        this.setData({
            videoshow: !0,
            startbutton: !1,
            closebutton: !0
        });
    },
    videohide: function() {
        this.setData({
            videoshow: !1,
            closebutton: !1,
            startbutton: !0
        });
    },
    switchDrop: function(t) {
        var o = t.currentTarget.dataset.index, e = this.data.helpJson;
        e.forEach(function(t, e) {
            t.istap = e == o && !t.istap;
        }), this.setData({
            helpJson: e
        });
    },
    phone: function() {
        wx.makePhoneCall({
            phoneNumber: this.data.customerServicePhone
        });
    }
});