// pages/user/user.js
const http = require("../../utils/http.js");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"",
    desctext:"",
    feedback: '',
    list: []
  },
  submitMessage(){
    const {phone, desctext, feedback} = this.data;
    if (!phone || !desctext || !feedback) {
      wx.showToast({
        decoration: 3000,
        title:"输入框不能为空！"
    })
      return;
    }
    const _this = this;
    const {uid} = app.userInfo;
    http.post({
        url: "/main/help/update",
        data: {phone, desctext, feedback, uid},
        success: function(res) {
            if (res.statusCode === 200) {
                wx.showToast({
                    decoration: 3000,
                    title:"提交成功！"
                })
               _this.getList();
            }
        }
    });
  },
  bindDesc: function (e) {
    this.setData({
      desctext: e.detail.value
    });
  },
  bindPhone: function (e) {
    this.setData({
      phone: e.detail.value
    });
  },
  bindFeedback: function (e) {
    this.setData({
      feedback: e.detail.value
    });
  },
  getList() {
    const {uid} = app.userInfo;
    const _this = this;
    http.post({
      url: "/main/help/list",
      data: {uid},
      success: function(res) {
          if (res.statusCode === 200) {
            _this.setData({
              list: res.data
            });
          }
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})