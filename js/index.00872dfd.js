(function(e){function n(n){for(var o,l,i=n[0],u=n[1],s=n[2],d=0,f=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&f.push(a[l][0]),a[l]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);c&&c(n);while(f.length)f.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],o=!0,i=1;i<t.length;i++){var u=t[i];0!==a[u]&&(o=!1)}o&&(r.splice(n--,1),e=l(l.s=t[0]))}return e}var o={},a={index:0},r=[];function l(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=o,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)l.d(t,o,function(n){return e[n]}.bind(null,o));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/vue-skeleton-mini/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var c=u;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("c31f")},1136:function(e,n,t){"use strict";t("62cd")},"62cd":function(e,n,t){},c31f:function(e,n,t){"use strict";t.r(n);var o=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("skeleton",{attrs:{data:e.list}},e._l(e.list,(function(n,o){return t("div",{key:o},[e._v(e._s(n))])})),0),t("skeleton",{attrs:{data:e.formData}},[t("div",[e._v(e._s(e.formData.username))])])],1)},r=[],l={name:"App",components:{},mounted(){setTimeout(()=>{this.list=[1,2,3],this.formData={username:"kun"}},1e3)},data(){return{list:[],formData:{}}}},i=l,u=t("2877"),s=Object(u["a"])(i,a,r,!1,null,null,null),c=s.exports,d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e.defaultLoading&&e.loading?t("loading"):e._e(),!e.defaultLoading&&e.loading?e._t("loading"):e._e(),e.loading?e._e():e._t("default")],2)},f=[],p=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},g=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"kun-skeleton-loading-container"},[t("div",{staticClass:"kun-skeleton-loading-block kun-skeleton-loading-block-start"}),t("div",{staticClass:"kun-skeleton-loading-block"}),t("div",{staticClass:"kun-skeleton-loading-block"}),t("div",{staticClass:"kun-skeleton-loading-block kun-skeleton-loading-block-end"})])}],v={components:{},data(){return{}}},m=v,b=(t("1136"),Object(u["a"])(m,p,g,!1,null,"7420dcf2",null)),k=b.exports,h={name:"Skeleton",props:{data:{type:[Array,Object,Boolean,String]},defaultLoading:{type:Boolean,default:!0}},watch:{data:{handler(){console.log("change"),this.loading&&(this.loading=!1)},deep:!0}},components:{Loading:k},data(){return{loading:!0}}},_=h,y=Object(u["a"])(_,d,f,!1,null,"3c7d06d3",null),w=y.exports;w.install=function(e){e.component(w.name,w)};var O=w;const j=[O],x=function(e){x.installed||(x.installed=!0,j.forEach(n=>{e.component(n.name,n)}))};"undefined"!==typeof window&&window.Vue&&x(window.Vue);var P={install:x,...j};o["a"].config.productionTip=!1,o["a"].use(P),console.log(P),new o["a"]({render:e=>e(c)}).$mount("#app")}});
//# sourceMappingURL=index.00872dfd.js.map