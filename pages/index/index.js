// pages/index.js
var t = require("../../utils/http.js"), e = require("../../utils/util.js"), a = require("../../utils/location.js"), i = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    setList: []
  },
  buy(e) {
    let id = e.currentTarget.dataset.id;
    let money = e.currentTarget.dataset.money;
    console.log("id-money",id,money)
    const _this = this;
    t.post({
        url: "/home/set/buy",
        data: {setId:567,uid:333},
        success: function(res) {
            if (res.statusCode === 200) {
                console.log("res",res)
                wx.showToast({
                    decoration:5000,
                    title:"购买成功！"
                })
               
            }
        }
    });

  },
  getSetList: function() {
    const _this = this;
    t.post({
        url: "/home/set/list",
        data: {},
        success: function(res) {
            if (res.statusCode === 200) {
                console.log("list",res.data)
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