var util = require("../../utils/util")
Page({
  data: {
    content: "",//评论框的内容
    comments: '',
    news:'',
    emojiChar: "☺-😋-😌-😍-😏-😜-😝-😞-😔-😪-😭-😁-😂-😃-😅-😆-👿-😒-😓-😔-😏-😖-😘-😚-😒-😡-😢-😣-😤-😢-😨-😳-😵-😷-😸-😻-😼-😽-😾-😿-🙊-🙋-🙏-✈-🚇-🚃-🚌-🍄-🍅-🍆-🍇-🍈-🍉-🍑-🍒-🍓-🐔-🐶-🐷-👦-👧-👱-👩-👰-👨-👲-👳-💃-💄-💅-💆-💇-🌹-💑-💓-💘-🚲",
    //0x1f---
    emoji: [
      "60a", "60b", "60c", "60d", "60f",
      "61b", "61d", "61e", "61f",
      "62a", "62c", "62e",
      "602", "603", "605", "606", "608",
      "612", "613", "614", "615", "616", "618", "619", "620", "621", "623", "624", "625", "627", "629", "633", "635", "637",
      "63a", "63b", "63c", "63d", "63e", "63f",
      "64a", "64b", "64f", "681",
      "68a", "68b", "68c",
      "344", "345", "346", "347", "348", "349", "351", "352", "353",
      "414", "415", "416",
      "466", "467", "468", "469", "470", "471", "472", "473",
      "483", "484", "485", "486", "487", "490", "491", "493", "498", "6b4"
    ],
    emojis: [],//qq、微信原始表情
    alipayEmoji: [],//支付宝表情
  },
  play(e) {

  },
  onLoad: function (options) {
    const _this = this;

    wx.request({
      url: "https://tdjy.m.huisou.com/miniprogram/news/detail?id=8&token=oB3Xx0ExetMo4O0bIKjKxr0FBhLQ",
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

    wx.request({
      url: "https://tdjy.m.huisou.com/miniprogram/news/detail?id=7",
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res.data)
        _this.setData({
          comments: res.data.list.comment
        })
      }
    })


    var em = {}, that = this, emChar = that.data.emojiChar.split("-");
    var emojis = []
    that.data.emoji.forEach(function (v, i) {
      em = {
        char: emChar[i],
        emoji: "0x1f" + v
      };
      emojis.push(em)
    });
    that.setData({
      emojis: emojis
    })
    //alipayEmoji
    // for (var j = 1; j <= 121; j++) {
    //   if (j < 10) j = "0" + j;
    //   that.data.alipayEmoji.push("emotion_small_" + j)
    // }
  },
  onReady: function () {
    // 页面渲染完成
    //设置当前标题
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  //解决滑动穿透问题
  emojiScroll: function (e) {
    console.log(e)
  },
  //文本域失去焦点时 事件处理
  textAreaBlur: function (e) {
    //获取此时文本域值
    console.log(e.detail.value)
    this.setData({
      content: e.detail.value
    })

  },
  //文本域获得焦点事件处理
  textAreaFocus: function () {
    this.setData({
      isShow: false,
      cfBg: false
    })
  },
  //点击表情显示隐藏表情盒子
  emojiShowHide: function () {
    this.setData({
      isShow: !this.data.isShow,
      isLoad: false,
      cfBg: !this.data.false
    })
  },
  //表情选择
  emojiChoose: function (e) {
    //当前输入内容和表情合并
    this.setData({
      content: this.data.content + e.currentTarget.dataset.emoji
    })
  },
  //点击emoji背景遮罩隐藏emoji盒子
  cemojiCfBg: function () {
    this.setData({
      isShow: false,
      cfBg: false
    })
  },
  //发送评论评论 事件处理
  send: function () {
    var that = this, conArr = [];
    //此处延迟的原因是 在点发送时 先执行失去文本焦点 再执行的send 事件 此时获取数据不正确 故手动延迟100毫秒
    setTimeout(function () {
      if (that.data.content.trim().length > 0) {
        conArr.push({
          head_pic: "https://img3.doubanio.com/icon/u52716784-2.jpg",
          username: "雨碎江南",
          ctime: util.formatTime(new Date()),
          content: that.data.content
        })
        that.setData({
          comments: that.data.comments.concat(conArr),
          content: "",//清空文本域值
          isShow: false,
          cfBg: false
        })
      } else {
        that.setData({
          content: ""//清空文本域值
        })
      }
    }, 100)

  },
  onReachBottom: function () {
    wx.showToast({
      title: '没有数据了',
      icon: 'success',
      duration: 1000
    })
  }
})