(function(t){function e(e){for(var r,s,a=e[0],u=e[1],l=e[2],f=0,b=[];f<a.length;f++)s=a[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&b.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);i&&i(e);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},c=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var i=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1a20":function(t,e,n){"use strict";n("67ff")},"4b69":function(t,e,n){"use strict";n("a7cb")},"4bb0":function(t,e,n){},"544a":function(t,e,n){"use strict";n("4bb0")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=function(t){return Object(r["h"])("data-v-0c0f57f5"),t=t(),Object(r["g"])(),t},c={class:"container"},s=o((function(){return Object(r["d"])("h1",null,"Shortit",-1)}));function a(t,e,n,o,a,u){var l=Object(r["j"])("Shortener"),i=Object(r["j"])("Stats");return Object(r["f"])(),Object(r["c"])("div",c,[s,Object(r["e"])(l,{onShorten:u.shorten,showShorted:a.showShorted,shortedUrl:a.shortedUrl,fullUrl:a.fullUrl},null,8,["onShorten","showShorted","shortedUrl","fullUrl"]),Object(r["e"])(i,{stats:a.stats},null,8,["stats"])])}var u=n("1da1");n("96cf"),n("d3b7"),n("e9c4");function l(t,e,n,o,c,s){var a=Object(r["j"])("MainInput"),u=Object(r["j"])("ShortedUrl");return Object(r["f"])(),Object(r["c"])(r["a"],null,[Object(r["e"])(a,{class:"row",onShorten:s.shorten},null,8,["onShorten"]),Object(r["n"])(Object(r["e"])(u,{short:n.shortedUrl,full:n.fullUrl},null,8,["short","full"]),[[r["m"],n.showShorted]])],64)}var i=function(t){return Object(r["h"])("data-v-f2bd155e"),t=t(),Object(r["g"])(),t},f=i((function(){return Object(r["d"])("input",{type:"submit",value:"Shorten",class:"btn"},null,-1)}));function b(t,e,n,o,c,s){return Object(r["f"])(),Object(r["c"])("form",{onSubmit:e[1]||(e[1]=function(){return s.onSubmit&&s.onSubmit.apply(s,arguments)}),class:"row"},[Object(r["n"])(Object(r["d"])("input",{class:"full-url-input",type:"text","onUpdate:modelValue":e[0]||(e[0]=function(t){return c.fullUrl=t}),name:"fullUrl",placeholder:"Link to shorten"},null,512),[[r["l"],c.fullUrl]]),f],32)}var d={name:"MainInput",data:function(){return{fullUrl:""}},methods:{onSubmit:function(t){t.preventDefault();var e={fullUrl:this.fullUrl};this.$emit("shorten",e),this.fullUrl=""}}},h=(n("1a20"),n("6b0d")),p=n.n(h);const j=p()(d,[["render",b],["__scopeId","data-v-f2bd155e"]]);var O=j,v={class:"link"},m={class:"full-url"},S={class:"short-url"},y=["href"],g={class:"copy"};function w(t,e,n,o,c,s){var a=Object(r["j"])("Button");return Object(r["f"])(),Object(r["c"])("div",v,[Object(r["d"])("span",m,Object(r["k"])(n.full),1),Object(r["d"])("span",null,[Object(r["d"])("span",S,[Object(r["d"])("a",{href:n.short},Object(r["k"])(n.short),9,y)]),Object(r["d"])("span",g,[Object(r["e"])(a,{class:"btn",onBtnClick:s.copy,text:"Copy"},null,8,["onBtnClick"])])])])}function U(t,e,n,o,c,s){return Object(r["f"])(),Object(r["c"])("button",{onClick:e[0]||(e[0]=function(t){return s.onClick()}),class:"btn"},Object(r["k"])(n.text),1)}var k={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("btn-click")}}};const x=p()(k,[["render",U]]);var _=x,C={name:"ShortedUrl",components:{Button:_},props:{full:String,short:String},methods:{copy:function(){var t=document.getElementsByClassName("short-url")[0];navigator.clipboard.writeText(t.innerText)}}};n("4b69");const I=p()(C,[["render",w],["__scopeId","data-v-2d44f358"]]);var P=I,B={name:"Shortener",props:{showShorted:Boolean,fullUrl:String,shortedUrl:String},data:function(){return{short:this.shortedUrl,full:this.fullUrl}},components:{MainInput:O,ShortedUrl:P},methods:{shorten:function(t){this.$emit("shorten",t)}},emits:["shorten"]};const M=p()(B,[["render",l]]);var R=M,T=function(t){return Object(r["h"])("data-v-5bb85111"),t=t(),Object(r["g"])(),t},J=T((function(){return Object(r["d"])("tr",null,[Object(r["d"])("th",null,"URL"),Object(r["d"])("th",null,"Shortened"),Object(r["d"])("th",null,"Hits")],-1)}));function $(t,e,n,o,c,s){var a=Object(r["j"])("Stat");return Object(r["f"])(),Object(r["c"])("table",null,[J,(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["i"])(n.stats,(function(t){return Object(r["f"])(),Object(r["c"])("tr",{key:t._id},[Object(r["e"])(a,{stat:t},null,8,["stat"])])})),128))])}var A={class:"stats-url"},L={class:"stats-short"},N=["href"],D={class:"stats-full"},E={class:"stats-shortened"},H={class:"stats-hits"};function V(t,e,n,o,c,s){return Object(r["f"])(),Object(r["c"])(r["a"],null,[Object(r["d"])("td",A,[Object(r["d"])("span",L,[Object(r["d"])("a",{href:"https://crlnm.com/l/"+n.stat.short},Object(r["k"])("crlnm.com/l/".concat(n.stat.short)),9,N)]),Object(r["d"])("span",D,Object(r["k"])(n.stat.full),1)]),Object(r["d"])("td",E,Object(r["k"])(n.stat.shortened),1),Object(r["d"])("td",H,Object(r["k"])(n.stat.hits),1)],64)}var q={name:"Stat",props:{stat:Object}};n("544a");const z=p()(q,[["render",V],["__scopeId","data-v-50bda113"]]);var F=z,G={name:"Stats",props:{stats:Array},components:{Stat:F}};n("9971");const K=p()(G,[["render",$],["__scopeId","data-v-5bb85111"]]);var Q=K,W={name:"App",components:{Shortener:R,Stats:Q},data:function(){return{stats:[],showShorted:!0,shortedUrl:"",fullUrl:""}},methods:{shorten:function(t){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:if(r=n.sent,r.ok){n.next=6;break}return console.error("short url post error"),n.abrupt("return");case 6:return n.next=8,r.json();case 8:return o=n.sent,e.fullUrl=o.data.full,e.shortedUrl="https://crlnm.com/l/"+o.data.short,e.showShorted=!0,n.abrupt("return",o);case 13:case"end":return n.stop()}}),n)})))()},fetchStats:function(){return Object(u["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/stats");case 2:if(e=t.sent,e.ok){t.next=6;break}return console.error("stats fetch error"),t.abrupt("return");case 6:return t.next=8,e.json();case 8:return n=t.sent,t.abrupt("return",n.data.stats);case 10:case"end":return t.stop()}}),t)})))()}},created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchStats();case 2:t.stats=e.sent;case 3:case"end":return e.stop()}}),e)})))()}};n("7419");const X=p()(W,[["render",a],["__scopeId","data-v-0c0f57f5"]]);var Y=X;Object(r["b"])(Y).mount("#app")},"67ff":function(t,e,n){},"6fe0":function(t,e,n){},7419:function(t,e,n){"use strict";n("6fe0")},9236:function(t,e,n){},9971:function(t,e,n){"use strict";n("9236")},a7cb:function(t,e,n){}});
//# sourceMappingURL=app.d5ce82ac.js.map