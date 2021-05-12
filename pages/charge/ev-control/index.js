var e = getApp(), t = require("../../../utils/http.js"), a = require("../../../utils/constant.js"), i = require("../../../utils/util.js");

require("../../../utils/client.js");

Page({
    data: {
        chargeStatus: null,
        power: 0,
        Isthetiming: "00:00:00",
        countdown: "00:00:00",
        realConsumption: 0,
        showModalStatus: !1,
        showFinshDialogue: !1,
        context: "",
        finshtext: "",
        txtColor: "",
        finshreason: "",
        siteName: "",
        pageDeep: 0,
        controlCharginginfo: !1,
        feeType: 1,
        expectedconsume: 0,
        waveHeight: 0,
        collected: !1,
        showWelcome: !1,
        adContent: {},
        adContent1: {},
        chargedPower: 0,
        realTimeTemperature: 0,
        realTimeVoltage: 0,
        realTimeCurrent: 0,
        showBreakPower: !1,
        closeTime: 10,
        leftX: 10,
        crossedWidth: 0,
        menuButton: null,
        screenPx: 0
    },
    closeTimer: null,
    recordId: "",
    viewUnloaded: !1,
    curPileId: 0,
    curPileTimeInfo: null,
    textTimer: "",
    showed: !0,
    minusTimer: null,
    plusTimer: null,
    positiveobj: "",
    countdown: "",
    hidetriggered: !1,
    handleExpectedconsume: !1,
    wave: "",
    surplusTime: 0,
    lastSurplusTime: 0,
    timer: null,
    startX: 0,
    endX: 0,
    onLoad: function(t) {
        var i = this;
        this.setData({
            menuButton: wx.getMenuButtonBoundingClientRect()
        }), this.getAdImg();
        var s = JSON.parse(decodeURIComponent(wx.getStorageSync("pileDetail")));
        this.curPileTimeInfo = wx.getStorageSync("curPileTimeInfo"), console.log(s), this.setData({
            siteName: s.siteName,
            siteAddress: s.siteAddress,
            pileNo: s.pileNo,
            portNum: this.curPileTimeInfo.port,
            pileAddress: s.pileAddress
        }), this.recordId = wx.getStorageSync("recordId"), e.setChagePageShowing(!0), this.renderRunStatus(), 
        e.registeChargeStatusCallback(a.CHARG_POWER, function(e) {
            i.setData({
                showBreakPower: !1
            }), e && i.setData({
                chargedPower: e.quantity,
                realTimeTemperature: e.temperature,
                realTimeVoltage: e.voltage,
                realTimeCurrent: e.flows,
                expectedconsume: e.amount / 100
            });
        });
        var r = e.getChargeStatus();
        r != a.WAIT_CHARGE && r != a.CHARGING || this.renderRunStatus(), r == a.WAIT_NOTICE && e.registeListenDoneCallback(function() {
            i.renderRunStatus();
        }), r == a.CHARG_STARTING && (this.renderPageForChargeStarting(), this.renderRunStatus()), 
        e.registeChargeStatusCallback(a.WAIT_CHARGE, function() {
            i.renderPageForWaitCharge(), i.renderRunStatus();
        }), e.registeChargeStatusCallback(a.CHARGING, function(e) {
            console.log("获取到功率"), i.setData({
                showBreakPower: !1
            }), e && e.power && i.setData({
                power: e.power
            }), i.renderPageForCharging(), i.renderRunStatus();
        }), e.registeChargeStatusCallback(a.CHARG_SUSPEND, function() {
            i.setData({
                showBreakPower: !0
            }), i.renderPageForWaitCharge(), i.suspendStateQuery();
        }), e.registeChargeStatusCallback(a.CHARG_FINISH, function(e) {
            i.recordId = e.recordId, i.afterChargeFinished(e.message);
        }), e.registeChargeStatusCallback(a.NO_CHARGING, function(e) {
            i.afterChargeFinished("在线手动停止");
        }), this.setData({
            pageDeep: getCurrentPages().length
        }), wx.getSystemInfo({
            success: function(e) {
                i.setData({
                    screenPx: 750 / e.screenWidth
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = this;
        this.handleExpectedconsume = !1, this.recordId = wx.getStorageSync("recordId"), 
        this.shownowtime = Date.now(), this.showed = !0, this.hidetriggered && (this.thetiming = this.hidethetiming, 
        this.Thecountdown = this.hideThecountdown, this.thetiming += (this.shownowtime - this.hidenowtime) / 1e3, 
        this.Thecountdown -= (this.shownowtime - this.hidenowtime) / 1e3), setTimeout(function() {
            var i = wx.getStorageSync("ws-open"), s = e.getChargeStatus();
            0 == i && s != a.CHARG_FINISH && s != a.NO_CHARGING && (e.registeListenDoneCallback(function() {
                t.renderRunStatus();
            }), e.startListenStompMessage(t.recordId));
        }, 3e3), this.viewUnloaded = !1;
    },
    onHide: function() {
        this.showed = !1, this.hidenowtime = Date.now(), this.hidethetiming = this.thetiming, 
        this.hideThecountdown = this.Thecountdown, this.hidetriggered = !0;
    },
    onUnload: function() {
        e.clearChargeStatusCallbacks(), e.setChagePageShowing(!1), clearInterval(this.minusTimer), 
        clearInterval(this.plusTimer), this.viewUnloaded = !0;
    },
    getAdImg: function() {
        var e = this;
        t.post({
            url: "/banner/index",
            data: {
                place: 4
            },
            success: function(t) {
                200 === t.statusCode ? 0 != t.data.length && (e.setData({
                    showWelcome: !0,
                    adContent: t.data[0]
                }), e.closeTimer = setInterval(function() {
                    e.data.closeTime || (clearInterval(e.closeTimer), e.closeTimer = null, e.setData({
                        showWelcome: !1
                    })), e.setData({
                        closeTime: e.data.closeTime - 1
                    });
                }, 1e3)) : wx.showToast({
                    title: t.data,
                    icon: "none",
                    duration: 2e3
                });
            }
        }), t.post({
            url: "/banner/index",
            data: {
                place: 5
            },
            success: function(t) {
                200 === t.statusCode ? 0 != t.data.length && e.setData({
                    adContent1: t.data[0]
                }) : wx.showToast({
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
    jump: function(e) {
        var a = this.data.adContent.type;
        1 != a && (this.data.adContent.operator || t.post({
            url: "/banner/clickBanner",
            requireAuth: !0,
            data: {
                id: this.data.adContent.id,
                outerId: this.data.adContent.outerId
            }
        }), 3 == a ? wx.navigateTo({
            url: "/pages/index/outurl/index?url=" + this.data.adContent.linkUrl
        }) : 2 == a ? wx.navigateToMiniProgram({
            appId: this.data.adContent.linkUrl,
            path: this.data.adContent.miniprogramPage || "pages/index/index",
            success: function(e) {}
        }) : 4 == a && wx.navigateTo({
            url: "/pages/index/rich-text/index?richId=" + this.data.adContent.id
        }));
    },
    loadMultipleChargingOrders: function() {
        var i = this;
        t.post({
            url: "/charge-record/recordStatus",
            requireAuth: !0,
            showLoading: !0,
            success: function(t) {
                200 == t.statusCode && (0 == t.data.length ? (clearInterval(i.minusTimer), clearInterval(i.plusTimer), 
                e.updateChargeStatus(a.NO_CHARGING), e.stopListenStompMessage()) : e.updateChargeStatus(a.CHARGING));
            }
        });
    },
    renderPageForChargeStarting: function() {
        this.setData({
            chargeStatus: 2
        }), this.viewUnloaded || (wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#FE5A03"
        }), this.transferBarColor = !1);
    },
    renderPageForWaitCharge: function() {
        this.setData({
            chargeStatus: 0
        }), this.viewUnloaded || (wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#eb5150"
        }), this.transferBarColor = !1);
    },
    renderPageForCharging: function() {
        this.textTimer && clearInterval(this.textTimer), this.setData({
            chargeStatus: 1
        }), this.viewUnloaded || (wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#24c771"
        }), this.transferBarColor = !0);
    },
    renderRunStatus: function() {
        var i = this;
        t.get({
            url: "/charge-record/status/" + this.recordId,
            requireAuth: !0,
            data: this.curPileTimeInfo,
            success: function(t) {
                if (200 == t.statusCode) {
                    i.setData({
                        collected: t.data.collected
                    });
                    var s = t.data;
                    switch (s.status) {
                      case 0:
                        break;

                      case 1:
                        i.renderPageForCharging(), i.timingStatus(t), i.setData({
                            power: s.power
                        });
                        break;

                      case 2:
                      case 3:
                        e.updateChargeStatus(a.CHARG_FINISH, s);
                        break;

                      case 4:
                        i.setData({
                            showBreakPower: !0
                        }), i.renderPageForWaitCharge(), i.suspendStateQuery();
                        break;

                      case 5:
                        i.renderPageForWaitCharge(), i.timingStatus(t);
                    }
                }
            }
        });
    },
    continueWait: function() {
        this.setData({
            showBreakPower: !1
        });
    },
    onpowerToStop: function() {
        var e = this;
        wx.showModal({
            title: "是否结束充电",
            content: "",
            success: function(t) {
                t.confirm && (e.setData({
                    showBreakPower: !1
                }), e.stopCharging(e.recordId));
            }
        });
    },
    suspendStateQuery: function() {
        clearInterval(this.minusTimer), clearInterval(this.plusTimer);
    },
    timingStatus: function(e) {
        var t = this;
        clearInterval(this.minusTimer), clearInterval(this.plusTimer), this.setData({
            feeType: e.data.feeType
        });
        var a = e.data;
        this.Thecountdown = 60 * a.totalMinutes - a.consumeSeconds, console.log("这是进来的总时间", a.totalMinutes), 
        this.setData({
            power: a.power
        }), this.minusTimer = setInterval(function() {
            t.Thecountdown <= 0 && clearInterval(t.minusTimer), t.countdown = i.formatSeconds(t.Thecountdown), 
            t.Thecountdown--, t.showed && t.setData({
                countdown: t.countdown
            }), t.surplusTime = 100 - ~~(100 * t.Thecountdown / (60 * a.totalMinutes)), t.surplusTime !== t.lastSurplusTime && (t.lastSurplusTime = t.surplusTime);
        }, 1e3), this.thetiming = e.data.consumeSeconds;
        var s = 60 * e.data.totalMinutes;
        this.plusTimer = setInterval(function() {
            t.thetiming > s && clearInterval(t.plusTimer), t.positiveobj = i.theTimeSeconds(t.thetiming, e.data.sitePrice / 10), 
            t.thetiming++, t.showed && t.setData({
                Isthetiming: t.positiveobj.result
            });
        }, 1e3);
    },
    afterChargeFinished: function(e) {
        this.chargeFinshConfirm(), wx.showToast({
            title: e,
            icon: "success",
            duration: 2e3
        });
    },
    stopCharging: function(e) {
        var a = this;
        t.post({
            url: "/charge-record/stop/" + e,
            requireAuth: !0,
            showLoading: !0,
            loadingText: "正在停止",
            success: function(e) {
                console.log("停止充电", e), 200 === e.statusCode ? a.loadMultipleChargingOrders() : wx.showModal({
                    title: e.data,
                    showCancel: !1
                });
            }
        });
    },
    chargeFinshConfirm: function() {
        this.loadMultipleChargingOrders(), this.recordId ? wx.redirectTo({
            url: "/pages/index/records/detail/index?recordId=" + this.recordId
        }) : wx.navigateBack();
    },
    touchStart: function(e) {
        this.startX = e.touches[0].pageX;
    },
    touchMove: function(e) {
        this.endX = e.touches[0].pageX;
        var t = Math.max((this.endX - this.startX) * this.data.screenPx, 10);
        461 <= Math.floor(t) && Math.floor(t) <= 465 && wx.vibrateLong(), this.setData({
            leftX: Math.min(t, 463),
            crossedWidth: t > 10 ? t >= 463 ? 605 : t + 66 : 0
        });
    },
    touchEnd: function(e) {
        463 === this.data.leftX && this.stopCharging(this.recordId), this.setData({
            leftX: 10,
            crossedWidth: 0
        });
    },
    back: function() {
        wx.navigateBack();
    }
});