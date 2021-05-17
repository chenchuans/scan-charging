const http = require("./utils/http.js");

App({
    userInfo: {
        username: '',
        password: '',
        phone: '',
        uid: ''
    },
    onLaunch: function () {
        const info = wx.getStorageSync('info', this.userInfo);
        if (info) {
            this.userInfo = info;
        }

    }
});