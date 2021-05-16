// pages/registered/registered.js
const http = require("../../utils/http.js");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  bindName: function (e) {
    this.setData({
      username: e.detail.value
    });
  },
  bindPassword: function (e) {
    this.setData({
      password: e.detail.value
    });
  },
  registered: function () {
    const _this = this;
    const {password, username} = this.data;
    http.post({
        url: "/main/user/reg",
        data: {password, username},
        success: function(res) {
            if (res.code === 200) {
              wx.navigateTo({
                url: '/pages/login/login',
              })
              wx.showToast({
                decoration: 2000,
                title: res.message
              });
            } else if (res.code === 201) {
              wx.showToast({
                decoration: 2000,
                title: res.message
              });
            }
        }
    });
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