// pages/shouye/shouye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: false
  },

  bindXsk: function (e) {
    let t = e.currentTarget.dataset.newsid;
    console.log(t)
    if(t.title === '师资力量'){
      wx.navigateTo({
        url: `../shizi/shizi`
      })
    }
    else if(t.title === '课程导航'){
      wx.switchTab({
        url: `../fenlei/fenlei`
      })
    }else if (t.data_id === '7') {
      wx.navigateTo({
        url: `../fankui/fankui`
      })
    } else if (t.href_model === 'company_us') {
      wx.navigateTo({
        url: `../lianxiwomen/lianxiwomen`
      })
    } else if (t.href_model === 'more') {
      wx.navigateTo({
        url: `../gengduo/gengduo`
      })
    } else if (t.href_model === 'company_introduction') {
      wx.navigateTo({
        url: `../jianjie/jianjie`
      })
    } else if (t.href_model === 'news_list') {
      wx.navigateTo({
        url: `../dongtai/dongtai`
      })
    } else if (t.href_model === 'flash') {
      wx.showToast({
        image: '../../image/jinggao.png',
        title: '活动已结束',
      })
    }
  },
  bindtap: function (e) {
    let t = e.currentTarget.dataset.newsid;
    console.log(t)
    if (t.data_id === '7') {
      wx.navigateTo({
        url: `../pinglun1/pinglun1`
      })
    }else if(t.data_id === '8'){
      wx.navigateTo({
        url: '../pinglun/pinglun',
      })
    }
  },
  bindtop: function (e) {
    let t = e.currentTarget.dataset.newsid;
    console.log(t)
    if (t.data_id === '2') {
      wx.navigateTo({
        url: `../fenlei_er/fenlei_er`
      })
    } else if (t.data_id === '1') {
      wx.navigateTo({
        url: '../fenlei_er1/fenlei_er1',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;
    wx.request({
      url: "https://tdjy.m.huisou.com/miniprogram/index/index",
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res)
        _this.setData({
          subjects: res.data.list
        })
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
    wx.showToast({
      title: '没有数据了',
      icon: 'success',
      image: '../../image/jinggao.png',
      duration: 1000
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})