(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-addpages-bindAccount-bindAccount"],{"02e5":function(t,e,a){"use strict";a.r(e);var n=a("8398"),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"08de":function(t,e,a){"use strict";a.r(e);var n=a("4902"),r=a("02e5");for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("c97c");var o,d=a("f0c5"),l=Object(d["a"])(r["default"],n["b"],n["c"],!1,null,"cb6d32fe",null,!1,n["a"],o);e["default"]=l.exports},"3a10":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.addOrder=u,e.addOrderComment=v,e.addRecharge=p,e.applyWallet=$,e.bindAlipay=f,e.cancelOrder=g,e.confirmCollection=Z,e.deliver=F,e.disposeRefund=b,e.editRrderAddress=W,e.findOrder=y,e.findOrderlist=h,e.getBazaarList=B,e.getCategory=z,e.getRecharge=s,e.getcollection_avatar=M,e.getcollection_detail=C,e.getdraw_air_drop=A,e.getmoneyLog=P,e.getmy_air_drop=k,e.getmy_collection_list=w,e.getmy_give_live=x,e.getrule=O,e.getwallet=L,e.getwalletrule=j,e.getwithdrawalConfig=T,e.myCollection_poster=R,e.postgive_as_present=c,e.receipt=m,e.refund=_,e.toPay=l;var r,i=n(a("ade3")),o=n(a("b775")),d=(r={addRecharge:"/api/app/payment/add_recharge",cancelOrder:"/api/app/user/cancel_order",receipt:"/api/app/user/receipt",addOrderComment:"/api/app/user/add_order_comment",refund:"/api/app/user/refund",disposeRefund:"/api/app/shop/dispose_refund",findOrderlist:"/api/app/user/find_orderlist",findOrder:"/api/app/user/find_order",deliver:"/api/app/shop/deliver",editRrderAddress:"/api/app/shop/edit_order_address",confirmCollection:"/api/nft.pay/checkCollection",addOrder:"/api/nft.pay/addOrder",toPay:"/api/nft.pay/pay"},(0,i.default)(r,"findOrderlist","/api/nft.order/index"),(0,i.default)(r,"getcollection_detail","/api/nft.user/my_collection_detail"),(0,i.default)(r,"getmy_collection_list","/api/nft.user/my_collection_list"),(0,i.default)(r,"getmy_give_live","/api/nft.user/my_give_live"),(0,i.default)(r,"postgive_as_present","/api/nft.user/give_as_present"),(0,i.default)(r,"getrule","/api/nft.index/make_friend"),(0,i.default)(r,"getmy_air_drop","/api/nft.user/my_air_drop"),(0,i.default)(r,"getdraw_air_drop","/api/nft.marketing/draw_air_drop"),(0,i.default)(r,"myCollection_poster","/api/nft.fans/collection_poster"),(0,i.default)(r,"getCategory","/api/nft.bazaar/category"),(0,i.default)(r,"getBazaarList","/api/nft.bazaar/index"),(0,i.default)(r,"getwallet","/api/nft.wallet/index"),(0,i.default)(r,"getmoneyLog","/api/nft.wallet/moneyLog"),(0,i.default)(r,"getwalletrule","/api/nft.wallet/rule"),(0,i.default)(r,"getwithdrawalConfig","/api/nft.wallet/withdrawalConfig"),(0,i.default)(r,"bindAlipay","/api/nft.user/bindAlipay"),(0,i.default)(r,"applyWallet","/api/nft.wallet/payment"),(0,i.default)(r,"getRecharge","/api/nft.pay/recharge"),(0,i.default)(r,"getcollection_avatar","/api/nft.fans/collection_avatar"),r);function l(t){return o.default.post(d.toPay,t)}function u(t){return o.default.post(d.addOrder,t)}function c(t){return o.default.post(d.postgive_as_present,t)}function f(t){return o.default.post(d.bindAlipay,t)}function s(t){return o.default.post(d.getRecharge,t)}function p(t){return o.default.post(d.addRecharge,t)}function g(t){return o.default.post(d.cancelOrder,t)}function m(t){return o.default.post(d.receipt,t)}function v(t){return o.default.post(d.addOrderComment,t)}function _(t){return o.default.post(d.refund,t)}function b(t){return o.default.post(d.disposeRefund,t)}function h(t){return o.default.get(d.findOrderlist,{params:t})}function y(t){return o.default.get(d.findOrder,{params:t})}function w(t){return o.default.get(d.getmy_collection_list,{params:t})}function C(t){return o.default.get(d.getcollection_detail,{params:t})}function x(t){return o.default.get(d.getmy_give_live,{params:t})}function O(t){return o.default.get(d.getrule,{params:t})}function k(t){return o.default.get(d.getmy_air_drop,{params:t})}function A(t){return o.default.get(d.getdraw_air_drop,{params:t})}function R(t){return o.default.get(d.myCollection_poster,{params:t})}function z(t){return o.default.get(d.getCategory,{params:t})}function B(t){return o.default.get(d.getBazaarList,{params:t})}function L(t){return o.default.get(d.getwallet,{params:t})}function P(t){return o.default.get(d.getmoneyLog,{params:t})}function T(t){return o.default.get(d.getwithdrawalConfig,{params:t})}function j(t){return o.default.get(d.getwalletrule,{params:t})}function M(t){return o.default.get(d.getcollection_avatar,{params:t})}function $(t){return o.default.post(d.applyWallet,t)}function F(t){return o.default.post(d.deliver,t)}function W(t){return o.default.post(d.editRrderAddress,t)}function Z(t){return o.default.get(d.confirmCollection,{params:t})}},"47bd":function(t,e,a){var n=a("da2d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("6560b616",n,!0,{sourceMap:!1,shadowMode:!1})},4902:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={uNavbar:a("811d").default,uInput:a("3922").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"body"},[a("v-uni-view",{staticClass:"topcontent"},[a("u-navbar",{attrs:{"border-bottom":!1,title:"绑定支付宝",background:t.background,"title-color":"#fff"}})],1),a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"from"},[a("v-uni-view",{staticClass:"input"},[a("u-input",{attrs:{type:"text",border:!1,placeholder:"请输入真实姓名",height:"106"},model:{value:t.name,callback:function(e){t.name="string"===typeof e?e.trim():e},expression:"name"}})],1)],1),a("v-uni-view",{staticClass:"from"},[a("v-uni-view",{staticClass:"input"},[a("u-input",{attrs:{type:"text",maxlangth:"18",border:!1,placeholder:"请输入支付宝账户",height:"106"},model:{value:t.card,callback:function(e){t.card="string"===typeof e?e.trim():e},expression:"card"}})],1)],1)],1),a("v-uni-view",{staticClass:"bottom",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit()}}},[t._v("提交")])],1)},i=[]},8398:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("ac1f"),a("00b4");var n=a("3a10"),r={components:{},data:function(){return{name:"",card:"",background:{backgroundColor:"#011036"},title1:"绑定支付宝"}},onLoad:function(t){},methods:{submit:function(){var t=this,e=/^(?:1[3-9]\d{9}|[a-zA-Z\d._-]*\@[a-zA-Z\d.-]{1,10}\.[a-zA-Z\d]{1,20})$/;return this.name&&this.card?e.test(this.card)?this.$u.test.chinese(this.name)?void(0,n.bindAlipay)({alipayNumber:this.card,name:this.name,mobile:""}).then((function(e){1==e.code&&(uni.showToast({title:e.msg,icon:"none",mask:!0}),t.getUserinfo(),setTimeout((function(){uni.redirectTo({url:"/pages/addpages/myBalance/myBalance"})}),1e3))})):uni.showToast({title:"姓名格式错误",icon:"none",mask:!0}):uni.showToast({title:"支付宝账号格式错误",icon:"none",mask:!0}):uni.showToast({title:"信息填写不完整",icon:"none",mask:!0})}}};e.default=r},c97c:function(t,e,a){"use strict";var n=a("47bd"),r=a.n(n);r.a},da2d:function(t,e,a){var n=a("4bad");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.body[data-v-cb6d32fe]{background-color:#000733;min-height:100vh}.body .toptitle[data-v-cb6d32fe]{width:100%;margin-top:%?100?%;margin-bottom:%?100?%;display:flex;flex-direction:column;align-items:center;justify-content:center}.body .toptitle uni-image[data-v-cb6d32fe]{width:%?72?%;height:%?72?%;margin-bottom:%?20?%}.body .toptitle uni-text[data-v-cb6d32fe]{font-size:%?36?%;font-family:PingFang SC Bold,PingFang SC Bold-Bold;font-weight:700;text-align:center;color:#fffffe}.body .container[data-v-cb6d32fe]{border-radius:%?20?%;margin:0 %?30?%;margin-top:%?90?%}.body .container .from[data-v-cb6d32fe]{width:%?690?%;height:%?106?%;line-height:%?106?%;background:#1b284a;border-radius:%?10?%;margin-bottom:%?20?%}.body .container .from .input[data-v-cb6d32fe]{padding-left:%?20?%;height:%?100?%;line-height:%?100?%;color:#ccc}.body .container .from .input uni-text[data-v-cb6d32fe]{font-size:%?30?%;font-weight:700;text-align:left;color:#fd0000;margin-left:%?14?%}.body .bottom[data-v-cb6d32fe]{width:%?500?%;height:%?88?%;background:linear-gradient(90deg,#05f9a1,#2dcaf0);border-radius:%?44?%;margin:%?80?% auto;font-size:%?34?%;font-weight:700;text-align:center;color:#071537;line-height:%?88?%}',""]),t.exports=e}}]);