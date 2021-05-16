// pages/mine.js
const t = require("../../utils/http.js");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uid: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {uid} = app.userInfo;
    if (uid) {
      this.setData({uid});
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // 点击去登录
  bindLogin: function () {
    wx.navigateTo({
      url: '/pages/login/login'
    })
  },

  // 购买记录
  bindBuy: function () {
    wx.navigateTo({
      url: '/pages/buy/buy'
    })
  },

  // 使用记录
  bindUser: function () {
    wx.navigateTo({
      url: '/pages/userRecord/userRecord'
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})