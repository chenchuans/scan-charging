(function() {
    var t, n, e, i, r = {}.hasOwnProperty, o = [].slice;
    t = {
        LF: "\n",
        NULL: "\0"
    }, e = function() {
        function n(t, n, e) {
            this.command = t, this.headers = null != n ? n : {}, this.body = null != e ? e : "";
        }
        var e;
        return n.prototype.toString = function() {
            var e, i, o, s, u;
            e = [ this.command ], (o = !1 === this.headers["content-length"]) && delete this.headers["content-length"], 
            u = this.headers;
            for (i in u) r.call(u, i) && (s = u[i], e.push(i + ":" + s));
            return this.body && !o && e.push("content-length:" + n.sizeOfUTF8(this.body)), e.push(t.LF + this.body), 
            e.join(t.LF);
        }, n.sizeOfUTF8 = function(t) {
            return t ? encodeURI(t).match(/%..|./g).length : 0;
        }, e = function(e) {
            var i, r, o, s, u, a, c, h, f, p, l, d, g, b, m, v, y;
            for (s = e.search(RegExp("" + t.LF + t.LF)), o = (u = e.substring(0, s).split(t.LF)).shift(), 
            a = {}, d = function(t) {
                return t.replace(/^\s+|\s+$/g, "");
            }, g = 0, m = (v = u.reverse()).length; g < m; g++) h = (p = v[g]).indexOf(":"), 
            a[d(p.substring(0, h))] = d(p.substring(h + 1));
            if (i = "", l = s + 2, a["content-length"]) f = parseInt(a["content-length"]), i = ("" + e).substring(l, l + f); else for (r = null, 
            c = b = l, y = e.length; (l <= y ? b < y : b > y) && (r = e.charAt(c)) !== t.NULL; c = l <= y ? ++b : --b) i += r;
            return new n(o, a, i);
        }, n.unmarshall = function(n) {
            var i, r, o, s;
            return r = n.split(RegExp("" + t.NULL + t.LF + "*")), s = {
                frames: [],
                partial: ""
            }, s.frames = function() {
                var t, n, o, s;
                for (s = [], t = 0, n = (o = r.slice(0, -1)).length; t < n; t++) i = o[t], s.push(e(i));
                return s;
            }(), (o = r.slice(-1)[0]) === t.LF || -1 !== o.search(RegExp("" + t.NULL + t.LF + "*$")) ? s.frames.push(e(o)) : s.partial = o, 
            s;
        }, n.marshall = function(e, i, r) {
            return new n(e, i, r).toString() + t.NULL;
        }, n;
    }(), n = function() {
        function n(t) {
            this.ws = t, this.ws.binaryType = "arraybuffer", this.counter = 0, this.connected = !1, 
            this.heartbeat = {
                outgoing: 1e4,
                incoming: 1e4
            }, this.maxWebSocketFrameSize = 16384, this.subscriptions = {}, this.partialData = "";
        }
        var r;
        return n.prototype.debug = function(t) {
            var n;
            return "undefined" != typeof window && null !== window && null != (n = window.console) ? n.log(t) : void 0;
        }, r = function() {
            return Date.now ? Date.now() : new Date().valueOf;
        }, n.prototype._transmit = function(t, n, i) {
            var r;
            for (r = e.marshall(t, n, i), "function" == typeof this.debug && this.debug(">>> " + r); ;) {
                if (!(r.length > this.maxWebSocketFrameSize)) return this.ws.send(r);
                this.ws.send(r.substring(0, this.maxWebSocketFrameSize)), r = r.substring(this.maxWebSocketFrameSize), 
                "function" == typeof this.debug && this.debug("remaining = " + r.length);
            }
        }, n.prototype._setupHeartbeat = function(n) {
            var e, o, s, u, a, c;
            if ((a = n.version) === i.VERSIONS.V1_1 || a === i.VERSIONS.V1_2) return c = function() {
                var t, e, i, r;
                for (r = [], t = 0, e = (i = n["heart-beat"].split(",")).length; t < e; t++) u = i[t], 
                r.push(parseInt(u));
                return r;
            }(), o = c[0], e = c[1], 0 !== this.heartbeat.outgoing && 0 !== e && (s = Math.max(this.heartbeat.outgoing, e), 
            "function" == typeof this.debug && this.debug("send PING every " + s + "ms"), this.pinger = i.setInterval(s, function(n) {
                return function() {
                    return n.ws.send(t.LF), "function" == typeof n.debug ? n.debug(">>> PING") : void 0;
                };
            }(this))), 0 !== this.heartbeat.incoming && 0 !== o ? (s = Math.max(this.heartbeat.incoming, o), 
            "function" == typeof this.debug && this.debug("check PONG every " + s + "ms"), this.ponger = i.setInterval(s, function(t) {
                return function() {
                    var n;
                    if ((n = r() - t.serverActivity) > 2 * s) return "function" == typeof t.debug && t.debug("did not receive server activity for the last " + n + "ms"), 
                    t.ws.close();
                };
            }(this))) : void 0;
        }, n.prototype._parseConnect = function() {
            var t, n, e, i;
            switch (t = 1 <= arguments.length ? o.call(arguments, 0) : [], i = {}, t.length) {
              case 2:
                i = t[0], n = t[1];
                break;

              case 3:
                t[1] instanceof Function ? (i = t[0], n = t[1], e = t[2]) : (i.login = t[0], i.passcode = t[1], 
                n = t[2]);
                break;

              case 4:
                i.login = t[0], i.passcode = t[1], n = t[2], e = t[3];
                break;

              default:
                i.login = t[0], i.passcode = t[1], n = t[2], e = t[3], i.host = t[4];
            }
            return [ i, n, e ];
        }, n.prototype.connect = function() {
            var n, s, u, a;
            return n = 1 <= arguments.length ? o.call(arguments, 0) : [], a = this._parseConnect.apply(this, n), 
            u = a[0], this.connectCallback = a[1], s = a[2], "function" == typeof this.debug && this.debug("Opening Web Socket..."), 
            this.ws.onmessage = function(n) {
                return function(i) {
                    var o, u, a, c, h, f, p, l, d, g, b, m, v;
                    if (c = "undefined" != typeof ArrayBuffer && i.data instanceof ArrayBuffer ? (o = new Uint8Array(i.data), 
                    "function" == typeof n.debug && n.debug("--- got data length: " + o.length), function() {
                        var t, n, e;
                        for (e = [], t = 0, n = o.length; t < n; t++) u = o[t], e.push(String.fromCharCode(u));
                        return e;
                    }().join("")) : i.data, n.serverActivity = r(), c !== t.LF) {
                        for ("function" == typeof n.debug && n.debug("<<< " + c), d = e.unmarshall(n.partialData + c), 
                        n.partialData = d.partial, v = [], g = 0, b = (m = d.frames).length; g < b; g++) switch ((h = m[g]).command) {
                          case "CONNECTED":
                            "function" == typeof n.debug && n.debug("connected to server " + h.headers.server), 
                            n.connected = !0, n._setupHeartbeat(h.headers), v.push("function" == typeof n.connectCallback ? n.connectCallback(h) : void 0);
                            break;

                          case "MESSAGE":
                            l = h.headers.subscription, (p = n.subscriptions[l] || n.onreceive) ? (a = n, f = h.headers["message-id"], 
                            h.ack = function(t) {
                                return null == t && (t = {}), a.ack(f, l, t);
                            }, h.nack = function(t) {
                                return null == t && (t = {}), a.nack(f, l, t);
                            }, v.push(p(h))) : v.push("function" == typeof n.debug ? n.debug("Unhandled received MESSAGE: " + h) : void 0);
                            break;

                          case "RECEIPT":
                            v.push("function" == typeof n.onreceipt ? n.onreceipt(h) : void 0);
                            break;

                          case "ERROR":
                            v.push("function" == typeof s ? s(h) : void 0);
                            break;

                          default:
                            v.push("function" == typeof n.debug ? n.debug("Unhandled frame: " + h) : void 0);
                        }
                        return v;
                    }
                    "function" == typeof n.debug && n.debug("<<< PONG");
                };
            }(this), this.ws.onclose = function(t) {
                return function() {
                    var n;
                    return n = "Whoops! Lost connection to " + t.ws.url, "function" == typeof t.debug && t.debug(n), 
                    t._cleanUp(), "function" == typeof s ? s(n) : void 0;
                };
            }(this), this.ws.onopen = function(t) {
                return function() {
                    return "function" == typeof t.debug && t.debug("Web Socket Opened..."), u["accept-version"] = i.VERSIONS.supportedVersions(), 
                    u["heart-beat"] = [ t.heartbeat.outgoing, t.heartbeat.incoming ].join(","), t._transmit("CONNECT", u);
                };
            }(this);
        }, n.prototype.disconnect = function(t, n) {
            return null == n && (n = {}), this._transmit("DISCONNECT", n), this.ws.onclose = null, 
            this.ws.close(), this._cleanUp(), "function" == typeof t ? t() : void 0;
        }, n.prototype._cleanUp = function() {
            if (this.connected = !1, this.pinger && i.clearInterval(this.pinger), this.ponger) return i.clearInterval(this.ponger);
        }, n.prototype.send = function(t, n, e) {
            return null == n && (n = {}), null == e && (e = ""), n.destination = t, this._transmit("SEND", n, e);
        }, n.prototype.subscribe = function(t, n, e) {
            var i;
            return null == e && (e = {}), e.id || (e.id = "sub-" + this.counter++), e.destination = t, 
            this.subscriptions[e.id] = n, this._transmit("SUBSCRIBE", e), i = this, {
                id: e.id,
                unsubscribe: function() {
                    return i.unsubscribe(e.id);
                }
            };
        }, n.prototype.unsubscribe = function(t) {
            return delete this.subscriptions[t], this._transmit("UNSUBSCRIBE", {
                id: t
            });
        }, n.prototype.begin = function(t) {
            var n, e;
            return e = t || "tx-" + this.counter++, this._transmit("BEGIN", {
                transaction: e
            }), n = this, {
                id: e,
                commit: function() {
                    return n.commit(e);
                },
                abort: function() {
                    return n.abort(e);
                }
            };
        }, n.prototype.commit = function(t) {
            return this._transmit("COMMIT", {
                transaction: t
            });
        }, n.prototype.abort = function(t) {
            return this._transmit("ABORT", {
                transaction: t
            });
        }, n.prototype.ack = function(t, n, e) {
            return null == e && (e = {}), e["message-id"] = t, e.subscription = n, this._transmit("ACK", e);
        }, n.prototype.nack = function(t, n, e) {
            return null == e && (e = {}), e["message-id"] = t, e.subscription = n, this._transmit("NACK", e);
        }, n;
    }(), i = {
        VERSIONS: {
            V1_0: "1.0",
            V1_1: "1.1",
            V1_2: "1.2",
            supportedVersions: function() {
                return "1.1,1.0";
            }
        },
        client: function(t, e) {
            var r, o;
            return null == e && (e = [ "v10.stomp", "v11.stomp" ]), r = i.WebSocketClass || WebSocket, 
            o = new r(t, e), new n(o);
        },
        over: function(t) {
            return new n(t);
        },
        Frame: e
    }, "undefined" != typeof exports && null !== exports && (exports.Stomp = i), "undefined" != typeof window && null !== window ? (i.setInterval = function(t, n) {
        return window.setInterval(n, t);
    }, i.clearInterval = function(t) {
        return window.clearInterval(t);
    }, window.Stomp = i) : exports || (self.Stomp = i);
}).call(void 0);