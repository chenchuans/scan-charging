var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../../utils/zfb_charts.js")), a = require("../../../../utils/http.js"), e = getApp(), i = require("../../../../utils/wx_charts.js"), s = null, n = 0;

Page({
    data: {
        isShowCanvas: !1,
        showCanvas: !1,
        orderDetail: null,
        consumeAmount: 0,
        minejump: !0,
        outstandinorder: !1,
        payway: "微信支付",
        isShowPay: !1,
        discuss: !1,
        stars: 3,
        revert: "",
        content: "",
        pileType: 1,
        isWeChat: !0,
        status: 1,
        showWelcome: !1,
        adContent: {},
        adContent1: {},
        closeTime: 10
    },
    closeTimer: null,
    recordId: "",
    onLoad: function(t) {
        var a = wx.getStorageSync("miniType");
        if (this.setData({
            isWeChat: 1 == a
        }), this.setData({
            imageWidth: wx.getSystemInfoSync().windowWidth
        }), n = this.data.imageWidth / 375, t.minejump) {
            var e = "false" != t.minejump && "";
            this.setData({
                minejump: e
            });
        }
        this.recordId = t.recordId, this.getAdImg();
    },
    onReady: function() {},
    onShow: function() {
        var t = this;
        e.getConfig().then(function(a) {
            t.setData({
                isShowCanvas: a.config.powerMap
            });
        }), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#24c771"
        }), this.getRecoedinfo(), this.cWidth = 750, this.cHeight = 500, this.pixelRatio = 2, 
        this.drawPowerChart();
    },
    getAdImg: function() {
        var t = this;
        a.post({
            url: "/banner/index",
            data: {
                place: 6
            },
            success: function(a) {
                200 === a.statusCode ? 0 != a.data.length && (t.setData({
                    showWelcome: !0,
                    adContent: a.data[0]
                }), t.closeTimer = setInterval(function() {
                    t.data.closeTime || (clearInterval(t.closeTimer), t.closeTimer = null, t.setData({
                        showWelcome: !1
                    })), t.setData({
                        closeTime: t.data.closeTime - 1
                    });
                }, 1e3)) : wx.showToast({
                    title: a.data,
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: t.data,
                    icon: "none",
                    duration: 2e3
                });
            }
        }), a.post({
            url: "/banner/index",
            data: {
                place: 7
            },
            success: function(a) {
                200 === a.statusCode ? 0 != a.data.length && t.setData({
                    adContent1: a.data[0]
                }) : wx.showToast({
                    title: a.data,
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: t.data,
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    hidePicture: function() {
        clearInterval(this.closeTimer), this.closeTimer = null, this.setData({
            closeTime: 10,
            showWelcome: !1
        });
    },
    evaluate: function() {
        wx.navigateTo({
            url: "../evaluate/index?recordId=" + this.recordId + "&commentStatus=" + -1
        });
    },
    continueCharge: function() {
        var t = this;
        a.post({
            url: "/charge-record/checkContinue",
            data: {
                pileId: this.data.orderDetail.pileId
            },
            success: function(a) {
                200 == a.statusCode ? wx.navigateTo({
                    url: "/pages/charge/detail/index?scene=" + t.data.orderDetail.pileNo + "&pileNumSite=" + t.data.orderDetail.port + "&isContinue=true"
                }) : wx.showToast({
                    title: a.data,
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: t.data,
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    getRecoedinfo: function() {
        var t = this;
        a.post({
            url: "/charge-record/show/" + this.recordId,
            requireAuth: !0,
            success: function(a) {
                if (200 === a.statusCode) {
                    if (t.setData({
                        status: a.data.status,
                        discuss: a.data.discuss,
                        content: a.data.content,
                        revert: a.data.revert,
                        stars: a.data.stars,
                        pileType: a.data.pileType
                    }), a.data.hasOwnProperty("paid")) if (a.data.paid) 1 === a.data.channel ? t.setData({
                        payway: "微信支付",
                        isShowPay: !0
                    }) : 2 === a.data.channel && t.setData({
                        payway: "支付宝付",
                        isShowPay: !0
                    }); else {
                        var e = !a.data.paid;
                        t.setData({
                            isShowPay: !1,
                            outstandinorder: e
                        });
                    } else t.setData({
                        isShowPay: !1
                    });
                    t.setData({
                        orderDetail: a.data,
                        consumeAmount: a.data.consumeAmount / 100
                    });
                }
            }
        });
    },
    payment: function() {
        var t = this;
        a.post({
            url: "/charge-record/payment/" + this.recordId,
            data: {
                channel: 1
            },
            showLoading: !0,
            requireAuth: !0,
            success: function(a) {
                t.startPay(a.data);
            }
        });
    },
    drawPowerChart: function() {
        var t = this;
        a.post({
            url: "/charge-record/charge-record-curve/" + this.recordId,
            showLoading: !0,
            success: function(a) {
                if (200 === a.statusCode) {
                    if (0 != a.data.length) {
                        var e = a.data, i = [], s = [], n = [];
                        if (t.setData({
                            showCanvas: !0
                        }), t.data.isWeChat) {
                            for (var o = 0; o < e.length; o++) i.push(e[o].minutePast), s.push(e[o].power);
                            var r = Math.min.apply(Math, s);
                            t.doDrawChart(i, s, r);
                        } else {
                            for (var d = 0; d < e.length; d++) i.push(e[d].minutePast), n.push(e[d].power);
                            var c = {
                                name: "充电时间",
                                data: n
                            };
                            s.push(c);
                            var u = {
                                categories: [],
                                series: []
                            };
                            u.categories = i, u.series = s, t.showColumn("canvasColumn", u);
                        }
                    }
                } else t.setData({
                    showCanvas: !1
                }), wx.showToast({
                    title: a.data,
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function(a) {
                t.setData({
                    showCanvas: !1
                }), wx.showToast({
                    title: a.data,
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    startPay: function(t) {
        var a = this;
        wx.requestPayment({
            timeStamp: t.timestamp,
            nonceStr: t.noncestr,
            package: t.packageValue,
            signType: t.signType,
            paySign: t.sign,
            success: function(t) {
                a.setData({
                    outstandinorder: !1
                });
            },
            fail: function(t) {}
        });
    },
    doDrawChart: function(t, a, e) {
        new i({
            canvasId: "lineCanvas",
            type: "line",
            categories: t,
            animation: !0,
            background: "#f5f5f5",
            series: [ {
                name: "充电时长(分钟)",
                data: a,
                format: function(t, a) {
                    return t;
                }
            } ],
            xAxis: {
                disableGrid: !0
            },
            yAxis: {
                title: "充电功率(瓦)",
                format: function(t) {
                    return t;
                },
                min: 0
            },
            width: 390 * n,
            height: 200 * n,
            dataLabel: !1,
            dataPointShape: !0,
            extra: {
                lineStyle: "straight"
            }
        });
    },
    showColumn: function(a, e) {
        s = new t.default({
            $this: this,
            canvasId: a,
            type: "line",
            legend: !0,
            fontSize: 11,
            background: "#FFFFFF",
            pixelRatio: this.pixelRatio,
            animation: !0,
            categories: e.categories,
            series: e.series,
            xAxis: {
                disableGrid: !0,
                calibration: !0,
                disabled: !0
            },
            yAxis: {
                data: [ {
                    title: "功率(瓦)",
                    min: 0,
                    format: function(t) {
                        return t;
                    }
                } ],
                showTitle: !0,
                gridType: "dash",
                dashLength: 4,
                splitNumber: 5
            },
            dataLabel: !1,
            width: this.cWidth,
            height: this.cHeight,
            extra: {
                column: {
                    type: "group",
                    width: .45 * this.cWidth / e.categories.length
                }
            }
        });
    }
});