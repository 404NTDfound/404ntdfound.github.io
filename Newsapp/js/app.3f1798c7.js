(function(t){function n(n){for(var a,r,s=n[0],o=n[1],u=n[2],l=0,h=[];l<s.length;l++)r=s[l],i[r]&&h.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);f&&f(n);while(h.length)h.shift()();return c.push.apply(c,u||[]),e()}function e(){for(var t,n=0;n<c.length;n++){for(var e=c[n],a=!0,r=1;r<e.length;r++){var s=e[r];0!==i[s]&&(a=!1)}a&&(c.splice(n--,1),t=o(o.s=e[0]))}return t}var a={},r={app:0},i={app:0},c=[];function s(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"08b02a3e","chunk-032932f7":"cd7ec593","chunk-0518f8b0":"54f85f96","chunk-11ee100c":"4f45106d","chunk-18be53c9":"20a4909b","chunk-1bb0f47d":"be26c7bd","chunk-2d0c7eb0":"7e0306aa","chunk-2d0cb77a":"26c1a91d","chunk-48d632e4":"75e5a46d","chunk-6072b80a":"6fe8112a","chunk-7f9799a9":"a207e664","chunk-94ee6436":"a0aedb83","chunk-cbf207a4":"f4b9b07c","chunk-db3e7ec4":"b4f0b903","chunk-e4a6ac42":"9707b097"}[t]+".js"}function o(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(t){var n=[],e={"chunk-032932f7":1,"chunk-0518f8b0":1,"chunk-11ee100c":1,"chunk-18be53c9":1,"chunk-1bb0f47d":1,"chunk-48d632e4":1,"chunk-6072b80a":1,"chunk-7f9799a9":1,"chunk-94ee6436":1,"chunk-cbf207a4":1,"chunk-db3e7ec4":1,"chunk-e4a6ac42":1};r[t]?n.push(r[t]):0!==r[t]&&e[t]&&n.push(r[t]=new Promise(function(n,e){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-032932f7":"7d68cdc6","chunk-0518f8b0":"c5e9a582","chunk-11ee100c":"7d68cdc6","chunk-18be53c9":"7d68cdc6","chunk-1bb0f47d":"7d68cdc6","chunk-2d0c7eb0":"31d6cfe0","chunk-2d0cb77a":"31d6cfe0","chunk-48d632e4":"7d68cdc6","chunk-6072b80a":"7d68cdc6","chunk-7f9799a9":"70aba5ec","chunk-94ee6436":"b843a90b","chunk-cbf207a4":"7d68cdc6","chunk-db3e7ec4":"7d68cdc6","chunk-e4a6ac42":"7d68cdc6"}[t]+".css",i=o.p+a,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return n()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){u=h[s],l=u.getAttribute("data-href");if(l===a||l===i)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var a=n&&n.target&&n.target.src||i,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[t],f.parentNode.removeChild(f),e(c)},f.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){r[t]=0}));var a=i[t];if(0!==a)if(a)n.push(a[2]);else{var c=new Promise(function(n,e){a=i[t]=[n,e]});n.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=s(t),u=function(n){l.onerror=l.onload=null,clearTimeout(h);var e=i[t];if(0!==e){if(e){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,c=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");c.type=a,c.request=r,e[1](c)}i[t]=void 0}};var h=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(n)},o.m=t,o.c=a,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)o.d(e,a,function(n){return t[n]}.bind(null,a));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var h=0;h<u.length;h++)n(u[h]);var f=l;c.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var a=e("64a9"),r=e.n(a);r.a},"0a0f":function(t,n,e){"use strict";var a=e("9cdc"),r=e.n(a);r.a},"0fe2":function(t,n,e){},1023:function(t,n,e){},"203b":function(t,n,e){"use strict";var a=e("6398"),r=e.n(a);r.a},"2e90":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"list",attrs:{id:"List"}},[t.onloading?t._t("default"):t._e(),e("ul",t._l(t.newsList,function(n,a){return e("li",{key:a,class:{type1:1==n.imgsrc3gtype,type2:2==n.imgsrc3gtype,type3:3==n.imgsrc3gtype},on:{click:function(e){return t.handle(n.link)}}},[0==n.imgsrc3gtype?e("div",{staticClass:"msginfo"},[e("h4",[t._v(t._s(n.title))]),e("p",{staticClass:"author-info"},[t._v(t._s(n.source)+" "+t._s(n.ptime))])]):t._e(),1==n.imgsrc3gtype?e("div",{staticClass:"msginfo"},[e("h4",[t._v(t._s(n.title))]),e("p",{staticClass:"author-info"},[t._v(t._s(n.source)+" "+t._s(n.ptime))])]):t._e(),1==n.imgsrc3gtype?e("div",{staticClass:"imgContent"},[e("img",{attrs:{src:n.picInfo[0].url,alt:"item.title"}})]):t._e(),2==n.imgsrc3gtype?e("div",{staticClass:"msginfo"},[e("h4",[t._v(t._s(n.title))])]):t._e(),2==n.imgsrc3gtype?e("div",{staticClass:"imgContent"},[e("img",{attrs:{src:n.picInfo[0].url,alt:"item.title"}}),e("img",{attrs:{src:n.picInfo[1].url,alt:"item.title"}}),e("img",{attrs:{src:n.picInfo[2].url,alt:"item.title"}})]):t._e(),2==n.imgsrc3gtype?e("p",{staticClass:"author-info"},[t._v(t._s(n.source)+" "+t._s(n.ptime))]):t._e(),3==n.imgsrc3gtype?e("div",{staticClass:"msginfo type3"},[e("h4",[t._v(t._s(n.title))])]):t._e(),3==n.imgsrc3gtype?e("div",{staticClass:"imgContent type3"},[e("img",{attrs:{src:n.picInfo[0].url,alt:"item.title"}})]):t._e(),3==n.imgsrc3gtype?e("p",{staticClass:"author-info"},[t._v(t._s(n.source)+" "+t._s(n.ptime))]):t._e()])}),0)],2)},r=[],i=(e("b54a"),e("3a5e")),c=(e("3022"),{name:"List",props:["link"],data:function(){return{newsList:[],onloading:!1,newurl:this.link,localarr:null}},components:{Loading:i["a"]},watch:{},methods:{handle:function(t){this.$router.push({name:"Detail",query:{id:t}})}},created:function(){var t=this,n=window.localStorage;if(localStorage.getItem("ilocal")){switch(this.localarr=JSON.parse(localStorage.getItem("ilocal")),this.newurl){case"toutiao":this.newsList=this.localarr.toutiao;break;case"ent":this.newsList=this.localarr.ent;break;case"sports":this.newsList=this.localarr.sports;break;case"tech":this.newsList=this.localarr.tech;break;case"war":this.newsList=this.localarr.war;break;case"dy":this.newsList=this.localarr.dy;break;case"money":this.newsList=this.localarr.money;break;case"auto":this.newsList=this.localarr.auto;break}this.onloading=!0}axios.get("https://api.kele8.cn/agent?url=https://www.apiopen.top/journalismApi").then(function(e){switch(t.localarr=e.data.data,n.setItem("ilocal",JSON.stringify(t.localarr)),t.newurl){case"toutiao":t.newsList=t.localarr.toutiao;break;case"ent":t.newsList=t.localarr.ent;break;case"sports":t.newsList=t.localarr.sports;break;case"tech":t.newsList=t.localarr.tech;break;case"war":t.newsList=t.localarr.war;break;case"dy":t.newsList=t.localarr.dy;break;case"money":t.newsList=t.localarr.money;break}t.onloading=!0}).catch(function(t){console.error(t)})}}),s=c,o=(e("9d75"),e("2877")),u=Object(o["a"])(s,a,r,!1,null,"35c5478c",null);n["a"]=u.exports},"3a5e":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"Loading"},[e("div",{staticClass:"bounce1"}),e("div",{staticClass:"bounce2"}),e("div",{staticClass:"bounce3"})])}],i={name:"Loading"},c=i,s=(e("9206"),e("2877")),o=Object(s["a"])(c,a,r,!1,null,null,null);n["a"]=o.exports},5698:function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var a=e("2b0e"),r=e("bc3a"),i=e.n(r),c={},s=i.a.create(c);s.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),s.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)}),Plugin.install=function(t,n){t.axios=s,window.axios=s,Object.defineProperties(t.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},a["a"].use(Plugin);Plugin;var o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"app"}},[t.navShow?a("div",{staticClass:"logo"},[a("img",{attrs:{src:e("9c29"),alt:""}})]):t._e(),t.navShow?a("div",{staticClass:"index-head"},[a("ul",[a("router-link",{attrs:{to:"/"}},[a("li",[t._v("要闻")])]),a("router-link",{attrs:{to:"about"}},[a("li",[t._v("推荐")])]),a("router-link",{attrs:{to:"Orlist"}},[a("li",[t._v("原创")])])],1)]):t._e(),t.isRouterAlive?a("router-view"):t._e()],1)},u=[],l=(e("7f7f"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"nav",attrs:{id:"Nav"}},[e("ul",[e("router-link",{attrs:{to:"/Fun"}},[e("li",[t._v("娱乐")])]),e("router-link",{attrs:{to:"/Sport"}},[e("li",[t._v("体育")])]),e("router-link",{attrs:{to:"/Money"}},[e("li",[t._v("财经")])]),e("router-link",{attrs:{to:"/War"}},[e("li",[t._v("军事")])]),e("router-link",{attrs:{to:"/Tech"}},[e("li",[t._v("科技")])]),e("router-link",{attrs:{to:"/Phone"}},[e("li",[t._v("手机")])]),e("router-link",{attrs:{to:"/Digtal"}},[e("li",[t._v("数码")])]),e("router-link",{attrs:{to:"/Fashion"}},[e("li",[t._v("时尚")])]),e("router-link",{attrs:{to:"/Game"}},[e("li",[t._v("游戏")])]),e("router-link",{attrs:{to:"/Edu"}},[e("li",[t._v("教育")])]),e("router-link",{attrs:{to:"/Health"}},[e("li",[t._v("健康")])]),e("router-link",{attrs:{to:"/Travel"}},[e("li",[t._v("旅游")])])],1)])}),h=[],f={name:"Nav",data:function(){return{url:"",page:0}},methods:{jumpto:function(t,n){this.$router.push({name:t,query:{id:n}})}}},d=f,g=(e("c4da"),e("2877")),p=Object(g["a"])(d,l,h,!1,null,null,null),m=p.exports,b=e("2e90"),v=e("e9c9"),k=(e("3022"),{name:"App",provide:function(){return{reload:this.reload}},data:function(){return{newurl:"",navShow:!0,isRouterAlive:!0}},components:{Nav:m,List:b["a"],Top:v["a"]},methods:{reload:function(){this.isRouterAlive=!1,this.$nextTick(function(){this.isRouterAlive=!0})}},watch:{$route:function(t,n){var e=t.name;this.navShow="home"===e||"about"===e||"Orlist"===e}}}),w=k,_=(e("034f"),e("94fb"),Object(g["a"])(w,o,u,!1,null,null,null)),y=_.exports,L=e("8c4f"),C=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("Nav"),e("List",{attrs:{link:"toutiao"}},[e("h6",[t._v("今日要闻")])]),e("List",{attrs:{link:"ent"}},[e("h6",[t._v("娱乐")])]),e("List",{attrs:{link:"sports"}},[e("h6",[t._v("体育")])]),e("List",{attrs:{link:"money"}},[e("h6",[t._v("财经")])]),e("List",{attrs:{link:"tech"}},[e("h6",[t._v("科技")])]),e("List",{attrs:{link:"war"}},[e("h6",[t._v("军事")])]),e("List",{attrs:{link:"auto"}},[e("h6",[t._v("汽车")])]),e("i",{staticClass:"toloading"}),t.onloading?e("Loading"):t._e()],1)},A=[],B=e("cbbf"),E=e("3a5e"),O={name:"home",components:{Nav:m,List:b["a"],Listdev:B["a"],Loading:E["a"]},data:function(){return{onloading:!0,showcount:1}},methods:{},mounted:function(){var t=document.querySelector(".toloading"),n=this;window.onscroll=function(){t.offsetTop<=window.innerHeight+document.documentElement.scrollTop&&(n.onloading=!1,n.showcount+=1)}}},D=O,S=(e("de16"),Object(g["a"])(D,C,A,!1,null,null,null)),x=S.exports;a["a"].use(L["a"]);var j=new L["a"]({routes:[{path:"/",name:"home",component:x},{path:"/about",name:"about",component:function(){return e.e("about").then(e.bind(null,"f820"))}},{path:"/Detail",name:"Detail",component:function(){return e.e("chunk-0518f8b0").then(e.bind(null,"c84b"))}},{path:"/Orlist",name:"Orlist",component:function(){return e.e("chunk-2d0cb77a").then(e.bind(null,"4a90"))}},{path:"/Fun",name:"Fun",component:function(){return e.e("chunk-7f9799a9").then(e.bind(null,"ce30"))}},{path:"/Money",name:"Money",component:function(){return e.e("chunk-6072b80a").then(e.bind(null,"aba4"))}},{path:"/War",name:"War",component:function(){return e.e("chunk-94ee6436").then(e.bind(null,"8998"))}},{path:"/Sport",name:"Sport",component:function(){return e.e("chunk-1bb0f47d").then(e.bind(null,"3a0c"))}},{path:"/Tech",name:"Tech",component:function(){return e.e("chunk-18be53c9").then(e.bind(null,"c844"))}},{path:"/Phone",name:"Phone",component:function(){return e.e("chunk-11ee100c").then(e.bind(null,"4f77"))}},{path:"/Digtal",name:"Digtal",component:function(){return e.e("chunk-2d0c7eb0").then(e.bind(null,"5351"))}},{path:"/Fashion",name:"Fashion",component:function(){return e.e("chunk-db3e7ec4").then(e.bind(null,"f20d"))}},{path:"/Game",name:"Game",component:function(){return e.e("chunk-cbf207a4").then(e.bind(null,"7d36"))}},{path:"/Edu",name:"Edu",component:function(){return e.e("chunk-48d632e4").then(e.bind(null,"0d51"))}},{path:"/Health",name:"Health",component:function(){return e.e("chunk-032932f7").then(e.bind(null,"0887"))}},{path:"/Travel",name:"Travel",component:function(){return e.e("chunk-e4a6ac42").then(e.bind(null,"4696"))}}]}),I=e("ec7e"),T=e.n(I),P=e("2f62");a["a"].use(P["a"]);var $=new P["a"].Store({state:{},mutations:{},actions:{}}),N=e("2ef0"),F=e.n(N);Object.defineProperty(a["a"].prototype,"$lodash",{value:F.a}),a["a"].use(T.a),a["a"].config.productionTip=!1,new a["a"]({router:j,store:$,render:function(t){return t(y)}}).$mount("#app")},6398:function(t,n,e){},"64a9":function(t,n,e){},9206:function(t,n,e){"use strict";var a=e("1023"),r=e.n(a);r.a},"94fb":function(t,n,e){"use strict";var a=e("5698"),r=e.n(a);r.a},"9c29":function(t,n,e){t.exports=e.p+"img/logo-site.b01afb16.png"},"9cdc":function(t,n,e){},"9d75":function(t,n,e){"use strict";var a=e("0fe2"),r=e.n(a);r.a},c4da:function(t,n,e){"use strict";var a=e("d432"),r=e.n(a);r.a},cbbf:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"list",attrs:{id:"Listdev"}},[t._t("default"),e("ul",t._l(t.newsList,function(n,a){return e("li",{key:a,class:{type1:1==n.imgsrc3gtype,type2:2==n.imgsrc3gtype,type3:3==n.imgsrc3gtype},on:{click:function(e){return t.handle(n.skipType,n.url,n.photosetID,n.skipURL)}}},[e("div",{staticClass:"msginfo"},[e("h4",[t._v(t._s(n.title))]),1==n.imgsrc3gtype||3==n.imgsrc3gtype?e("p",[t._v(t._s(n.source)+" "+t._s(n.ptime))]):t._e()]),1==n.imgsrc3gtype?e("div",{staticClass:"imgContent"},[e("img",{attrs:{src:n.imgsrc,alt:n.title}})]):t._e(),3==n.imgsrc3gtype?e("div",{staticClass:"imgContent"},[e("img",{attrs:{src:n.imgsrc,alt:n.title}})]):t._e(),2==n.imgsrc3gtype?e("div",{staticClass:"imgContent"},[e("img",{attrs:{src:n.imgsrc,alt:n.title}}),e("img",{attrs:{src:n.imgextra[0].imgsrc,alt:n.title}}),e("img",{attrs:{src:n.imgextra[1].imgsrc,alt:n.title}})]):t._e(),2==n.imgsrc3gtype?e("p",[t._v(t._s(n.source)+" "+t._s(n.ptime))]):t._e()])}),0),t.onloading?e("Loading"):t._e(),e("i",{staticClass:"toloading"})],2)},r=[],i=(e("a481"),e("b54a"),e("3a5e")),c=(e("3022"),e("5118")),s=(e("2ef0"),{name:"Listdev",props:["link"],data:function(){return{newsList:[],onloading:"ture",page:10,changeurl:this.link,newarr:""}},components:{Loading:i["a"]},methods:{handle:function(t,n,e,a){if("video"==t)this.$router.push({name:"Detail",query:{id:a}});else if("photoset"==t){if(e)var r="https://3g.163.com/all/photoview/".concat(e.replace("|","/"),".html");this.$router.push({name:"Detail",query:{id:r}})}else"photoset"!=t&&this.$router.push({name:"Detail",query:{id:n}})},exchangeData:function(t){switch(this.changeurl){case"BA10TA81wangning":this.newarr=t.BA10TA81wangning;break;case"BD2A86BEwangning":this.newarr=t.BD2A86BEwangning;break;case"BD2A9LEIwangning":this.newarr=t.BD2A9LEIwangning;break;case"BD2AB5L9wangning":this.newarr=t.BD2AB5L9wangning;break;case"BD2AC4LMwangning":this.newarr=t.BD2AC4LMwangning;break;case"BA8E6OEOwangning":this.newarr=t.BA8E6OEOwangning;break;case"BA8EE5GMwangning":this.newarr=t.BA8EE5GMwangning;break;case"BAI67OGGwangning":this.newarr=t.BAI67OGGwangning;break;case"DE0CGUSJwangning":this.newarr=t.DE0CGUSJwangning;break;case"BAI6JOD9wangning":this.newarr=t.BAI6JOD9wangning;break;case"BEO4GINLwangning":this.newarr=t.BEO4GINLwangning;break;case"BA8D4A3Rwangning":this.newarr=t.BA8D4A3Rwangning;break;case"BAI6I0O5wangning":this.newarr=t.BAI6I0O5wangning;break;case"BDC4QSV3wangning":this.newarr=t.BDC4QSV3wangning;break;case"BAI6RHDKwangning":this.newarr=t.BAI6RHDKwangning;break;case"BA8F6ICNwangning":this.newarr=t.BA8F6ICNwangning;break;case"BA8FF5PRwangning":this.newarr=t.BA8FF5PRwangning;break}}},created:function(){var t=this,n="https://3g.163.com/touch/reconstruct/article/list/".concat(this.changeurl,"/0-10.html");this.$jsonp(n,{callbackName:"artiList"}).then(function(n){t.exchangeData(n),t.newsList=t.newarr,t.onloading=!1}).catch(function(t){console.log(t)})},mounted:function(){var t=this,n=document.querySelector(".toloading"),e=!0;document.onscroll=function(){if(n.offsetTop<=window.innerHeight+document.documentElement.scrollTop&&1==e){e=!1;var a="https://3g.163.com/touch/reconstruct/article/list/".concat(t.changeurl,"/").concat(t.page,"-5.html");t.$jsonp(a,{callbackName:"artiList"}).then(function(n){t.page+=6,t.exchangeData(n),t.newsList=t.newsList.concat(t.newarr),t.onloading=!1,Object(c["setTimeout"])(function(){e=!0},100)}).catch(function(t){console.log(t)})}}}}),o=s,u=(e("0a0f"),e("2877")),l=Object(u["a"])(o,a,r,!1,null,null,null);n["a"]=l.exports},d432:function(t,n,e){},de16:function(t,n,e){"use strict";var a=e("f3e7"),r=e.n(a);r.a},e9c9:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"top"},[t._m(0),e("router-link",{attrs:{to:"/"}},[e("i",{staticClass:"fa fa-home"})])],1)},r=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",{attrs:{href:"#Detail"}},[e("i",{staticClass:"fa fa-angle-up toUp"})])}],i={name:"top",methods:{touper:function(){}},mounted:function(){}},c=i,s=(e("203b"),e("2877")),o=Object(s["a"])(c,a,r,!1,null,"0a216d2a",null);n["a"]=o.exports},f3e7:function(t,n,e){}});
//# sourceMappingURL=app.3f1798c7.js.map