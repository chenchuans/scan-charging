// pages/scan/scan.js
const http = require("../../utils/http.js");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList();
  },
  getList: function () {
    const {uid} = app.userInfo;
    const _this = this;
    http.post({
      url: "/map/charging/list",
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
  useScan: function () {
    const {uid} = app.userInfo;
    http.post({
      url: "/map/charging/list",
      data: {uid},
      success: function(res) {
        console.log("getList",res)
          if (res.statusCode === 200) {
            wx.showToast({
              decoration: 3000,
              title:"扫码成功！"
          })
          }
      }
    });
  },
  bindScan: function() {
    const _this = this;
    wx.scanCode({
      onlyFromCamera: false,
      scanType: ['barCode', 'qrCode', 'datamatrix','pdf417'],
      success: res => {
          console.log('sacl', res);
          _this.useScan();
      },
      fail: res => {
      // 接口调用失败
      wx.showToast({
          icon: 'none',
          title: '接口调用失败！'
      })
      },
      complete: res => {
          // 接口调用结束
          console.log(res)
      }
    });
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