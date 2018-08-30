// pages/detail/detail.js
var app=getApp()
var that = this;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //swiper 当前位置
    current:0,
    //swiper 图像高度
    imgHeights:[],
    //简介，原料，详情 显示标记
    flag:[false,true,true],
    currentTab:'',
    product_id:'',
    detail:{},
    brief:'',
    banner:[],
    mealId:'',
    material:[],
    img:[]



  },
  switchNav:function(e){
    var id=e.currentTarget.id;
    that.setData({currentTab:id})
    var flag= that.data.flag;
    for(var i in flag){
      if(i==id) {
        flag[i]=false 
        }
      else {
        flag[i]=true;}
    }
    that.setData({flag:flag})

  },

imageLoad:function(e){
  var imageWidth= e.detail.width;
  var imageHeight=e.detail.height;
  var ratio=imageWidth/imageHeight;
  var imgHeights=this.data.imgHeights; 
  var viewHeight=750/ratio;
  imgHeights.push(viewHeight);
  that.setData({imgHeights:imgHeights})
},
bindChange:function(e){
  that.setData({current:e.detail.current})
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    that=this;
    that.setData({product_id: e.product_id});
    console.log(that.data.product_id)
    that.getDetail();
  },
  getDetail:function(){
    var member_id = app.globalData.member_id;
    var key='id'+that.data.product_id
    var sign=wx.getStorageSync(key);
    console.log(sign)
    wx.request({
      url: 'https://www.360tj.com/index.php/openapi/shop_goods/get_goods_detail',
      header:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      method:'POST',
      data:{
        member_id:member_id,
        product_id:that.data.product_id,
        sign:sign,
        sign_type:'MD5'
      },
      success:function(res){
        var detail = res.data.result.page_product_basic
        
        that.setData({ detail: detail,brief:detail.brief})
        that.setData({banner:detail.images})
        that.setData({mealId:detail.meal_id})
        console.log(res.data.result)
        that.getMaterial()
        //提取图片地址
        var imgTag = detail.intro.match(/src[^>]+"/g)
        //去掉双引号
        let img=[];
        for(var i in imgTag){
          var temp=imgTag[i].replace(/src="/g,"")
          temp=temp.replace(/"/,"")
          img.push(temp)
        }
        that.setData({img:img})

        
        console.log(img)
      },
      fail: function (e) {
        console.log("fail:" + e)
      }
    })
  },

  getMaterial:function(){
    wx.request({
      url: 'https://api-tjjk.360tj.com/webapp/Setmealindex/read',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'appid': 'rKec88GRe9YtAyd8',
        'timestamp': '1535178383000',
        'apptoken': '73EE3814E442DEFE9106FD5B38893758',
      },
      method: 'POST',
      data: {
        setmeal_id: that.data.mealId,
      },
      success:function(res){
        var material = res.data.result.setmeal_cook
        that.setData({material:material});
        console.log(material)
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