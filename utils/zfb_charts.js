function t(t, e) {
    var i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, a = t.replace(i, function(t, e, i, a) {
        return e + e + i + i + a + a;
    }), o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
    return "rgba(" + parseInt(o[1], 16) + "," + parseInt(o[2], 16) + "," + parseInt(o[3], 16) + "," + e + ")";
}

function e(t, e, i) {
    if (isNaN(t)) throw new Error("[uCharts] unvalid series data!");
    i = i || 10, e = e || "upper";
    for (var a = 1; 1 > i; ) i *= 10, a *= 10;
    for (t = "upper" === e ? Math.ceil(t * a) : Math.floor(t * a); 0 != t % i; ) "upper" === e ? t++ : t--;
    return t / a;
}

function i(t, e, i, a) {
    for (var o, r = [], n = 0; n < t.length; n++) {
        o = {
            data: [],
            name: e[n],
            color: i[n]
        };
        for (var l = 0, s = a.length; l < s; l++) if (l < t[n]) o.data.push(null); else {
            for (var h = 0, c = 0; c < t[n]; c++) h += a[l - c][1];
            o.data.push(+(h / t[n]).toFixed(3));
        }
        r.push(o);
    }
    return r;
}

function a(t, e, i, a, o) {
    var r = o.width - o.area[1] - o.area[3], n = i.eachSpacing * (o.chartData.xAxisData.xAxisPoints.length - 1), l = e;
    return 0 <= e ? (l = 0, t.event.trigger("scrollLeft")) : Math.abs(e) >= n - r && (l = r - n, 
    t.event.trigger("scrollRight")), l;
}

function o(t, e, i) {
    function a(t) {
        for (;0 > t; ) t += 2 * o;
        for (;t > 2 * o; ) t -= 2 * o;
        return t;
    }
    var o = Math.PI;
    return t = a(t), e = a(e), i = a(i), e > i && (i += 2 * o, t < e && (t += 2 * o)), 
    t >= e && t <= i;
}

function r(t, e, i) {
    var a = t, o = i - e, r = a + (i - o - a) / 1.4142135623730951;
    return r *= -1, {
        transX: r,
        transY: .41421356237309515 * (i - o) - (i - o - a) / 1.4142135623730951
    };
}

function n(t, e) {
    function i(t, e) {
        return !(!t[e - 1] || !t[e + 1]) && (t[e].y >= o(t[e - 1].y, t[e + 1].y) || t[e].y <= a(t[e - 1].y, t[e + 1].y));
    }
    var a = Math.min, o = Math.max, r = null, n = null, l = null, s = null;
    if (1 > e ? (r = t[0].x + .2 * (t[1].x - t[0].x), n = t[0].y + .2 * (t[1].y - t[0].y)) : (r = t[e].x + .2 * (t[e + 1].x - t[e - 1].x), 
    n = t[e].y + .2 * (t[e + 1].y - t[e - 1].y)), e > t.length - 3) {
        var h = t.length - 1;
        l = t[h].x - .2 * (t[h].x - t[h - 1].x), s = t[h].y - .2 * (t[h].y - t[h - 1].y);
    } else l = t[e + 1].x - .2 * (t[e + 2].x - t[e].x), s = t[e + 1].y - .2 * (t[e + 2].y - t[e].y);
    return i(t, e + 1) && (s = t[e + 1].y), i(t, e) && (n = t[e].y), (n >= o(t[e].y, t[e + 1].y) || n <= a(t[e].y, t[e + 1].y)) && (n = t[e].y), 
    (s >= o(t[e].y, t[e + 1].y) || s <= a(t[e].y, t[e + 1].y)) && (s = t[e + 1].y), 
    {
        ctrA: {
            x: r,
            y: n
        },
        ctrB: {
            x: l,
            y: s
        }
    };
}

function l(t, e, i) {
    return {
        x: i.x + t,
        y: i.y - e
    };
}

function s(t, e) {
    if (e) for (;Jt.isCollision(t, e); ) 0 < t.start.x ? t.start.y-- : 0 > t.start.x ? t.start.y++ : 0 < t.start.y ? t.start.y++ : t.start.y--;
    return t;
}

function h(t, e, i) {
    var a = 0;
    return t.map(function(t) {
        if (t.color || (t.color = i.colors[a], a = (a + 1) % i.colors.length), t.index || (t.index = 0), 
        t.type || (t.type = e.type), void 0 === t.show && (t.show = !0), t.type || (t.type = e.type), 
        t.pointShape || (t.pointShape = "circle"), !t.legendShape) switch (t.type) {
          case "line":
            t.legendShape = "line";
            break;

          case "column":
            t.legendShape = "rect";
            break;

          case "area":
            t.legendShape = "triangle";
            break;

          default:
            t.legendShape = "circle";
        }
        return t;
    });
}

function c(t, i) {
    var a = 0, o = i - t;
    return a = 1e4 <= o ? 1e3 : 1e3 <= o ? 100 : 100 <= o ? 10 : 10 <= o ? 5 : 1 <= o ? 1 : .1 <= o ? .1 : .01 <= o ? .01 : .001 <= o ? .001 : 1e-4 <= o ? 1e-4 : 1e-5 <= o ? 1e-5 : 1e-6, 
    {
        minRange: e(t, "lower", a),
        maxRange: e(i, "upper", a)
    };
}

function d(t) {
    for (var e, i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : $t.fontSize, t = (t += "").split(""), a = 0, o = 0; o < t.length; o++) e = t[o], 
    a += /[a-zA-Z]/.test(e) ? 7 : /[0-9]/.test(e) ? 5.5 : /\./.test(e) ? 2.7 : /-/.test(e) ? 3.25 : /[\u4e00-\u9fa5]/.test(e) ? 10 : /\(|\)/.test(e) ? 3.73 : /\s/.test(e) ? 2.5 : /%/.test(e) ? 8 : 10;
    return a * i / 10;
}

function x(t) {
    return t.reduce(function(t, e) {
        return (t.data ? t.data : t).concat(e.data);
    }, []);
}

function p(t, e) {
    for (var i = Array(e), a = 0; a < i.length; a++) i[a] = 0;
    for (var o = 0; o < t.length; o++) for (a = 0; a < i.length; a++) i[a] += t[o].data[a];
    return t.reduce(function(t, e) {
        return (t.data ? t.data : t).concat(e.data).concat(i);
    }, []);
}

function g(t, e, i) {
    var a = void 0, o = void 0;
    return t.clientX ? e.rotate ? (o = e.height - t.clientX * e.pixelRatio, a = (t.pageY - i.currentTarget.offsetTop - e.height / e.pixelRatio / 2 * (e.pixelRatio - 1)) * e.pixelRatio) : (a = t.clientX * e.pixelRatio, 
    o = (t.pageY - i.currentTarget.offsetTop - e.height / e.pixelRatio / 2 * (e.pixelRatio - 1)) * e.pixelRatio) : e.rotate ? (o = e.height - t.x * e.pixelRatio, 
    a = t.y * e.pixelRatio) : (a = t.x * e.pixelRatio, o = t.y * e.pixelRatio), {
        x: a,
        y: o
    };
}

function f(t, e) {
    for (var i, a = [], o = 0; o < t.length; o++) if (null !== (i = t[o]).data[e] && void 0 !== i.data[e] && i.show) {
        var r = {};
        r.color = i.color, r.type = i.type, r.style = i.style, r.pointShape = i.pointShape, 
        r.disableLegend = i.disableLegend, r.name = i.name, r.show = i.show, r.data = i.format ? i.format(i.data[e]) : i.data[e], 
        a.push(r);
    }
    return a;
}

function u(t) {
    var e = t.map(function(t) {
        return d(t);
    });
    return Math.max.apply(null, e);
}

function y(t) {
    for (var e = Math.PI, i = [], a = 0; a < t; a++) i.push(2 * e / t * a);
    return i.map(function(t) {
        return -1 * t + e / 2;
    });
}

function v(t, e, i, a) {
    for (var o, r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {}, n = t.map(function(t) {
        var e = [];
        return e = a || t.data, {
            text: r.format ? r.format(t, e[i]) : t.name + ": " + t.data,
            color: t.color
        };
    }), l = [], s = {
        x: 0,
        y: 0
    }, h = 0; h < e.length; h++) void 0 !== (o = e[h])[i] && null !== o[i] && l.push(o[i]);
    for (var c, d = 0; d < l.length; d++) c = l[d], s.x = Math.round(c.x), s.y += c.y;
    return s.y /= l.length, {
        textList: n,
        offset: s
    };
}

function m(t, e, i, a) {
    var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {}, r = t.map(function(t) {
        return {
            text: o.format ? o.format(t, a[i]) : t.name + ": " + t.data,
            color: t.color,
            disableLegend: !!t.disableLegend
        };
    });
    r = r.filter(function(t) {
        if (!0 !== t.disableLegend) return t;
    });
    for (var n, l = [], s = {
        x: 0,
        y: 0
    }, h = 0; h < e.length; h++) void 0 !== (n = e[h])[i] && null !== n[i] && l.push(n[i]);
    for (var c, d = 0; d < l.length; d++) c = l[d], s.x = Math.round(c.x), s.y += c.y;
    return s.y /= l.length, {
        textList: r,
        offset: s
    };
}

function b(t, e, i, a, o, r) {
    6 < arguments.length && void 0 !== arguments[6] && arguments[6];
    var n = r.color.upFill, l = r.color.downFill, s = [ n, n, l, n ], h = [], c = {
        text: o[a],
        color: null
    };
    h.push(c), e.map(function(e) {
        0 == a && 0 > e.data[1] - e.data[0] ? s[1] = l : (e.data[0] < t[a - 1][1] && (s[0] = l), 
        e.data[1] < e.data[0] && (s[1] = l), e.data[2] > t[a - 1][1] && (s[2] = n), e.data[3] < t[a - 1][1] && (s[3] = l));
        var i = {
            text: "开盘：" + e.data[0],
            color: s[0]
        }, o = {
            text: "收盘：" + e.data[1],
            color: s[1]
        }, r = {
            text: "最低：" + e.data[2],
            color: s[2]
        }, c = {
            text: "最高：" + e.data[3],
            color: s[3]
        };
        h.push(i, o, r, c);
    });
    for (var d, x = [], p = {
        x: 0,
        y: 0
    }, g = 0; g < i.length; g++) void 0 !== (d = i[g])[a] && null !== d[a] && x.push(d[a]);
    return p.x = Math.round(x[0][0].x), {
        textList: h,
        offset: p
    };
}

function A(t) {
    for (var e = [], i = 0; i < t.length; i++) 1 == t[i].show && e.push(t[i]);
    return e;
}

function S(t, e, i, a) {
    for (var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0, r = -1, n = 0, l = [], s = 0; s < e[0].length; s++) l.push(e[0][s].x);
    return ("line" == i.type || "area" == i.type) && "justify" == i.xAxis.boundaryGap && (n = i.chartData.eachSpacing / 2), 
    i.categories || (n = 0), w(t, i) && l.forEach(function(e, i) {
        t.x + o + n > e && (r = i);
    }), r;
}

function T(t, e) {
    var i = -1;
    if (P(t, e.area)) {
        for (var a, o = e.points, r = -1, n = 0, l = o.length; n < l; n++) {
            a = o[n];
            for (var s = 0; s < a.length; s++) {
                r += 1;
                var h = a[s].area;
                if (t.x > h[0] && t.x < h[2] && t.y > h[1] && t.y < h[3]) {
                    i = r;
                    break;
                }
            }
        }
        return i;
    }
    return i;
}

function P(t, e) {
    return t.x > e.start.x && t.x < e.end.x && t.y > e.start.y && t.y < e.end.y;
}

function w(t, e) {
    return t.x <= e.width - e.area[1] + 10 && t.x >= e.area[3] - 10 && t.y >= e.area[0] && t.y <= e.height - e.area[2];
}

function _(t, e, i) {
    var a = Math.PI, o = 2 * a / i, r = -1;
    if (k(t, e.center, e.radius)) {
        var n = function(t) {
            return 0 > t && (t += 2 * a), t > 2 * a && (t -= 2 * a), t;
        }, l = Math.atan2(e.center.y - t.y, t.x - e.center.x);
        0 > (l *= -1) && (l += 2 * a), e.angleList.map(function(t) {
            return t = n(-1 * t);
        }).forEach(function(t, e) {
            var i = n(t - o / 2), s = n(t + o / 2);
            s < i && (s += 2 * a), (l >= i && l <= s || l + 2 * a >= i && l + 2 * a <= s) && (r = e);
        });
    }
    return r;
}

function F(t, e) {
    for (var i, a = -1, o = 0, r = e.series.length; o < r; o++) if (i = e.series[o], 
    t.x > i.funnelArea[0] && t.x < i.funnelArea[2] && t.y > i.funnelArea[1] && t.y < i.funnelArea[3]) {
        a = o;
        break;
    }
    return a;
}

function L(t, e) {
    for (var i, a = -1, o = 0, r = e.length; o < r; o++) if (i = e[o], t.x > i.area[0] && t.x < i.area[2] && t.y > i.area[1] && t.y < i.area[3]) {
        a = o;
        break;
    }
    return a;
}

function D(t, e) {
    for (var i, a = -1, o = e.chartData.mapData, r = e.series, n = Mt(t.y, t.x, o.bounds, o.scale, o.xoffset, o.yoffset), l = [ n.x, n.y ], s = 0, h = r.length; s < h; s++) if (i = r[s].geometry.coordinates, 
    Wt(l, i)) {
        a = s;
        break;
    }
    return a;
}

function R(t, e) {
    var i = -1;
    if (k(t, e.center, e.radius)) {
        var a = Math.atan2(e.center.y - t.y, t.x - e.center.x);
        a = -a;
        for (var r, n = 0, l = e.series.length; n < l; n++) if (r = e.series[n], o(a, r._start_, r._start_ + 2 * r._proportion_ * Math.PI)) {
            i = n;
            break;
        }
    }
    return i;
}

function k(t, e, i) {
    var a = Math.pow;
    return a(t.x - e.x, 2) + a(t.y - e.y, 2) <= a(i, 2);
}

function C(t) {
    var e = [], i = [];
    return t.forEach(function(t) {
        null === t ? (i.length && e.push(i), i = []) : i.push(t);
    }), i.length && e.push(i), e;
}

function M(t, e, i, a) {
    var o = Math.max, r = Math.floor, n = {
        area: {
            start: {
                x: 0,
                y: 0
            },
            end: {
                x: 0,
                y: 0
            },
            width: 0,
            height: 0,
            wholeWidth: 0,
            wholeHeight: 0
        },
        points: [],
        widthArr: [],
        heightArr: []
    };
    if (!1 === e.legend.show) return a.legendData = n, n;
    var l = e.legend.padding, s = e.legend.margin, h = e.legend.fontSize, c = 15 * e.pixelRatio, x = 5 * e.pixelRatio, p = o(e.legend.lineHeight * e.pixelRatio, h);
    if ("top" == e.legend.position || "bottom" == e.legend.position) {
        for (var g = [], f = 0, u = [], y = [], v = 0; v < t.length; v++) {
            var m = t[v], b = c + x + d(m.name || "undefined", h) + e.legend.itemGap;
            f + b > e.width - e.padding[1] - e.padding[3] ? (g.push(y), u.push(f - e.legend.itemGap), 
            f = b, y = [ m ]) : (f += b, y.push(m));
        }
        if (y.length) {
            g.push(y), u.push(f - e.legend.itemGap), n.widthArr = u;
            var A = o.apply(null, u);
            switch (e.legend.float) {
              case "left":
                n.area.start.x = e.padding[3], n.area.end.x = e.padding[3] + 2 * l;
                break;

              case "right":
                n.area.start.x = e.width - e.padding[1] - A - 2 * l, n.area.end.x = e.width - e.padding[1];
                break;

              default:
                n.area.start.x = (e.width - A) / 2 - l, n.area.end.x = (e.width + A) / 2 + l;
            }
            n.area.width = A + 2 * l, n.area.wholeWidth = A + 2 * l, n.area.height = g.length * p + 2 * l, 
            n.area.wholeHeight = g.length * p + 2 * l + 2 * s, n.points = g;
        }
    } else {
        var S = t.length, T = e.height - e.padding[0] - e.padding[2] - 2 * s - 2 * l, P = Math.min(r(T / p), S);
        switch (n.area.height = P * p + 2 * l, n.area.wholeHeight = P * p + 2 * l, e.legend.float) {
          case "top":
            n.area.start.y = e.padding[0] + s, n.area.end.y = e.padding[0] + s + n.area.height;
            break;

          case "bottom":
            n.area.start.y = e.height - e.padding[2] - s - n.area.height, n.area.end.y = e.height - e.padding[2] - s;
            break;

          default:
            n.area.start.y = (e.height - n.area.height) / 2, n.area.end.y = (e.height + n.area.height) / 2;
        }
        for (var w, _ = 0 == S % P ? S / P : r(S / P + 1), F = [], L = 0; L < _; L++) w = t.slice(L * P, L * P + P), 
        F.push(w);
        if (n.points = F, F.length) {
            for (var D = 0; D < F.length; D++) {
                for (var R, k = F[D], C = 0, M = 0; M < k.length; M++) (R = c + x + d(k[M].name || "undefined", h) + e.legend.itemGap) > C && (C = R);
                n.widthArr.push(C), n.heightArr.push(k.length * p + 2 * l);
            }
            for (var z = 0, W = 0; W < n.widthArr.length; W++) z += n.widthArr[W];
            n.area.width = z - e.legend.itemGap + 2 * l, n.area.wholeWidth = n.area.width + l;
        }
    }
    switch (e.legend.position) {
      case "top":
        n.area.start.y = e.padding[0] + s, n.area.end.y = e.padding[0] + s + n.area.height;
        break;

      case "bottom":
        n.area.start.y = e.height - e.padding[2] - n.area.height - s, n.area.end.y = e.height - e.padding[2] - s;
        break;

      case "left":
        n.area.start.x = e.padding[3], n.area.end.x = e.padding[3] + n.area.width;
        break;

      case "right":
        n.area.start.x = e.width - e.padding[1] - n.area.width, n.area.end.x = e.width - e.padding[1];
    }
    return a.legendData = n, n;
}

