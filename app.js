//app.js
App({
  saveSign:function(mykey,mydata){
    wx.setStorage({
      key: mykey,
      data: mydata,
      success:function(e){
        console.log("success:"+e)
      },
      fail:function(e){
        console.log("fail:"+e)
      }
    })
   
  },
  onLaunch: function () {
    this.saveSign('id280', '18aac107801c2be9ac3f7ca79caa30a1');
    this.saveSign('id301', '8df791ad2fb38dc74299f6225c1fc5c2');
    this.saveSign('id304', '706ac89f813181f3c0d7396bc29a0888');
    this.saveSign('id310', '797834da969ab731331913609cf20519');
    this.saveSign('id312', '24dda1643c5a2dcef91689be86574f8a');
    this.saveSign('id315', 'f6a4956e8db521025d058a2053cc0be0');
    this.saveSign('id316', 'b6b0da22399a4460327e7e88f213c535');
    this.saveSign('id326', 'd16197893bc585250f2b60c03a11a19b');
    this.saveSign('id327', 'dbef006f0b164677d2c98ba5793d8dc2');
    this.saveSign('id328', 'e93750e86c100b9891fecee36b6db4fd');
    this.saveSign('id329', '932cb56a178b6c47c750906e614b4fc8');
    this.saveSign('id331', '8b709579880313660db64b82df949071');
    this.saveSign('id334', '8b709579880313660db64b82df949071');
    this.saveSign('id343', '2e17353b7e5dc01c8bbb89530aea0b32');
    this.saveSign('id346', 'e3e901ef9afff1c68aea373401dbdec4');
    this.saveSign('id353', '0cad2e5397f92e286085f456f830e37d');
    this.saveSign('id369', '141a2e7df164c07e136ca5788243001e');
    this.saveSign('id371', '1fb0a3a33c0038d9c41c27872553b0a1');
    this.saveSign('id373', 'fe90720930c1ca8f7b3d520491736c5c');
    this.saveSign('id374', 'b90d7c4066d5d451c64f7f520f1c8f71');
    this.saveSign('id375', 'b94ac75291fefaa7c2475d2013c3d4c1');
    this.saveSign('id376', '270fc61c3e6ec30cddfe27b4da871832');
    this.saveSign('id377', 'c21c19b2b2f8e2b8eb35ae3be81b9518');
    this.saveSign('id378', 'a292215271b04cc5e207d22fefe56060');
    this.saveSign('id379', 'a8a3a64ab137082c29480699501e7986');

  },
  globalData: {
    member_id:'0',
    // sign:{
    //   id343:'2e17353b7e5dc01c8bbb89530aea0b32',
    //   id334: '8b709579880313660db64b82df949071',
    //   id326:'d16197893bc585250f2b60c03a11a19b',
    //   id315: 'f6a4956e8db521025d058a2053cc0be0',
    //   id371:'1fb0a3a33c0038d9c41c27872553b0a1',
    //   id369:'141a2e7df164c07e136ca5788243001e',
    //   id346:'e3e901ef9afff1c68aea373401dbdec4'
    // }
  },
  
})