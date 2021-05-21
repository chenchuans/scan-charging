// pages/mine.js
const http = require("../../utils/http.js");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uid: '',
    username: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {uid, username} = app.userInfo;
    if (uid) {
      this.setData({uid, username});
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
  // 分享
  shareBtn() {
    const {uid} = app.userInfo;
    http.post({
      url: "/main/user/invitation",
      data: {uid},
      success: function(res) {
        // console.log("getList",res)
          if (res.statusCode === 200) {
            wx.showToast({
              decoration:3000,
              title:"分享成功"
          })
          }
      }
    });
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})