function z(t, e, i, a) {
    var o = {
        angle: 0,
        xAxisHeight: i.xAxisHeight
    }, r = t.map(function(t) {
        return d(t, e.xAxis.fontSize || i.fontSize);
    }), n = Math.max.apply(this, r);
    return 1 == e.xAxis.rotateLabel && n + 2 * i.xAxisTextPadding > a && (o.angle = 45 * Math.PI / 180, 
    o.xAxisHeight = 2 * i.xAxisTextPadding + n * Math.sin(o.angle)), o;
}

function W(t, e) {
    var i = Math.min, a = Math.max, o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : -1, r = x(t), n = [];
    (r = r.filter(function(t) {
        return "object" == (void 0 === t ? "undefined" : Yt(t)) && null !== t ? t.constructor == Array ? null !== t : null !== t.value : null !== t;
    })).map(function(t) {
        "object" == (void 0 === t ? "undefined" : Yt(t)) ? t.constructor == Array ? "candle" == e.type ? t.map(function(t) {
            n.push(t);
        }) : n.push(t[0]) : n.push(t.value) : n.push(t);
    });
    var l = 0, s = 0;
    0 < n.length && (l = i.apply(this, n), s = a.apply(this, n)), -1 < o ? ("number" == typeof e.xAxis.data[o].min && (l = i(e.xAxis.data[o].min, l)), 
    "number" == typeof e.xAxis.data[o].max && (s = a(e.xAxis.data[o].max, s))) : ("number" == typeof e.xAxis.min && (l = i(e.xAxis.min, l)), 
    "number" == typeof e.xAxis.max && (s = a(e.xAxis.max, s))), l === s && (s += s || 10);
    for (var h = c(l, s), d = h.minRange, p = [], g = (h.maxRange - d) / e.xAxis.splitNumber, f = 0; f <= e.xAxis.splitNumber; f++) p.push(d + g * f);
    return p;
}

function O(t, e, i) {
    var a = {
        angle: 0,
        xAxisHeight: i.xAxisHeight
    };
    a.ranges = W(t, e, i), a.rangesFormat = a.ranges.map(function(t) {
        return t = e.xAxis.format ? e.xAxis.format(t) : Jt.toFixed(t, 2);
    });
    var o = a.ranges.map(function(t) {
        return t = Jt.toFixed(t, 2), t = e.xAxis.format ? e.xAxis.format(+t) : t;
    }), r = (a = Object.assign(a, J(o, e, i))).eachSpacing, n = o.map(function(t) {
        return d(t);
    }), l = Math.max.apply(this, n);
    return l + 2 * i.xAxisTextPadding > r && (a.angle = 45 * Math.PI / 180, a.xAxisHeight = 2 * i.xAxisTextPadding + l * Math.sin(a.angle)), 
    !0 === e.xAxis.disabled && (a.xAxisHeight = 0), a;
}

function I(t, e, i, a, o) {
    var r = Math.max, n = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 1, s = o.extra.radar || {};
    s.max = s.max || 0;
    for (var h = r(s.max, r.apply(null, x(a))), c = [], d = 0; d < a.length; d++) !function(o) {
        var r = a[o], s = {};
        s.color = r.color, s.legendShape = r.legendShape, s.pointShape = r.pointShape, s.data = [], 
        r.data.forEach(function(a, o) {
            var r = {};
            r.angle = t[o], r.proportion = a / h, r.position = l(i * r.proportion * n * Math.cos(r.angle), i * r.proportion * n * Math.sin(r.angle), e), 
            s.data.push(r);
        }), c.push(s);
    }(d);
    return c;
}

function E(t, e) {
    for (var i, a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1, o = 0, r = 0, n = 0; n < t.length; n++) (i = t[n]).data = null === i.data ? 0 : i.data, 
    o += i.data;
    for (var l, s = 0; s < t.length; s++) (l = t[s]).data = null === l.data ? 0 : l.data, 
    l._proportion_ = 0 === o ? 1 / t.length * a : l.data / o * a, l._radius_ = e;
    for (var h, c = 0; c < t.length; c++) (h = t[c])._start_ = r, r += 2 * h._proportion_ * Math.PI;
    return t;
}

function B(t, e) {
    var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1;
    t = t.sort(function(t, e) {
        return parseInt(e.data) - parseInt(t.data);
    });
    for (var a = 0; a < t.length; a++) t[a].radius = t[a].data / t[0].data * e * i, 
    t[a]._proportion_ = t[a].data / t[0].data;
    return t.reverse();
}

function H(t, e, i, a) {
    for (var o, r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1, n = 0, l = 0, s = [], h = 0; h < t.length; h++) (o = t[h]).data = null === o.data ? 0 : o.data, 
    n += o.data, s.push(o.data);
    for (var c, d = Math.min.apply(null, s), x = Math.max.apply(null, s), p = 0; p < t.length; p++) (c = t[p]).data = null === c.data ? 0 : c.data, 
    0 === n || "area" == e ? (c._proportion_ = c.data / n * r, c._rose_proportion_ = 1 / t.length * r) : (c._proportion_ = c.data / n * r, 
    c._rose_proportion_ = c.data / n * r), c._radius_ = i + (a - i) * ((c.data - d) / (x - d));
    for (var g, f = 0; f < t.length; f++) (g = t[f])._start_ = l, l += 2 * g._rose_proportion_ * Math.PI;
    return t;
}

function N(t, e) {
    var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1;
    1 == i && (i = .999999);
    for (var a, o = 0; o < t.length; o++) {
        (a = t[o]).data = null === a.data ? 0 : a.data;
        var r = void 0;
        r = "circle" == e.type ? 2 : e.endAngle < e.startAngle ? 2 + e.endAngle - e.startAngle : e.startAngle - e.endAngle, 
        a._proportion_ = r * a.data * i + e.startAngle, 2 <= a._proportion_ && (a._proportion_ %= 2);
    }
    return t;
}

function X(t, e, i) {
    for (var a = e, o = 0; o < t.length; o++) t[o].value = null === t[o].value ? 0 : t[o].value, 
    t[o]._startAngle_ = a, t[o]._endAngle_ = (e - i + 1) * t[o].value + e, 2 <= t[o]._endAngle_ && (t[o]._endAngle_ %= 2), 
    a = t[o]._endAngle_;
    return t;
}

function G(t, e, i) {
    for (var a, o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 1, r = 0; r < t.length; r++) {
        if (a = t[r], a.data = null === a.data ? 0 : a.data, "auto" == i.pointer.color) {
            for (var n = 0; n < e.length; n++) if (a.data <= e[n].value) {
                a.color = e[n].color;
                break;
            }
        } else a.color = i.pointer.color;
        var l = i.startAngle - i.endAngle + 1;
        a._endAngle_ = l * a.data + i.startAngle, a._oldAngle_ = i.oldAngle, i.oldAngle < i.endAngle && (a._oldAngle_ += 2), 
        a._proportion_ = a.data >= i.oldData ? (a._endAngle_ - a._oldAngle_) * o + i.oldAngle : a._oldAngle_ - (a._oldAngle_ - a._endAngle_) * o, 
        2 <= a._proportion_ && (a._proportion_ %= 2);
    }
    return t;
}

function j(t) {
    t = E(t);
    for (var e = 0, i = 0; i < t.length; i++) {
        var a = t[i], o = a.format ? a.format(+a._proportion_.toFixed(2)) : Jt.toFixed(100 * a._proportion_) + "%";
        e = Math.max(e, d(o));
    }
    return e;
}

function Y(t, e, i, a, o, r) {
    return t.map(function(t) {
        return null === t ? null : (t.width = Math.ceil((e - 2 * o.columePadding) / i), 
        r.extra.column && r.extra.column.width && 0 < +r.extra.column.width && (t.width = Math.min(t.width, +r.extra.column.width)), 
        0 >= t.width && (t.width = 1), t.x += (a + .5 - i / 2) * t.width, t);
    });
}

function $(t, e, i, a, o, r, n) {
    return t.map(function(t) {
        return null === t ? null : (t.width = Math.ceil((e - 2 * o.columePadding) / 2), 
        r.extra.column && r.extra.column.width && 0 < +r.extra.column.width && (t.width = Math.min(t.width, +r.extra.column.width)), 
        0 < a && (t.width -= 2 * n), t);
    });
}

function q(t, e, i, a, o, r) {
    return t.map(function(t) {
        return null === t ? null : (t.width = Math.ceil((e - 2 * o.columePadding) / 2), 
        r.extra.column && r.extra.column.width && 0 < +r.extra.column.width && (t.width = Math.min(t.width, +r.extra.column.width)), 
        t);
    });
}

function J(t, e) {
    var i = e.width - e.area[1] - e.area[3], a = e.enableScroll ? Math.min(e.xAxis.itemCount, t.length) : t.length;
    ("line" == e.type || "area" == e.type) && 1 < a && "justify" == e.xAxis.boundaryGap && (a -= 1);
    var o = i / a, r = [], n = e.area[3], l = e.width - e.area[1];
    return t.forEach(function(t, e) {
        r.push(n + e * o);
    }), "justify" !== e.xAxis.boundaryGap && (!0 === e.enableScroll ? r.push(n + t.length * o) : r.push(l)), 
    {
        xAxisPoints: r,
        startX: n,
        endX: l,
        eachSpacing: o
    };
}

function Z(t, e, i, a, o, r) {
    var n = Math.round, l = 7 < arguments.length && void 0 !== arguments[7] ? arguments[7] : 1, s = [], h = r.height - r.area[0] - r.area[2];
    return t.forEach(function(t, c) {
        if (null === t) s.push(null); else {
            var d = [];
            t.forEach(function(t) {
                var s = {
                    x: a[c] + n(o / 2)
                }, x = t.value || t, p = h * (x - e) / (i - e);
                p *= l, s.y = r.height - n(p) - r.area[2], d.push(s);
            }), s.push(d);
        }
    }), s;
}

function K(t, e, i, a, o, r) {
    var n = Math.round, l = 7 < arguments.length && void 0 !== arguments[7] ? arguments[7] : 1, s = "center";
    ("line" == r.type || "area" == r.type) && (s = r.xAxis.boundaryGap);
    var h = [], c = r.height - r.area[0] - r.area[2], d = r.width - r.area[1] - r.area[3];
    return t.forEach(function(t, x) {
        if (null === t) h.push(null); else {
            var p = {
                color: t.color,
                x: a[x]
            }, g = t;
            if ("object" == (void 0 === t ? "undefined" : Yt(t)) && null !== t) if (t.constructor == Array) {
                var f = void 0, u = void 0, y = void 0;
                u = (f = [].concat(r.chartData.xAxisData.ranges)).shift(), y = f.pop(), g = t[1], 
                p.x = r.area[3] + d * (t[0] - u) / (y - u);
            } else g = t.value;
            "center" == s && (p.x += n(o / 2));
            var v = c * (g - e) / (i - e);
            v *= l, p.y = r.height - n(v) - r.area[2], h.push(p);
        }
    }), h;
}

function Q(t, e, i, a, o, r, n, l, s) {
    var h = Math.round, c = 9 < arguments.length && void 0 !== arguments[9] ? arguments[9] : 1, d = [], x = r.height - r.area[0] - r.area[2];
    return t.forEach(function(t, n) {
        if (null === t) d.push(null); else {
            var p = {
                color: t.color,
                x: a[n] + h(o / 2)
            };
            if (0 < l) {
                for (var g = 0, f = 0; f <= l; f++) g += s[f].data[n];
                var u = x * (g - e) / (i - e), y = x * (g - t - e) / (i - e);
            } else var g = t, u = x * (g - e) / (i - e), y = 0;
            var v = y;
            u *= c, v *= c, p.y = r.height - h(u) - r.area[2], p.y0 = r.height - h(v) - r.area[2], 
            d.push(p);
        }
    }), d;
}

function U(t, e, i, a) {
    var o = Math.min, r = Math.max, n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : -1, l = [];
    ("stack" == a ? p(t, e.categories.length) : x(t)).filter(function(t) {
        return "object" == (void 0 === t ? "undefined" : Yt(t)) && null !== t ? t.constructor == Array ? null !== t : null !== t.value : null !== t;
    }).map(function(t) {
        "object" == (void 0 === t ? "undefined" : Yt(t)) ? t.constructor == Array ? "candle" == e.type ? t.map(function(t) {
            l.push(t);
        }) : l.push(t[1]) : l.push(t.value) : l.push(t);
    });
    var s = 0, h = 0;
    0 < l.length && (s = o.apply(this, l), h = r.apply(this, l)), -1 < n ? ("number" == typeof e.yAxis.data[n].min && (s = o(e.yAxis.data[n].min, s)), 
    "number" == typeof e.yAxis.data[n].max && (h = r(e.yAxis.data[n].max, h))) : ("number" == typeof e.yAxis.min && (s = o(e.yAxis.min, s)), 
    "number" == typeof e.yAxis.max && (h = r(e.yAxis.max, h))), s === h && (h += h || 10);
    for (var d = c(s, h), g = d.minRange, f = [], u = (d.maxRange - g) / e.yAxis.splitNumber, y = 0; y <= e.yAxis.splitNumber; y++) f.push(g + u * y);
    return f.reverse();
}

function V(t, e, i) {
    var a = Math.max, o = qt({}, {
        type: ""
    }, e.extra.column), r = e.yAxis.data.length, n = Array(r);
    if (0 < r) {
        for (var l = 0; l < r; l++) {
            n[l] = [];
            for (var s = 0; s < t.length; s++) t[s].index == l && n[l].push(t[s]);
        }
        for (var h, c = Array(r), x = Array(r), p = Array(r), g = 0; g < r; g++) !function(t, r) {
            r = e.yAxis.data[t], 1 == e.yAxis.disabled && (r.disabled = !0), c[t] = U(n[t], e, i, o.type, t);
            var l = r.fontSize || i.fontSize;
            p[t] = {
                position: r.position ? r.position : "left",
                width: 0
            }, x[t] = c[t].map(function(e) {
                return e = Jt.toFixed(e, 6), e = r.format ? r.format(+e) : e, p[t].width = a(p[t].width, d(e, l) + 5), 
                e;
            });
            var s = r.calibration ? 4 * e.pixelRatio : 0;
            p[t].width += s + 3 * e.pixelRatio, !0 === r.disabled && (p[t].width = 0), h = r;
        }(g, h);
    } else {
        var x = [ ,  ], p = [ ,  ];
        (c = [ ,  ])[0] = U(t, e, i, o.type), p[0] = {
            position: "left",
            width: 0
        };
        var f = e.yAxis.fontSize || i.fontSize;
        x[0] = c[0].map(function(t) {
            return t = Jt.toFixed(t, 6), t = e.yAxis.format ? e.yAxis.format(+t) : t, p[0].width = a(p[0].width, d(t, f) + 5), 
            t;
        }), p[0].width += 3 * e.pixelRatio, !0 === e.yAxis.disabled ? (p[0] = {
            position: "left",
            width: 0
        }, e.yAxis.data[0] = {
            disabled: !0
        }) : e.yAxis.data[0] = {
            disabled: !1,
            position: "left",
            max: e.yAxis.max,
            min: e.yAxis.min,
            format: e.yAxis.format
        };
    }
    return {
        rangesFormat: x,
        ranges: c,
        yAxisWidth: p
    };
}

function tt(t, e, i) {
    for (var a = [].concat(i.chartData.yAxisData.ranges), o = i.height - i.area[0] - i.area[2], r = i.area[0], n = [], l = 0; l < a.length; l++) {
        var s = a[l].shift(), h = s - (s - a[l].pop()) * (t - r) / o;
        h = i.yAxis.data[l].format ? i.yAxis.data[l].format(+h) : h.toFixed(0), n.push(h + "");
    }
    return n;
}

function et(t, e) {
    for (var i = void 0, a = void 0, o = e.height - e.area[0] - e.area[2], r = 0; r < t.length; r++) {
        t[r].yAxisIndex = t[r].yAxisIndex ? t[r].yAxisIndex : 0;
        var n = [].concat(e.chartData.yAxisData.ranges[t[r].yAxisIndex]);
        i = n.pop(), a = n.shift();
        var l = o * (t[r].value - i) / (a - i);
        t[r].y = e.height - Math.round(l) - e.area[2];
    }
    return t;
}

function it(t, e) {
    var i = Math.PI;
    !0 === e.rotateLock ? !0 !== e._rotate_ && (t.translate(e.height, 0), t.rotate(90 * i / 180), 
    e._rotate_ = !0) : (t.translate(e.height, 0), t.rotate(90 * i / 180));
}

function at(t, e, i, a, o) {
    a.beginPath(), "hollow" == o.dataPointShapeType ? (a.setStrokeStyle(e), a.setFillStyle(o.background), 
    a.setLineWidth(2 * o.pixelRatio)) : (a.setStrokeStyle("#ffffff"), a.setFillStyle(e), 
    a.setLineWidth(1 * o.pixelRatio)), "diamond" === i ? t.forEach(function(t) {
        null !== t && (a.moveTo(t.x, t.y - 4.5), a.lineTo(t.x - 4.5, t.y), a.lineTo(t.x, t.y + 4.5), 
        a.lineTo(t.x + 4.5, t.y), a.lineTo(t.x, t.y - 4.5));
    }) : "circle" === i ? t.forEach(function(t) {
        null !== t && (a.moveTo(t.x + 2.5 * o.pixelRatio, t.y), a.arc(t.x, t.y, 3 * o.pixelRatio, 0, 2 * Math.PI, !1));
    }) : "rect" === i ? t.forEach(function(t) {
        null !== t && (a.moveTo(t.x - 3.5, t.y - 3.5), a.rect(t.x - 3.5, t.y - 3.5, 7, 7));
    }) : "triangle" == i && t.forEach(function(t) {
        null !== t && (a.moveTo(t.x, t.y - 4.5), a.lineTo(t.x - 4.5, t.y + 4.5), a.lineTo(t.x + 4.5, t.y + 4.5), 
        a.lineTo(t.x, t.y - 4.5));
    }), a.closePath(), a.fill(), a.stroke();
}

