(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Reader"],{"02f4":function(t,e,n){var r=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var o,c,a=String(i(e)),s=r(n),l=a.length;return s<0||s>=l?t?"":void 0:(o=a.charCodeAt(s),o<55296||o>56319||s+1===l||(c=a.charCodeAt(s+1))<56320||c>57343?t?a.charAt(s):o:t?a.slice(s,s+2):c-56320+(o-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"11e9":function(t,e,n){var r=n("52a7"),i=n("4630"),o=n("6821"),c=n("6a99"),a=n("69a8"),s=n("c69a"),l=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?l:function(t,e){if(t=o(t),e=c(e,!0),s)try{return l(t,e)}catch(n){}if(a(t,e))return i(!r.f.call(t,e),t[e])}},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),i=n("32e9"),o=n("79e5"),c=n("be13"),a=n("2b4c"),s=n("520a"),l=a("species"),u=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var h=a(t),p=!o(function(){var e={};return e[h]=function(){return 7},7!=""[t](e)}),d=p?!o(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[h](""),!e}):void 0;if(!p||!d||"replace"===t&&!u||"split"===t&&!f){var v=/./[h],g=n(c,h,""[t],function(t,e,n,r,i){return e.exec===s?p&&!i?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),m=g[0],b=g[1];r(String.prototype,t,m),i(RegExp.prototype,h,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"28a5":function(t,e,n){"use strict";var r=n("aae3"),i=n("cb7c"),o=n("ebd6"),c=n("0390"),a=n("9def"),s=n("5f1b"),l=n("520a"),u=n("79e5"),f=Math.min,h=[].push,p="split",d="length",v="lastIndex",g=4294967295,m=!u(function(){RegExp(g,"y")});n("214f")("split",2,function(t,e,n,u){var b;return b="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[d]||2!="ab"[p](/(?:ab)*/)[d]||4!="."[p](/(.?)(.?)/)[d]||"."[p](/()()/)[d]>1||""[p](/.?/)[d]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);var o,c,a,s=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,p=void 0===e?g:e>>>0,m=new RegExp(t.source,u+"g");while(o=l.call(m,i)){if(c=m[v],c>f&&(s.push(i.slice(f,o.index)),o[d]>1&&o.index<i[d]&&h.apply(s,o.slice(1)),a=o[0][d],f=c,s[d]>=p))break;m[v]===o.index&&m[v]++}return f===i[d]?!a&&m.test("")||s.push(""):s.push(i.slice(f)),s[d]>p?s.slice(0,p):s}:"0"[p](void 0,0)[d]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,i,r):b.call(String(i),n,r)},function(t,e){var r=u(b,t,this,e,b!==n);if(r.done)return r.value;var l=i(t),h=String(this),p=o(l,RegExp),d=l.unicode,v=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(m?"y":"g"),k=new p(m?l:"^(?:"+l.source+")",v),x=void 0===e?g:e>>>0;if(0===x)return[];if(0===h.length)return null===s(k,h)?[h]:[];var y=0,_=0,w=[];while(_<h.length){k.lastIndex=m?_:0;var S,N=s(k,m?h:h.slice(_));if(null===N||(S=f(a(k.lastIndex+(m?0:_)),h.length))===y)_=c(h,_,d);else{if(w.push(h.slice(y,_)),w.length===x)return w;for(var I=1;I<=N.length-1;I++)if(w.push(N[I]),w.length===x)return w;_=y=S}}return w.push(h.slice(y)),w}]})},"30f1d":function(t,e,n){"use strict";var r=n("ec9f"),i=n.n(r);i.a},"320c":function(t,e,n){"use strict";var r=n("5c45"),i=n.n(r);i.a},"386b":function(t,e,n){var r=n("5ca1"),i=n("79e5"),o=n("be13"),c=/"/g,a=function(t,e,n,r){var i=String(o(t)),a="<"+e;return""!==n&&(a+=" "+n+'="'+String(r).replace(c,"&quot;")+'"'),a+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(a),r(r.P+r.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},"520a":function(t,e,n){"use strict";var r=n("0bfb"),i=RegExp.prototype.exec,o=String.prototype.replace,c=i,a="lastIndex",s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[a]||0!==e[a]}(),l=void 0!==/()??/.exec("")[1],u=s||l;u&&(c=function(t){var e,n,c,u,f=this;return l&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),s&&(e=f[a]),c=i.call(f,t),s&&c&&(f[a]=f.global?c.index+c[0].length:e),l&&c&&c.length>1&&o.call(c[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(c[u]=void 0)}),c}),t.exports=c},"5c45":function(t,e,n){},"5dbc":function(t,e,n){var r=n("d3f4"),i=n("8b97").set;t.exports=function(t,e,n){var o,c=e.constructor;return c!==n&&"function"==typeof c&&(o=c.prototype)!==n.prototype&&r(o)&&i&&i(t,o),t}},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"8b97":function(t,e,n){var r=n("d3f4"),i=n("cb7c"),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},9093:function(t,e,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},"968f":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{moon:t.moon},attrs:{id:"Reader"}},[n("Topnav",{staticClass:"Reader-topnav",class:{blur:this.showList,shownav:this.show,moon:t.moon}}),n("div",{on:{click:t.hidelist}},[n("div",{staticClass:"top-title",class:{blur:t.showList,moon:t.moon}},[t._v(t._s(t.content.title))]),n("div",{staticClass:"txt-content",class:{blur:t.showList,moon:t.moon}},[n("h3",[t._v(t._s(t.content.title))]),t.imgcontent?n("div",t._l(t.imgcontent,function(t,e){return n("div",{key:e,staticClass:"img-content"},[n("img",{attrs:{src:t,alt:""}})])}),0):t._e(),t.content.isVip?n("div",{staticClass:"err"},[t._v("抱歉，当前章节只供VIP浏览")]):t._e(),t.erro?n("div",{staticClass:"err"},[t._v("抱歉，网络出了点小差错")]):t._e(),t.content.isVip?t._e():n("p",{style:{fontSize:t.fontSize+"rem"}},[t._v(t._s(t.content.cpContent))])])]),n("div",{staticClass:"Readerbottom",class:{blur:t.showList,showbottom:this.show}},[n("el-button",{attrs:{type:"info",icon:"el-icon-arrow-left"},nativeOn:{click:function(e){return t.prev(e)}}}),n("span",{staticClass:"loglist",on:{click:function(e){t.showList=!t.showList}}},[t._v("目录")]),n("el-button",{attrs:{type:"info",icon:"el-icon-arrow-right"},nativeOn:{click:function(e){return t.next(e)}}}),n("span",{staticClass:"lightTogle"},[n("i",{class:{"el-icon-sunny":t.moon,"el-icon-moon":!t.moon},on:{click:t.moonmode}})]),n("span",{staticClass:"fontbtn",on:{click:function(e){return t.changefont(-.1)}}},[t._v("\n      A\n      "),n("i",{staticClass:"el-icon-minus"})]),n("span",{staticClass:"fontbtn",on:{click:function(e){return t.changefont(.1)}}},[t._v("\n      A\n      "),n("i",{staticClass:"el-icon-plus"})])],1),n("Readersetting",{class:{Listactive:t.showList},attrs:{lock:t.linkparmes}})],1)},i=[],o=(n("28a5"),n("a481"),n("b54a"),n("c5f6"),n("5c96")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Readersetting"}},[n("div",{staticClass:"list"},[n("div",{staticClass:"cheaper-title"},[t._v("目录")]),n("li",{staticClass:"relist",on:{click:t.reverse}},[t.rever?n("span",[t._v("倒序")]):t._e(),t.rever?t._e():n("span",[t._v("正序")])]),t._l(t.list.chapters,function(e,r){return n("li",{key:r,class:{lockcheaper:e.link==t.lock.readlink},on:{click:function(n){return t.readbook(e.link,t.list._id,e.order)}}},[t._v(t._s(e.title))])})],2)])},a=[],s={name:"Readersetting",props:["lock"],component:{},computed:{updateBookChapter:function(){return this.$store.state.updateBookChapter}},data:function(){return{list:[],close:!1,rever:!0}},created:function(){sessionStorage.getItem("".concat(this.lock.orid,"-chaptersList"))&&(this.list=JSON.parse(sessionStorage.getItem("".concat(this.lock.orid,"-chaptersList"))))},methods:{closeList:function(){this.close=!this.close},reverse:function(){this.rever=!this.rever,this.list.chapters.reverse()},readbook:function(t,e,n){window.localStorage.setItem("".concat(this.lock.orid,"-schedule"),JSON.stringify(n)),this.$router.replace({name:"Reader",query:{readlink:t,id:e,n:n,orid:this.lock.orid}})}}},l=s,u=(n("30f1d"),n("2877")),f=Object(u["a"])(l,c,a,!1,null,null,null),h=f.exports,p=n("2fc9"),d={name:"Reader",inject:["reload"],data:function(){return{linkparmes:[],content:[],imgcontent:[],loading:!0,canscroll:!1,showList:!1,show:!1,cheaptern:[],moon:!1,erro:!1,fontSize:1}},components:{Readersetting:h,Topnav:p["a"]},methods:{changefont:function(t){.1!=this.fontSize&&(this.fontSize=Number(this.fontSize)+Number(t))},moonmode:function(){this.moon=!this.moon},hidelist:function(){this.show=!this.show,this.showList&&(this.showList=!1)},next:function(){window.localStorage.setItem("".concat(this.linkparmes.orid,"-schedule"),JSON.stringify(this.linkparmes.n)),this.cheaptern=JSON.parse(sessionStorage.getItem("".concat(this.linkparmes.orid,"-chaptersList"))).chapters[Number(this.linkparmes.n)+Number(1)].link,this.$router.replace({name:"Reader",query:{readlink:this.cheaptern,id:this.linkparmes.id,n:Number(this.linkparmes.n)+Number(1),orid:this.linkparmes.orid}})},prev:function(){window.localStorage.setItem("".concat(this.linkparmes.orid,"-schedule"),JSON.stringify(this.linkparmes.n)),this.cheaptern=JSON.parse(sessionStorage.getItem("".concat(this.linkparmes.orid,"-chaptersList"))).chapters[Number(this.linkparmes.n)-Number(1)].link,this.$router.replace({name:"Reader",query:{readlink:this.cheaptern,id:this.linkparmes.id,n:Number(this.linkparmes.n)-Number(1),orid:this.linkparmes.orid}})}},created:function(){var t=this,e=this.$route.query;this.linkparmes=e;var n=o["Loading"].service({fullscreen:!0}),r="https://api.kele8.cn/agent?url=http://chapterup.zhuishushenqi.com/chapter/".concat(this.linkparmes.readlink);axios.get(r).then(function(e){t.content=e.data.chapter,e.data.chapter.images&&(t.imgcontent=e.data.chapter.images.split(",")),t.$nextTick(function(){n.close()})}).catch(function(e){console.error(e),t.erro=!0})},beforeRouteUpdate:function(t,e,n){this.reload(),n()}},v=d,g=(n("320c"),Object(u["a"])(v,r,i,!1,null,null,null));e["default"]=g.exports},a481:function(t,e,n){"use strict";var r=n("cb7c"),i=n("4bf8"),o=n("9def"),c=n("4588"),a=n("0390"),s=n("5f1b"),l=Math.max,u=Math.min,f=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,d=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,function(t,e,n,v){return[function(r,i){var o=t(this),c=void 0==r?void 0:r[e];return void 0!==c?c.call(r,o,i):n.call(String(o),r,i)},function(t,e){var i=v(n,t,this,e);if(i.done)return i.value;var f=r(t),h=String(this),p="function"===typeof e;p||(e=String(e));var m=f.global;if(m){var b=f.unicode;f.lastIndex=0}var k=[];while(1){var x=s(f,h);if(null===x)break;if(k.push(x),!m)break;var y=String(x[0]);""===y&&(f.lastIndex=a(h,o(f.lastIndex),b))}for(var _="",w=0,S=0;S<k.length;S++){x=k[S];for(var N=String(x[0]),I=l(u(c(x.index),h.length),0),E=[],C=1;C<x.length;C++)E.push(d(x[C]));var R=x.groups;if(p){var L=[N].concat(E,I,h);void 0!==R&&L.push(R);var O=String(e.apply(void 0,L))}else O=g(N,h,I,E,R,e);I>=w&&(_+=h.slice(w,I)+O,w=I+N.length)}return _+h.slice(w)}];function g(t,e,r,o,c,a){var s=r+t.length,l=o.length,u=p;return void 0!==c&&(c=i(c),u=h),n.call(a,u,function(n,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(s);case"<":a=c[i.slice(1,-1)];break;default:var u=+i;if(0===u)return n;if(u>l){var h=f(u/10);return 0===h?n:h<=l?void 0===o[h-1]?i.charAt(1):o[h-1]+i.charAt(1):n}a=o[u-1]}return void 0===a?"":a})}})},aa77:function(t,e,n){var r=n("5ca1"),i=n("be13"),o=n("79e5"),c=n("fdef"),a="["+c+"]",s="​",l=RegExp("^"+a+a+"*"),u=RegExp(a+a+"*$"),f=function(t,e,n){var i={},a=o(function(){return!!c[t]()||s[t]()!=s}),l=i[t]=a?e(h):c[t];n&&(i[n]=l),r(r.P+r.F*a,"String",i)},h=f.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=f},aae3:function(t,e,n){var r=n("d3f4"),i=n("2d95"),o=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},b54a:function(t,e,n){"use strict";n("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})},c5f6:function(t,e,n){"use strict";var r=n("7726"),i=n("69a8"),o=n("2d95"),c=n("5dbc"),a=n("6a99"),s=n("79e5"),l=n("9093").f,u=n("11e9").f,f=n("86cc").f,h=n("aa77").trim,p="Number",d=r[p],v=d,g=d.prototype,m=o(n("2aeb")(g))==p,b="trim"in String.prototype,k=function(t){var e=a(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():h(e,3);var n,r,i,o=e.charCodeAt(0);if(43===o||45===o){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var c,s=e.slice(2),l=0,u=s.length;l<u;l++)if(c=s.charCodeAt(l),c<48||c>i)return NaN;return parseInt(s,r)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof d&&(m?s(function(){g.valueOf.call(n)}):o(n)!=p)?c(new v(k(e)),n,d):k(e)};for(var x,y=n("9e1e")?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;y.length>_;_++)i(v,x=y[_])&&!i(d,x)&&f(d,x,u(v,x));d.prototype=g,g.constructor=d,n("2aba")(r,p,d)}},ec9f:function(t,e,n){},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=Reader.34f7421d.js.map