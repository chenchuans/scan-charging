function o(o) {
    n ? wx.sendSocketMessage({
        data: o
    }) : e.push(o);
}

var n = !1, e = [], s = {
    send: o,
    close: function() {
        n && wx.closeSocket();
    },
    onopen: null,
    onmessage: null,
    onclose: null
};

s.init = function(t, c) {
    wx.connectSocket({
        url: t,
        protocols: c
    }), wx.onSocketOpen(function(t) {
        wx.setStorageSync("ws-open", 1), n = !0;
        for (var c = 0; c < e.length; c++) o(e[c]);
        e = [], s.onopen && s.onopen();
    }), wx.onSocketMessage(function(o) {
        s.onmessage && s.onmessage(o);
    }), wx.onSocketClose(function(o) {
        n = !1, wx.setStorageSync("ws-open", 0), s.onclose && s.onclose();
    });
}, module.exports = s;