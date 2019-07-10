Page({
  /**
  * 页面的初始数据
  */

  data: {
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList: null,
    phone: ""
  },
  // 判定输入为非空字符
  formSubmit: function (e) {
    var phone = e.detail.value.phone;
    if (phone == "") {
      wx.showToast({
        image: '../../image/jinggao.png',
        title: '请填写密码'
      })
    }else{
      wx.switchTab({
        url: '../shouye/shouye'
      })
    }
  }
})
