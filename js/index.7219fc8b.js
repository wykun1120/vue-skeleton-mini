(function(t){function e(e){for(var a,i,r=e[0],s=e[1],u=e[2],d=0,f=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);c&&c(e);while(f.length)f.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(l.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={index:0},l=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-skeleton-mini/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=s;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("c31f")},"3d7b":function(t,e,n){},"42b1":function(t,e,n){"use strict";n("f381")},"5a1e":function(t,e,n){},"66d2":function(t,e,n){"use strict";n("3d7b")},c31f:function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("默认样式")]),n("div",{staticClass:"container"},[n("skeleton",{attrs:{data:t.list}},t._l(t.list,(function(e,a){return n("div",{key:a,staticClass:"list-item"},[t._v(t._s(e))])})),0)],1),n("h1",[t._v("动画")]),n("div",{staticClass:"container"},[n("skeleton",{attrs:{data:t.formData,animate:""}},[n("div",[t._v(t._s(t.formData.username))])])],1),n("h1",[t._v("自定义组件")]),n("div",{staticClass:"container"},[n("skeleton",{attrs:{data:t.formData,defaultRender:!1},scopedSlots:t._u([{key:"custom",fn:function(){return[n("div",[t._v("Skeleton")])]},proxy:!0}])},[n("div",[t._v(t._s(t.formData.username))])])],1),n("h1",[t._v("表格")]),n("div",{staticClass:"container"},[n("skeleton",{attrs:{data:t.list,animateName:"table"}},t._l(t.list,(function(e,a){return n("div",{key:a,staticClass:"list-item"},[t._v(t._s(e))])})),0)],1)])},l=[],i={name:"App",components:{},mounted(){setTimeout(()=>{this.list=[1,2,3],this.formData={username:"username"}},2e3)},data(){return{list:[],formData:{}}}},r=i,s=(n("42b1"),n("2877")),u=Object(s["a"])(r,o,l,!1,null,null,null),c=u.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.defaultRender&&t.loading&&""===t.animateName?n("default",{attrs:{animate:t.animate}}):t._e(),t.animateName===t.constants.TABLE_SKELETON&&t.loading?n("table-skeleton"):t._e(),!t.defaultRender&&t.loading?t._t("custom"):t._e(),t.loading?t._e():t._t("default")],2)},f=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"kun-skeleton-loading-container",class:{animate:t.animate}},[n("div",{staticClass:"kun-skeleton-loading-block kun-skeleton-loading-block-start"}),n("div",{staticClass:"kun-skeleton-loading-block"}),n("div",{staticClass:"kun-skeleton-loading-block"}),n("div",{staticClass:"kun-skeleton-loading-block kun-skeleton-loading-block-end"})])},m=[],v={props:{animate:{type:Boolean}},components:{},data(){return{}}},b=v,k=(n("e5cd"),Object(s["a"])(b,p,m,!1,null,"16cce85c",null)),_=k.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"kun-skeleton-table-container"},t._l(t.tableBlcokList,(function(e,a){return n("div",{key:a,staticClass:"kun-skeleton-table-block"},t._l(e,(function(e,a){return n("div",{key:a,staticClass:"kun-skeleton-table-block-item"},[t._v(t._s(e))])})),0)})),0)},g=[],y={components:{},data(){return{tableBlcokList:[["","","","",""],["","","","",""],["","","","",""],["","","","",""]]}}},w=y,O=(n("66d2"),Object(s["a"])(w,h,g,!1,null,"26f0bae9",null)),j=O.exports;const C="table";var S={TABLE_SKELETON:C},x={name:"Skeleton",props:{data:{type:[Array,Object,Boolean,String],default:null},defaultRender:{type:Boolean,default:!0},animate:{type:Boolean,default:!1},animateName:{type:String,default:""}},watch:{data:{handler(){console.log("change"),this.loading&&(this.loading=!1)},deep:!0}},components:{Default:_,TableSkeleton:j},data(){return{loading:!0,constants:S}}},E=x,T=Object(s["a"])(E,d,f,!1,null,"21b20f52",null),B=T.exports;B.install=function(t){t.component(B.name,B)};var D=B;const P=[D],L=function(t){L.installed||(L.installed=!0,P.forEach(e=>{t.component(e.name,e)}))};"undefined"!==typeof window&&window.Vue&&L(window.Vue);var N={install:L,...P};a["a"].config.productionTip=!1,a["a"].use(N),console.log(N),new a["a"]({render:t=>t(c)}).$mount("#app")},e5cd:function(t,e,n){"use strict";n("5a1e")},f381:function(t,e,n){}});
//# sourceMappingURL=index.7219fc8b.js.map