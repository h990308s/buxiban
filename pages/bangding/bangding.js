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
    if ( phone == "" ) {
      wx.showToast({
        image: '../../image/jinggao.png',
        title: '请填写手机号'
      })
    }
    else if (phone.length < 11 || phone.length > 11) {
      wx.showToast({
        image:'../../image/jinggao.png',
        title: '手机号格式错误'
      })
    }else{
      wx.navigateTo({
        url: '../mima/mima'
      })
    }
  },
  
  // 手机号部分
  inputPhoneNum: function (e) {
    let phoneNumber = e.detail.value
    if (phoneNumber.length === 11) {
      let checkedNum = this.checkPhoneNum(phoneNumber)
    }
  },
  checkPhoneNum: function (phoneNumber) {
    let str = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/
    if (str.test(phoneNumber)) {
      return true
    } else {
      wx.showToast({
        image: '../../image/jinggao.png',
        title: '手机号格式错误'
      })
      return false
    }
  }
})
