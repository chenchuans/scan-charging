function t(t) {
    if (Array.isArray(t)) {
        for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
        return r;
    }
    return Array.from(t);
}

module.exports = {
    throttle: function(e, r) {
        var n = 0, a = null, s = null;
        return function() {
            var p = Date.now(), o = p - n;
            o >= r ? (n = p, e.apply(void 0, arguments)) : (s && clearTimeout(s), a = arguments, 
            s = setTimeout(function() {
                var s = Date.now();
                n + r <= s && (n = s, e.apply(void 0, t(a)));
            }, r - o));
        };
    },
    formatSeconds: function(t) {
        var e = parseInt(t), r = "00", n = "00";
        r = parseInt(e / 60) < 10 ? "0" + parseInt(e / 60) : parseInt(e / 60), e = parseInt(e % 60) < 10 ? "0" + parseInt(e % 60) : parseInt(e % 60), 
        r > 60 && (n = parseInt(r / 60), r = parseInt(r % 60) < 10 ? "0" + parseInt(r % 60) : parseInt(r % 60));
        var a = e;
        return a = r + ":" + a, a = n + ":" + a;
    },
    formatMinutes: function(t) {
        var e = parseInt(t), r = "00", n = "00";
        return r = parseInt(e / 60) < 10 ? "0" + parseInt(e / 60) : parseInt(e / 60), e = parseInt(e % 60) < 10 ? "0" + parseInt(e % 60) : parseInt(e % 60), 
        r > 60 && (n = parseInt(r / 60), r = parseInt(r % 60) < 10 ? "0" + parseInt(r % 60) : parseInt(r % 60)), 
        n + ":" + r;
    },
    theTimeSeconds: function(t, e) {
        var r = parseInt(t), n = "00", a = "00";
        n = parseInt(r / 60) < 10 ? "0" + parseInt(r / 60) : parseInt(r / 60), r = parseInt(r % 60) < 10 ? "0" + parseInt(r % 60) : parseInt(r % 60), 
        n > 60 && (a = parseInt(n / 60), n = parseInt(n % 60) < 10 ? "0" + parseInt(n % 60) : parseInt(n % 60));
        var s = r;
        s = a + ":" + (s = n + ":" + s), t % 60 > 0 && (t = Math.ceil(t / 60));
        var p = t * ((e /= 100) / 60);
        return p = Math.ceil(100 * p) / 100, {
            result: s,
            money: p
        };
    },
    shortDistance: function(t, e, r, n) {
        var a = (e + n) / 2, s = .868 * (t - r), p = e - n;
        return Math.sqrt(Math.pow(s, 2) * Math.pow(Math.cos(a / 180), 2) + Math.pow(p, 2)) * Math.PI * 6371e3 / 180;
    },
    formatDate: function(t, e) {
        var r = {
            "M+": t.getMonth() + 1,
            "d+": t.getDate(),
            "h+": t.getHours(),
            "m+": t.getMinutes(),
            "s+": t.getSeconds(),
            "q+": Math.floor((t.getMonth() + 3) / 3),
            S: t.getMilliseconds()
        };
        /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var n in r) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? r[n] : ("00" + r[n]).substr(("" + r[n]).length)));
        return e;
    },
    hex2int: function(t) {
        for (var e, r = t.length, n = new Array(r), a = 0; a < r; a++) 48 <= (e = t.charCodeAt(a)) && e < 58 ? e -= 48 : e = (223 & e) - 65 + 10, 
        n[a] = e;
        return n.reduce(function(t, e) {
            return t = 16 * t + e;
        }, 0);
    }
};