function ot(t, e, i, a) {
    var o = t.title.fontSize || e.titleFontSize, r = t.subtitle.fontSize || e.subtitleFontSize, n = t.title.name || "", l = t.subtitle.name || "", s = t.title.color || e.titleColor, h = t.subtitle.color || e.subtitleColor, c = n ? o : 0, x = l ? r : 0;
    if (l) {
        var p = d(l, r), g = a.x - p / 2 + (t.subtitle.offsetX || 0), f = a.y + r / 2 + (t.subtitle.offsetY || 0);
        n && (f += (c + 5) / 2), i.beginPath(), i.setFontSize(r), i.setFillStyle(h), i.fillText(l, g, f), 
        i.closePath(), i.stroke();
    }
    if (n) {
        var u = d(n, o), y = a.x - u / 2 + (t.title.offsetX || 0), v = a.y + o / 2 + (t.title.offsetY || 0);
        l && (v -= (x + 5) / 2), i.beginPath(), i.setFontSize(o), i.setFillStyle(s), i.fillText(n, y, v), 
        i.closePath(), i.stroke();
    }
}

function rt(t, e, i, a) {
    var o = e.data;
    t.forEach(function(t, r) {
        if (null !== t) {
            a.beginPath(), a.setFontSize(e.textSize || i.fontSize), a.setFillStyle(e.textColor || "#666666");
            var n = o[r];
            "object" == Yt(o[r]) && null !== o[r] && (n = o[r].constructor == Array ? o[r][1] : o[r].value);
            var l = e.format ? e.format(n) : n;
            a.fillText(l + "", t.x - d(l, e.textSize || i.fontSize) / 2, t.y - 4), a.closePath(), 
            a.stroke();
        }
    });
}

function nt(t, e, i, a, o, r) {
    var n = Math.PI;
    e -= t.width / 2 + o.gaugeLabelTextMargin;
    for (var l = (t.startAngle - t.endAngle + 1) / t.splitLine.splitNumber, s = (t.endNumber - t.startNumber) / t.splitLine.splitNumber, h = t.startAngle, c = t.startNumber, x = 0; x < t.splitLine.splitNumber + 1; x++) {
        var p = {
            x: e * Math.cos(h * n),
            y: e * Math.sin(h * n)
        }, g = t.labelFormat ? t.labelFormat(c) : c;
        p.x += i.x - d(g) / 2, p.y += i.y;
        var f = p.x, u = p.y;
        r.beginPath(), r.setFontSize(o.fontSize), r.setFillStyle(t.labelColor || "#666666"), 
        r.fillText(g, f, u + o.fontSize / 2), r.closePath(), r.stroke(), 2 <= (h += l) && (h %= 2), 
        c += s;
    }
}

function lt(t, e, i, a, o, r) {
    var n = a.extra.radar || {};
    e += o.radarLabelTextMargin, t.forEach(function(t, s) {
        var h = {
            x: e * Math.cos(t),
            y: e * Math.sin(t)
        }, c = l(h.x, h.y, i), x = c.x, p = c.y;
        Jt.approximatelyEqual(h.x, 0) ? x -= d(a.categories[s] || "") / 2 : 0 > h.x && (x -= d(a.categories[s] || "")), 
        r.beginPath(), r.setFontSize(o.fontSize), r.setFillStyle(n.labelColor || "#666666"), 
        r.fillText(a.categories[s] || "", x, p + o.fontSize / 2), r.closePath(), r.stroke();
    });
}

function st(t, e, i, a, o, r) {
    for (var n = Math.cos, h = Math.sin, c = Math.min, x = Math.max, p = Math.PI, g = i.pieChartLinePadding, f = [], u = null, y = t.map(function(t) {
        var e = t.format ? t.format(+t._proportion_.toFixed(2)) : Jt.toFixed(100 * t._proportion_.toFixed(4)) + "%";
        return t._rose_proportion_ && (t._proportion_ = t._rose_proportion_), {
            arc: 2 * p - (t._start_ + 2 * p * t._proportion_ / 2),
            text: e,
            color: t.color,
            radius: t._radius_,
            textColor: t.textColor,
            textSize: t.textSize
        };
    }), v = 0; v < y.length; v++) {
        var m = y[v], b = n(m.arc) * (m.radius + g), A = h(m.arc) * (m.radius + g), S = n(m.arc) * m.radius, T = h(m.arc) * m.radius, P = 0 <= b ? b + i.pieChartTextPadding : b - i.pieChartTextPadding, w = A, _ = d(m.text, m.textSize || i.fontSize), F = w;
        u && Jt.isSameXCoordinateArea(u.start, {
            x: P
        }) && (F = 0 < P ? c(w, u.start.y) : 0 > b ? x(w, u.start.y) : 0 < w ? x(w, u.start.y) : c(w, u.start.y)), 
        0 > P && (P -= _), u = s({
            lineStart: {
                x: S,
                y: T
            },
            lineEnd: {
                x: b,
                y: A
            },
            start: {
                x: P,
                y: F
            },
            width: _,
            height: i.fontSize,
            text: m.text,
            color: m.color,
            textColor: m.textColor,
            textSize: m.textSize
        }, u), f.push(u);
    }
    for (var L = 0; L < f.length; L++) {
        var D = f[L], R = l(D.lineStart.x, D.lineStart.y, r), k = l(D.lineEnd.x, D.lineEnd.y, r), C = l(D.start.x, D.start.y, r);
        a.setLineWidth(1 * e.pixelRatio), a.setFontSize(i.fontSize), a.beginPath(), a.setStrokeStyle(D.color), 
        a.setFillStyle(D.color), a.moveTo(R.x, R.y);
        var M = 0 > D.start.x ? C.x + D.width : C.x, z = 0 > D.start.x ? C.x - 5 : C.x + 5;
        a.quadraticCurveTo(k.x, k.y, M, C.y), a.moveTo(R.x, R.y), a.stroke(), a.closePath(), 
        a.beginPath(), a.moveTo(C.x + D.width, C.y), a.arc(M, C.y, 2, 0, 2 * p), a.closePath(), 
        a.fill(), a.beginPath(), a.setFontSize(D.textSize || i.fontSize), a.setFillStyle(D.textColor || "#666666"), 
        a.fillText(D.text, z, C.y + 3), a.closePath(), a.stroke(), a.closePath();
    }
}

function ht(e, i, a, o) {
    var r = i.extra.tooltip || {};
    r.gridType = null == r.gridType ? "solid" : r.gridType, r.dashLength = null == r.dashLength ? 4 : r.dashLength;
    var n = i.area[0], l = i.height - i.area[2];
    if ("dash" == r.gridType && o.setLineDash([ r.dashLength, r.dashLength ]), o.setStrokeStyle(r.gridColor || "#cccccc"), 
    o.setLineWidth(1 * i.pixelRatio), o.beginPath(), o.moveTo(e, n), o.lineTo(e, l), 
    o.stroke(), o.setLineDash([]), r.xAxisLabel) {
        var s = i.categories[i.tooltip.index];
        o.setFontSize(a.fontSize);
        var h = d(s, a.fontSize), c = e - .5 * h, x = l;
        o.beginPath(), o.setFillStyle(t(r.labelBgColor || a.toolTipBackground, r.labelBgOpacity || a.toolTipOpacity)), 
        o.setStrokeStyle(r.labelBgColor || a.toolTipBackground), o.setLineWidth(1 * i.pixelRatio), 
        o.rect(c - a.toolTipPadding, x, h + 2 * a.toolTipPadding, a.fontSize + 2 * a.toolTipPadding), 
        o.closePath(), o.stroke(), o.fill(), o.beginPath(), o.setFontSize(a.fontSize), o.setFillStyle(r.labelFontColor || a.fontColor), 
        o.fillText(s + "", c, x + a.toolTipPadding + a.fontSize), o.closePath(), o.stroke();
    }
}

function ct(e, i, a) {
    for (var o, r = qt({}, {
        type: "solid",
        dashLength: 4,
        data: []
    }, e.extra.markLine), n = e.area[3], l = e.width - e.area[1], s = et(r.data, e), h = 0; h < s.length; h++) if (o = qt({}, {
        lineColor: "#DE4A42",
        showLabel: !1,
        labelFontColor: "#666666",
        labelBgColor: "#DFE8FF",
        labelBgOpacity: .8,
        yAxisIndex: 0
    }, s[h]), "dash" == r.type && a.setLineDash([ r.dashLength, r.dashLength ]), a.setStrokeStyle(o.lineColor), 
    a.setLineWidth(1 * e.pixelRatio), a.beginPath(), a.moveTo(n, o.y), a.lineTo(l, o.y), 
    a.stroke(), a.setLineDash([]), o.showLabel) {
        var c = e.yAxis.format ? e.yAxis.format(+o.value) : o.value;
        a.setFontSize(i.fontSize);
        var x = d(c, i.fontSize), p = e.padding[3] + i.yAxisTitleWidth - i.toolTipPadding, g = Math.max(e.area[3], x + 2 * i.toolTipPadding) - p, f = o.y;
        a.setFillStyle(t(o.labelBgColor, o.labelBgOpacity)), a.setStrokeStyle(o.labelBgColor), 
        a.setLineWidth(1 * e.pixelRatio), a.beginPath(), a.rect(p, f - .5 * i.fontSize - i.toolTipPadding, g, i.fontSize + 2 * i.toolTipPadding), 
        a.closePath(), a.stroke(), a.fill(), a.beginPath(), a.setFontSize(i.fontSize), a.setFillStyle(o.labelFontColor), 
        a.fillText(c + "", p + (g - x) / 2, f + .5 * i.fontSize), a.stroke();
    }
}

function dt(e, i, a, o) {
    var r = Math.max, n = qt({}, {
        gridType: "solid",
        dashLength: 4
    }, e.extra.tooltip), l = e.area[3], s = e.width - e.area[1];
    if ("dash" == n.gridType && a.setLineDash([ n.dashLength, n.dashLength ]), a.setStrokeStyle(n.gridColor || "#cccccc"), 
    a.setLineWidth(1 * e.pixelRatio), a.beginPath(), a.moveTo(l, e.tooltip.offset.y), 
    a.lineTo(s, e.tooltip.offset.y), a.stroke(), a.setLineDash([]), n.yAxisLabel) for (var h = tt(e.tooltip.offset.y, e.series, e, i, o), c = e.chartData.yAxisData.yAxisWidth, x = e.area[3], p = e.width - e.area[1], g = 0; g < h.length; g++) {
        a.setFontSize(i.fontSize);
        var f = void 0, u = void 0, y = void 0, v = d(h[g], i.fontSize);
        "left" == c[g].position ? (f = x - c[g].width, u = r(f, f + v + 2 * i.toolTipPadding)) : (f = p, 
        u = r(f + c[g].width, f + v + 2 * i.toolTipPadding));
        var m = f + ((y = u - f) - v) / 2, b = e.tooltip.offset.y;
        a.beginPath(), a.setFillStyle(t(n.labelBgColor || i.toolTipBackground, n.labelBgOpacity || i.toolTipOpacity)), 
        a.setStrokeStyle(n.labelBgColor || i.toolTipBackground), a.setLineWidth(1 * e.pixelRatio), 
        a.rect(f, b - .5 * i.fontSize - i.toolTipPadding, y, i.fontSize + 2 * i.toolTipPadding), 
        a.closePath(), a.stroke(), a.fill(), a.beginPath(), a.setFontSize(i.fontSize), a.setFillStyle(n.labelFontColor || i.fontColor), 
        a.fillText(h[g], m, b + .5 * i.fontSize), a.closePath(), a.stroke(), "left" == c[g].position ? x -= c[g].width + e.yAxis.padding : p += c[g].width + e.yAxis.padding;
    }
}

function xt(e, i, a, o, r) {
    var n = qt({}, {
        activeBgColor: "#000000",
        activeBgOpacity: .08
    }, i.extra.tooltip), l = i.area[0], s = i.height - i.area[2];
    o.beginPath(), o.setFillStyle(t(n.activeBgColor, n.activeBgOpacity)), o.rect(e - r / 2, l, r, s - l), 
    o.closePath(), o.fill();
}

function pt(e, i, a, o, r) {
    var n = Math.round, l = qt({}, {
        showBox: !0,
        bgColor: "#000000",
        bgOpacity: .7,
        fontColor: "#FFFFFF"
    }, a.extra.tooltip), s = 4 * a.pixelRatio, h = 5 * a.pixelRatio, c = 8 * a.pixelRatio, x = !1;
    ("line" == a.type || "area" == a.type || "candle" == a.type || "mix" == a.type) && ht(a.tooltip.offset.x, a, o, r), 
    (i = qt({
        x: 0,
        y: 0
    }, i)).y -= 8 * a.pixelRatio;
    var p = e.map(function(t) {
        return d(t.text, o.fontSize);
    }), g = s + h + 4 * o.toolTipPadding + Math.max.apply(null, p), f = 2 * o.toolTipPadding + e.length * o.toolTipLineHeight;
    0 == l.showBox || (i.x - Math.abs(a._scrollDistance_) + c + g > a.width && (x = !0), 
    f + i.y > a.height && (i.y = a.height - f), r.beginPath(), r.setFillStyle(t(l.bgColor || o.toolTipBackground, l.bgOpacity || o.toolTipOpacity)), 
    x ? (r.moveTo(i.x, i.y + 10 * a.pixelRatio), r.lineTo(i.x - c, i.y + 10 * a.pixelRatio - 5 * a.pixelRatio), 
    r.lineTo(i.x - c, i.y), r.lineTo(i.x - c - n(g), i.y), r.lineTo(i.x - c - n(g), i.y + f), 
    r.lineTo(i.x - c, i.y + f), r.lineTo(i.x - c, i.y + 10 * a.pixelRatio + 5 * a.pixelRatio), 
    r.lineTo(i.x, i.y + 10 * a.pixelRatio)) : (r.moveTo(i.x, i.y + 10 * a.pixelRatio), 
    r.lineTo(i.x + c, i.y + 10 * a.pixelRatio - 5 * a.pixelRatio), r.lineTo(i.x + c, i.y), 
    r.lineTo(i.x + c + n(g), i.y), r.lineTo(i.x + c + n(g), i.y + f), r.lineTo(i.x + c, i.y + f), 
    r.lineTo(i.x + c, i.y + 10 * a.pixelRatio + 5 * a.pixelRatio), r.lineTo(i.x, i.y + 10 * a.pixelRatio)), 
    r.closePath(), r.fill(), e.forEach(function(t, e) {
        if (null !== t.color) {
            r.beginPath(), r.setFillStyle(t.color);
            var a = i.x + c + 2 * o.toolTipPadding, n = i.y + (o.toolTipLineHeight - o.fontSize) / 2 + o.toolTipLineHeight * e + o.toolTipPadding + 1;
            x && (a = i.x - g - c + 2 * o.toolTipPadding), r.fillRect(a, n, s, o.fontSize), 
            r.closePath();
        }
    }), e.forEach(function(t, e) {
        var a = i.x + c + 2 * o.toolTipPadding + s + h;
        x && (a = i.x - g - c + 2 * o.toolTipPadding + +s + h);
        var n = i.y + (o.toolTipLineHeight - o.fontSize) / 2 + o.toolTipLineHeight * e + o.toolTipPadding;
        r.beginPath(), r.setFontSize(o.fontSize), r.setFillStyle(l.fontColor), r.fillText(t.text, a, n + o.fontSize), 
        r.closePath(), r.stroke();
    }));
}

function gt(t, e, i, a) {
    var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1, r = e.chartData.xAxisData, n = r.xAxisPoints, l = r.eachSpacing, s = qt({}, {
        type: "group",
        width: l / 2,
        meter: {
            border: 4,
            fillColor: "#FFFFFF"
        }
    }, e.extra.column), h = [];
    a.save();
    var c = -2, d = n.length + 2;
    return e._scrollDistance_ && 0 !== e._scrollDistance_ && !0 === e.enableScroll && (a.translate(e._scrollDistance_, 0), 
    c = Math.floor(-e._scrollDistance_ / l) - 2, d = c + e.xAxis.itemCount + 4), e.tooltip && e.tooltip.textList && e.tooltip.textList.length && 1 === o && xt(e.tooltip.offset.x, e, i, a, l), 
    t.forEach(function(r, x) {
        var p = void 0, g = void 0, f = void 0;
        g = (p = [].concat(e.chartData.yAxisData.ranges[r.index])).pop(), f = p.shift();
        var u = r.data;
        switch (s.type) {
          case "group":
            var y = K(u, g, f, n, l, e, i, o), v = Q(u, g, f, n, l, e, i, x, t, o);
            h.push(v), y = Y(y, l, t.length, x, i, e);
            for (var m, b = 0; b < y.length; b++) if (null !== (m = y[b]) && b > c && b < d) {
                a.beginPath(), a.setStrokeStyle(m.color || r.color), a.setLineWidth(1), a.setFillStyle(m.color || r.color);
                var A = m.x - m.width / 2, S = e.height - m.y - e.area[2];
                a.moveTo(A - 1, m.y), a.lineTo(A + m.width - 2, m.y), a.lineTo(A + m.width - 2, e.height - e.area[2]), 
                a.lineTo(A, e.height - e.area[2]), a.lineTo(A, m.y), a.closePath(), a.stroke(), 
                a.fill();
            }
            break;

          case "stack":
            y = Q(u, g, f, n, l, e, i, x, t, o);
            h.push(y), y = q(y, l, t.length, x, i, e, t);
            for (var T, P = 0; P < y.length; P++) if (null !== (T = y[P]) && P > c && P < d) {
                a.beginPath(), a.setFillStyle(T.color || r.color);
                var A = T.x - T.width / 2 + 1, S = e.height - T.y - e.area[2], w = e.height - T.y0 - e.area[2];
                0 < x && (S -= w), a.moveTo(A, T.y), a.fillRect(A, T.y, T.width - 2, S), a.closePath(), 
                a.fill();
            }
            break;

          case "meter":
            y = K(u, g, f, n, l, e, i, o);
            if (h.push(y), y = $(y, l, t.length, x, i, e, s.meter.border), 0 == x) {
                for (var _, F = 0; F < y.length; F++) if (null !== (_ = y[F]) && F > c && F < d) {
                    a.beginPath(), a.setFillStyle(s.meter.fillColor);
                    var A = _.x - _.width / 2, S = e.height - _.y - e.area[2];
                    a.moveTo(A, _.y), a.fillRect(A, _.y, _.width, S), a.closePath(), a.fill(), 0 < s.meter.border && (a.beginPath(), 
                    a.setStrokeStyle(r.color), a.setLineWidth(s.meter.border * e.pixelRatio), a.moveTo(A + .5 * s.meter.border, _.y + S), 
                    a.lineTo(A + .5 * s.meter.border, _.y + .5 * s.meter.border), a.lineTo(A + _.width - .5 * s.meter.border, _.y + .5 * s.meter.border), 
                    a.lineTo(A + _.width - .5 * s.meter.border, _.y + S), a.stroke());
                }
            } else for (var L, D = 0; D < y.length; D++) if (null !== (L = y[D]) && D > c && D < d) {
                a.beginPath(), a.setFillStyle(L.color || r.color);
                var A = L.x - L.width / 2, S = e.height - L.y - e.area[2];
                a.moveTo(A, L.y), a.fillRect(A, L.y, L.width, S), a.closePath(), a.fill();
            }
        }
    }), !1 !== e.dataLabel && 1 === o && t.forEach(function(r, h) {
        var c = void 0, d = void 0, x = void 0;
        d = (c = [].concat(e.chartData.yAxisData.ranges[r.index])).pop(), x = c.shift();
        var p = r.data;
        switch (s.type) {
          case "group":
            rt(g = Y(g = K(p, d, x, n, l, e, i, o), l, t.length, h, i, e), r, i, a);
            break;

          case "stack":
            rt(g = Q(p, d, x, n, l, e, i, h, t, o), r, i, a);
            break;

          case "meter":
            var g = K(p, d, x, n, l, e, i, o);
            rt(g, r, i, a);
        }
    }), a.restore(), {
        xAxisPoints: n,
        calPoints: h,
        eachSpacing: l
    };
}

