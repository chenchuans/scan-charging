var t = getApp(), e = require("../../../utils/auth.js"), a = require("../../../utils/http.js"), i = require("../../../utils/pay.js"), s = require("../../../utils/util.js"), o = require("../../../utils/constant.js");

Page({
    data: {
        showWelcome: !1,
        adContent: {},
        chargingWrapper: "",
        status: [ "空闲", "占用", "禁用", "故障" ],
        chargingPileList: [],
        timeLength: [],
        curIndex: "",
        curtimeindex: "",
        pileNo: "",
        sitePrice: 0,
        balance: "",
        minusWallet: 0,
        pageDeep: 0,
        pickIndex: 0,
        isTapTime: !0,
        samllExpected: 0,
        middleExpected: 0,
        largeExpected: 0,
        paymodal: !1,
        optType: 0,
        feeType: 0,
        price: 0,
        options: [],
        minAmount: 0,
        minPower: 0,
        midPower: 0,
        maxPower: 0,
        needTopup: !0,
        chargeTips: "",
        routerList: [],
        routerNum: 10,
        routerIndex: 0,
        collected: !1,
        isShowPaymentMethod: !1,
        isShowMask: !1,
        chooseWhichPayment: 1,
        walletId: "",
        siteWalletId: "",
        weChatPayment: !1,
        balancePayment: !1,
        specialPayment: !1,
        siteBalance: 0,
        activityOpened: !1,
        pileType: 1,
        isWeChat: !0,
        miniPayName: "微信支付",
        miniPayLogo: "",
        isContinueCharge: !1,
        showRecharge: !1,
        vehicleType: 1,
        isShowOfflineCharge: !1,
        otpPrice: 0,
        pileStatus: 1,
        offlineCharge: !1,
        isShowDynamicCode: !1,
        dynamicCode: "",
        mixPayEnabled: !1,
        isShowOfflineTips: !1,
        closeTime: 10
    },
    timer: null,
    isTapPort: !1,
    hour: 0,
    pileNo: "",
    pilePort: 0,
    pileId: 0,
    sendport: "",
    recordId: 0,
    dataOptions: [],
    siteId: 0,
    v: null,
    wxAppMsgTmplId: "",
    quantityOptions: [ {
        value: 500,
        label: "0.5千瓦时",
        deft: !1
    }, {
        value: 1e3,
        label: "1.0千瓦时",
        deft: !1
    }, {
        value: 2e3,
        label: "2.0千瓦时",
        deft: !1
    }, {
        value: 3e3,
        label: "3.0千瓦时",
        deft: !1
    }, {
        value: 5e3,
        label: "5.0千瓦时",
        deft: !0
    } ],
    timeOptions: [ {
        value: 1,
        label: "1小时",
        deft: !1
    }, {
        value: 2,
        label: "2小时",
        deft: !1
    }, {
        value: 3,
        label: "3小时",
        deft: !1
    }, {
        value: 4,
        label: "4小时",
        deft: !1
    }, {
        value: 5,
        label: "5小时",
        deft: !1
    }, {
        value: 6,
        label: "6小时",
        deft: !1
    }, {
        value: 7,
        label: "7小时",
        deft: !1
    }, {
        value: 8,
        label: "8小时",
        deft: !1
    }, {
        value: 9,
        label: "9小时",
        deft: !1
    }, {
        value: 10,
        label: "10小时",
        deft: !0
    } ],
    amountOptions: [ {
        value: 100,
        label: "1元",
        deft: !1
    }, {
        value: 200,
        label: "2元",
        deft: !0
    }, {
        value: 300,
        label: "3元",
        deft: !1
    }, {
        value: 400,
        label: "4元",
        deft: !1
    }, {
        value: 500,
        label: "5元",
        deft: !1
    }, {
        value: 600,
        label: "6元",
        deft: !1
    }, {
        value: 700,
        label: "7元",
        deft: !0
    }, {
        value: 800,
        label: "8元",
        deft: !1
    }, {
        value: 900,
        label: "9元",
        deft: !1
    }, {
        value: 1e3,
        label: "10元",
        deft: !1
    } ],
    instantPayEnable: !0,
    onLoad: function(a) {
        var i = this;
        if (a.scene) a.isContinue ? (this.pileNo = a.scene, this.pilePort = a.pileNumSite) : (this.pileNo = decodeURIComponent(a.scene), 
        a.pileNumSite && (this.pilePort = a.pileNumSite)); else {
            var o = decodeURIComponent(a.q);
            if (this.pileNo = o.substring(o.lastIndexOf("/") + 1).trim(), this.pileNo.length < 7) {
                var n = o.substring(o.indexOf("mini-app/") + 9, o.lastIndexOf("/")), r = n.slice(4, 6) + n.slice(2, 4) + n.slice(0, 2);
                "ff" === this.pileNo ? this.pileNo = s.hex2int(r) : (this.pilePort = s.hex2int(this.pileNo) + 1, 
                this.pileNo = s.hex2int(r));
            }
        }
        this.setData({
            pageDeep: getCurrentPages().length
        }), this.getMessageTemplate(), wx.getSystemInfo({
            success: function(t) {
                i.v = t.version;
            }
        });
        var c = wx.getStorageSync("miniType");
        if (this.setData({
            isWeChat: 1 == c,
            miniPayName: 1 == c ? "微信支付" : "支付宝支付",
            miniPayLogo: 1 == c ? "https://charge-pile.oss-cn-hangzhou.aliyuncs.com/icon/icon_wechatpayment2x.png" : "https://charge-pile.oss-cn-hangzhou.aliyuncs.com/icon/icon_zhifubao.png"
        }), t.ermpileNo && 2 == c) {
            var l = decodeURIComponent(t.ermpileNo), d = l.substring(l.lastIndexOf("/") + 1).trim();
            -1 != d.indexOf("-") ? (this.pileNo = d.split("-")[0], this.codePileNumSite = d.split("-")[1]) : this.pileNo = d;
        }
        e.authorized(!0, !0) && (this.loadWelcomeImage(), this.getpaymentMethod(), this.loadChargeOption(), 
        this.loadPileInfo());
    },
    onShow: function() {},
    choossPayment: function(t) {
        var e = t.currentTarget.dataset.method;
        this.setData({
            chooseWhichPayment: e,
            isShowPaymentMethod: !1,
            isShowMask: !1
        });
    },
    choosePaymentMethod: function() {
        this.setData({
            isShowPaymentMethod: !0,
            isShowMask: !0
        });
    },
    getpaymentMethod: function() {
        var t = this;
        a.get({
            url: "/user/pay-type",
            requireAuth: !0,
            data: {
                pileNo: this.pileNo
            },
            success: function(e) {
                200 === e.statusCode ? (t.setData({
                    mixPayEnabled: e.data.mixPayEnabled
                }), 1 == e.data.extPayFirst ? (t.setData({
                    chooseWhichPayment: 3,
                    weChatPayment: !0,
                    balancePayment: !0,
                    balance: e.data.balance
                }), e.data.siteBalance && t.setData({
                    specialPayment: !0,
                    siteBalance: e.data.siteBalance
                })) : e.data.siteBalance ? t.setData({
                    chooseWhichPayment: 2,
                    siteWalletId: e.data.siteWalletId,
                    specialPayment: !0,
                    balancePayment: !0,
                    balance: e.data.balance,
                    siteBalance: e.data.siteBalance
                }) : t.setData({
                    chooseWhichPayment: 1,
                    walletId: e.data.walletId,
                    balancePayment: !0,
                    balance: e.data.balance
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
    collecteBtn: function() {
        var t = this;
        a.get({
            url: "/charge-pile-collect/add",
            requireAuth: !0,
            data: {
                chargePileId: this.pileId
            },
            success: function(e) {
                200 === e.statusCode ? wx.showToast({
                    title: t.data.collected ? "取消收藏" : "收藏成功",
                    icon: "success",
                    duration: 2e3,
                    success: function() {
                        t.setData({
                            collected: !t.data.collected
                        });
                    }
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
    controlpaymodal: function(t) {
        t && (this.setData({
            paymodal: !0
        }), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#0e4f38"
        }));
    },
    repairPay: function() {
        wx.navigateTo({
            url: "/pages/index/records/detail/index?recordId=" + this.unpaidRecordId
        });
    },
    loadChargeOption: function() {
        var t = this;
        a.get({
            url: "/charge-option/index",
            requireAuth: !0,
            data: {
                pileNo: this.pileNo
            },
            success: function(e) {
                200 == e.statusCode && (e.data.timeOptions.length && (t.timeOptions = e.data.timeOptions), 
                e.data.quantityOptions.length && (t.quantityOptions = e.data.quantityOptions), e.data.amountOptions.length && (t.amountOptions = e.data.amountOptions));
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    loadPileInfo: function() {
        var t = this;
        a.get({
            url: "/charge-pile/show",
            requireAuth: !0,
            showLoading: !0,
            data: {
                pileNo: this.pileNo
            },
            success: function(e) {
                if (200 == e.statusCode) {
                    wx.hideToast(), e.data.offlineCharge && 2 === e.data.status && t.setData({
                        isShowOfflineCharge: !0,
                        isShowMask: !0,
                        otpPrice: e.data.otpPrice
                    }), e.data.offlineCharge || 1 == e.data.status || t.setData({
                        isShowOfflineTips: !0,
                        isShowMask: !0
                    }), t.controlpaymodal(e.data.unpaidRecordId), t.unpaidRecordId = e.data.unpaidRecordId, 
                    wx.setStorageSync("pileDetail", encodeURIComponent(JSON.stringify(e.data))), t.pileId = e.data.id, 
                    t.ports = e.data.ports, t.optType = e.data.optType, t.feeType = e.data.feeType, 
                    t.sitePrice = e.data.sitePrice / 1e3, t.minAmount = e.data.minPrepaidAmount / 100, 
                    t.minPower = e.data.referPowers[0], t.midPower = e.data.referPowers[1], t.maxPower = e.data.referPowers[2];
                    var a = t.ports.length;
                    if (t.siteId = e.data.siteId, e.data.activityEnabled && t.setData({
                        activityOpened: !0
                    }), t.ports.map(function(t) {
                        return 1 != t.status && (t.pickDisabled = !0), t;
                    }), (0 == e.data.price && 0 == e.data.minPrepaidAmount && 3 == e.data.optType && 3 != e.data.feeType || t.pileNo && t.pilePort) && t.ports.map(function(t) {
                        return t.pickDisabled = !0, t;
                    }), a > t.data.routerNum) {
                        for (var i = parseInt(a / t.data.routerNum), s = a % t.data.routerNum, o = [], n = [], r = 0, c = 0, l = 0, d = 0; d < i + 1; d++) r = d * t.data.routerNum + 1, 
                        c = (d + 1) * t.data.routerNum, l = d * t.data.routerNum, s && d == i && (o.push({
                            routerName: r + "-" + a + "端口"
                        }), n.push(t.ports.slice(l, a))), d < i && (o.push({
                            routerName: r + "-" + c + "端口"
                        }), n.push(t.ports.slice(l, c)));
                        t.setData({
                            routerList: o,
                            chargingPileList: n
                        });
                    } else t.setData({
                        chargingPileList: [ t.ports.slice(0, t.data.routerNum) ]
                    });
                    t.pileNo && t.pilePort && (t.pilePort = "A" === t.pilePort ? 1 : "B" === t.pilePort ? 2 : t.pilePort, 
                    t.setData({
                        routerIndex: parseInt((t.pilePort - 1) / t.data.routerNum)
                    }), t.codeOnTapPort(t.pilePort));
                    var h = [];
                    if (1 == e.data.optType) for (var p = 0; p < t.timeOptions.length; p++) t.timeOptions[p].price = e.data.sitePrice * t.timeOptions[p].value, 
                    h.push(t.timeOptions[p]);
                    if (2 == e.data.optType) for (var u = 0; u < t.quantityOptions.length; u++) t.quantityOptions[u].price = e.data.sitePrice * (t.quantityOptions[u].value / 1e3).toFixed(1), 
                    h.push(t.quantityOptions[u]);
                    if (3 == e.data.optType) for (var f = 0; f < t.amountOptions.length; f++) t.amountOptions[f].price = t.amountOptions[f].value, 
                    h.push(t.amountOptions[f]);
                    var m = 10 * e.data.minPrepaidAmount / e.data.sitePrice;
                    if (2 == e.data.feeType && (m *= 1e3), e.data.sitePrice > 0) {
                        var g = [];
                        if (e.data.optType == e.data.feeType && 3 != e.data.optType) {
                            for (var w = 0; w < h.length; w++) h[w].value >= m && g.push(h[w]);
                            h = g;
                        } else if (3 == e.data.optType) {
                            for (var T = 0; T < h.length; T++) h[T].value >= e.data.minPrepaidAmount && g.push(h[T]);
                            h = g;
                        }
                    }
                    t.setData({
                        pileStatus: e.data.status,
                        offlineCharge: e.data.offlineCharge,
                        vehicleType: e.data.vehicleType,
                        startPort: parseFloat(t.ports[0].port),
                        timeLength: h,
                        pileNo: e.data.pileNo,
                        optType: e.data.optType,
                        feeType: e.data.feeType,
                        price: e.data.price / 100,
                        sitePrice: e.data.sitePrice,
                        minAmount: e.data.minPrepaidAmount / 100,
                        chargeTips: e.data.message.replace(new RegExp("\n", "gm"), "<br>"),
                        collected: e.data.collected,
                        pileType: e.data.pileType
                    }), t.initmoney(h, t.data.balance);
                } else 404 == e.statusCode && wx.showModal({
                    title: "提示",
                    content: "该桩未上线",
                    showCancel: !1,
                    success: function() {
                        wx.switchTab({
                            url: "/pages/index/index"
                        });
                    }
                });
            },
            fail: function(t) {
                wx.showModal({
                    title: "提示",
                    content: "该桩未上线",
                    showCancel: !1,
                    success: function() {
                        wx.switchTab({
                            url: "/pages/index/index"
                        });
                    }
                });
            }
        });
    },
    toUsercardRecharge: function(t) {
        this.setData({
            showRecharge: !0
        });
    },
    closeShowRecharge: function() {
        this.setData({
            showRecharge: !1
        });
    },
    chooseRecharge: function(t) {
        var e = "";
        e = 5 == t.currentTarget.dataset.type ? "/pages/mine/topup/index?siteId=" + this.siteId + "&rechargeType=5" : "/pages/mine/topup/index?cardNo=&siteId=" + this.siteId + "&rechargeType=4", 
        wx.navigateTo({
            url: e
        }), this.closeShowRecharge();
    },
    chooseRouter: function(t) {
        this.setData({
            routerIndex: t.currentTarget.dataset.router
        });
    },
    initmoney: function(t, e) {
        for (var a = t.length - 1, i = 0; i < t.length; i++) if (t[i].deft) {
            a = i;
            break;
        }
        this.setData({
            pickIndex: a
        }), this.changeValue(t, e), this.hour = t[this.data.pickIndex].value;
    },
    bindtimeChange: function(t) {
        this.setData({
            pickIndex: t.detail.value
        }), this.changeValue(this.data.timeLength, this.data.balance), this.hour = parseFloat(this.data.timeLength[t.detail.value].value), 
        this.setData({
            isTapTime: !0
        });
    },
    changeValue: function(t, e) {
        var a = t[this.data.pickIndex].price;
        if (this.feeType == this.optType) a <= e ? this.setData({
            sitePrice: a / 100,
            minusWallet: a / 100
        }) : this.setData({
            sitePrice: a / 100,
            minusWallet: this.data.balance / 100
        }), this.setNeedTopup(a); else {
            var i = function(t) {
                return parseFloat(t.toFixed(2));
            }, s = t[this.data.pickIndex].value;
            this.setData({
                samllExpected: i(1 == this.optType ? s * (this.minPower / 1e3) * this.sitePrice : (s / 1e3).toFixed(1) * this.sitePrice / (this.minPower / 1e3)),
                middleExpected: i(1 == this.optType ? s * (this.midPower / 1e3) * this.sitePrice : (s / 1e3).toFixed(1) * this.sitePrice / (this.midPower / 1e3)),
                largeExpected: i(1 == this.optType ? s * (this.maxPower / 1e3) * this.sitePrice : (s / 1e3).toFixed(1) * this.sitePrice / (this.maxPower / 1e3))
            }), this.setNeedTopup(100 * this.data.minAmount);
        }
    },
    setNeedTopup: function(t) {
        !this.data.mixPayEnabled && 1 == this.data.chooseWhichPayment && t > this.data.balance ? this.setData({
            needTopup: !0
        }) : this.setData({
            needTopup: !1
        }), 2 == this.data.chooseWhichPayment && t > this.data.siteBalance ? this.setData({
            siteBalanceNeedTopup: !0
        }) : this.setData({
            siteBalanceNeedTopup: !1
        });
    },
    codeOnTapPort: function(t) {
        if (3 != this.data.pileType && 6 != this.data.pileType || (t = "A" == t ? 1 : 2), 
        1 != this.data.chargingPileList[this.data.routerIndex].filter(function(e) {
            return e.port == t;
        })[0].status) return wx.showToast({
            title: "该桩点不可用!",
            icon: "none",
            duration: 2e3
        }), setTimeout(function() {
            wx.hideToast();
        }, 3e3), !1;
        this.setData({
            curIndex: parseInt(t)
        }), this.sendport = t, this.isTapPort = !0;
    },
    getMessageTemplate: function() {
        var t = this;
        a.get({
            url: "/MiniApp/findMsgTmplId",
            success: function(e) {
                200 === e.statusCode ? t.wxAppMsgTmplId = e.data.wxAppMsgTmplId : wx.showToast({
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
    ontapPort: function(t) {
        if (this.pilePort && this.pileNo) wx.showToast({
            title: "不可点击",
            icon: "none",
            duration: 2e3
        }); else {
            var e = t.currentTarget.dataset, a = e.curindex, i = e.status, s = e.port;
            if ("1" !== i) return;
            this.setData({
                curIndex: a + this.data.routerIndex * this.data.routerNum
            }), this.sendport = s, this.isTapPort = !0;
        }
    },
    nowChargine: function() {
        if (this.data.isWeChat) {
            var t = this;
            wx.requestSubscribeMessage({
                tmplIds: [ this.wxAppMsgTmplId ],
                success: function(e) {
                    t.startCharge();
                },
                fail: function(e) {
                    wx.showToast({
                        title: "未订阅将收不到充电结束的消息哦！",
                        icon: "none",
                        duration: 2e3,
                        success: function() {
                            setTimeout(function() {
                                t.startCharge();
                            }, 1e3);
                        }
                    });
                }
            });
        } else this.startCharge();
    },
    startCharge: function(t) {
        var e = this;
        if (this.isTapPort) {
            if (2 === this.data.pileStatus && this.data.offlineCharge) return 1 == this.data.chooseWhichPayment && this.data.balance < this.data.otpPrice && !this.data.mixPayEnabled ? void wx.showModal({
                title: "温馨提示",
                showCancel: !0,
                content: "余额不足，请先充值",
                cancelText: "取消",
                confirmText: "去充值",
                success: function(t) {
                    t.confirm ? e.navtobalance() : t.cancel;
                }
            }) : 2 == this.data.chooseWhichPayment && this.data.siteBalance < this.data.otpPrice ? void wx.showModal({
                title: "温馨提示",
                showCancel: !0,
                content: "专用账户余额不足，请先充值",
                cancelText: "取消",
                confirmText: "去充值",
                success: function(t) {
                    t.confirm ? e.navtobalance() : t.cancel;
                }
            }) : void this.offlineStart();
            if (this.data.optType == this.data.feeType || 3 == this.data.optType && (1 == this.data.feeType || 2 == this.data.feeType)) {
                if (1 == this.data.chooseWhichPayment) {
                    if (!this.data.mixPayEnabled && this.data.sitePrice / 100 > this.data.balance / 100 && 3 != this.data.optType) return void wx.showModal({
                        title: "温馨提示",
                        showCancel: !0,
                        content: "余额不足，请先充值",
                        cancelText: "取消",
                        confirmText: "去充值",
                        success: function(t) {
                            t.confirm ? e.navtobalance() : t.cancel;
                        }
                    });
                    if (this.data.mixPayEnabled && this.data.sitePrice / 100 > this.data.balance / 100 && 3 != this.data.optType) return void wx.showModal({
                        title: "提示",
                        showCancel: !0,
                        content: "当前余额不足，请选择支付方式",
                        cancelText: "去充值",
                        confirmText: "继续支付",
                        success: function(t) {
                            t.confirm ? e.startCharging() : t.cancel && e.navtobalance();
                        }
                    });
                    if (!this.data.mixPayEnabled && this.data.timeLength[this.data.pickIndex].price > this.data.balance && 3 == this.data.optType) return void wx.showModal({
                        title: "温馨提示",
                        showCancel: !0,
                        content: "余额不足，请先充值",
                        cancelText: "取消",
                        confirmText: "去充值",
                        success: function(t) {
                            t.confirm ? e.navtobalance() : t.cancel;
                        }
                    });
                    if (this.data.mixPayEnabled && this.data.timeLength[this.data.pickIndex].price > this.data.balance && 3 == this.data.optType) return void wx.showModal({
                        title: "提示",
                        showCancel: !0,
                        content: "当前余额不足，请选择支付方式",
                        cancelText: "去充值",
                        confirmText: "继续支付",
                        success: function(t) {
                            t.confirm ? e.startCharging() : t.cancel && e.navtobalance();
                        }
                    });
                }
                if (2 == this.data.chooseWhichPayment) {
                    if (this.data.sitePrice / 100 > this.data.siteBalance / 100 && 3 != this.data.optType) return void wx.showModal({
                        title: "温馨提示",
                        showCancel: !0,
                        content: "余额不足，请先充值",
                        cancelText: "取消",
                        confirmText: "去充值",
                        success: function(t) {
                            t.confirm ? e.toUsercardRecharge() : t.cancel;
                        }
                    });
                    if (this.data.timeLength[this.data.pickIndex].price > this.data.siteBalance && 3 == this.data.optType) return void wx.showModal({
                        title: "温馨提示",
                        showCancel: !0,
                        content: "余额不足，请先充值",
                        cancelText: "取消",
                        confirmText: "去充值",
                        success: function(t) {
                            t.confirm ? e.toUsercardRecharge() : t.cancel;
                        }
                    });
                }
            }
            if (!this.data.isTapTime) return wx.showToast({
                title: "请选择充电时长",
                icon: "none",
                duration: 2e3
            }), !1;
            this.hour;
            3 == this.data.pileType || 6 == this.data.pileType ? wx.setStorageSync("curPileTimeInfo", {
                port: 1 == this.sendport ? "A" : "B",
                hour: this.hour
            }) : wx.setStorageSync("curPileTimeInfo", {
                port: this.sendport,
                hour: this.hour
            }), this.startCharging();
        } else wx.showToast({
            title: "请选择充电端口",
            icon: "none",
            duration: 2e3
        });
    },
    startCharging: function() {
        var e = this;
        0 == this.data.price && 3 == this.data.optType && 3 != this.data.feeType && 0 == this.data.minAmount && (this.hour = 0), 
        a.post({
            url: "/charge-pile/start/" + this.pileId,
            requireAuth: !0,
            showLoading: !0,
            loadingText: "请稍等",
            data: {
                port: this.sendport,
                value: this.hour,
                channel: this.data.isWeChat ? 1 : 2,
                optType: this.optType,
                clntType: this.data.isWeChat ? 1 : 2,
                payType: this.data.chooseWhichPayment,
                v: this.v
            },
            success: function(a) {
                var s = a.data;
                if (e.recordId = s.recordId, wx.setStorageSync("recordId", s.recordId), 200 === a.statusCode) switch (s.status) {
                  case 0:
                    t.updateChargeStatus(o.WAIT_CHARGE), e.startListenAndGotoChargeControlPage();
                    break;

                  case 1:
                    t.updateChargeStatus(o.CHARGING), e.startListenAndGotoChargeControlPage();
                    break;

                  case 8:
                    t.updateChargeStatus(o.CHARG_STARTING), e.startListenAndGotoChargeControlPage();
                    break;

                  case 10:
                    i.pay(s.payInfo).then(function(a) {
                        6 == e.data.pileType ? (t.updateChargeStatus(o.CHARG_STARTING), e.startListenAndGotoChargeControlPage()) : (t.updateChargeStatus(o.WAIT_NOTICE), 
                        e.startListenAndGotoChargeControlPage());
                    }).catch(function(t) {});
                    break;

                  case 20:
                    wx.showModal({
                        title: "温馨提示",
                        showCancel: !0,
                        content: "余额不足，请先充值",
                        cancelText: "取消",
                        confirmText: "去充值",
                        success: function(t) {
                            t.confirm && e.navtobalance();
                        }
                    });
                    break;

                  default:
                    wx.showModal({
                        title: a.data.message,
                        showCancel: !1,
                        content: ""
                    });
                } else wx.showModal({
                    title: a.data,
                    showCancel: !1
                });
            },
            fail: function(t) {
                wx.showModal({
                    title: "设备未响应，请求超时！",
                    showCancel: !1
                });
            }
        });
    },
    offlineStart: function() {
        var e = this;
        a.post({
            url: "/charge-pile/offlineStart",
            requireAuth: !0,
            showLoading: !0,
            loadingText: "请稍等",
            data: {
                id: this.pileId,
                port: this.sendport,
                value: this.data.otpPrice,
                channel: this.data.isWeChat ? 1 : 2,
                optType: this.optType,
                clntType: this.data.isWeChat ? 1 : 2,
                payType: this.data.chooseWhichPayment,
                v: this.v
            },
            success: function(a) {
                if (console.log("动态验证码", a), 200 === a.statusCode) {
                    if (a.data.code) return void e.setData({
                        dynamicCode: a.data.code,
                        isShowDynamicCode: !0,
                        isShowMask: !0
                    });
                    switch (a.data.status) {
                      case 10:
                        t.updateChargeStatus(o.WAIT_NOTICE), t.startListenStompMessage(a.data.recordId), 
                        t.registeChargeStatusCallback(o.CHARGING, function(a) {
                            e.setData({
                                dynamicCode: a.message,
                                isShowDynamicCode: !0,
                                isShowMask: !0
                            }), t.stopListenStompMessage();
                        }), i.pay(a.data.payInfo).then(function() {}).catch(function() {
                            t.stopListenStompMessage();
                        });
                        break;

                      case 20:
                        wx.showModal({
                            title: "温馨提示",
                            showCancel: !0,
                            content: "余额不足，请先充值",
                            cancelText: "取消",
                            confirmText: "去充值",
                            success: function(t) {
                                t.confirm && e.navtobalance();
                            }
                        });
                        break;

                      default:
                        wx.showModal({
                            title: a.data.message,
                            showCancel: !1,
                            content: ""
                        });
                    }
                } else wx.showModal({
                    title: a.data,
                    showCancel: !1
                });
            },
            fail: function(t) {
                wx.showModal({
                    title: "设备未响应，请求超时！",
                    showCancel: !1
                });
            }
        });
    },
    onSocketMessageCallback: function(t) {
        return t;
    },
    renderTitleBarMask: function() {
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#04140b"
        });
    },
    cancelTitleBarMask: function() {
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#24c771"
        });
    },
    hidePicture: function() {
        clearInterval(this.timer), this.timer = null, this.setData({
            closeTime: 10,
            showWelcome: !1
        }), this.cancelTitleBarMask();
    },
    loadWelcomeImage: function() {
        var t = this;
        a.post({
            url: "/banner/index",
            data: {
                place: 2
            },
            success: function(e) {
                200 === e.statusCode ? (0 != e.data.length && (t.setData({
                    showWelcome: !0,
                    adContent: e.data[0]
                }), t.timer = setInterval(function() {
                    t.data.closeTime || (clearInterval(t.timer), t.timer = null, t.setData({
                        showWelcome: !1
                    })), t.setData({
                        closeTime: t.data.closeTime - 1
                    });
                }, 1e3)), t.renderTitleBarMask()) : wx.showToast({
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
    toFaultrepair: function() {
        wx.navigateTo({
            url: "/pages/mine/fault-repair/index?pileNo=" + this.pileNo
        });
    },
    startListenAndGotoChargeControlPage: function() {
        t.startListenStompMessage(this.recordId);
        var e = void 0;
        e = 1 == this.data.vehicleType ? "../control/index" : "../ev-control/index", wx.navigateTo({
            url: e
        });
    },
    navtobalance: function() {
        var t = this.data.walletId, e = 2;
        2 == this.data.chooseWhichPayment && (t = this.data.siteWalletId, e = 5), wx.navigateTo({
            url: "/pages/mine/topup/index?siteId=" + this.siteId + "&walletId=" + t + "&rechargeType=" + e
        });
    },
    jump: function(t) {
        var e = this.data.adContent.type;
        1 != e && (2 == this.data.adContent.origin && a.post({
            url: "/banner/clickBanner",
            requireAuth: !0,
            data: {
                id: this.data.adContent.id
            }
        }), 3 == e ? wx.navigateTo({
            url: "/pages/index/outurl/index?url=" + this.data.adContent.linkUrl
        }) : 2 == e ? wx.navigateToMiniProgram({
            appId: this.data.adContent.linkUrl,
            path: this.data.adContent.miniprogramPage || "pages/index/index",
            success: function(t) {}
        }) : 4 == e && wx.navigateTo({
            url: "/pages/index/rich-text/index?richId=" + this.data.adContent.id
        }));
    },
    confirmCharge: function() {
        this.setData({
            isShowOfflineCharge: !1,
            isShowMask: !1
        });
    },
    closeShowCode: function() {
        this.getpaymentMethod(), this.setData({
            isShowDynamicCode: !1,
            isShowMask: !1
        });
    },
    goHome: function() {
        this.setData({
            isShowOfflineTips: !1,
            isShowMask: !1
        }), wx.reLaunch({
            url: "/pages/near/near-site/index"
        });
    }
});