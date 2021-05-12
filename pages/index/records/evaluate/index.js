var t = require("../../../../utils/http.js");

require("../../../../utils/util.js");

Page({
    data: {
        condition: !0,
        currentStar: 4,
        wordNum: 0,
        value: "",
        feedbackInfo: "",
        noClick: !1
    },
    onLoad: function(t) {
        this.recordId = t.recordId, -1 != t.commentStatus && (this.recordId = t.recordId, 
        this.setData({
            condition: !1
        }), this.getFeedbackInfo());
    },
    onReady: function() {},
    onShow: function() {},
    getFeedbackInfo: function() {
        var a = this;
        t.post({
            url: "/charge-record/comments-detail",
            requireAuth: !0,
            data: {
                recordId: this.recordId
            },
            success: function(t) {
                200 === t.statusCode ? a.setData({
                    feedbackInfo: t.data
                }) : wx.showToast({
                    title: t.data,
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
    startEvaluation: function(t) {
        var a = parseInt(t.detail.value.length);
        this.setData({
            wordNum: a,
            value: t.detail.value
        });
    },
    chooseStar: function(t) {
        var a = parseInt(t.currentTarget.dataset.index);
        if (a > this.data.currentStar || 0 == a) this.setData({
            currentStar: a
        }); else {
            if (0 == this.data.currentStar) return;
            this.setData({
                currentStar: a - 1
            });
        }
    },
    evaluateBtn: function() {
        var a = this;
        "" != this.data.value ? (this.setData({
            noClick: !0
        }), t.post({
            url: "/charge-record/saveComments",
            requireAuth: !0,
            showLoading: !0,
            data: {
                recordId: this.recordId,
                stars: this.data.currentStar + 1,
                content: this.data.value
            },
            success: function(t) {
                200 === t.statusCode ? setTimeout(function() {
                    wx.showToast({
                        title: "反馈成功",
                        icon: "none",
                        duration: 2e3,
                        success: function() {
                            setTimeout(function() {
                                wx.navigateBack({
                                    delta: 1
                                });
                            }, 2e3);
                        }
                    });
                }, 0) : (wx.showToast({
                    title: t.data,
                    icon: "none",
                    duration: 2e3
                }), a.setData({
                    noClick: !1
                }));
            },
            fail: function(t) {
                wx.showToast({
                    title: t.data,
                    icon: "none",
                    duration: 2e3
                }), a.setData({
                    noClick: !1
                });
            }
        })) : wx.showToast({
            title: "评价内容不能为空",
            icon: "none",
            duration: 2e3
        });
    }
});