function ft(t, e, i, a, o) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 1, l = qt({}, {
        color: {},
        average: {}
    }, i.extra.candle);
    l.color = qt({}, {
        upLine: "#f04864",
        upFill: "#f04864",
        downLine: "#2fc25b",
        downFill: "#2fc25b"
    }, l.color), l.average = qt({}, {
        show: !1,
        name: [],
        day: [],
        color: a.colors
    }, l.average), i.extra.candle = l;
    var s = i.chartData.xAxisData, h = s.xAxisPoints, c = s.eachSpacing, d = [];
    o.save();
    var x = -2, p = h.length + 2, g = 0, f = i.width + c;
    return i._scrollDistance_ && 0 !== i._scrollDistance_ && !0 === i.enableScroll && (o.translate(i._scrollDistance_, 0), 
    x = Math.floor(-i._scrollDistance_ / c) - 2, p = x + i.xAxis.itemCount + 4, g = -i._scrollDistance_ - c + i.area[3], 
    f = g + (i.xAxis.itemCount + 4) * c), l.average.show && e.forEach(function(t) {
        var e = void 0, l = void 0, s = void 0;
        l = (e = [].concat(i.chartData.yAxisData.ranges[t.index])).pop(), s = e.shift();
        for (var d, x = C(K(t.data, l, s, h, c, i, a, r)), p = 0; p < x.length; p++) {
            if (d = x[p], o.beginPath(), o.setStrokeStyle(t.color), o.setLineWidth(1), 1 === d.length) o.moveTo(d[0].x, d[0].y), 
            o.arc(d[0].x, d[0].y, 1, 0, 2 * Math.PI); else {
                o.moveTo(d[0].x, d[0].y);
                for (var u, y = 0, v = 0; v < d.length; v++) if (u = d[v], 0 == y && u.x > g && (o.moveTo(u.x, u.y), 
                y = 1), 0 < v && u.x > g && u.x < f) {
                    var m = n(d, v - 1);
                    o.bezierCurveTo(m.ctrA.x, m.ctrA.y, m.ctrB.x, m.ctrB.y, u.x, u.y);
                }
                o.moveTo(d[0].x, d[0].y);
            }
            o.closePath(), o.stroke();
        }
    }), t.forEach(function(t) {
        var e = void 0, n = void 0, s = void 0;
        n = (e = [].concat(i.chartData.yAxisData.ranges[t.index])).pop(), s = e.shift();
        var g = t.data, f = Z(g, n, s, h, c, i, a, r);
        d.push(f);
        for (var u = C(f), y = 0; y < u[0].length; y++) if (y > x && y < p) {
            var v = u[0][y];
            o.beginPath(), 0 < g[y][1] - g[y][0] ? (o.setStrokeStyle(l.color.upLine), o.setFillStyle(l.color.upFill), 
            o.setLineWidth(1 * i.pixelRatio), o.moveTo(v[3].x, v[3].y), o.lineTo(v[1].x, v[1].y), 
            o.lineTo(v[1].x - c / 4, v[1].y), o.lineTo(v[0].x - c / 4, v[0].y), o.lineTo(v[0].x, v[0].y), 
            o.lineTo(v[2].x, v[2].y), o.lineTo(v[0].x, v[0].y), o.lineTo(v[0].x + c / 4, v[0].y), 
            o.lineTo(v[1].x + c / 4, v[1].y), o.lineTo(v[1].x, v[1].y), o.moveTo(v[3].x, v[3].y)) : (o.setStrokeStyle(l.color.downLine), 
            o.setFillStyle(l.color.downFill), o.setLineWidth(1 * i.pixelRatio), o.moveTo(v[3].x, v[3].y), 
            o.lineTo(v[0].x, v[0].y), o.lineTo(v[0].x - c / 4, v[0].y), o.lineTo(v[1].x - c / 4, v[1].y), 
            o.lineTo(v[1].x, v[1].y), o.lineTo(v[2].x, v[2].y), o.lineTo(v[1].x, v[1].y), o.lineTo(v[1].x + c / 4, v[1].y), 
            o.lineTo(v[0].x + c / 4, v[0].y), o.lineTo(v[0].x, v[0].y), o.moveTo(v[3].x, v[3].y)), 
            o.closePath(), o.fill(), o.stroke();
        }
    }), o.restore(), {
        xAxisPoints: h,
        calPoints: d,
        eachSpacing: c
    };
}

function ut(e, i, a, o) {
    var r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1, l = qt({}, {
        type: "straight",
        opacity: .2,
        addLine: !1,
        width: 2,
        gradient: !1
    }, i.extra.area), s = i.chartData.xAxisData, h = s.xAxisPoints, c = s.eachSpacing, d = i.height - i.area[2], x = [];
    o.save();
    var p = 0, g = i.width + c;
    return i._scrollDistance_ && 0 !== i._scrollDistance_ && !0 === i.enableScroll && (o.translate(i._scrollDistance_, 0), 
    p = -i._scrollDistance_ - c + i.area[3], g = p + (i.xAxis.itemCount + 4) * c), e.forEach(function(e) {
        var s = void 0, f = void 0, u = void 0;
        f = (s = [].concat(i.chartData.yAxisData.ranges[e.index])).pop(), u = s.shift();
        var y = K(e.data, f, u, h, c, i, a, r);
        x.push(y);
        for (var v, m = C(y), b = 0; b < m.length; b++) {
            if (v = m[b], o.beginPath(), o.setStrokeStyle(t(e.color, l.opacity)), l.gradient) {
                var A = o.createLinearGradient(0, i.area[0], 0, i.height - i.area[2]);
                A.addColorStop("0", t(e.color, l.opacity)), A.addColorStop("1.0", t("#FFFFFF", .1)), 
                o.setFillStyle(A);
            } else o.setFillStyle(t(e.color, l.opacity));
            if (o.setLineWidth(l.width * i.pixelRatio), 1 < v.length) {
                var S = v[0], T = v[v.length - 1];
                o.moveTo(S.x, S.y);
                var P = 0;
                if ("curve" === l.type) {
                    for (var w, _ = 0; _ < v.length; _++) if (w = v[_], 0 == P && w.x > p && (o.moveTo(w.x, w.y), 
                    P = 1), 0 < _ && w.x > p && w.x < g) {
                        var F = n(v, _ - 1);
                        o.bezierCurveTo(F.ctrA.x, F.ctrA.y, F.ctrB.x, F.ctrB.y, w.x, w.y);
                    }
                } else for (var L, D = 0; D < v.length; D++) L = v[D], 0 == P && L.x > p && (o.moveTo(L.x, L.y), 
                P = 1), 0 < D && L.x > p && L.x < g && o.lineTo(L.x, L.y);
                o.lineTo(T.x, d), o.lineTo(S.x, d), o.lineTo(S.x, S.y);
            } else {
                var R = v[0];
                o.moveTo(R.x - c / 2, R.y), o.lineTo(R.x + c / 2, R.y), o.lineTo(R.x + c / 2, d), 
                o.lineTo(R.x - c / 2, d), o.moveTo(R.x - c / 2, R.y);
            }
            if (o.closePath(), o.fill(), l.addLine) {
                if ("dash" == e.lineType) {
                    var k = e.dashLength ? e.dashLength : 8;
                    k *= i.pixelRatio, o.setLineDash([ k, k ]);
                }
                if (o.beginPath(), o.setStrokeStyle(e.color), o.setLineWidth(l.width * i.pixelRatio), 
                1 === v.length) o.moveTo(v[0].x, v[0].y), o.arc(v[0].x, v[0].y, 1, 0, 2 * Math.PI); else {
                    o.moveTo(v[0].x, v[0].y);
                    var M = 0;
                    if ("curve" === l.type) {
                        for (var z, W = 0; W < v.length; W++) if (z = v[W], 0 == M && z.x > p && (o.moveTo(z.x, z.y), 
                        M = 1), 0 < W && z.x > p && z.x < g) {
                            var O = n(v, W - 1);
                            o.bezierCurveTo(O.ctrA.x, O.ctrA.y, O.ctrB.x, O.ctrB.y, z.x, z.y);
                        }
                    } else for (var I, E = 0; E < v.length; E++) I = v[E], 0 == M && I.x > p && (o.moveTo(I.x, I.y), 
                    M = 1), 0 < E && I.x > p && I.x < g && o.lineTo(I.x, I.y);
                    o.moveTo(v[0].x, v[0].y);
                }
                o.stroke(), o.setLineDash([]);
            }
        }
        !1 !== i.dataPointShape && at(y, e.color, e.pointShape, o, i);
    }), !1 !== i.dataLabel && 1 === r && e.forEach(function(t) {
        var e = void 0, n = void 0, l = void 0;
        n = (e = [].concat(i.chartData.yAxisData.ranges[t.index])).pop(), l = e.shift(), 
        rt(K(t.data, n, l, h, c, i, a, r), t, a, o);
    }), o.restore(), {
        xAxisPoints: h,
        calPoints: x,
        eachSpacing: c
    };
}

function yt(t, e, i, a) {
    var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1, r = qt({}, {
        type: "straight",
        width: 2
    }, e.extra.line);
    r.width *= e.pixelRatio;
    var l = e.chartData.xAxisData, s = l.xAxisPoints, h = l.eachSpacing, c = [];
    a.save();
    var d = 0, x = e.width + h;
    return e._scrollDistance_ && 0 !== e._scrollDistance_ && !0 === e.enableScroll && (a.translate(e._scrollDistance_, 0), 
    d = -e._scrollDistance_ - h + e.area[3], x = d + (e.xAxis.itemCount + 4) * h), t.forEach(function(t) {
        var l = void 0, p = void 0, g = void 0;
        p = (l = [].concat(e.chartData.yAxisData.ranges[t.index])).pop(), g = l.shift();
        var f = K(t.data, p, g, s, h, e, i, o);
        c.push(f);
        var u = C(f);
        if ("dash" == t.lineType) {
            var y = t.dashLength ? t.dashLength : 8;
            y *= e.pixelRatio, a.setLineDash([ y, y ]);
        }
        a.beginPath(), a.setStrokeStyle(t.color), a.setLineWidth(r.width), u.forEach(function(t) {
            if (1 === t.length) a.moveTo(t[0].x, t[0].y), a.arc(t[0].x, t[0].y, 1, 0, 2 * Math.PI); else {
                a.moveTo(t[0].x, t[0].y);
                var e = 0;
                if ("curve" === r.type) {
                    for (var i, o = 0; o < t.length; o++) if (i = t[o], 0 == e && i.x > d && (a.moveTo(i.x, i.y), 
                    e = 1), 0 < o && i.x > d && i.x < x) {
                        var l = n(t, o - 1);
                        a.bezierCurveTo(l.ctrA.x, l.ctrA.y, l.ctrB.x, l.ctrB.y, i.x, i.y);
                    }
                } else for (var s, h = 0; h < t.length; h++) s = t[h], 0 == e && s.x > d && (a.moveTo(s.x, s.y), 
                e = 1), 0 < h && s.x > d && s.x < x && a.lineTo(s.x, s.y);
                a.moveTo(t[0].x, t[0].y);
            }
        }), a.stroke(), a.setLineDash([]), !1 !== e.dataPointShape && at(f, t.color, t.pointShape, a, e);
    }), !1 !== e.dataLabel && 1 === o && t.forEach(function(t) {
        var r = void 0, n = void 0, l = void 0;
        n = (r = [].concat(e.chartData.yAxisData.ranges[t.index])).pop(), l = r.shift(), 
        rt(K(t.data, n, l, s, h, e, i, o), t, i, a);
    }), a.restore(), {
        xAxisPoints: s,
        calPoints: c,
        eachSpacing: h
    };
}

function vt(e, i, a, o) {
    var r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1, l = i.chartData.xAxisData, s = l.xAxisPoints, h = l.eachSpacing, c = i.height - i.area[2], d = [], x = 0, p = 0;
    e.forEach(function(t) {
        "column" == t.type && (p += 1);
    }), o.save();
    var g = -2, f = s.length + 2, u = 0, y = i.width + h;
    if (i._scrollDistance_ && 0 !== i._scrollDistance_ && !0 === i.enableScroll && (o.translate(i._scrollDistance_, 0), 
    g = Math.floor(-i._scrollDistance_ / h) - 2, f = g + i.xAxis.itemCount + 4, u = -i._scrollDistance_ - h + i.area[3], 
    y = u + (i.xAxis.itemCount + 4) * h), e.forEach(function(e) {
        var l = void 0, v = void 0, m = void 0;
        v = (l = [].concat(i.chartData.yAxisData.ranges[e.index])).pop(), m = l.shift();
        var b = K(e.data, v, m, s, h, i, a, r);
        if (d.push(b), "column" == e.type) {
            b = Y(b, h, p, x, a, i);
            for (var A, S = 0; S < b.length; S++) if (null !== (A = b[S]) && S > g && S < f) {
                o.beginPath(), o.setStrokeStyle(A.color || e.color), o.setLineWidth(1), o.setFillStyle(A.color || e.color);
                var T = A.x - A.width / 2;
                i.height, A.y, i.area[2];
                o.moveTo(T, A.y), o.moveTo(T - 1, A.y), o.lineTo(T + A.width - 2, A.y), o.lineTo(T + A.width - 2, i.height - i.area[2]), 
                o.lineTo(T, i.height - i.area[2]), o.lineTo(T, A.y), o.closePath(), o.stroke(), 
                o.fill(), o.closePath(), o.fill();
            }
            x += 1;
        }
        if ("area" == e.type) for (var P, w = C(b), _ = 0; _ < w.length; _++) {
            if (P = w[_], o.beginPath(), o.setStrokeStyle(e.color), o.setFillStyle(t(e.color, .2)), 
            o.setLineWidth(2 * i.pixelRatio), 1 < P.length) {
                var F = P[0], L = P[P.length - 1];
                o.moveTo(F.x, F.y);
                var D = 0;
                if ("curve" === e.style) {
                    for (var R, k = 0; k < P.length; k++) if (R = P[k], 0 == D && R.x > u && (o.moveTo(R.x, R.y), 
                    D = 1), 0 < k && R.x > u && R.x < y) {
                        var M = n(P, k - 1);
                        o.bezierCurveTo(M.ctrA.x, M.ctrA.y, M.ctrB.x, M.ctrB.y, R.x, R.y);
                    }
                } else for (var z, W = 0; W < P.length; W++) z = P[W], 0 == D && z.x > u && (o.moveTo(z.x, z.y), 
                D = 1), 0 < W && z.x > u && z.x < y && o.lineTo(z.x, z.y);
                o.lineTo(L.x, c), o.lineTo(F.x, c), o.lineTo(F.x, F.y);
            } else {
                var O = P[0];
                o.moveTo(O.x - h / 2, O.y), o.lineTo(O.x + h / 2, O.y), o.lineTo(O.x + h / 2, c), 
                o.lineTo(O.x - h / 2, c), o.moveTo(O.x - h / 2, O.y);
            }
            o.closePath(), o.fill();
        }
        "line" == e.type && C(b).forEach(function(t) {
            if ("dash" == e.lineType) {
                var a = e.dashLength ? e.dashLength : 8;
                a *= i.pixelRatio, o.setLineDash([ a, a ]);
            }
            if (o.beginPath(), o.setStrokeStyle(e.color), o.setLineWidth(2 * i.pixelRatio), 
            1 === t.length) o.moveTo(t[0].x, t[0].y), o.arc(t[0].x, t[0].y, 1, 0, 2 * Math.PI); else {
                o.moveTo(t[0].x, t[0].y);
                var r = 0;
                if ("curve" == e.style) {
                    for (var l, s = 0; s < t.length; s++) if (l = t[s], 0 == r && l.x > u && (o.moveTo(l.x, l.y), 
                    r = 1), 0 < s && l.x > u && l.x < y) {
                        var h = n(t, s - 1);
                        o.bezierCurveTo(h.ctrA.x, h.ctrA.y, h.ctrB.x, h.ctrB.y, l.x, l.y);
                    }
                } else for (var c, d = 0; d < t.length; d++) c = t[d], 0 == r && c.x > u && (o.moveTo(c.x, c.y), 
                r = 1), 0 < d && c.x > u && c.x < y && o.lineTo(c.x, c.y);
                o.moveTo(t[0].x, t[0].y);
            }
            o.stroke(), o.setLineDash([]);
        }), "point" == e.type && (e.addPoint = !0), 1 == e.addPoint && "column" !== e.type && at(b, e.color, e.pointShape, o, i);
    }), !1 !== i.dataLabel && 1 === r) {
        x = 0;
        e.forEach(function(t) {
            var e = void 0, n = void 0, l = void 0;
            n = (e = [].concat(i.chartData.yAxisData.ranges[t.index])).pop(), l = e.shift();
            var c = K(t.data, n, l, s, h, i, a, r);
            "column" === t.type ? (c = Y(c, h, p, x, a, i), rt(c, t, a, o), x += 1) : rt(c, t, a, o);
        });
    }
    return o.restore(), {
        xAxisPoints: s,
        calPoints: d,
        eachSpacing: h
    };
}

