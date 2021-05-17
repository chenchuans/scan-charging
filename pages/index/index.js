// pages/index.js
const http = require("../../utils/http.js");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    setList: []
  },
  buy: function (e) {
    const {id} = e.currentTarget.dataset;
    const {uid} = app.userInfo;
    http.post({
        url: "/home/set/buy",
        data: {setId: id, uid},
        success: function(res) {
            if (res. statusCode === 200) {
                wx.showToast({
                    decoration:5000,
                    title:"购买成功！"
                })
            }
        }
    });

  },
  getSetList: function () {
    const _this = this;
    http.post({
        url: "/home/set/list",
        data: {},
        success: function(res) {
            if (res.statusCode === 200) {
                _this.setData({
                    setList: res.data
                });
              
            }
        }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSetList();
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