var t = function() {
    function t(t, e) {
        var a = [], n = !0, s = !1, o = void 0;
        try {
            for (var i, r = t[Symbol.iterator](); !(n = (i = r.next()).done) && (a.push(i.value), 
            !e || a.length !== e); n = !0) ;
        } catch (t) {
            s = !0, o = t;
        } finally {
            try {
                !n && r.return && r.return();
            } finally {
                if (s) throw o;
            }
        }
        return a;
    }
    return function(e, a) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, a);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), e = getApp(), a = require("../../utils/http.js"), n = require("../../utils/auth.js"), s = require("../../utils/config.js");

Page({
    data: {
        prurl: "",
        hidden: !0,
        shareToFriends: !1,
        shareFriendsQuan: !1,
        canvasIsLoad: !1,
        codeImg: "",
        showMask: !1,
        showShare: !1,
        noAgent: !1,
        walletAmount: "0",
        avatarUrl: "http://charge-pile.oss-cn-hangzhou.aliyuncs.com/icon/defaultavatar.png",
        phone: "",
        nickName: "",
        isAgent: !1,
        sponsor: !1,
        changeUsermodal: !1,
        changeUserOrPhone: !1,
        examineStatus: "",
        whatAgentStatus: 0,
        subscribeEnable: !1,
        property: !1,
        pilingAccount: !1,
        isWeChat: !0,
        registerType: "",
        userType: 1
    },
    captchaClick: !1,
    isjumpTositemanagementclicked: !1,
    agentId: "",
    agentStatus: "",
    reviewStatus: "",
    waitGoH5: !0,
    onLoad: function() {
        var t = wx.getStorageSync("miniType");
        this.setData({
            isWeChat: 1 == t
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = this;
        n.authorized(!1) && this.queryBalance(function(e) {
            console.log(e), t.setData({
                phone: e.phone,
                avatarUrl: e.avatar
            });
        });
    },
    onHide: function() {
        clearInterval(this.interval), wx.removeStorageSync("switchMobile"), wx.removeStorageSync("replaceMobile");
    },
    navtoTopup: function() {
        this.isCreateBrief("/pages/mine/user-card/index");
    },
    jumptoCardManagement: function() {
        this.isCreateBrief("/pages/mine/electric-card-management/index");
    },
    contactService: function() {
        this.isCreateBrief("/pages/mine/here-service/index");
    },
    faultRepair: function() {
        this.isCreateBrief("/pages/mine/fault-repair/index");
    },
    showShare: function() {
        this.isCreateBrief("/pages/mine/official-account/index");
    },
    goFeedback: function() {
        this.isCreateBrief("/pages/index/records/index");
    },
    jumpToapplyMaster: function() {
        n.authorized(!0) && (0 === this.agentStatus || 4 === this.agentStatus && 0 == this.reviewStatus ? wx.navigateTo({
            url: "/pages/apply/complete/index"
        }) : (2 === this.agentStatus || this.reviewStatus, wx.navigateTo({
            url: "/pages/apply/master/index"
        })));
    },
    queryBalance: function(t) {
        var e = this;
        a.get({
            url: "/user/brief-info",
            requireAuth: !0,
            data: {
                flag: !0
            },
            success: function(a) {
                200 === a.statusCode && (n.saveUserInfo(a.data), e.setData({
                    walletAmount: a.data.walletAmount,
                    sponsor: a.data.sponsor,
                    whatAgentStatus: a.data.agentStatus,
                    subscribeEnable: a.data.subscribeEnable,
                    userType: a.data.userType
                }), t && t(a.data), a.data.agentId || 0 == a.data.agentId ? 1 == a.data.agentStatus ? (e.setData({
                    isAgent: !0,
                    noAgent: !1,
                    pilingAccount: !1,
                    property: !1
                }), e.agentId = a.data.agentId, e.agentStatus = a.data.agentStatus) : 0 == a.data.agentStatus ? (e.agentStatus = a.data.agentStatus, 
                e.setData({
                    isAgent: !1,
                    examineStatus: "(正在审核中)",
                    property: a.data.bonus
                })) : 2 == a.data.agentStatus ? (e.agentStatus = a.data.agentStatus, e.setData({
                    isAgent: !1,
                    noAgent: !0,
                    examineStatus: "(审核未通过)",
                    property: a.data.bonus
                })) : 4 == a.data.agentStatus ? (e.agentStatus = a.data.agentStatus, e.reviewStatus = a.data.reviewStatus, 
                e.setData({
                    pilingAccount: !0,
                    noAgent: !0,
                    isAgent: !1,
                    property: a.data.bonus
                }), 0 == a.data.reviewStatus ? e.setData({
                    examineStatus: "(正在审核中)"
                }) : 2 == a.data.reviewStatus && e.setData({
                    examineStatus: "(审核未通过)"
                })) : e.setData({
                    noAgent: !0,
                    isAgent: !1,
                    property: a.data.bonus
                }) : e.setData({
                    noAgent: !0,
                    pilingAccount: !1,
                    isAgent: !1,
                    property: a.data.bonus
                }));
            }
        });
    },
    isCreateBrief: function(t) {
        n.authorized(!0) && wx.navigateTo({
            url: t
        });
    },
    changeoPerate: function(t) {
        this.setData({
            changeUsermodal: !1,
            changeUserOrPhone: !0,
            registerType: t.currentTarget.dataset.type
        });
    },
    onRegisteSuccess: function() {
        var t = this;
        n.setAuthorized(), this.queryBalance(function(e) {
            t.setData({
                phone: e.phone,
                avatarUrl: e.avatar
            });
        }), this.closeRegistDialog();
    },
    closeRegistDialog: function() {
        this.setData({
            changeUserOrPhone: !1
        });
    },
    controlChangeUserModal: function() {
        n.authorized(!0);
    },
    hideControlChangeUserModal: function() {
        this.setData({
            changeUsermodal: !1
        });
    },
    hideShare: function() {
        var t = this;
        wx.showTabBar({
            animation: !0,
            success: function() {
                t.setData({
                    showMask: !1,
                    showShare: !1
                });
            }
        });
    },
    hidechangeUsermodal: function() {
        this.setData({
            changeUsermodal: !1,
            shareToFriends: !1,
            shareFriendsQuan: !1
        });
    },
    accountManagement: function() {
        n.authorized(!0) && this.setData({
            changeUsermodal: !0
        });
    },
    shareBtn: function() {
        n.authorized(!0) && this.setData({
            shareToFriends: !0,
            shareFriendsQuan: !0,
            hidden: !0
        });
    },
    share: function() {
        var t = this;
        wx.showLoading({
            title: "努力生成中..."
        }), a.get({
            url: "/applet-code/wx-code",
            async: !1,
            responseType: "arraybuffer",
            success: function(e) {
                if (200 == e.statusCode) {
                    var a = "data:image/PNG;base64," + wx.arrayBufferToBase64(e.data);
                    t.base64src(a, function(e) {
                        var a = wx.createCanvasContext("shareImg", t);
                        a.drawImage("../../icons/share-bg.jpg", 0, 0, 588, 888), a.drawImage(e, 140, 480, 300, 300), 
                        a.setTextAlign("center"), a.setFillStyle("#ffffff"), a.stroke(), a.draw(!0, setTimeout(function() {
                            wx.canvasToTempFilePath({
                                x: 0,
                                y: 0,
                                width: 588,
                                height: 888,
                                destWidth: 588,
                                destHeight: 888,
                                canvasId: "shareImg",
                                success: function(e) {
                                    t.setData({
                                        prurl: e.tempFilePath,
                                        hidden: !1,
                                        shareToFriends: !1,
                                        canvasIsLoad: !0
                                    }), wx.hideLoading();
                                },
                                fail: function(t) {
                                    console.log(t, "错误");
                                }
                            }, t);
                        }, 2e3));
                    });
                } else wx.showToast({
                    title: "生成失败",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    save: function() {
        var t = this;
        console.log("用户点击保存"), wx.saveImageToPhotosAlbum({
            filePath: t.data.prurl,
            success: function(e) {
                console.log(e), wx.showModal({
                    content: "图片已保存到相册，赶紧晒一下吧~",
                    showCancel: !1,
                    confirmText: "好哒",
                    confirmColor: "#72B9C3",
                    success: function(e) {
                        e.confirm && (console.log("用户点击确定"), t.setData({
                            hidden: !0
                        }));
                    }
                });
            },
            fail: function(t) {
                console.log(t), "saveImageToPhotosAlbum:fail:auth denied" !== t.errMsg && "saveImageToPhotosAlbum:fail auth deny" !== t.errMsg && "saveImageToPhotosAlbum:fail authorize no response" !== t.errMsg || wx.showModal({
                    title: "提示",
                    content: "需要您授权保存相册",
                    showCancel: !1,
                    success: function(t) {
                        wx.openSetting({
                            success: function(t) {
                                console.log("settingdata", t), t.authSetting["scope.writePhotosAlbum"] ? wx.showModal({
                                    title: "提示",
                                    content: "获取权限成功,再次点击图片即可保存",
                                    showCancel: !1
                                }) : wx.showModal({
                                    title: "提示",
                                    content: "获取权限失败，将无法保存到相册哦~",
                                    showCancel: !1
                                });
                            },
                            fail: function(t) {
                                console.log("failData", t);
                            }
                        });
                    }
                });
            }
        });
    },
    onShareAppMessage: function(t) {
        this.setData({
            changeUsermodal: !1,
            shareToFriends: !1,
            shareFriendsQuan: !1
        });
        if (e.getConfig().then(function(t) {
            t.appName;
        }), "button" == t.from) {
            t.target.dataset;
            console.log(t.target);
        }
        return shareObj;
    },
    base64src: function(e, a) {
        var n = wx.getFileSystemManager(), s = /data:image\/(\w+);base64,(.*)/.exec(e) || [], o = t(s, 3), i = o[1], r = o[2];
        if (!i) return new Error("ERROR_BASE64SRC_PARSE");
        var u = wx.env.USER_DATA_PATH + "/tmp_base64src." + i, c = wx.base64ToArrayBuffer(r);
        n.writeFile({
            filePath: u,
            data: c,
            encoding: "binary",
            success: function() {
                a(u);
            },
            fail: function() {
                return new Error("ERROR_BASE64SRC_WRITE");
            }
        });
    },
    jumpToagentH5: function(t) {
        this.setData({
            nickName: t.detail.userInfo.nickName
        }), this.jumpToH5Sys();
    },
    jumpToH5: function() {
        this.jumpToH5Sys("login/login", "&userType=4");
    },
    jumpToPropertyH5: function(t) {
        this.setData({
            nickName: t.detail.userInfo.nickName
        });
        this.jumpToH5Sys("login/login", "&userType=3");
    },
    withdrawal: function() {
        var t = this;
        this.waitGoH5 && (this.waitGoH5 = !1, a.get({
            url: "/agent/index",
            requireAuth: !0,
            success: function(e) {
                if (200 === e.statusCode) {
                    if (e.data.loanWalletAmount > 0 & e.data.bonusAmount > e.data.loanWalletAmount) return void wx.showModal({
                        title: "提示",
                        confirmText: "去还款",
                        content: "您有未先还款账单，请先去代理商后台还款，再提现",
                        success: function(a) {
                            if (a.confirm) {
                                t.waitGoH5 = !0;
                                var n = "&loanWalletAmount=" + e.data.loanWalletAmount / 100 + "&bonusAmount=" + e.data.bonusAmount / 100 + "&userName=" + t.data.phone;
                                t.jumpToH5Sys("login/login", n);
                            } else a.cancel && (t.waitGoH5 = !0);
                        }
                    });
                    t.waitGoH5 = !0, wx.navigateTo({
                        url: "/pages/mine/withdrawal/index?withdrawalbalance=" + e.data.bonusAmount
                    });
                } else t.waitGoH5 = !0, wx.showToast({
                    title: e.data,
                    icon: "none",
                    duration: 2e3
                });
            }
        }));
    },
    jumpToH5Sys: function() {
        var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "login/login", n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        this.waitGoH5 && (this.waitGoH5 = !1, a.get({
            url: "/oauth/accessTokenH5",
            requireAuth: !0,
            success: function(a) {
                if (200 === a.statusCode) {
                    t.waitGoH5 = !0;
                    var o = "https://" + (s.isTest ? "tst-" : "") + "agentadmin.cdyun.vip/" + s.uriPrefix + "/#/" + e + "?nickName=" + t.data.nickName + "&accessToken=" + JSON.stringify(a.data) + n;
                    wx.navigateTo({
                        url: "/pages/mine/agent-admin/index?url=" + encodeURIComponent(o)
                    });
                } else t.waitGoH5 = !0, wx.showToast({
                    title: a.data,
                    icon: "none",
                    duration: 2e3
                });
            }
        }));
    },
    versionInfo: function() {
        wx.navigateTo({
            url: "/pages/mine/version/index"
        });
    }
});