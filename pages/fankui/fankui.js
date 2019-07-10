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
    describe: "",
    name: "",
    phone: ""
  },
  // 判定输入为非空字符
  formSubmit: function (e) {
    var describe = e.detail.value.describe;
    var name = e.detail.value.name;
    var phone = e.detail.value.phone;
    if (describe == "" || name == "" || phone == "") {
      wx.showToast({
        image: '../../image/jinggao.png',
        title: '请输入完整信息！'
      })
    } else {
      wx.switchTab({
        url: '../shouye/shouye'
      })
      // detail
    }
  },
  loginBtnClick: function () {
    if (this.data.describe.length == 0 || this.data.name.length == 0 || this.data.phone.length == 0) {
      this.setData({
        infoMess: '温馨提示：用户名和密码不能为空！',
      })
    } else {
      this.setData({
        infoMess: '',
        describe: '反馈内容' + this.data.describes,
        name: '用户名：' + this.data.userN,
        phone: '密码：' + this.data.passW
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
    let str = /^1\d{10}$/
    if (str.test(phoneNumber)) {
      return true
    } else {
      wx.showToast({
        title: '手机号不正确',
        image: '../../image/jinggao.png'
      })
      return false
    }
  },
  inputUserName:function(e){
    let userName = e.detail.value
    if(userName.length > 10){
      let checkedName = this.checkUserName(userName)
    }
  }
})
