(function(t){function e(e){for(var n,u,c=e[0],s=e[1],a=e[2],f=0,d=[];f<c.length;f++)u=c[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);i&&i(e);while(d.length)d.shift()();return l.push.apply(l,a||[]),r()}function r(){for(var t,e=0;e<l.length;e++){for(var r=l[e],n=!0,c=1;c<r.length;c++){var s=r[c];0!==o[s]&&(n=!1)}n&&(l.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},o={app:0},l=[];function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var i=s;l.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"04f1":function(t,e,r){"use strict";r("dd8d")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o=function(t){return Object(n["h"])("data-v-358b42d1"),t=t(),Object(n["g"])(),t},l={class:"container"},u=o((function(){return Object(n["d"])("h1",null,"Shortit",-1)}));function c(t,e,r,o,c,s){var a=Object(n["i"])("Shortener");return Object(n["f"])(),Object(n["c"])("div",l,[u,Object(n["e"])(a,{onShorten:s.shorten,showShorted:c.showShorted,shortedUrl:c.shortedUrl,fullUrl:c.fullUrl},null,8,["onShorten","showShorted","shortedUrl","fullUrl"])])}var s=r("1da1");r("96cf"),r("d3b7"),r("e9c4");function a(t,e,r,o,l,u){var c=Object(n["i"])("MainInput"),s=Object(n["i"])("ShortedUrl");return Object(n["f"])(),Object(n["c"])(n["a"],null,[Object(n["e"])(c,{class:"row",onShorten:u.shorten},null,8,["onShorten"]),Object(n["m"])(Object(n["e"])(s,{short:r.shortedUrl,full:r.fullUrl},null,8,["short","full"]),[[n["l"],r.showShorted]])],64)}var i=function(t){return Object(n["h"])("data-v-e40ad992"),t=t(),Object(n["g"])(),t},f=i((function(){return Object(n["d"])("input",{type:"submit",value:"Shorten",class:"btn"},null,-1)}));function d(t,e,r,o,l,u){return Object(n["f"])(),Object(n["c"])("form",{onSubmit:e[1]||(e[1]=function(){return u.onSubmit&&u.onSubmit.apply(u,arguments)}),class:"row"},[Object(n["m"])(Object(n["d"])("input",{class:"full-url-input",type:"text","onUpdate:modelValue":e[0]||(e[0]=function(t){return l.fullUrl=t}),name:"fullUrl",placeholder:"Link to shorten"},null,512),[[n["k"],l.fullUrl]]),f],32)}var h={name:"MainInput",data:function(){return{fullUrl:""}},methods:{onSubmit:function(t){t.preventDefault();var e={fullUrl:this.fullUrl};this.$emit("shorten",e),this.fullUrl=""}}},p=(r("a2dd"),r("6b0d")),b=r.n(p);const j=b()(h,[["render",d],["__scopeId","data-v-e40ad992"]]);var O=j,v={class:"full-url"},m={class:"short-url"},S=["href"];function y(t,e,r,o,l,u){var c=Object(n["i"])("Button");return Object(n["f"])(),Object(n["c"])("div",null,[Object(n["d"])("span",v,Object(n["j"])(r.full),1),Object(n["d"])("span",null,[Object(n["d"])("span",m,[Object(n["d"])("a",{href:r.short},Object(n["j"])(r.short),9,S)]),Object(n["d"])("span",null,[Object(n["e"])(c,{class:"btn",onBtnClick:u.copy,text:"Copy"},null,8,["onBtnClick"])])])])}function U(t,e,r,o,l,u){return Object(n["f"])(),Object(n["c"])("button",{onClick:e[0]||(e[0]=function(t){return u.onClick()}),class:"btn"},Object(n["j"])(r.text),1)}var g={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("btn-click")}}};const w=b()(g,[["render",U]]);var x=w,k={name:"ShortedUrl",components:{Button:x},props:{full:String,short:String},methods:{copy:function(){var t=document.getElementsByClassName("short-url")[0];navigator.clipboard.writeText(t.innerText)}}};r("04f1");const _=b()(k,[["render",y],["__scopeId","data-v-06240984"]]);var C=_,P={name:"Shortener",props:{showShorted:Boolean,fullUrl:String,shortedUrl:String},data:function(){return{short:this.shortedUrl,full:this.fullUrl}},components:{MainInput:O,ShortedUrl:C},methods:{shorten:function(t){this.$emit("shorten",t)}},emits:["shorten"]};const B=b()(P,[["render",a]]);var M=B,I={name:"App",components:{Shortener:M},data:function(){return{showShorted:!1,shortedUrl:"",fullUrl:""}},methods:{shorten:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,fetch("/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:if(n=r.sent,n.ok){r.next=6;break}return console.error("short url post error"),r.abrupt("return");case 6:return r.next=8,n.json();case 8:return o=r.sent,e.fullUrl=o.data.full,e.shortedUrl="https://crlnm.com/l/"+o.data.short,e.showShorted=!0,r.abrupt("return",o);case 13:case"end":return r.stop()}}),r)})))()}}};r("93a2");const T=b()(I,[["render",c],["__scopeId","data-v-358b42d1"]]);var J=T;Object(n["b"])(J).mount("#app")},"62f4":function(t,e,r){},"80ec":function(t,e,r){},"93a2":function(t,e,r){"use strict";r("62f4")},a2dd:function(t,e,r){"use strict";r("80ec")},dd8d:function(t,e,r){}});
//# sourceMappingURL=app.d75a3934.js.map