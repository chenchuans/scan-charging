// pages/user/user.js
const http = require("../../utils/http.js");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1:"",
    value3:""
  },
  submitMessage(){
    const _this = this;
    console.log(9789878)
    http.post({
        url: "/main/help/update",
        data: {
          "phone":this.data.value1,
          "desctext":this.data.value3
        },
        success: function(res) {
            if (res.code === 200) {
                console.log("res",res)
                wx.showToast({
                    decoration:5000,
                    title:"提交成功！"
                })
               _this.getList()
            }
        }
    });
  },
  getList() {
    http.post({
      url: "/main/help/list",
      data: {},
      success: function(res) {
          if (res.code === 200) {
              console.log("getList",res)
              // wx.showToast({
              //     decoration:5000,
              //     title:"购买成功！"
              // })
             
          }
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(3433, app.userInfo);
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