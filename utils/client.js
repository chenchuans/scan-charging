function e(e, n) {
    s ? c.subscribe(e, function(e) {
        n(JSON.parse(e.body), e.headers);
    }, {
        selector: "userId = " + r
    }) : u.push({
        destination: e,
        handler: function(e) {
            n(JSON.parse(e.body), e.headers);
        }
    });
}

var n = require("./ws.js"), t = require("./stomp.js").Stomp, o = require("./config.js").endpoint.wss, r = 0, s = !1, u = [], i = null;

t.setInterval = function(e, n) {
    return setInterval(n, e);
}, t.clearInterval = function(e) {
    clearInterval(e), u.splice(0, u.length), i && i(), s = !1;
};

var c = t.over(n);

c.debug = function(e) {}, module.exports = {
    topic: function(n, t) {
        e("/topic" + n, t);
    },
    queue: function(n, t) {
        e("/queue" + n, t);
    },
    start: function(e, t) {
        s || (r = e, c.connect("user", "user123", function(e) {
            s = !0, u.forEach(function(e) {
                c.subscribe(e.destination, e.handler, {
                    selector: "userId = " + r
                });
            }), t && t();
        }, function(e) {}), n.init(o, [ "v10.stomp", "v11.stomp" ]));
    },
    stop: function() {
        s && c && c.disconnect(), s = !1, i && i();
    },
    onStoped: function(e) {
        i = e;
    }
};