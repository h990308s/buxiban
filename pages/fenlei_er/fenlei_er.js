// pages/fenlei_er/fenlei_er.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lsit:[]
  },
  bindAaa() {
    wx.navigateTo({
      url: '../fenlei_er/fenlei_er'
    })
  },
  bindAaa1() {
    wx.navigateTo({
      url: '../fenlei_er1/fenlei_er1'
    })
  },
  bindAaa2() {
    wx.navigateTo({
      url: '../fenlei_er2/fenlei_er2'
    })
  },
  bodadianhua() {
    wx.makePhoneCall({
      phoneNumber: '110',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;
    wx.request({
      url: "https://tdjy.m.huisou.com/miniprogram/product/detail?id=2&token=oB3Xx0ExetMo4O0bIKjKxr0FBhLQ&page=1",
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res.data)
        _this.setData({
          img:res.data.list.carousel,
          yingyu:res.data.list.detail,
          xihuan: res.data.list.recommend[0],
          xihuan1: res.data.list.recommend[1]
        })
        console.log(res.data.list)
      }
    })
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