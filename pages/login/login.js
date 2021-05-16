// pages/login/login.js
const t = require("../../utils/http.js");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',
    phone: ''
  },
  bindName: function (e) {
    this.setData({
      username: e.detail.value
    });
  },
  bindPhone: function (e) {
    this.setData({
      phone: e.detail.value
    });
  },
  bindPassword: function (e) {
    this.setData({
      password: e.detail.value
    });
  },
  submit: function () {
    const _this = this;
    const {password, phone, username} = this.data;
      t.post({
          url: "/main/user/login",
          data: {password, phone, username},
          success: function(res) {
              if (res.statusCode === 200) {
                  app.userInfo = {password, phone, username, uid: res.data.uid};
              }
              wx.showToast({
                decoration: 2000,
                title: res.message
              });
          }
      });
  }
})