function mt(t, e, i, a, o, r) {
    (t.extra.tooltip || {}).horizentalLine && t.tooltip && 1 === a && ("line" == t.type || "area" == t.type || "column" == t.type || "candle" == t.type || "mix" == t.type) && dt(t, e, i, o, r), 
    i.save(), t._scrollDistance_ && 0 !== t._scrollDistance_ && !0 === t.enableScroll && i.translate(t._scrollDistance_, 0), 
    t.tooltip && t.tooltip.textList && t.tooltip.textList.length && 1 === a && pt(t.tooltip.textList, t.tooltip.offset, t, e, i, o, r), 
    i.restore();
}

function bt(t, e, i, a) {
    var o = Math.ceil, n = e.chartData.xAxisData, l = n.xAxisPoints, s = n.startX, h = n.endX, c = n.eachSpacing, x = "center";
    ("line" == e.type || "area" == e.type) && (x = e.xAxis.boundaryGap);
    var p = e.height - e.area[2], g = e.area[0];
    if (e.enableScroll && e.xAxis.scrollShow) {
        var f = e.height - e.area[2] + i.xAxisHeight, u = h - s, y = c * (l.length - 1), v = 0;
        e._scrollDistance_ && (v = -e._scrollDistance_ * u / y), a.beginPath(), a.setLineCap("round"), 
        a.setLineWidth(6 * e.pixelRatio), a.setStrokeStyle(e.xAxis.scrollBackgroundColor || "#EFEBEF"), 
        a.moveTo(s, f), a.lineTo(h, f), a.stroke(), a.closePath(), a.beginPath(), a.setLineCap("round"), 
        a.setLineWidth(6 * e.pixelRatio), a.setStrokeStyle(e.xAxis.scrollColor || "#A6A6A6"), 
        a.moveTo(s + v, f), a.lineTo(s + v + u * u / y, f), a.stroke(), a.closePath(), a.setLineCap("butt");
    }
    if (a.save(), e._scrollDistance_ && 0 !== e._scrollDistance_ && a.translate(e._scrollDistance_, 0), 
    !0 === e.xAxis.calibration && (a.setStrokeStyle(e.xAxis.gridColor || "#cccccc"), 
    a.setLineCap("butt"), a.setLineWidth(1 * e.pixelRatio), l.forEach(function(t, i) {
        0 < i && (a.beginPath(), a.moveTo(t - c / 2, p), a.lineTo(t - c / 2, p + 3 * e.pixelRatio), 
        a.closePath(), a.stroke());
    })), !0 !== e.xAxis.disableGrid && (a.setStrokeStyle(e.xAxis.gridColor || "#cccccc"), 
    a.setLineCap("butt"), a.setLineWidth(1 * e.pixelRatio), "dash" == e.xAxis.gridType && a.setLineDash([ e.xAxis.dashLength, e.xAxis.dashLength ]), 
    e.xAxis.gridEval = e.xAxis.gridEval || 1, l.forEach(function(t, i) {
        0 == i % e.xAxis.gridEval && (a.beginPath(), a.moveTo(t, p), a.lineTo(t, g), a.stroke());
    }), a.setLineDash([])), !0 !== e.xAxis.disabled) {
        var m = t.length;
        e.xAxis.labelCount && (m = e.xAxis.itemCount ? o(t.length / e.xAxis.itemCount * e.xAxis.labelCount) : e.xAxis.labelCount, 
        m -= 1);
        for (var b = o(t.length / m), A = [], S = t.length, T = 0; T < S; T++) 0 == T % b ? A.push(t[T]) : A.push("");
        A[S - 1] = t[S - 1];
        var P = e.xAxis.fontSize || i.fontSize;
        0 === i._xAxisTextAngle_ ? A.forEach(function(t, o) {
            var r = -d(t + "", P) / 2;
            "center" == x && (r += c / 2);
            var n = 0;
            e.xAxis.scrollShow && (n = 6 * e.pixelRatio), a.beginPath(), a.setFontSize(P), a.setFillStyle(e.xAxis.fontColor || "#666666"), 
            a.fillText(t + "", l[o] + r, p + P + (i.xAxisHeight - n - P) / 2), a.closePath(), 
            a.stroke();
        }) : A.forEach(function(t, o) {
            a.save(), a.beginPath(), a.setFontSize(P), a.setFillStyle(e.xAxis.fontColor || "#666666");
            var n = -d(t + "", P);
            "center" == x && (n += c / 2);
            var s = r(l[o] + c / 2, p + P / 2 + 5, e.height), h = s.transX, g = s.transY;
            a.rotate(-1 * i._xAxisTextAngle_), a.translate(h, g), a.fillText(t + "", l[o] + n, p + P + 5), 
            a.closePath(), a.stroke(), a.restore();
        });
    }
    a.restore(), e.xAxis.axisLine && (a.beginPath(), a.setStrokeStyle(e.xAxis.axisLineColor), 
    a.setLineWidth(1 * e.pixelRatio), a.moveTo(s, e.height - e.area[2]), a.lineTo(h, e.height - e.area[2]), 
    a.stroke());
}

function At(t, e, i, a) {
    if (!0 !== e.yAxis.disableGrid) {
        for (var o = (e.height - e.area[0] - e.area[2]) / e.yAxis.splitNumber, r = e.area[3], n = e.chartData.xAxisData.xAxisPoints, l = e.chartData.xAxisData.eachSpacing * (n.length - 1), s = [], h = 0; h < e.yAxis.splitNumber + 1; h++) s.push(e.height - e.area[2] - o * h);
        a.save(), e._scrollDistance_ && 0 !== e._scrollDistance_ && a.translate(e._scrollDistance_, 0), 
        "dash" == e.yAxis.gridType && a.setLineDash([ e.yAxis.dashLength, e.yAxis.dashLength ]), 
        a.setStrokeStyle(e.yAxis.gridColor), a.setLineWidth(1 * e.pixelRatio), s.forEach(function(t) {
            a.beginPath(), a.moveTo(r, t), a.lineTo(r + l, t), a.stroke();
        }), a.setLineDash([]), a.restore();
    }
}

function St(t, e, i, a) {
    if (!0 !== e.yAxis.disabled) {
        var o = (e.height - e.area[0] - e.area[2]) / e.yAxis.splitNumber, r = e.area[3], n = e.width - e.area[1], l = e.height - e.area[2], s = l + i.xAxisHeight;
        e.xAxis.scrollShow && (s -= 3 * e.pixelRatio), e.xAxis.rotateLabel && (s = e.height - e.area[2] + 3), 
        a.beginPath(), a.setFillStyle(e.background || "#ffffff"), 0 > e._scrollDistance_ && a.fillRect(0, 0, r, s), 
        1 == e.enableScroll && a.fillRect(n, 0, e.width, s), a.closePath(), a.stroke();
        for (var h = [], c = 0; c <= e.yAxis.splitNumber; c++) h.push(e.area[0] + o * c);
        for (var x, p = e.area[3], g = e.width - e.area[1], f = 0; f < e.yAxis.data.length; f++) !function(t, o) {
            if (!0 !== (t = e.yAxis.data[o]).disabled) {
                var r = e.chartData.yAxisData.rangesFormat[o], n = t.fontSize || i.fontSize, s = e.chartData.yAxisData.yAxisWidth[o];
                if (r.forEach(function(i, o) {
                    var r = h[o] ? h[o] : l;
                    a.beginPath(), a.setFontSize(n), a.setLineWidth(1 * e.pixelRatio), a.setStrokeStyle(t.axisLineColor || "#cccccc"), 
                    a.setFillStyle(t.fontColor || "#666666"), "left" == s.position ? (a.fillText(i + "", p - s.width, r + n / 2), 
                    1 == t.calibration && (a.moveTo(p, r), a.lineTo(p - 3 * e.pixelRatio, r))) : (a.fillText(i + "", g + 4 * e.pixelRatio, r + n / 2), 
                    1 == t.calibration && (a.moveTo(g, r), a.lineTo(g + 3 * e.pixelRatio, r))), a.closePath(), 
                    a.stroke();
                }), !1 !== t.axisLine && (a.beginPath(), a.setStrokeStyle(t.axisLineColor || "#cccccc"), 
                a.setLineWidth(1 * e.pixelRatio), "left" == s.position ? (a.moveTo(p, e.height - e.area[2]), 
                a.lineTo(p, e.area[0])) : (a.moveTo(g, e.height - e.area[2]), a.lineTo(g, e.area[0])), 
                a.stroke()), e.yAxis.showTitle) {
                    var c = t.titleFontSize || i.fontSize, f = t.title;
                    a.beginPath(), a.setFontSize(c), a.setFillStyle(t.titleFontColor || "#666666"), 
                    "left" == s.position ? a.fillText(f, p - d(f, c) / 2, e.area[0] - 10 * e.pixelRatio) : a.fillText(f, g - d(f, c) / 2, e.area[0] - 10 * e.pixelRatio), 
                    a.closePath(), a.stroke();
                }
                "left" == s.position ? p -= s.width + e.yAxis.padding : g += s.width + e.yAxis.padding;
            }
            x = t;
        }(x, f);
    }
}

function Tt(t, e, i, a, o) {
    if (!1 !== e.legend.show) {
        var r = o.legendData, n = r.points, l = r.area, s = e.legend.padding, h = e.legend.fontSize, c = 15 * e.pixelRatio, x = 5 * e.pixelRatio, p = e.legend.itemGap, g = Math.max(e.legend.lineHeight * e.pixelRatio, h);
        a.beginPath(), a.setLineWidth(e.legend.borderWidth), a.setStrokeStyle(e.legend.borderColor), 
        a.setFillStyle(e.legend.backgroundColor), a.moveTo(l.start.x, l.start.y), a.rect(l.start.x, l.start.y, l.width, l.height), 
        a.closePath(), a.fill(), a.stroke(), n.forEach(function(t, o) {
            var n = 0, f = 0;
            n = r.widthArr[o], f = r.heightArr[o];
            var u = 0, y = 0;
            "top" == e.legend.position || "bottom" == e.legend.position ? (u = l.start.x + (l.width - n) / 2, 
            y = l.start.y + s + o * g) : (n = 0 == o ? 0 : r.widthArr[o - 1], u = l.start.x + s + n, 
            y = l.start.y + s + (l.height - f) / 2), a.setFontSize(i.fontSize);
            for (var v, m = 0; m < t.length; m++) {
                switch (v = t[m], v.area = [ 0, 0, 0, 0 ], v.area[0] = u, v.area[1] = y, v.area[3] = y + g, 
                a.beginPath(), a.setLineWidth(1 * e.pixelRatio), a.setStrokeStyle(v.show ? v.color : e.legend.hiddenColor), 
                a.setFillStyle(v.show ? v.color : e.legend.hiddenColor), v.legendShape) {
                  case "line":
                    a.moveTo(u, y + .5 * g - 2 * e.pixelRatio), a.fillRect(u, y + .5 * g - 2 * e.pixelRatio, 15 * e.pixelRatio, 4 * e.pixelRatio);
                    break;

                  case "triangle":
                    a.moveTo(u + 7.5 * e.pixelRatio, y + .5 * g - 5 * e.pixelRatio), a.lineTo(u + 2.5 * e.pixelRatio, y + .5 * g + 5 * e.pixelRatio), 
                    a.lineTo(u + 12.5 * e.pixelRatio, y + .5 * g + 5 * e.pixelRatio), a.lineTo(u + 7.5 * e.pixelRatio, y + .5 * g - 5 * e.pixelRatio);
                    break;

                  case "diamond":
                    a.moveTo(u + 7.5 * e.pixelRatio, y + .5 * g - 5 * e.pixelRatio), a.lineTo(u + 2.5 * e.pixelRatio, y + .5 * g), 
                    a.lineTo(u + 7.5 * e.pixelRatio, y + .5 * g + 5 * e.pixelRatio), a.lineTo(u + 12.5 * e.pixelRatio, y + .5 * g), 
                    a.lineTo(u + 7.5 * e.pixelRatio, y + .5 * g - 5 * e.pixelRatio);
                    break;

                  case "circle":
                    a.moveTo(u + 7.5 * e.pixelRatio, y + .5 * g), a.arc(u + 7.5 * e.pixelRatio, y + .5 * g, 5 * e.pixelRatio, 0, 2 * Math.PI);
                    break;

                  case "rect":
                    a.moveTo(u, y + .5 * g - 5 * e.pixelRatio), a.fillRect(u, y + .5 * g - 5 * e.pixelRatio, 15 * e.pixelRatio, 10 * e.pixelRatio);
                    break;

                  default:
                    a.moveTo(u, y + .5 * g - 5 * e.pixelRatio), a.fillRect(u, y + .5 * g - 5 * e.pixelRatio, 15 * e.pixelRatio, 10 * e.pixelRatio);
                }
                a.closePath(), a.fill(), a.stroke(), u += c + x, a.beginPath(), a.setFontSize(h), 
                a.setFillStyle(v.show ? e.legend.fontColor : e.legend.hiddenColor), a.fillText(v.name, u, y + (.5 * g + .5 * h - 2)), 
                a.closePath(), a.stroke(), "top" == e.legend.position || "bottom" == e.legend.position ? (u += d(v.name, h) + p, 
                v.area[2] = u) : (v.area[2] = u + d(v.name, h) + p, u -= c + x, y += g);
            }
        });
    }
}

function Pt(e, i, a, o) {
    var r = Math.PI, n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1, l = qt({}, {
        activeOpacity: .5,
        activeRadius: 10 * i.pixelRatio,
        offsetAngle: 0,
        labelWidth: 15 * i.pixelRatio,
        ringWidth: 0,
        border: !1,
        borderWidth: 2,
        borderColor: "#FFFFFF"
    }, i.extra.pie), s = {
        x: i.area[3] + (i.width - i.area[1] - i.area[3]) / 2,
        y: i.area[0] + (i.height - i.area[0] - i.area[2]) / 2
    };
    0 == a.pieChartLinePadding && (a.pieChartLinePadding = l.activeRadius);
    var h = Math.min((i.width - i.area[1] - i.area[3]) / 2 - a.pieChartLinePadding - a.pieChartTextPadding - a._pieTextMaxLength_, (i.height - i.area[0] - i.area[2]) / 2 - a.pieChartLinePadding - a.pieChartTextPadding);
    e = E(e, h, n);
    var c = l.activeRadius;
    if ((e = e.map(function(t) {
        return t._start_ += l.offsetAngle * r / 180, t;
    })).forEach(function(e, a) {
        i.tooltip && i.tooltip.index == a && (o.beginPath(), o.setFillStyle(t(e.color, i.extra.pie.activeOpacity || .5)), 
        o.moveTo(s.x, s.y), o.arc(s.x, s.y, e._radius_ + c, e._start_, e._start_ + 2 * e._proportion_ * r), 
        o.closePath(), o.fill()), o.beginPath(), o.setLineWidth(l.borderWidth * i.pixelRatio), 
        o.lineJoin = "round", o.setStrokeStyle(l.borderColor), o.setFillStyle(e.color), 
        o.moveTo(s.x, s.y), o.arc(s.x, s.y, e._radius_, e._start_, e._start_ + 2 * e._proportion_ * r), 
        o.closePath(), o.fill(), 1 == l.border && o.stroke();
    }), "ring" === i.type) {
        var d = .6 * h;
        "number" == typeof i.extra.pie.ringWidth && 0 < i.extra.pie.ringWidth && (d = Math.max(0, h - i.extra.pie.ringWidth)), 
        o.beginPath(), o.setFillStyle(i.background || "#ffffff"), o.moveTo(s.x, s.y), o.arc(s.x, s.y, d, 0, 2 * r), 
        o.closePath(), o.fill();
    }
    if (!1 !== i.dataLabel && 1 === n) {
        for (var x = !1, p = 0, g = e.length; p < g; p++) if (0 < e[p].data) {
            x = !0;
            break;
        }
        x && st(e, i, a, o, h, s);
    }
    return 1 === n && "ring" === i.type && ot(i, a, o, s), {
        center: s,
        radius: h,
        series: e
    };
}

function wt(e, i, a, o) {
    var r = Math.PI, n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1, l = qt({}, {
        type: "area",
        activeOpacity: .5,
        activeRadius: 10 * i.pixelRatio,
        offsetAngle: 0,
        labelWidth: 15 * i.pixelRatio,
        border: !1,
        borderWidth: 2,
        borderColor: "#FFFFFF"
    }, i.extra.rose);
    0 == a.pieChartLinePadding && (a.pieChartLinePadding = l.activeRadius);
    var s = {
        x: i.area[3] + (i.width - i.area[1] - i.area[3]) / 2,
        y: i.area[0] + (i.height - i.area[0] - i.area[2]) / 2
    }, h = Math.min((i.width - i.area[1] - i.area[3]) / 2 - a.pieChartLinePadding - a.pieChartTextPadding - a._pieTextMaxLength_, (i.height - i.area[0] - i.area[2]) / 2 - a.pieChartLinePadding - a.pieChartTextPadding), c = l.minRadius || .5 * h;
    e = H(e, l.type, c, h, n);
    var d = l.activeRadius;
    if ((e = e.map(function(t) {
        return t._start_ += (l.offsetAngle || 0) * r / 180, t;
    })).forEach(function(e, a) {
        i.tooltip && i.tooltip.index == a && (o.beginPath(), o.setFillStyle(t(e.color, l.activeOpacity || .5)), 
        o.moveTo(s.x, s.y), o.arc(s.x, s.y, d + e._radius_, e._start_, e._start_ + 2 * e._rose_proportion_ * r), 
        o.closePath(), o.fill()), o.beginPath(), o.setLineWidth(l.borderWidth * i.pixelRatio), 
        o.lineJoin = "round", o.setStrokeStyle(l.borderColor), o.setFillStyle(e.color), 
        o.moveTo(s.x, s.y), o.arc(s.x, s.y, e._radius_, e._start_, e._start_ + 2 * e._rose_proportion_ * r), 
        o.closePath(), o.fill(), 1 == l.border && o.stroke();
    }), !1 !== i.dataLabel && 1 === n) {
        for (var x = !1, p = 0, g = e.length; p < g; p++) if (0 < e[p].data) {
            x = !0;
            break;
        }
        x && st(e, i, a, o, h, s);
    }
    return {
        center: s,
        radius: h,
        series: e
    };
}

