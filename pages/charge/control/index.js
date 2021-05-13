var t = getApp(), e = require("../../../utils/http.js"), a = require("../../../utils/constant.js"), o = require("../../../utils/util.js"), s = require("../../../utils/client.js");

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
        suspendstyle: !0,
        pageDeep: 0,
        controlCharginginfo: !1,
        feeType: 1,
        expectedconsume: "",
        waveHeight: 0,
        collected: !1,
        showWelcome: !1,
        adContent: {},
        adContent1: {},
        showNoLoad: !1,
        restartTimes: 3,
        restartCountDown: 0,
        showRestartText: "充电器已接好，开始充电(剩余3次)",
        isRestart: !0,
        warnTextColor: "",
        showRestartDialog: !1,
        closeTime: 10
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
    onLoad: function(e) {
        var o = this;
        this.getAdImg();
        var i = JSON.parse(decodeURIComponent(wx.getStorageSync("pileDetail")));
        this.curPileTimeInfo = wx.getStorageSync("curPileTimeInfo"), console.log(i), this.setData({
            siteName: i.siteName,
            siteAddress: i.siteAddress,
            pileNo: i.pileNo,
            portNum: this.curPileTimeInfo.port,
            pileAddress: i.pileAddress
        }), this.recordId = wx.getStorageSync("recordId"), t.setChagePageShowing(!0);
        var r = t.getChargeStatus();
        t.registeChargeStatusCallback(a.CHARG_POWER, function(t) {
            t && t.power && o.setData({
                power: t.power
            }), o.setData({
                suspendstyle: !0
            }), o.renderPageForCharging();
        }), r != a.WAIT_CHARGE && r != a.CHARGING || this.renderRunStatus(), r == a.WAIT_NOTICE && t.registeListenDoneCallback(function() {
            o.renderRunStatus();
        }), r == a.CHARG_STARTING && (this.renderPageForChargeStarting(), this.renderRunStatus()), 
        t.registeChargeStatusCallback(a.WAIT_CHARGE, function() {
            o.renderPageForWaitCharge(), o.renderRunStatus();
        }), t.registeChargeStatusCallback(a.CHARGING, function(t) {
            t && t.power && o.setData({
                power: t.power
            }), o.setData({
                suspendstyle: !0
            }), o.renderPageForCharging(), o.renderRunStatus();
        }), t.registeChargeStatusCallback(a.CHARG_SUSPEND, function() {
            o.setData({
                suspendstyle: !1
            }), o.renderPageForWaitCharge(), o.suspendStateQuery();
        }), t.registeChargeStatusCallback(a.CHARG_FINISH, function(t) {
            o.afterChargeFinished(t.message);
        }), t.registeChargeStatusCallback(a.NO_CHARGING, function(t) {
            o.afterChargeFinished("在线手动停止");
        }), s.topic("/app-charge-consume", function(t) {
            o.recordId == t.recordId && o.setData({
                expectedconsume: t.amount / 100
            });
        }), this.setData({
            pageDeep: getCurrentPages().length
        });
    },
    onReady: function() {},
    onShow: function() {
        var e = this;
        this.handleExpectedconsume = !1, this.recordId = wx.getStorageSync("recordId"), 
        this.shownowtime = Date.now(), this.showed = !0, this.hidetriggered && (this.thetiming = this.hidethetiming, 
        this.Thecountdown = this.hideThecountdown, this.thetiming += (this.shownowtime - this.hidenowtime) / 1e3, 
        this.Thecountdown -= (this.shownowtime - this.hidenowtime) / 1e3), setTimeout(function() {
            var o = wx.getStorageSync("ws-open"), s = t.getChargeStatus();
            0 == o && s != a.CHARG_FINISH && s != a.NO_CHARGING && (t.registeListenDoneCallback(function() {
                e.renderRunStatus();
            }), t.startListenStompMessage(e.recordId));
        }, 3e3), this.viewUnloaded = !1;
    },
    onHide: function() {
        this.showed = !1, this.hidenowtime = Date.now(), this.hidethetiming = this.thetiming, 
        this.hideThecountdown = this.Thecountdown, this.hidetriggered = !0;
    },
    onUnload: function() {
        t.clearChargeStatusCallbacks(), t.setChagePageShowing(!1), clearInterval(this.minusTimer), 
        clearInterval(this.plusTimer), this.viewUnloaded = !0;
    },
    getAdImg: function() {
        var t = this;
        e.post({
            url: "/banner/index",
            data: {
                place: 4
            },
            success: function(e) {
                200 === e.statusCode ? 0 != e.data.length && (t.setData({
                    showWelcome: !0,
                    adContent: e.data[0]
                }), t.closeTimer = setInterval(function() {
                    t.data.closeTime || (clearInterval(t.closeTimer), t.closeTimer = null, t.setData({
                        showWelcome: !1
                    })), t.setData({
                        closeTime: t.data.closeTime - 1
                    });
                }, 1e3)) : wx.showToast({
                    title: e.data,
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
        }), e.post({
            url: "/banner/index",
            data: {
                place: 5
            },
            success: function(e) {
                200 === e.statusCode ? 0 != e.data.length && t.setData({
                    adContent1: e.data[0]
                }) : wx.showToast({
                    title: e.data,
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
    jump: function(t) {
        var a = t.currentTarget.dataset.ad, o = a.type;
        1 != o && (2 == a.origin && e.post({
            url: "/banner/clickBanner",
            requireAuth: !0,
            data: {
                id: a.id
            }
        }), 3 == o ? wx.navigateTo({
            url: "/pages/index/outurl/index?url=" + a.linkUrl
        }) : 2 == o ? wx.navigateToMiniProgram({
            appId: a.linkUrl,
            path: a.miniprogramPage || "pages/index/index",
            success: function(t) {}
        }) : 4 == o && wx.navigateTo({
            url: "/pages/index/rich-text/index?richId=" + a.id
        }));
    },
    collecteBtn: function() {
        var t = this;
        e.get({
            url: "/charge-pile-collect/add",
            requireAuth: !0,
            data: {
                pileNo: this.data.pileNo
            },
            success: function(e) {
                200 === e.statusCode ? (t.setData({
                    collected: !t.data.collected
                }), wx.showToast({
                    title: t.data.collected ? "收藏成功" : "取消收藏",
                    icon: "success",
                    duration: 2e3
                })) : wx.showToast({
                    title: e.data,
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
    loadMultipleChargingOrders: function() {
        var o = this;
        e.post({
            url: "/charge-record/recordStatus",
            requireAuth: !0,
            showLoading: !0,
            success: function(e) {
                200 == e.statusCode && (0 == e.data.length ? (clearInterval(o.minusTimer), clearInterval(o.plusTimer), 
                t.updateChargeStatus(a.NO_CHARGING), t.stopListenStompMessage()) : t.updateChargeStatus(a.CHARGING));
            }
        });
    },
    onButtonClick: function() {
        var o = this;
        1 == this.data.chargeStatus ? wx.showModal({
            title: "是否结束充电",
            content: "",
            success: function(t) {
                t.confirm && (clearTimeout(o.timer), o.stopCharging(o.recordId));
            }
        }) : e.get({
            url: "/charge-record/status/" + this.recordId,
            requireAuth: !0,
            showLoading: !0,
            data: this.curPileTimeInfo,
            success: function(e) {
                if (200 == e.statusCode) {
                    o.setData({
                        collected: e.data.collected
                    });
                    var s = e.data.status;
                    5 == s && o.modaltipInfo("电缆还没有接好哦"), 1 == s && (wx.hideLoading(), o.renderPageForCharging(), 
                    t.updateChargeStatus(a.CHARGING), o.timingStatus(e));
                }
            }
        });
    },
    endAndChangePort: function() {
        var t = this;
        wx.showModal({
            title: "是否结束充电",
            content: "",
            success: function(e) {
                e.confirm && (clearTimeout(t.timer), t.stopCharging(t.recordId));
            }
        });
    },
    onBackorStopClick: function() {
        var t = this;
        this.data.chargeStatus ? wx.redirectTo({
            url: "/pages/index/index"
        }) : wx.showModal({
            title: "是否结束充电",
            content: "",
            success: function(e) {
                e.confirm && t.stopCharging(t.recordId);
            }
        });
    },
    chargeingbackbtn: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    onpowerToStop: function() {
        var t = this;
        console.log("点击了停止充电"), wx.showModal({
            title: "是否结束充电",
            content: "",
            success: function(e) {
                e.confirm && (console.log("用户已经停止充电了"), t.stopCharging(t.recordId));
            }
        });
    },
    renderPageForChargeStarting: function() {
        this.setData({
            chargeStatus: 2
        }), this.textAnaition(), this.viewUnloaded || (wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#FE5A03"
        }), this.transferBarColor = !1);
    },
    renderPageForWaitCharge: function() {
        this.setData({
            chargeStatus: 0
        }), this.textAnaition(), this.viewUnloaded || (wx.setNavigationBarColor({
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
        var o = this;
        clearTimeout(this.timer), e.get({
            url: "/charge-record/status/" + this.recordId,
            requireAuth: !0,
            data: this.curPileTimeInfo,
            success: function(e) {
                if (200 == e.statusCode) {
                    o.setData({
                        collected: e.data.collected
                    });
                    var s = e.data;
                    switch (s.status) {
                      case 0:
                        break;

                      case 1:
                        o.renderPageForCharging(), o.timingStatus(e), o.setData({
                            power: s.power
                        }), o.setData({
                            suspendstyle: !0
                        }), e.data.popup && o.data.showRestartDialog ? (o.setData({
                            showNoLoad: !0
                        }), o.textAnaition(), o.timer = setTimeout(function() {
                            o.renderRunStatus();
                        }, 3e3)) : o.setData({
                            showNoLoad: !1
                        });
                        break;

                      case 2:
                      case 3:
                        t.updateChargeStatus(a.CHARG_FINISH, s);
                        break;

                      case 4:
                        o.setData({
                            suspendstyle: !1
                        }), o.renderPageForWaitCharge(), o.suspendStateQuery();
                        break;

                      case 5:
                        o.renderPageForWaitCharge(), o.timingStatus(e), e.data.popup && o.data.showRestartDialog && (o.setData({
                            showNoLoad: !0
                        }), o.textAnaition(), o.timer = setTimeout(function() {
                            o.renderRunStatus();
                        }, 3e3));
                    }
                }
            }
        });
    },
    suspendStateQuery: function() {
        clearInterval(this.minusTimer), clearInterval(this.plusTimer);
    },
    timingStatus: function(t) {
        var e = this;
        clearInterval(this.minusTimer), clearInterval(this.plusTimer), this.setData({
            feeType: t.data.feeType
        }), this.setData({
            expectedconsume: t.data.amount / 100
        });
        var a = t.data;
        this.Thecountdown = 60 * a.totalMinutes - a.consumeSeconds, console.log("这是进来的总时间", a.totalMinutes), 
        this.setData({
            power: a.power
        }), this.minusTimer = setInterval(function() {
            e.Thecountdown <= 0 && clearInterval(e.minusTimer), e.countdown = o.formatSeconds(e.Thecountdown), 
            e.Thecountdown--, e.showed && e.setData({
                countdown: e.countdown
            }), e.surplusTime = 100 - ~~(100 * e.Thecountdown / (60 * a.totalMinutes)), e.surplusTime !== e.lastSurplusTime && (e.waves(e.surplusTime), 
            e.lastSurplusTime = e.surplusTime);
        }, 1e3), this.thetiming = t.data.consumeSeconds;
        var s = 60 * t.data.totalMinutes;
        this.plusTimer = setInterval(function() {
            e.thetiming > s && clearInterval(e.plusTimer), e.positiveobj = o.theTimeSeconds(e.thetiming, t.data.sitePrice / 10), 
            e.thetiming++, e.showed && e.setData({
                Isthetiming: e.positiveobj.result
            });
        }, 1e3);
    },
    afterChargeFinished: function(t) {
        clearInterval(this.minusTimer), clearInterval(this.plusTimer), clearInterval(this.timer), 
        this.setData({
            finshtext: t,
            showFinshDialogue: !0
        }), this.transferBarColor ? wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#126338"
        }) : wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#752828"
        });
    },
    stopCharging: function(t) {
        var a = this;
        e.post({
            url: "/charge-record/stop/" + t,
            requireAuth: !0,
            showLoading: !0,
            loadingText: "正在停止充电",
            success: function(t) {
                console.log("停止充电", t), 200 === t.statusCode ? a.loadMultipleChargingOrders() : wx.showModal({
                    title: t.data,
                    showCancel: !1
                });
            },
            fail: function(t) {
                wx.showModal({
                    title: t.data,
                    showCancel: !1
                });
            }
        });
    },
    powerDrawer: function() {
        this.setData({
            showModalStatus: !1
        }), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#eb5150"
        });
    },
    modaltipInfo: function(t) {
        var e = this;
        this.setData({
            showModalStatus: !0,
            context: t
        }), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#752828"
        }), setTimeout(function() {
            wx.setNavigationBarColor({
                frontColor: "#ffffff",
                backgroundColor: "#eb5150"
            }), e.setData({
                showModalStatus: !1
            });
        }, 5e3);
    },
    chargeFinshConfirm: function() {
        this.loadMultipleChargingOrders(), wx.redirectTo({
            url: "/pages/index/records/detail/index?recordId=" + this.recordId
        });
    },
    textAnaition: function() {
        var t = this;
        clearInterval(this.textTimer);
        var e = 0;
        this.textTimer = setInterval(function() {
            t.setData({
                txtColor: e % 2 == 0 ? "hehongColor" : "defaultColor",
                warnTextColor: e % 2 == 0 ? "hehongColor" : "warnDefaultColor"
            }), 2 == ++e && (e = 0);
        }, 1e3);
    },
    controlShowCharginginfo: function() {
        this.data.controlCharginginfo = !this.data.controlCharginginfo, this.setData({
            controlCharginginfo: this.data.controlCharginginfo
        });
    },
    waves: function(t) {
        t < 100 ? this.setData({
            waveHeight: t + "%"
        }) : this.setData({
            waveHeight: "115%"
        });
    },
    checkCharge: function() {
        var t = this;
        if (this.data.isRestart) {
            clearTimeout(this.timer);
            var a = this.data.restartTimes;
            this.setData({
                restartTimes: --a,
                restartCountDown: 6,
                isRestart: !1
            }), e.post({
                url: "/agent/restart",
                requireAuth: !0,
                showLoading: !0,
                loadingText: "正在重新连接...",
                data: {
                    recordId: this.recordId
                },
                success: function(e) {
                    console.log("正在重新连接", e), 200 === e.statusCode && e.data.startStatus && (t.renderRunStatus(), 
                    t.restartTimer = setInterval(function() {
                        if (0 == t.data.restartCountDown) return t.setData({
                            isRestart: !!t.data.restartTimes,
                            showRestartText: "充电器已接好，开始充电(剩余" + t.data.restartTimes + "次)"
                        }), void clearInterval(t.restartTimer);
                        var e = --t.data.restartCountDown;
                        t.setData({
                            restartCountDown: e,
                            showRestartText: e + "秒"
                        });
                    }, 1e3));
                }
            });
        }
    },
    closeNoLoad: function() {}
});