(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-usage-index"],{"047a":function(t,n,e){"use strict";e.r(n);var i=e("ef18"),a=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"0984":function(t,n,e){"use strict";var i=e("8f7f"),a=e.n(i);a.a},3417:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("7555"),a={components:{},data:function(){return{background:{backgroundColor:"#000733"},content1:""}},mounted:function(){this.getabouts()},onShow:function(){},methods:{getabouts:function(){var t=this;(0,i.getabouts)().then((function(n){1==n.code&&(t.content1=n.data)}))},goclick:function(t){uni.navigateTo({url:"/pages/my/agreement/index?type=".concat(t)})}}};n.default=a},"40b8":function(t,n,e){"use strict";e.r(n);var i=e("66ef"),a=e("8860");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("0984");var c,r=e("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"24b73f43",null,!1,i["a"],c);n["default"]=u.exports},4374:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={uIcon:e("ece6").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{},[e("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[e("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),e("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?e("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goBack.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"u-icon-wrap"},[e("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?e("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?e("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[e("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx",fontWeight:t.titleBold?"bold":"normal"}},[t._v(t._s(t.title))])],1):t._e(),e("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),e("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?e("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},o=[]},"66ef":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={uNavbar:e("811d").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"body"},[e("v-uni-view",{staticClass:"topcontent"},[e("u-navbar",{attrs:{"border-bottom":!1,title:"关于我们",background:t.background,"title-color":"#fff"}})],1),e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"center"},[e("v-uni-image",{attrs:{src:"/static/login/manyunlogo.png",mode:""}}),e("v-uni-view",{staticClass:"text1"},[t._v(t._s(t.content1.name))]),e("v-uni-view",{staticClass:"text2"},[t._v("V"+t._s(t.content1.versions))])],1),e("v-uni-view",{staticClass:"bottom"},[e("v-uni-view",{staticClass:"bottom1"},[e("v-uni-text",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goclick(1)}}},[t._v("《用户协议》")]),e("v-uni-text",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goclick(2)}}},[t._v("《隐私协议》")])],1),e("v-uni-view",{staticClass:"bottom2"},[t._v("商务合作:"+t._s(t.content1.company_mail))]),e("v-uni-view",{staticClass:"bottom3"},[t._v("联系客服:"+t._s(t.content1.service_mail))])],1)],1)],1)},o=[]},"811d":function(t,n,e){"use strict";e.r(n);var i=e("4374"),a=e("047a");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("e9e8");var c,r=e("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"1cc24500",null,!1,i["a"],c);n["default"]=u.exports},8860:function(t,n,e){"use strict";e.r(n);var i=e("3417"),a=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"8f7f":function(t,n,e){var i=e("b54d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("38711d95",i,!0,{sourceMap:!1,shadowMode:!1})},b3e7:function(t,n,e){var i=e("bb74");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("588b0f18",i,!0,{sourceMap:!1,shadowMode:!1})},b54d:function(t,n,e){var i=e("4bad");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.body[data-v-24b73f43]{min-height:100%;padding:0 %?34?%;background-color:#000733}.body .container[data-v-24b73f43]{display:flex;flex-direction:column;justify-content:center;align-items:center}.body .container .center[data-v-24b73f43]{margin-top:%?200?%;display:flex;flex-direction:column;justify-content:center;align-items:center}.body .container .center uni-image[data-v-24b73f43]{width:%?150?%;height:%?150?%;border-radius:50%}.body .container .center .text1[data-v-24b73f43]{display:inline-block;margin:%?20?% 0;font-size:%?30?%;font-weight:700;color:#fff}.body .container .center .text2[data-v-24b73f43]{display:inline-block;font-size:%?26?%;color:#999}.body .container .bottom[data-v-24b73f43]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:%?500?%;font-size:%?26?%}.body .container .bottom .bottom1[data-v-24b73f43]{color:#c8aa73;letter-spacing:%?2?%}.body .container .bottom .bottom2[data-v-24b73f43],\n.body .container .bottom .bottom3[data-v-24b73f43]{color:#999;margin-top:%?10?%}',""]),t.exports=n},bb74:function(t,n,e){var i=e("4bad");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-navbar[data-v-1cc24500]{width:100%}.u-navbar-fixed[data-v-1cc24500]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-1cc24500]{width:100%}.u-navbar-inner[data-v-1cc24500]{display:flex;flex-direction:row;justify-content:space-between;position:relative;align-items:center}.u-back-wrap[data-v-1cc24500]{display:flex;flex-direction:row;align-items:center;flex:1;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-1cc24500]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-1cc24500]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;flex-shrink:0}.u-navbar-centent-slot[data-v-1cc24500]{flex:1}.u-title[data-v-1cc24500]{line-height:%?60?%;font-size:%?32?%;flex:1}.u-navbar-right[data-v-1cc24500]{flex:1;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.u-slot-content[data-v-1cc24500]{flex:1;display:flex;flex-direction:row;align-items:center}',""]),t.exports=n},e9e8:function(t,n,e){"use strict";var i=e("b3e7"),a=e.n(i);a.a},ef18:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("a9e3");var i=uni.getSystemInfoSync(),a={},o={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#FFFFFF"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:""}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:a,statusBarHeight:i.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(i.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(i.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};n.default=o}}]);