function _t(t, e, i, a) {
    var o = Math.PI, r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1, n = qt({}, {
        startAngle: .75,
        endAngle: .25,
        type: "default",
        width: 12 * e.pixelRatio,
        gap: 2 * e.pixelRatio
    }, e.extra.arcbar);
    t = N(t, n, r);
    var l, s = n.center ? n.center : {
        x: e.width / 2,
        y: e.height / 2
    };
    n.radius ? l = n.radius : (l = Math.min(s.x, s.y), l -= 5 * e.pixelRatio, l -= n.width / 2);
    for (var h, c = 0; c < t.length; c++) h = t[c], a.setLineWidth(n.width), a.setStrokeStyle(n.backgroundColor || "#E9E9E9"), 
    a.setLineCap("round"), a.beginPath(), "default" == n.type ? a.arc(s.x, s.y, l - (n.width + n.gap) * c, n.startAngle * o, n.endAngle * o, !1) : a.arc(s.x, s.y, l - (n.width + n.gap) * c, 0, 2 * o, !1), 
    a.stroke(), a.setLineWidth(n.width), a.setStrokeStyle(h.color), a.setLineCap("round"), 
    a.beginPath(), a.arc(s.x, s.y, l - (n.width + n.gap) * c, n.startAngle * o, h._proportion_ * o, !1), 
    a.stroke();
    return ot(e, i, a, s), {
        center: s,
        radius: l,
        series: t
    };
}

function Ft(e, i, a, o, r) {
    var n = Math.PI, l = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 1, s = qt({}, {
        type: "default",
        startAngle: .75,
        endAngle: .25,
        width: 15,
        splitLine: {
            fixRadius: 0,
            splitNumber: 10,
            width: 15,
            color: "#FFFFFF",
            childNumber: 5,
            childWidth: 5
        },
        pointer: {
            width: 15,
            color: "auto"
        }
    }, a.extra.gauge);
    null == s.oldAngle && (s.oldAngle = s.startAngle), null == s.oldData && (s.oldData = 0), 
    e = X(e, s.startAngle, s.endAngle);
    var h = {
        x: a.width / 2,
        y: a.height / 2
    }, c = Math.min(h.x, h.y);
    c -= 5 * a.pixelRatio;
    var d = (c -= s.width / 2) - s.width, x = 0;
    if ("progress" == s.type) {
        var p = c - 3 * s.width;
        r.beginPath();
        var g = r.createLinearGradient(h.x, h.y - p, h.x, h.y + p);
        g.addColorStop("0", t(i[0].color, .3)), g.addColorStop("1.0", t("#FFFFFF", .1)), 
        r.setFillStyle(g), r.arc(h.x, h.y, p, 0, 2 * n, !1), r.fill(), r.setLineWidth(s.width), 
        r.setStrokeStyle(t(i[0].color, .3)), r.setLineCap("round"), r.beginPath(), r.arc(h.x, h.y, d, s.startAngle * n, s.endAngle * n, !1), 
        r.stroke();
        x = s.startAngle - s.endAngle + 1, s.splitLine.splitNumber;
        var f = x / s.splitLine.splitNumber / s.splitLine.childNumber, u = -c - .5 * s.width - s.splitLine.fixRadius, y = -c - s.width - s.splitLine.fixRadius + s.splitLine.width;
        r.save(), r.translate(h.x, h.y), r.rotate((s.startAngle - 1) * n);
        for (var v = s.splitLine.splitNumber * s.splitLine.childNumber + 1, m = i[0].data * l, b = 0; b < v; b++) r.beginPath(), 
        m > b / v ? r.setStrokeStyle(t(i[0].color, 1)) : r.setStrokeStyle(t(i[0].color, .3)), 
        r.setLineWidth(3 * a.pixelRatio), r.moveTo(u, 0), r.lineTo(y, 0), r.stroke(), r.rotate(f * n);
        r.restore(), i = N(i, s, l), r.setLineWidth(s.width), r.setStrokeStyle(i[0].color), 
        r.setLineCap("round"), r.beginPath(), r.arc(h.x, h.y, d, s.startAngle * n, i[0]._proportion_ * n, !1), 
        r.stroke();
        var A = c - 2.5 * s.width;
        r.save(), r.translate(h.x, h.y), r.rotate((i[0]._proportion_ - 1) * n), r.beginPath(), 
        r.setLineWidth(s.width / 3);
        var S = r.createLinearGradient(0, .6 * -A, 0, .6 * A);
        S.addColorStop("0", t("#FFFFFF", 0)), S.addColorStop("0.5", t(i[0].color, 1)), S.addColorStop("1.0", t("#FFFFFF", 0)), 
        r.setStrokeStyle(S), r.arc(0, 0, A, .85 * n, 1.15 * n, !1), r.stroke(), r.beginPath(), 
        r.setLineWidth(1), r.setStrokeStyle(i[0].color), r.setFillStyle(i[0].color), r.moveTo(-A - s.width / 3 / 2, -4), 
        r.lineTo(-A - s.width / 3 / 2 - 4, 0), r.lineTo(-A - s.width / 3 / 2, 4), r.lineTo(-A - s.width / 3 / 2, -4), 
        r.stroke(), r.fill(), r.restore();
    } else {
        r.setLineWidth(s.width), r.setLineCap("butt");
        for (var T, P = 0; P < e.length; P++) T = e[P], r.beginPath(), r.setStrokeStyle(T.color), 
        r.arc(h.x, h.y, c, T._startAngle_ * n, T._endAngle_ * n, !1), r.stroke();
        r.save();
        var w = (x = s.startAngle - s.endAngle + 1) / s.splitLine.splitNumber, _ = x / s.splitLine.splitNumber / s.splitLine.childNumber, F = -c - .5 * s.width - s.splitLine.fixRadius, L = -c - .5 * s.width - s.splitLine.fixRadius + s.splitLine.width, D = -c - .5 * s.width - s.splitLine.fixRadius + s.splitLine.childWidth;
        r.translate(h.x, h.y), r.rotate((s.startAngle - 1) * n);
        for (var R = 0; R < s.splitLine.splitNumber + 1; R++) r.beginPath(), r.setStrokeStyle(s.splitLine.color), 
        r.setLineWidth(2 * a.pixelRatio), r.moveTo(F, 0), r.lineTo(L, 0), r.stroke(), r.rotate(w * n);
        r.restore(), r.save(), r.translate(h.x, h.y), r.rotate((s.startAngle - 1) * n);
        for (var k = 0; k < s.splitLine.splitNumber * s.splitLine.childNumber + 1; k++) r.beginPath(), 
        r.setStrokeStyle(s.splitLine.color), r.setLineWidth(1 * a.pixelRatio), r.moveTo(F, 0), 
        r.lineTo(D, 0), r.stroke(), r.rotate(_ * n);
        r.restore(), i = G(i, e, s, l);
        for (var C, M = 0; M < i.length; M++) C = i[M], r.save(), r.translate(h.x, h.y), 
        r.rotate((C._proportion_ - 1) * n), r.beginPath(), r.setFillStyle(C.color), r.moveTo(s.pointer.width, 0), 
        r.lineTo(0, -s.pointer.width / 2), r.lineTo(-d, 0), r.lineTo(0, s.pointer.width / 2), 
        r.lineTo(s.pointer.width, 0), r.closePath(), r.fill(), r.beginPath(), r.setFillStyle("#FFFFFF"), 
        r.arc(0, 0, s.pointer.width / 6, 0, 2 * n, !1), r.fill(), r.restore();
        !1 !== a.dataLabel && nt(s, c, h, a, o, r);
    }
    return ot(a, o, r, h), 1 === l && "gauge" === a.type && (a.extra.gauge.oldAngle = i[0]._proportion_, 
    a.extra.gauge.oldData = i[0].data), {
        center: h,
        radius: c,
        innerRadius: d,
        categories: e,
        totalAngle: x
    };
}

function Lt(e, i, a, o) {
    var r = Math.cos, n = Math.sin, s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1, h = qt({}, {
        gridColor: "#cccccc",
        labelColor: "#666666",
        opacity: .2,
        gridCount: 3
    }, i.extra.radar), c = y(i.categories.length), d = {
        x: i.area[3] + (i.width - i.area[1] - i.area[3]) / 2,
        y: i.area[0] + (i.height - i.area[0] - i.area[2]) / 2
    }, x = Math.min(d.x - (u(i.categories) + a.radarLabelTextMargin), d.y - a.radarLabelTextMargin);
    x -= i.padding[1], o.beginPath(), o.setLineWidth(1 * i.pixelRatio), o.setStrokeStyle(h.gridColor), 
    c.forEach(function(t) {
        var e = l(x * r(t), x * n(t), d);
        o.moveTo(d.x, d.y), o.lineTo(e.x, e.y);
    }), o.stroke(), o.closePath();
    for (var p = 1; p <= h.gridCount; p++) !function(t) {
        var e = {};
        o.beginPath(), o.setLineWidth(1 * i.pixelRatio), o.setStrokeStyle(h.gridColor), 
        c.forEach(function(i, a) {
            var s = l(x / h.gridCount * t * r(i), x / h.gridCount * t * n(i), d);
            0 === a ? (e = s, o.moveTo(s.x, s.y)) : o.lineTo(s.x, s.y);
        }), o.lineTo(e.x, e.y), o.stroke(), o.closePath();
    }(p);
    return I(c, d, x, e, i, s).forEach(function(e) {
        o.beginPath(), o.setFillStyle(t(e.color, h.opacity)), e.data.forEach(function(t, e) {
            0 === e ? o.moveTo(t.position.x, t.position.y) : o.lineTo(t.position.x, t.position.y);
        }), o.closePath(), o.fill(), !1 !== i.dataPointShape && at(e.data.map(function(t) {
            return t.position;
        }), e.color, e.pointShape, o, i);
    }), lt(c, x, d, i, a, o), {
        center: d,
        radius: x,
        angleList: c
    };
}

function Dt(t, e, i) {
    i = 0 == i ? 1 : i;
    for (var a = [], o = 0; o < i; o++) a[o] = Math.random();
    return Math.floor(a.reduce(function(t, e) {
        return t + e;
    }) / i * (e - t)) + t;
}

function Rt(t, e, i, a) {
    for (var o = !1, r = 0; r < e.length; r++) if (e[r].area) {
        if (!(t[3] < e[r].area[1] || t[0] > e[r].area[2] || t[1] > e[r].area[3] || t[2] < e[r].area[0])) {
            o = !0;
            break;
        }
        if (0 > t[0] || 0 > t[1] || t[2] > i || t[3] > a) {
            o = !0;
            break;
        }
        o = !1;
    }
    return o;
}

function kt(t) {
    var e, i = {};
    i.xMin = 180, i.xMax = 0, i.yMin = 90, i.yMax = 0;
    for (var a, o = 0; o < t.length; o++) {
        a = t[o].geometry.coordinates;
        for (var r = 0; r < a.length; r++) {
            1 == (e = a[r]).length && (e = e[0]);
            for (var n = 0; n < e.length; n++) {
                var l = {
                    x: e[n][0],
                    y: e[n][1]
                };
                i.xMin = i.xMin < l.x ? i.xMin : l.x, i.xMax = i.xMax > l.x ? i.xMax : l.x, i.yMin = i.yMin < l.y ? i.yMin : l.y, 
                i.yMax = i.yMax > l.y ? i.yMax : l.y;
            }
        }
    }
    return i;
}

function Ct(t, e, i, a, o, r) {
    return {
        x: (e - i.xMin) * a + o,
        y: (i.yMax - t) * a + r
    };
}

function Mt(t, e, i, a, o, r) {
    return {
        x: (e - o) / a + i.xMin,
        y: i.yMax - (t - r) / a
    };
}

function zt(t, e, i) {
    return e[1] != i[1] && (!(e[1] > t[1] && i[1] > t[1]) && (!(e[1] < t[1] && i[1] < t[1]) && (!(e[1] == t[1] && i[1] > t[1]) && (!(i[1] == t[1] && e[1] > t[1]) && (!(e[0] < t[0] && i[1] < t[1]) && !(i[0] - (i[0] - e[0]) * (i[1] - t[1]) / (i[1] - e[1]) < t[0]))))));
}

function Wt(t, e) {
    for (var i, a = 0, o = 0; o < e.length; o++) {
        i = e[o][0], 1 == e.length && (i = e[o][0]);
        for (var r = 0; r < i.length - 1; r++) zt(t, i[r], i[r + 1]) && (a += 1);
    }
    return !(1 != a % 2);
}

function Ot(e, i, a, o) {
    var r, n, l = Math.abs, s = qt({}, {
        border: !0,
        borderWidth: 1,
        borderColor: "#666666",
        fillOpacity: .6,
        activeBorderColor: "#f04864",
        activeFillColor: "#facc14",
        activeFillOpacity: 1
    }, i.extra.map), h = e, c = kt(h), x = i.width / l(c.xMax - c.xMin), p = i.height / l(c.yMax - c.yMin), g = x < p ? x : p, f = i.width / 2 - l(c.xMax - c.xMin) / 2 * g, u = i.height / 2 - l(c.yMax - c.yMin) / 2 * g;
    o.beginPath(), o.clearRect(0, 0, i.width, i.height), o.setFillStyle(i.background || "#FFFFFF"), 
    o.rect(0, 0, i.width, i.height), o.fill();
    for (var y = 0; y < h.length; y++) {
        o.beginPath(), o.setLineWidth(s.borderWidth * i.pixelRatio), o.setStrokeStyle(s.borderColor), 
        o.setFillStyle(t(e[y].color, s.fillOpacity)), i.tooltip && i.tooltip.index == y && (o.setStrokeStyle(s.activeBorderColor), 
        o.setFillStyle(t(s.activeFillColor, s.activeFillOpacity)));
        for (var v = h[y].geometry.coordinates, m = 0; m < v.length; m++) {
            1 == (r = v[m]).length && (r = r[0]);
            for (var b = 0; b < r.length; b++) n = Ct(r[b][1], r[b][0], c, g, f, u), 0 == b ? (o.beginPath(), 
            o.moveTo(n.x, n.y)) : o.lineTo(n.x, n.y);
            o.fill(), 1 == s.border && o.stroke();
        }
        if (1 == i.dataLabel) {
            var A = h[y].properties.centroid;
            if (A) {
                n = Ct(A[1], A[0], c, g, f, u);
                var S = h[y].textSize || a.fontSize, T = h[y].properties.name;
                o.beginPath(), o.setFontSize(S), o.setFillStyle(h[y].textColor || "#666666"), o.fillText(T, n.x - d(T, S) / 2, n.y + S / 2), 
                o.closePath(), o.stroke();
            }
        }
    }
    i.chartData.mapData = {
        bounds: c,
        scale: g,
        xoffset: f,
        yoffset: u
    }, mt(i, a, o, 1), o.draw();
}

function It(t, e) {
    var i = t.series.sort(function(t, e) {
        return parseInt(e.textSize) - parseInt(t.textSize);
    });
    switch (e) {
      case "normal":
        for (var a = 0; a < i.length; a++) {
            for (var o = void 0, r = void 0, n = void 0, l = i[a].name, s = i[a].textSize, h = d(l, s), c = 0; c++, 
            o = Dt(-t.width / 2, t.width / 2, 5) - h / 2, r = Dt(-t.height / 2, t.height / 2, 5) + s / 2, 
            Rt(n = [ o - 5 + t.width / 2, r - 5 - s + t.height / 2, o + h + 5 + t.width / 2, r + 5 + t.height / 2 ], i, t.width, t.height); ) if (1e3 == c) {
                n = [ -100, -100, -100, -100 ];
                break;
            }
            i[a].area = n;
        }
        break;

      case "vertical":
        for (var x = 0; x < i.length; x++) {
            for (var p = void 0, g = void 0, f = void 0, u = void 0, y = i[x].name, v = i[x].textSize, m = d(y, v), b = !!(.7 < Math.random()), A = 0; ;) {
                A++;
                var S = void 0;
                if (b ? (p = Dt(-t.width / 2, t.width / 2, 5) - m / 2, g = Dt(-t.height / 2, t.height / 2, 5) + v / 2, 
                f = [ g - 5 - m + t.width / 2, -p - 5 + t.height / 2, g + 5 + t.width / 2, -p + v + 5 + t.height / 2 ], 
                u = [ t.width - (t.width / 2 - t.height / 2) - (-p + v + 5 + t.height / 2) - 5, t.height / 2 - t.width / 2 + (g - 5 - m + t.width / 2) - 5, t.width - (t.width / 2 - t.height / 2) - (-p + v + 5 + t.height / 2) + v, t.height / 2 - t.width / 2 + (g - 5 - m + t.width / 2) + m + 5 ], 
                S = Rt(u, i, t.height, t.width)) : (p = Dt(-t.width / 2, t.width / 2, 5) - m / 2, 
                g = Dt(-t.height / 2, t.height / 2, 5) + v / 2, f = [ p - 5 + t.width / 2, g - 5 - v + t.height / 2, p + m + 5 + t.width / 2, g + 5 + t.height / 2 ], 
                S = Rt(f, i, t.width, t.height)), !S) break;
                if (1e3 == A) {
                    f = [ -1e3, -1e3, -1e3, -1e3 ];
                    break;
                }
            }
            b ? (i[x].area = u, i[x].areav = f) : i[x].area = f, i[x].rotate = b;
        }
    }
    return i;
}

