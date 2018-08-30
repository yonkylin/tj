//index.js
//获取应用实例
const app=getApp()
var that=this;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cat:[],
    haibao:[],
   cat_sign:['','','','',
      '9b17978e943ef5cbf881d2b3dc101e97',
      'bf42c140c454bc5ebdba9a115cca1bb3',
      '9b2267b5aa07ee281132fa92c0e437a3',
      '09c75734e4dae7bd8a3d593f1fc81e65',
      '18365cc68c74a4655c52c8b5b4e04b30',
      '974519ae633276f13009a3864e7da056'
    ],
    goodsData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that=this;
    that.getbanner();
    that.getCat();
  },

  getbanner:function(){
    wx.request({
      url: 'https://api-tjjk.360tj.com/webapp/Bannerxcxindex/lists',
      header:{
        'appid': 'rKec88GRe9YtAyd8',
        'timestamp': '1535090751000',
        'apptoken': 'DE9D182C9238DF491BB0B61C5A5A32A5',
        'content-type': 'application/x-www-form-urlencoded',
      },
      method:'POST',
      data:{
        status:'1',
        page_num:'0',
        page_size:'3'
      },
      success:function(res){
        that.setData({
          haibao:res.data.result
        })
      }
    })
  },

  getCat:function(){
    wx.request({
      url: 'https://www.360tj.com/index.php/openapi/shop_goods/get_cat_list_common',
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        cat_id: '5',
        sign: 'bf42c140c454bc5ebdba9a115cca1bb3',
        sign_type: 'MD5'
      },
      success: function (res) {
        that.setData({
          cat: res.data.result
        })
        var cat=that.data.cat;
        if(cat!=null || cat!=''){
          for (var i in cat){
            var id=cat[i].cat_id;
            var sign = that.data.cat_sign[id]
            that.getGood(id,sign)
          }
           
        }
        
      },
      fail: function (e) {
        console.log(e)
      }

    })
  },
  getGood:function(id,sign){
    wx.request({
      url: 'https://www.360tj.com/index.php/openapi/shop_goods/search_properties_goods_xcx',
      method:"POST",
      header:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data:{
        cat_id: id,
        sign: sign,
        sign_type: 'MD5'
      },
      success: function (res) {
        // console.log(res)
        var goodsData=that.data.goodsData;
        var goods =res.data.result.goods;
        if(goods!=null || goods!=''){
          var data={
            cat_id:id,
            cat_goods:goods};
          console.log(data)
          goodsData.push(data)
        }
       
       
       
        that.setData({
          goodsData: goodsData
        })
      },
      fail: function (e) {
        console.log(e)
      }
    })
  },
getDetail:function(e){
    wx.navigateTo({
    url: '../detail/detail?product_id='+e.currentTarget.id,
  })
},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady:function () {
   
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