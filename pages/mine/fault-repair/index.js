var e = require("../../../utils/config.js"), i = require("../../../utils/http.js"), t = e.endpoint.https, n = require("../../../utils/util.js");

Page({
    data: {
        chooseImgList: [],
        isShowAddImg: !1,
        pileNum: null,
        content: "",
        disabledPileNumInput: !1,
        noClick: !1
    },
    pileNo: 0,
    onLoad: function(e) {
        e.pileNo && (this.setData({
            pileNum: e.pileNo,
            disabledPileNumInput: !0
        }), this.pileNo = e.pileNo);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    previewImg: function(e) {
        var i = e.target.dataset.index, t = this.data.chooseImgList;
        wx.previewImage({
            current: t[i],
            urls: t
        });
    },
    chooseImg: function() {
        var e = this;
        wx.chooseImage({
            count: 4,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(i) {
                for (var t = [], n = "", o = 0; o < i.tempFiles.length; o++) i.tempFiles[o].size <= 3e6 ? (n = i.tempFiles[o].path, 
                t.push(n)) : wx.showToast({
                    title: "上传图片不能大于3M,已帮您自动忽略大于3M图片",
                    icon: "none",
                    duration: 3e3
                });
                var a = e.data.chooseImgList.concat(t), s = a.length <= 4 ? a : a.slice(0, 4);
                (s.length > 4 || 4 == s.length) && e.setData({
                    isShowAddImg: !0
                }), e.setData({
                    chooseImgList: s
                });
            }
        });
    },
    getPileNumScan: function() {
        var i = this;
        wx.scanCode({
            success: function(t) {
                var o = t.path, a = t.result, s = e.uriPrefix;
                if (o && o.includes("pages/charge/detail/index?scene=")) wx.navigateTo({
                    url: "/" + o
                }); else if (a && (a.includes("api-cdz.ejlchina-app.com") || a.includes("api-mini.cdyun.vip")) && (a.includes(s + "/mini-app/") || a.includes(s + "/mini-app-zfb/"))) {
                    if (-1 != (d = (u = decodeURIComponent(a)).substring(u.lastIndexOf("/") + 1)).indexOf("-") ? i.pileNo = d.split("-")[0] : i.pileNo = d, 
                    d.length < 7) {
                        var l = u.substring(u.indexOf("mini-app/") + 9, u.lastIndexOf("/")), c = l.slice(4, 6) + l.slice(2, 4) + l.slice(0, 2);
                        i.pileNo = n.hex2int(c).toString();
                    }
                    i.setData({
                        pileNum: i.pileNo
                    });
                } else if (a && a.includes("weixin.qq.com")) {
                    var u = decodeURIComponent(a), d = u.substring(u.lastIndexOf("/") + 1);
                    i.setData({
                        pileNum: d
                    });
                } else wx.showToast({
                    title: "请扫正确的小程序码",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    feedbackContent: function(e) {
        this.setData({
            content: e.detail.value
        });
    },
    getPileNum: function(e) {
        this.pileNo = e.detail.value;
    },
    submitBtn: function() {
        var e = this;
        if ("" != this.pileNo) if ("" != this.data.content) {
            wx.showLoading({
                title: "正在上传...",
                mask: !0
            }), console.log(this.data.chooseImgList, "this.data.chooseImgList");
            var i = this, n = this.data.chooseImgList.map(function(e) {
                return new Promise(function(n, o) {
                    wx.uploadFile({
                        url: t + "/charge-pile-repair/upload",
                        filePath: e,
                        name: "file",
                        formData: {
                            user: "test"
                        },
                        success: function(e) {
                            i.setData({
                                noClick: !0
                            }), n(e.data);
                        },
                        fail: function(e) {
                            o("failed to upload file");
                        }
                    });
                });
            });
            Promise.all(n).then(function(i) {
                console.log(i, "提交之后图片链接");
                var t = i.map(function(e) {
                    return JSON.parse(e).url;
                }).toString();
                e.submitFailure(t);
            }).catch(function(e) {
                wx.hideLoading(), wx.showToast({
                    title: e,
                    icon: "none",
                    duration: 2e3
                }), console.log(">>>> upload images error:", e);
            });
        } else wx.showToast({
            title: "请输入反馈内容",
            icon: "none",
            duration: 2e3
        }); else wx.showToast({
            title: "请输入桩号",
            icon: "none",
            duration: 2e3
        });
    },
    submitFailure: function(e) {
        var t = this;
        i.post({
            url: "/charge-pile-repair/commit",
            showLoading: !0,
            loadingText: "正在提交...",
            requireAuth: !0,
            data: {
                pileNo: this.pileNo,
                content: this.data.content,
                img: e
            },
            success: function(e) {
                console.log(e, "发送成功"), 200 === e.statusCode ? (t.setData({
                    noClick: !0
                }), setTimeout(function() {
                    wx.showToast({
                        title: "报修成功，非常感谢",
                        icon: "none",
                        duration: 3e3
                    }), setTimeout(function() {
                        wx.navigateBack({
                            delta: 1
                        });
                    }, 3e3);
                }, 0)) : (wx.showToast({
                    title: e.data,
                    icon: "none",
                    duration: 2e3
                }), t.setData({
                    noClick: !1
                })), wx.hideLoading();
            },
            fail: function(e) {
                wx.showToast({
                    title: e.data,
                    icon: "none",
                    duration: 2e3
                }), t.setData({
                    noClick: !1
                }), wx.hideLoading();
            }
        });
    }
});