function Et(t, e, i, a) {
    var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1;
    qt({}, {
        type: "normal",
        autoColors: !0
    }, e.extra.word);
    a.beginPath(), a.setFillStyle(e.background || "#FFFFFF"), a.rect(0, 0, e.width, e.height), 
    a.fill(), a.save();
    var r = e.chartData.wordCloudData;
    a.translate(e.width / 2, e.height / 2);
    for (var n = 0; n < r.length; n++) {
        a.save(), r[n].rotate && a.rotate(90 * Math.PI / 180);
        var l = r[n].name, s = r[n].textSize, h = d(l, s);
        a.beginPath(), a.setStrokeStyle(r[n].color), a.setFillStyle(r[n].color), a.setFontSize(s), 
        r[n].rotate ? 0 < r[n].areav[0] && (e.tooltip && e.tooltip.index == n ? a.strokeText(l, (r[n].areav[0] + 5 - e.width / 2) * o - h * (1 - o) / 2, (r[n].areav[1] + 5 + s - e.height / 2) * o) : a.fillText(l, (r[n].areav[0] + 5 - e.width / 2) * o - h * (1 - o) / 2, (r[n].areav[1] + 5 + s - e.height / 2) * o)) : 0 < r[n].area[0] && (e.tooltip && e.tooltip.index == n ? a.strokeText(l, (r[n].area[0] + 5 - e.width / 2) * o - h * (1 - o) / 2, (r[n].area[1] + 5 + s - e.height / 2) * o) : a.fillText(l, (r[n].area[0] + 5 - e.width / 2) * o - h * (1 - o) / 2, (r[n].area[1] + 5 + s - e.height / 2) * o)), 
        a.stroke(), a.restore();
    }
    a.restore();
}

function Bt(e, i, a, o) {
    var r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1, n = qt({}, {
        activeWidth: 10,
        activeOpacity: .3,
        border: !1,
        borderWidth: 2,
        borderColor: "#FFFFFF",
        fillOpacity: 1,
        labelAlign: "right"
    }, i.extra.funnel), l = (i.height - i.area[0] - i.area[2]) / e.length, s = {
        x: i.area[3] + (i.width - i.area[1] - i.area[3]) / 2,
        y: i.height - i.area[2]
    }, h = n.activeWidth, c = Math.min((i.width - i.area[1] - i.area[3]) / 2 - h, (i.height - i.area[0] - i.area[2]) / 2 - h);
    e = B(e, c, r), o.save(), o.translate(s.x, s.y);
    for (var d = 0; d < e.length; d++) 0 == d ? (i.tooltip && i.tooltip.index == d && (o.beginPath(), 
    o.setFillStyle(t(e[d].color, n.activeOpacity)), o.moveTo(-h, 0), o.lineTo(-e[d].radius - h, -l), 
    o.lineTo(e[d].radius + h, -l), o.lineTo(h, 0), o.lineTo(-h, 0), o.closePath(), o.fill()), 
    e[d].funnelArea = [ s.x - e[d].radius, s.y - l, s.x + e[d].radius, s.y ], o.beginPath(), 
    o.setLineWidth(n.borderWidth * i.pixelRatio), o.setStrokeStyle(n.borderColor), o.setFillStyle(t(e[d].color, n.fillOpacity)), 
    o.moveTo(0, 0), o.lineTo(-e[d].radius, -l), o.lineTo(e[d].radius, -l), o.lineTo(0, 0), 
    o.closePath(), o.fill(), 1 == n.border && o.stroke()) : (i.tooltip && i.tooltip.index == d && (o.beginPath(), 
    o.setFillStyle(t(e[d].color, n.activeOpacity)), o.moveTo(0, 0), o.lineTo(-e[d - 1].radius - h, 0), 
    o.lineTo(-e[d].radius - h, -l), o.lineTo(e[d].radius + h, -l), o.lineTo(e[d - 1].radius + h, 0), 
    o.lineTo(0, 0), o.closePath(), o.fill()), e[d].funnelArea = [ s.x - e[d].radius, s.y - l * (d + 1), s.x + e[d].radius, s.y - l * d ], 
    o.beginPath(), o.setLineWidth(n.borderWidth * i.pixelRatio), o.setStrokeStyle(n.borderColor), 
    o.setFillStyle(t(e[d].color, n.fillOpacity)), o.moveTo(0, 0), o.lineTo(-e[d - 1].radius, 0), 
    o.lineTo(-e[d].radius, -l), o.lineTo(e[d].radius, -l), o.lineTo(e[d - 1].radius, 0), 
    o.lineTo(0, 0), o.closePath(), o.fill(), 1 == n.border && o.stroke()), o.translate(0, -l);
    return o.restore(), !1 !== i.dataLabel && 1 === r && Ht(e, i, o, l, n.labelAlign, h, s), 
    {
        center: s,
        radius: c,
        series: e
    };
}

function Ht(t, e, i, a, o, r, n) {
    for (var l = Math.PI, s = 0; s < t.length; s++) {
        var h = void 0, c = void 0, x = void 0, p = void 0, g = t[s], f = g.format ? g.format(+g._proportion_.toFixed(2)) : Jt.toFixed(100 * g._proportion_) + "%";
        "right" == o ? (h = 0 == s ? (g.funnelArea[2] + n.x) / 2 : (g.funnelArea[2] + t[s - 1].funnelArea[2]) / 2, 
        c = h + 2 * r, x = g.funnelArea[1] + a / 2, p = g.textSize || e.fontSize, i.setLineWidth(1 * e.pixelRatio), 
        i.setStrokeStyle(g.color), i.setFillStyle(g.color), i.beginPath(), i.moveTo(h, x), 
        i.lineTo(c, x), i.stroke(), i.closePath(), i.beginPath(), i.moveTo(c, x), i.arc(c, x, 2, 0, 2 * l), 
        i.closePath(), i.fill(), i.beginPath(), i.setFontSize(p), i.setFillStyle(g.textColor || "#666666"), 
        i.fillText(f, c + 5, x + p / 2 - 2), i.closePath(), i.stroke(), i.closePath()) : (h = 0 == s ? (g.funnelArea[0] + n.x) / 2 : (g.funnelArea[0] + t[s - 1].funnelArea[0]) / 2, 
        c = h - 2 * r, x = g.funnelArea[1] + a / 2, p = g.textSize || e.fontSize, i.setLineWidth(1 * e.pixelRatio), 
        i.setStrokeStyle(g.color), i.setFillStyle(g.color), i.beginPath(), i.moveTo(h, x), 
        i.lineTo(c, x), i.stroke(), i.closePath(), i.beginPath(), i.moveTo(c, x), i.arc(c, x, 2, 0, 2 * l), 
        i.closePath(), i.fill(), i.beginPath(), i.setFontSize(p), i.setFillStyle(g.textColor || "#666666"), 
        i.fillText(f, c - 5 - d(f), x + p / 2 - 2), i.closePath(), i.stroke(), i.closePath());
    }
}

function Nt(t, e) {
    e.draw();
}

function Xt(t) {
    this.isStop = !1, t.duration = void 0 === t.duration ? 1e3 : t.duration, t.timing = t.timing || "linear";
    var e = "undefined" == typeof setTimeout ? "undefined" == typeof requestAnimationFrame ? function(t) {
        t(null);
    } : requestAnimationFrame : function(t, e) {
        setTimeout(function() {
            var e = +new Date();
            t(e);
        }, e);
    }, i = null, a = function(o) {
        if (null === o || !0 === this.isStop) return t.onProcess && t.onProcess(1), void (t.onAnimationFinish && t.onAnimationFinish());
        if (null === i && (i = o), o - i < t.duration) {
            var r = (o - i) / t.duration;
            r = (0, Zt[t.timing])(r), t.onProcess && t.onProcess(r), e(a, 17);
        } else t.onProcess && t.onProcess(1), t.onAnimationFinish && t.onAnimationFinish();
    };
    a = a.bind(this), e(a, 17);
}

function Gt(t, e, a, o) {
    var r = this, n = e.series, l = e.categories;
    n = h(n, e, a);
    var s = e.animation ? e.duration : 0;
    r.animationInstance && r.animationInstance.stop();
    var c = null;
    if ("candle" == t) {
        var d = qt({}, e.extra.candle.average);
        d.show ? (c = i(d.day, d.name, d.color, n[0].data), c = h(c, e, a), e.seriesMA = c) : c = e.seriesMA ? e.seriesMA = h(e.seriesMA, e, a) : n;
    } else c = n;
    e._series_ = n = A(n), e.area = [ , , , ,  ];
    for (var x = 0; 4 > x; x++) e.area[x] = e.padding[x];
    var p = M(c, e, a, e.chartData), g = p.area.wholeHeight, f = p.area.wholeWidth;
    switch (e.legend.position) {
      case "top":
        e.area[0] += g;
        break;

      case "bottom":
        e.area[2] += g;
        break;

      case "left":
        e.area[3] += f;
        break;

      case "right":
        e.area[1] += f;
    }
    var u = {}, y = 0;
    if ("line" === e.type || "column" === e.type || "area" === e.type || "mix" === e.type || "candle" === e.type) {
        if (u = V(n, e, a), y = u.yAxisWidth, e.yAxis.showTitle) {
            for (var v = 0, m = 0; m < e.yAxis.data.length; m++) v = Math.max(v, e.yAxis.data[m].titleFontSize ? e.yAxis.data[m].titleFontSize : a.fontSize);
            e.area[0] += (v + 6) * e.pixelRatio;
        }
        for (var b = 0, S = 0, T = 0; T < y.length; T++) "left" == y[T].position ? (e.area[3] += 0 < S ? y[T].width + e.yAxis.padding : y[T].width, 
        S += 1) : (e.area[1] += 0 < b ? y[T].width + e.yAxis.padding : y[T].width, b += 1);
    } else a.yAxisWidth = y;
    if (e.chartData.yAxisData = u, e.categories && e.categories.length) {
        e.chartData.xAxisData = J(e.categories, e, a);
        var P = z(e.categories, e, a, e.chartData.xAxisData.eachSpacing), w = P.xAxisHeight, _ = P.angle;
        a.xAxisHeight = w, a._xAxisTextAngle_ = _, e.area[2] += w, e.chartData.categoriesData = P;
    } else if ("line" === e.type || "area" === e.type || "points" === e.type) {
        e.chartData.xAxisData = O(n, e, a);
        var F = z(l = e.chartData.xAxisData.rangesFormat, e, a, e.chartData.xAxisData.eachSpacing), L = F.xAxisHeight, D = F.angle;
        a.xAxisHeight = L, a._xAxisTextAngle_ = D, e.area[2] += L, e.chartData.categoriesData = F;
    } else e.chartData.xAxisData = {
        xAxisPoints: []
    };
    if (e.enableScroll && "right" == e.xAxis.scrollAlign && void 0 === e._scrollDistance_) {
        var R = 0, k = e.chartData.xAxisData.xAxisPoints, C = e.chartData.xAxisData.startX;
        R = e.chartData.xAxisData.endX - C - e.chartData.xAxisData.eachSpacing * (k.length - 1), 
        r.scrollOption = {
            currentOffset: R,
            startTouchX: R,
            distance: 0,
            lastMoveTime: 0
        }, e._scrollDistance_ = R;
    }
    switch (("pie" === t || "ring" === t || "rose" === t) && (a._pieTextMaxLength_ = !1 === e.dataLabel ? 0 : j(c)), 
    t) {
      case "word":
        var W = qt({}, {
            type: "normal",
            autoColors: !0
        }, e.extra.word);
        (1 == e.updateData || null == e.updateData) && (e.chartData.wordCloudData = It(e, W.type)), 
        this.animationInstance = new Xt({
            timing: "easeInOut",
            duration: s,
            onProcess: function(t) {
                o.clearRect(0, 0, e.width, e.height), e.rotate && it(o, e), Et(n, e, a, o, t), Nt(e, o);
            },
            onAnimationFinish: function() {
                r.event.trigger("renderComplete");
            }
        });
        break;

      case "map":
        o.clearRect(0, 0, e.width, e.height), Ot(n, e, a, o);
        break;

      case "funnel":
        this.animationInstance = new Xt({
            timing: "easeInOut",
            duration: s,
            onProcess: function(t) {
                o.clearRect(0, 0, e.width, e.height), e.rotate && it(o, e), e.chartData.funnelData = Bt(n, e, a, o, t), 
                Tt(e.series, e, a, o, e.chartData), mt(e, a, o, t), Nt(e, o);
            },
            onAnimationFinish: function() {
                r.event.trigger("renderComplete");
            }
        });
        break;

      case "line":
        this.animationInstance = new Xt({
            timing: "easeIn",
            duration: s,
            onProcess: function(t) {
                o.clearRect(0, 0, e.width, e.height), e.rotate && it(o, e), At(l, e, a, o), bt(l, e, a, o);
                var i = yt(n, e, a, o, t), r = i.xAxisPoints, s = i.calPoints, h = i.eachSpacing;
                e.chartData.xAxisPoints = r, e.chartData.calPoints = s, e.chartData.eachSpacing = h, 
                St(n, e, a, o), !1 !== e.enableMarkLine && 1 === t && ct(e, a, o), Tt(e.series, e, a, o, e.chartData), 
                mt(e, a, o, t, h, r), Nt(e, o);
            },
            onAnimationFinish: function() {
                r.event.trigger("renderComplete");
            }
        });
        break;

      case "mix":
        this.animationInstance = new Xt({
            timing: "easeIn",
            duration: s,
            onProcess: function(t) {
                o.clearRect(0, 0, e.width, e.height), e.rotate && it(o, e), At(l, e, a, o), bt(l, e, a, o);
                var i = vt(n, e, a, o, t), r = i.xAxisPoints, s = i.calPoints, h = i.eachSpacing;
                e.chartData.xAxisPoints = r, e.chartData.calPoints = s, e.chartData.eachSpacing = h, 
                St(n, e, a, o), !1 !== e.enableMarkLine && 1 === t && ct(e, a, o), Tt(e.series, e, a, o, e.chartData), 
                mt(e, a, o, t, h, r), Nt(e, o);
            },
            onAnimationFinish: function() {
                r.event.trigger("renderComplete");
            }
        });
        break;

      case "column":
        this.animationInstance = new Xt({
            timing: "easeIn",
            duration: s,
            onProcess: function(t) {
                o.clearRect(0, 0, e.width, e.height), e.rotate && it(o, e), At(l, e, a, o), bt(l, e, a, o);
                var i = gt(n, e, a, o, t), r = i.xAxisPoints, s = i.calPoints, h = i.eachSpacing;
                e.chartData.xAxisPoints = r, e.chartData.calPoints = s, e.chartData.eachSpacing = h, 
                St(n, e, a, o), !1 !== e.enableMarkLine && 1 === t && ct(e, a, o), Tt(e.series, e, a, o, e.chartData), 
                mt(e, a, o, t, h, r), Nt(e, o);
            },
            onAnimationFinish: function() {
                r.event.trigger("renderComplete");
            }
        });
        break;

      case "area":
        this.animationInstance = new Xt({
            timing: "easeIn",
            duration: s,
            onProcess: function(t) {
                o.clearRect(0, 0, e.width, e.height), e.rotate && it(o, e), At(l, e, a, o), bt(l, e, a, o);
                var i = ut(n, e, a, o, t), r = i.xAxisPoints, s = i.calPoints, h = i.eachSpacing;
                e.chartData.xAxisPoints = r, e.chartData.calPoints = s, e.chartData.eachSpacing = h, 
                St(n, e, a, o), !1 !== e.enableMarkLine && 1 === t && ct(e, a, o), Tt(e.series, e, a, o, e.chartData), 
                mt(e, a, o, t, h, r), Nt(e, o);
            },
            onAnimationFinish: function() {
                r.event.trigger("renderComplete");
            }
        });
        break;

      case "ring":
      case "pie":
        this.animationInstance = new Xt({
            timing: "easeInOut",
            duration: s,
            onProcess: function(t) {
                o.clearRect(0, 0, e.width, e.height), e.rotate && it(o, e), e.chartData.pieData = Pt(n, e, a, o, t), 
                Tt(e.series, e, a, o, e.chartData), mt(e, a, o, t), Nt(e, o);
            },
            onAnimationFinish: function() {
                r.event.trigger("renderComplete");
            }
        });
        break;

      case "rose":
        this.animationInstance = new Xt({
            timing: "easeInOut",
            duration: s,
            onProcess: function(t) {
                o.clearRect(0, 0, e.width, e.height), e.rotate && it(o, e), e.chartData.pieData = wt(n, e, a, o, t), 
                Tt(e.series, e, a, o, e.chartData), mt(e, a, o, t), Nt(e, o);
            },
            onAnimationFinish: function() {
                r.event.trigger("renderComplete");
            }
        });
        break;

      case "radar":
        this.animationInstance = new Xt({
            timing: "easeInOut",
            duration: s,
            onProcess: function(t) {
                o.clearRect(0, 0, e.width, e.height), e.rotate && it(o, e), e.chartData.radarData = Lt(n, e, a, o, t), 
                Tt(e.series, e, a, o, e.chartData), mt(e, a, o, t), Nt(e, o);
            },
            onAnimationFinish: function() {
                r.event.trigger("renderComplete");
            }
        });
        break;

      case "arcbar":
        this.animationInstance = new Xt({
            timing: "easeInOut",
            duration: s,
            onProcess: function(t) {
                o.clearRect(0, 0, e.width, e.height), e.rotate && it(o, e), e.chartData.arcbarData = _t(n, e, a, o, t), 
                Nt(e, o);
            },
            onAnimationFinish: function() {
                r.event.trigger("renderComplete");
            }
        });
        break;

      case "gauge":
        this.animationInstance = new Xt({
            timing: "easeInOut",
            duration: s,
            onProcess: function(t) {
                o.clearRect(0, 0, e.width, e.height), e.rotate && it(o, e), e.chartData.gaugeData = Ft(l, n, e, a, o, t), 
                Nt(e, o);
            },
            onAnimationFinish: function() {
                r.event.trigger("renderComplete");
            }
        });
        break;

      case "candle":
        this.animationInstance = new Xt({
            timing: "easeIn",
            duration: s,
            onProcess: function(t) {
                o.clearRect(0, 0, e.width, e.height), e.rotate && it(o, e), At(l, e, a, o), bt(l, e, a, o);
                var i = ft(n, c, e, a, o, t), r = i.xAxisPoints, s = i.calPoints, h = i.eachSpacing;
                e.chartData.xAxisPoints = r, e.chartData.calPoints = s, e.chartData.eachSpacing = h, 
                St(n, e, a, o), !1 !== e.enableMarkLine && 1 === t && ct(e, a, o), c ? Tt(c, e, a, o, e.chartData) : Tt(e.series, e, a, o, e.chartData), 
                mt(e, a, o, t, h, r), Nt(e, o);
            },
            onAnimationFinish: function() {
                r.event.trigger("renderComplete");
            }
        });
    }
}

