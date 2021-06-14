// pages/scan/scan.js
const http = require("../../utils/http.js");
const app = getApp();
Page({
  data: {
    list: [],
    showDialog: false,
    longitude: 0, //地图界面中心的经度
    latitude: 0, //地图界面中心的纬度
    markers: [], //标志点的位置
    currentShowItem: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(){
    this.getList();
    // this.setData({
    //   list: [{"id":4,"name":"2","money":2.0,"desctext":"2","timelimit":2},{"id":5,"name":"3","money":3.0,"desctext":"3","timelimit":3},{"id":6,"name":"4","money":4.0,"desctext":"4","timelimit":4},{"id":19,"name":"7日套餐","money":10.0,"desctext":"7日套餐","timelimit":7},{"id":20,"name":"24小时充电套餐","money":20.0,"desctext":"套餐描述","timelimit":1}]
    // });
    // this.onMap();
  },
  onMap: function (length = 0) {
    // const length = this.data.list.length;
    const _this = this;
    wx.getLocation({
      type: "wgs84",
      success: function({latitude, longitude}){
       console.log("当前位置的经纬度为：",latitude, longitude);
       let markers = [];
       for (let index = 0; index < length; index++) {
          let num = Math.floor(Math.random() * 999 - 1) / 100000;
          markers.push({
            id: index,
            iconPath: "../../icons/fujin3x.png",
            latitude: latitude + (index > length / 2 ? num : -num),
            longitude: longitude + (index < length / 2 ? num : -num),
            width: 28,
            height: 28
          });
       }
        _this.setData({
          latitude,
          longitude,
          markers
        })
      }
    })
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
            this.onMap(res.data.length);
          }
      }
    });
  },
  useScan: function () {
    const {uid} = app.userInfo;
    http.post({
      url: "/map/charging/use",
      data: {uid},
      success: function(res) {
          if (res.statusCode === 200) {
            wx.showToast({
              decoration: 3000,
              title: "成功！"
            })
            this.setData({
              showDialog: false
            })
          }
      }
    });
  },
  bindScan: function() {
    const _this = this;
    this.useScan();
    // wx.scanCode({
    //   onlyFromCamera: false,
    //   scanType: ['barCode', 'qrCode', 'datamatrix','pdf417'],
    //   success: res => {
    //       console.log('sacl', res);
    //       _this.useScan();
    //   },
    //   fail: res => {
    //   // 接口调用失败
    //   wx.showToast({
    //       icon: 'none',
    //       title: '接口调用失败！'
    //   })
    //   },
    //   complete: res => {
    //       // 接口调用结束
    //       console.log(res)
    //   }
    // });
  },
  bindmarkertap(e) {
    // 点击地图触发点，可以触发
    const index = e.detail.markerId;
    this.setData({
      showDialog: true,
      currentShowItem: this.data.list[index]
    })
  },
  bindMapTap: function () {
    if (this.data.showDialog) {
      this.setData({
        showDialog: false
      })
    }
  }
  
})