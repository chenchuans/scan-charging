// pages/login/login.js
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
    wx.navigateTo({
      url: '/pages/registered/registered'
    })
  },
  login: function () {
    const _this = this;
    const {password, phone, username} = this.data;
    http.post({
        url: "/main/user/login",
        data: {password, phone, username},
        success: function({data: res}) {
            wx.showToast({
              decoration: 2000,
              title: res.message
            });
            if (res.code === 200) {
                app.userInfo = {password, phone, username, uid: res.data.id};
                wx.setStorageSync('info', app.userInfo);
                wx.reLaunch({
                  url: '/pages/index/index'
                })
            }
        }
    });
  }
})