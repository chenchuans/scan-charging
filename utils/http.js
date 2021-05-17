const app = getApp();
const baseUrl = 'http://mayun.vaiwan.com/cp/v1';
function http(e) {
    let n = wx.getStorageSync("networkType");
    let a = wx.getStorageSync("networkNomeShowModal");
    if ("none" == n && !a) return wx.showModal({
        title: "当前没有网络，请检查网络设置",
        content: "",
        showCancel: false,
        success: function(e) {
            wx.setStorageSync("networkNomeShowModal", false);
        }
    })
}


module.exports = {
    post: function(t) {
        const {url, data, success} = t;
        const list = ['/home/set/list', '/main/user/login', '/main/user/reg'];
        if (!list.includes(t.url) && !data.uid) {
            // wx.reLaunch({
            //     url: '/pages/login/login'
            // });
            // return;
        }
        return new Promise((resolve, reject) => {
          //网络请求
          wx.request({
            url: baseUrl + url,
            data,
            method: 'POST',
            // header: headerConfig,
            success: function (res) {//服务器返回数据
                success(res);
            },
            fail: function (error) {
              reject(error);
            }
          })
        });
      }
};