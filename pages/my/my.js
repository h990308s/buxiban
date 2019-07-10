//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    img: [{
        "title": "待付款",
        "icon": "https://tdjy.m.huisou.com/Public/Miniprogram/theme1/mine_wait_pay.png",
      },
      {
        "title": "已付款",
        "icon": "https://tdjy.m.huisou.com/Public/Miniprogram/theme1/mine_wait_comment.png",
      },
      {

        "title": "退款/售后",
        "icon": "https://tdjy.m.huisou.com/Public/Miniprogram/theme1/mine_refund.png",
      }

    ],
    more:[
      {
        "id": "4",
        "title": "意见反馈",
        "icon": "https://tdjy.m.huisou.com/Public/Miniprogram/theme1/mine_opinion.png", 
      },
      {
        "id": "5",
        "title": "绑定手机",
        "icon": "https://tdjy.m.huisou.com/Public/Miniprogram/theme1/mine_bind_phone.png", 
      }
    ]
  },
  //事件处理函数
  dingdan: function() {
    wx.navigateTo({
      url: '../dingdan/dingdan'
    })
  },
  bindXsk: function (e) {
    let t = e.currentTarget.dataset.newsid;
    console.log(t)
    if (t.id === '4') {
      wx.navigateTo({
        url: `../fankui/fankui`
      })
    }
    else if (t.id === '5') {
      wx.navigateTo({
        url: `../bangding/bangding`
      })
    }
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})