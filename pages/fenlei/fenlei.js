//index.js 
//获取应用实例 
var app = getApp()
Page({
  data: {
    // 页面配置  
    list:[],
    winWidth: 0,
    winHeight: 0,
    // tab切换 
    currentTab: 0,
  },
  bindAaa: function(e) {
    let t = e.currentTarget.dataset.newsid;
    if (t.product_id === '2'){
      wx.navigateTo({
        url: '../fenlei_er/fenlei_er'
      })
    }
    else if (t.product_id === '1'){
      wx.navigateTo({
        url: '../fenlei_er1/fenlei_er1'
      })
    }
  },
  bindAaa1(e) {
    wx.navigateTo({
      url: '../fenlei_er1/fenlei_er1'
    })
  },
  onLoad: function () {
     const _this = this;
      wx.request({
        url: "https://tdjy.m.huisou.com/miniprogram/product/index?page=1&cid=0",
        data: {},
        header: {
          'content-type': 'json'
        },
        success: function (res) {
          console.log(res)
          _this.setData({
            list: res.data.list.product_list,
            product_list: res.data.list.product_list[0],
            product_list1: res.data.list.product_list[1]
          })
        }
      })
    var that = this;
    // 获取系统信息 
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },
  // 滑动切换tab 
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  // 点击tab切换 
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
}) 