function jt() {
    this.events = {};
}

var Yt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, $t = {
    yAxisWidth: 15,
    yAxisSplit: 5,
    xAxisHeight: 15,
    xAxisLineHeight: 15,
    legendHeight: 15,
    yAxisTitleWidth: 15,
    padding: [ 10, 10, 10, 10 ],
    pixelRatio: 1,
    rotate: !1,
    columePadding: 3,
    fontSize: 13,
    dataPointShape: [ "circle", "circle", "circle", "circle" ],
    colors: [ "#1890ff", "#2fc25b", "#facc14", "#f04864", "#8543e0", "#90ed7d" ],
    pieChartLinePadding: 15,
    pieChartTextPadding: 5,
    xAxisTextPadding: 3,
    titleColor: "#333333",
    titleFontSize: 20,
    subtitleColor: "#999999",
    subtitleFontSize: 15,
    toolTipPadding: 3,
    toolTipBackground: "#000000",
    toolTipOpacity: .7,
    toolTipLineHeight: 20,
    radarLabelTextMargin: 15,
    gaugeLabelTextMargin: 15
}, qt = function(t) {
    function e(t, i) {
        for (var a in i) t[a] = t[a] && "[object Object]" === t[a].toString() ? e(t[a], i[a]) : t[a] = i[a];
        return t;
    }
    for (var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) a[o - 1] = arguments[o];
    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
    return !a || 0 >= a.length ? t : (a.forEach(function(i) {
        t = e(t, i);
    }), t);
}, Jt = {
    toFixed: function(t, e) {
        return e = e || 2, this.isFloat(t) && (t = t.toFixed(e)), t;
    },
    isFloat: function(t) {
        return 0 != t % 1;
    },
    approximatelyEqual: function(t, e) {
        return 1e-10 > Math.abs(t - e);
    },
    isSameSign: function(t, e) {
        var i = Math.abs;
        return i(t) === t && i(e) === e || i(t) !== t && i(e) !== e;
    },
    isSameXCoordinateArea: function(t, e) {
        return this.isSameSign(t.x, e.x);
    },
    isCollision: function(t, e) {
        return t.end = {}, t.end.x = t.start.x + t.width, t.end.y = t.start.y - t.height, 
        e.end = {}, e.end.x = e.start.x + e.width, e.end.y = e.start.y - e.height, !(e.start.x > t.end.x || e.end.x < t.start.x || e.end.y > t.start.y || e.start.y < t.end.y);
    }
}, Zt = {
    easeIn: function(t) {
        return Math.pow(t, 3);
    },
    easeOut: function(t) {
        return Math.pow(t - 1, 3) + 1;
    },
    easeInOut: function(t) {
        var e = Math.pow;
        return 1 > (t /= .5) ? .5 * e(t, 3) : .5 * (e(t - 2, 3) + 2);
    },
    linear: function(t) {
        return t;
    }
};

Xt.prototype.stop = function() {
    this.isStop = !0;
}, jt.prototype.addEventListener = function(t, e) {
    this.events[t] = this.events[t] || [], this.events[t].push(e);
}, jt.prototype.trigger = function() {
    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
    var a = e[0], o = e.slice(1);
    !this.events[a] || this.events[a].forEach(function(t) {
        try {
            t.apply(null, o);
        } catch (t) {
            console.error(t);
        }
    });
};

var Kt = function(t) {
    t.pixelRatio = t.pixelRatio ? t.pixelRatio : 1, t.fontSize = t.fontSize ? t.fontSize * t.pixelRatio : 13 * t.pixelRatio, 
    t.title = qt({}, t.title), t.subtitle = qt({}, t.subtitle), t.duration = t.duration ? t.duration : 1e3, 
    t.yAxis = qt({}, {
        data: [],
        showTitle: !1,
        disabled: !1,
        disableGrid: !1,
        splitNumber: 5,
        gridType: "solid",
        dashLength: 4 * t.pixelRatio,
        gridColor: "#cccccc",
        padding: 10,
        fontColor: "#666666"
    }, t.yAxis), t.yAxis.dashLength *= t.pixelRatio, t.yAxis.padding *= t.pixelRatio, 
    t.xAxis = qt({}, {
        rotateLabel: !1,
        type: "calibration",
        gridType: "solid",
        dashLength: 4,
        scrollAlign: "left",
        boundaryGap: "center",
        axisLine: !0,
        axisLineColor: "#cccccc"
    }, t.xAxis), t.xAxis.dashLength *= t.pixelRatio, t.legend = qt({}, {
        show: !0,
        position: "bottom",
        float: "center",
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        padding: 5,
        margin: 5,
        itemGap: 10,
        fontSize: t.fontSize,
        lineHeight: t.fontSize,
        fontColor: "#333333",
        format: {},
        hiddenColor: "#CECECE"
    }, t.legend), t.legend.borderWidth *= t.pixelRatio, t.legend.itemGap *= t.pixelRatio, 
    t.legend.padding *= t.pixelRatio, t.legend.margin *= t.pixelRatio, t.extra = qt({}, t.extra), 
    t.rotate = !!t.rotate, t.animation = !!t.animation, t.rotate = !!t.rotate;
    var e = JSON.parse(JSON.stringify($t));
    if (e.colors = t.colors ? t.colors : e.colors, e.yAxisTitleWidth = !0 !== t.yAxis.disabled && t.yAxis.title ? e.yAxisTitleWidth : 0, 
    ("pie" == t.type || "ring" == t.type) && (e.pieChartLinePadding = !1 === t.dataLabel ? 0 : t.extra.pie.labelWidth * t.pixelRatio || e.pieChartLinePadding * t.pixelRatio), 
    "rose" == t.type && (e.pieChartLinePadding = !1 === t.dataLabel ? 0 : t.extra.rose.labelWidth * t.pixelRatio || e.pieChartLinePadding * t.pixelRatio), 
    e.pieChartTextPadding = !1 === t.dataLabel ? 0 : e.pieChartTextPadding * t.pixelRatio, 
    e.yAxisSplit = t.yAxis.splitNumber ? t.yAxis.splitNumber : $t.yAxisSplit, e.rotate = t.rotate, 
    t.rotate) {
        var i = t.width, a = t.height;
        t.width = a, t.height = i;
    }
    t.padding = t.padding ? t.padding : e.padding;
    for (var o = 0; 4 > o; o++) t.padding[o] *= t.pixelRatio;
    e.yAxisWidth = $t.yAxisWidth * t.pixelRatio, e.xAxisHeight = $t.xAxisHeight * t.pixelRatio, 
    t.enableScroll && t.xAxis.scrollShow && (e.xAxisHeight += 6 * t.pixelRatio), e.xAxisLineHeight = $t.xAxisLineHeight * t.pixelRatio, 
    e.fontSize = t.fontSize, e.titleFontSize = $t.titleFontSize * t.pixelRatio, e.subtitleFontSize = $t.subtitleFontSize * t.pixelRatio, 
    e.toolTipPadding = $t.toolTipPadding * t.pixelRatio, e.toolTipLineHeight = $t.toolTipLineHeight * t.pixelRatio, 
    e.columePadding = $t.columePadding * t.pixelRatio, t.$this = t.$this ? t.$this : this, 
    this.context = my.createCanvasContext(t.canvasId, t.$this), t.chartData = {}, this.event = new jt(), 
    this.scrollOption = {
        currentOffset: 0,
        startTouchX: 0,
        distance: 0,
        lastMoveTime: 0
    }, this.opts = t, this.config = e, Gt.call(this, t.type, t, e, this.context);
};

Kt.prototype.updateData = function() {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
    switch (this.opts = qt({}, this.opts, t), this.opts.updateData = !0, t.scrollPosition || "current") {
      case "current":
        this.opts._scrollDistance_ = this.scrollOption.currentOffset;
        break;

      case "left":
        this.opts._scrollDistance_ = 0, this.scrollOption = {
            currentOffset: 0,
            startTouchX: 0,
            distance: 0,
            lastMoveTime: 0
        };
        break;

      case "right":
        var e = V(this.opts.series, this.opts, this.config).yAxisWidth;
        this.config.yAxisWidth = e;
        var i = 0, a = J(this.opts.categories, this.opts, this.config), o = a.xAxisPoints, r = a.startX;
        i = a.endX - r - a.eachSpacing * (o.length - 1), this.scrollOption = {
            currentOffset: i,
            startTouchX: i,
            distance: 0,
            lastMoveTime: 0
        }, this.opts._scrollDistance_ = i;
    }
    Gt.call(this, this.opts.type, this.opts, this.config, this.context);
}, Kt.prototype.zoom = function() {
    var t = Math.round, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.opts.xAxis.itemCount;
    if (!0 === this.opts.enableScroll) {
        var i = t(Math.abs(this.scrollOption.currentOffset) / this.opts.chartData.eachSpacing) + t(this.opts.xAxis.itemCount / 2);
        this.opts.animation = !1, this.opts.xAxis.itemCount = e.itemCount;
        var a = V(this.opts.series, this.opts, this.config).yAxisWidth;
        this.config.yAxisWidth = a;
        var o = 0, r = J(this.opts.categories, this.opts, this.config), n = r.xAxisPoints, l = r.startX, s = r.endX, h = r.eachSpacing, c = s - l, d = c - h * (n.length - 1);
        0 < (o = c / 2 - h * i) && (o = 0), o < d && (o = d), this.scrollOption = {
            currentOffset: o,
            startTouchX: o,
            distance: 0,
            lastMoveTime: 0
        }, this.opts._scrollDistance_ = o, Gt.call(this, this.opts.type, this.opts, this.config, this.context);
    } else console.log("请启用滚动条后使用！");
}, Kt.prototype.stopAnimation = function() {
    this.animationInstance && this.animationInstance.stop();
}, Kt.prototype.addEventListener = function(t, e) {
    this.event.addEventListener(t, e);
}, Kt.prototype.getCurrentDataIndex = function(t) {
    var e = null;
    if (e = t.changedTouches ? t.changedTouches[0] : t.mp.changedTouches[0]) {
        var i = g(e, this.opts, t);
        return "pie" === this.opts.type || "ring" === this.opts.type || "rose" === this.opts.type ? R({
            x: i.x,
            y: i.y
        }, this.opts.chartData.pieData) : "radar" === this.opts.type ? _({
            x: i.x,
            y: i.y
        }, this.opts.chartData.radarData, this.opts.categories.length) : "funnel" === this.opts.type ? F({
            x: i.x,
            y: i.y
        }, this.opts.chartData.funnelData) : "map" === this.opts.type ? D({
            x: i.x,
            y: i.y
        }, this.opts) : "word" === this.opts.type ? L({
            x: i.x,
            y: i.y
        }, this.opts.chartData.wordCloudData) : S({
            x: i.x,
            y: i.y
        }, this.opts.chartData.calPoints, this.opts, this.config, Math.abs(this.scrollOption.currentOffset));
    }
    return -1;
}, Kt.prototype.getLegendDataIndex = function(t) {
    var e = null;
    if (e = t.changedTouches ? t.changedTouches[0] : t.mp.changedTouches[0]) {
        var i = g(e, this.opts, t);
        return T({
            x: i.x,
            y: i.y
        }, this.opts.chartData.legendData);
    }
    return -1;
}, Kt.prototype.touchLegend = function(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, i = null;
    if (i = t.changedTouches ? t.changedTouches[0] : t.mp.changedTouches[0]) {
        g(i, this.opts, t);
        var a = this.getLegendDataIndex(t);
        0 <= a && (this.opts.series[a].show = !this.opts.series[a].show, this.opts.animation = !!e.animation, 
        this.opts._scrollDistance_ = this.scrollOption.currentOffset, Gt.call(this, this.opts.type, this.opts, this.config, this.context));
    }
}, Kt.prototype.showToolTip = function(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, i = null;
    (i = t.changedTouches ? t.changedTouches[0] : t.mp.changedTouches[0]) || console.log("touchError");
    var a = g(i, this.opts, t), o = this.scrollOption.currentOffset, r = qt({}, this.opts, {
        _scrollDistance_: o,
        animation: !1
    });
    if ("line" === this.opts.type || "area" === this.opts.type || "column" === this.opts.type) {
        if (-1 < (d = this.getCurrentDataIndex(t)) && 0 !== (h = f(this.opts.series, d)).length) {
            l = (s = v(h, this.opts.chartData.calPoints, d, this.opts.categories, e)).textList;
            (c = s.offset).y = a.y, r.tooltip = {
                textList: l,
                offset: c,
                option: e,
                index: d
            };
        }
        Gt.call(this, r.type, r, this.config, this.context);
    }
    if ("mix" === this.opts.type) {
        if (-1 < (d = this.getCurrentDataIndex(t))) {
            var o = this.scrollOption.currentOffset, r = qt({}, this.opts, {
                _scrollDistance_: o,
                animation: !1
            });
            if (0 !== (h = f(this.opts.series, d)).length) {
                var n = m(h, this.opts.chartData.calPoints, d, this.opts.categories, e), l = n.textList;
                (c = n.offset).y = a.y, r.tooltip = {
                    textList: l,
                    offset: c,
                    option: e,
                    index: d
                };
            }
        }
        Gt.call(this, r.type, r, this.config, this.context);
    }
    if ("candle" === this.opts.type) {
        if (-1 < (d = this.getCurrentDataIndex(t))) {
            var o = this.scrollOption.currentOffset, r = qt({}, this.opts, {
                _scrollDistance_: o,
                animation: !1
            });
            if (0 !== (h = f(this.opts.series, d)).length) {
                var s = b(this.opts.series[0].data, h, this.opts.chartData.calPoints, d, this.opts.categories, this.opts.extra.candle, e), l = s.textList;
                (c = s.offset).y = a.y, r.tooltip = {
                    textList: l,
                    offset: c,
                    option: e,
                    index: d
                };
            }
        }
        Gt.call(this, r.type, r, this.config, this.context);
    }
    if ("pie" === this.opts.type || "ring" === this.opts.type || "rose" === this.opts.type || "funnel" === this.opts.type) {
        if (-1 < (d = this.getCurrentDataIndex(t))) {
            var o = this.scrollOption.currentOffset, r = qt({}, this.opts, {
                _scrollDistance_: o,
                animation: !1
            }), h = this.opts._series_[d], l = [ {
                text: e.format ? e.format(h) : h.name + ": " + h.data,
                color: h.color
            } ], c = {
                x: a.x,
                y: a.y
            };
            r.tooltip = {
                textList: l,
                offset: c,
                option: e,
                index: d
            };
        }
        Gt.call(this, r.type, r, this.config, this.context);
    }
    if ("map" === this.opts.type || "word" === this.opts.type) {
        if (-1 < (d = this.getCurrentDataIndex(t))) {
            var o = this.scrollOption.currentOffset, r = qt({}, this.opts, {
                _scrollDistance_: o,
                animation: !1
            }), h = this.opts._series_[d], l = [ {
                text: e.format ? e.format(h) : h.properties.name,
                color: h.color
            } ], c = {
                x: a.x,
                y: a.y
            };
            r.tooltip = {
                textList: l,
                offset: c,
                option: e,
                index: d
            };
        }
        r.updateData = !1, Gt.call(this, r.type, r, this.config, this.context);
    }
    if ("radar" === this.opts.type) {
        var d = this.getCurrentDataIndex(t);
        if (-1 < d) {
            var o = this.scrollOption.currentOffset, r = qt({}, this.opts, {
                _scrollDistance_: o,
                animation: !1
            });
            if (0 !== (h = f(this.opts.series, d)).length) {
                var l = h.map(function(t) {
                    return {
                        text: e.format ? e.format(t) : t.name + ": " + t.data,
                        color: t.color
                    };
                }), c = {
                    x: a.x,
                    y: a.y
                };
                r.tooltip = {
                    textList: l,
                    offset: c,
                    option: e,
                    index: d
                };
            }
        }
        Gt.call(this, r.type, r, this.config, this.context);
    }
}, Kt.prototype.translate = function(t) {
    this.scrollOption = {
        currentOffset: t,
        startTouchX: t,
        distance: 0,
        lastMoveTime: 0
    };
    var e = qt({}, this.opts, {
        _scrollDistance_: t,
        animation: !1
    });
    Gt.call(this, this.opts.type, e, this.config, this.context);
}, Kt.prototype.scrollStart = function(t) {
    var e = null, i = g(e = t.changedTouches ? t.changedTouches[0] : t.mp.changedTouches[0], this.opts, t);
    e && !0 === this.opts.enableScroll && (this.scrollOption.startTouchX = i.x);
}, Kt.prototype.scroll = function(t) {
    0 === this.scrollOption.lastMoveTime && (this.scrollOption.lastMoveTime = Date.now());
    var e = this.opts.extra.touchMoveLimit || 20, i = Date.now();
    if (!(i - this.scrollOption.lastMoveTime < Math.floor(1e3 / e))) {
        this.scrollOption.lastMoveTime = i;
        var o = null;
        if ((o = t.changedTouches ? t.changedTouches[0] : t.mp.changedTouches[0]) && !0 === this.opts.enableScroll) {
            var r;
            r = g(o, this.opts, t).x - this.scrollOption.startTouchX;
            var n = this.scrollOption.currentOffset, l = a(this, n + r, this.opts.chartData, this.config, this.opts);
            this.scrollOption.distance = r = l - n;
            var s = qt({}, this.opts, {
                _scrollDistance_: n + r,
                animation: !1
            });
            return Gt.call(this, s.type, s, this.config, this.context), n + r;
        }
    }
}, Kt.prototype.scrollEnd = function() {
    if (!0 === this.opts.enableScroll) {
        var t = this.scrollOption, e = t.currentOffset, i = t.distance;
        this.scrollOption.currentOffset = e + i, this.scrollOption.distance = 0;
    }
}, "object" == ("undefined" == typeof module ? "undefined" : Yt(module)) && "object" == Yt(module.exports) && (module.exports = Kt);