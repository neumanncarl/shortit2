(function(t){function e(e){for(var n,l,u=e[0],a=e[1],s=e[2],f=0,d=[];f<u.length;f++)l=u[f],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);i&&i(e);while(d.length)d.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,u=1;u<r.length;u++){var a=r[u];0!==o[a]&&(n=!1)}n&&(c.splice(e--,1),t=l(l.s=r[0]))}return t}var n={},o={app:0},c=[];function l(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=t,l.c=n,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(r,n,function(e){return t[e]}.bind(null,n));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var i=a;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o=function(t){return Object(n["h"])("data-v-91c98256"),t=t(),Object(n["g"])(),t},c={class:"container"},l=o((function(){return Object(n["d"])("h1",null,"Shortit",-1)}));function u(t,e,r,o,u,a){var s=Object(n["i"])("Shortener");return Object(n["f"])(),Object(n["c"])("div",c,[l,Object(n["e"])(s,{onShorten:a.shorten,showShorted:u.showShorted,shortedUrl:u.shortedUrl,fullUrl:u.fullUrl},null,8,["onShorten","showShorted","shortedUrl","fullUrl"])])}var a=r("1da1");r("96cf"),r("d3b7"),r("e9c4");function s(t,e,r,o,c,l){var u=Object(n["i"])("MainInput"),a=Object(n["i"])("ShortedUrl");return Object(n["f"])(),Object(n["c"])(n["a"],null,[Object(n["e"])(u,{class:"row",onShorten:l.shorten},null,8,["onShorten"]),Object(n["m"])(Object(n["e"])(a,{short:r.shortedUrl,full:r.fullUrl},null,8,["short","full"]),[[n["l"],r.showShorted]])],64)}var i=function(t){return Object(n["h"])("data-v-e40ad992"),t=t(),Object(n["g"])(),t},f=i((function(){return Object(n["d"])("input",{type:"submit",value:"Shorten",class:"btn"},null,-1)}));function d(t,e,r,o,c,l){return Object(n["f"])(),Object(n["c"])("form",{onSubmit:e[1]||(e[1]=function(){return l.onSubmit&&l.onSubmit.apply(l,arguments)}),class:"row"},[Object(n["m"])(Object(n["d"])("input",{class:"full-url-input",type:"text","onUpdate:modelValue":e[0]||(e[0]=function(t){return c.fullUrl=t}),name:"fullUrl",placeholder:"Link to shorten"},null,512),[[n["k"],c.fullUrl]]),f],32)}var h={name:"MainInput",data:function(){return{fullUrl:""}},methods:{onSubmit:function(t){t.preventDefault();var e={fullUrl:this.fullUrl};this.$emit("shorten",e),this.fullUrl=""}}},p=(r("a2dd"),r("6b0d")),b=r.n(p);const j=b()(h,[["render",d],["__scopeId","data-v-e40ad992"]]);var O=j,v={class:"row"},m={class:"col-12"},S={class:"full-url"},y={class:"short-url"},U=["href"];function g(t,e,r,o,c,l){var u=Object(n["i"])("Button");return Object(n["f"])(),Object(n["c"])("div",v,[Object(n["d"])("div",m,[Object(n["d"])("span",S,Object(n["j"])(r.full),1),Object(n["d"])("span",null,[Object(n["d"])("span",y,[Object(n["d"])("a",{href:r.short},Object(n["j"])(r.short),9,U)]),Object(n["d"])("span",null,[Object(n["e"])(u,{onBtnClick:l.copy,text:"Copy"},null,8,["onBtnClick"])])])])])}function w(t,e,r,o,c,l){return Object(n["f"])(),Object(n["c"])("button",{onClick:e[0]||(e[0]=function(t){return l.onClick()}),class:"btn"},Object(n["j"])(r.text),1)}var x={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("btn-click")}}};const k=b()(x,[["render",w]]);var _=k,C={name:"ShortedUrl",components:{Button:_},props:{full:String,short:String},methods:{copy:function(){var t=document.getElementsByClassName("short-url")[0];navigator.clipboard.writeText(t.innerText)}}};r("6c19");const P=b()(C,[["render",g],["__scopeId","data-v-4c3aa511"]]);var B=P,M={name:"Shortener",props:{showShorted:Boolean,fullUrl:String,shortedUrl:String},data:function(){return{short:this.shortedUrl,full:this.fullUrl}},components:{MainInput:O,ShortedUrl:B},methods:{shorten:function(t){this.$emit("shorten",t)}},emits:["shorten"]};const I=b()(M,[["render",s]]);var T=I,J={name:"App",components:{Shortener:T},data:function(){return{showShorted:!1,shortedUrl:"",fullUrl:""}},methods:{shorten:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,fetch("/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:if(n=r.sent,n.ok){r.next=6;break}return console.error("short url post error"),r.abrupt("return");case 6:return r.next=8,n.json();case 8:return o=r.sent,e.fullUrl=o.data.full,e.shortedUrl="https://crlnm.com/l/"+o.data.short,e.showShorted=!0,r.abrupt("return",o);case 13:case"end":return r.stop()}}),r)})))()}}};r("d9b1");const $=b()(J,[["render",u],["__scopeId","data-v-91c98256"]]);var N=$;Object(n["b"])(N).mount("#app")},"6c19":function(t,e,r){"use strict";r("d447")},"80ec":function(t,e,r){},a2dd:function(t,e,r){"use strict";r("80ec")},ac6b:function(t,e,r){},d447:function(t,e,r){},d9b1:function(t,e,r){"use strict";r("ac6b")}});
//# sourceMappingURL=app.92e182ba.js.map