(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Searchview"],{"0294":function(t,o,e){"use strict";var n=e("3113"),s=e.n(n);s.a},"29cf":function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"Booklist"},[e("el-row",t._l(t.list,function(o,n){return e("el-col",{key:n,staticClass:"book",attrs:{span:24},nativeOn:{click:function(e){return t.gotoDetail(o._id)}}},[e("el-col",{attrs:{span:8}},[e("el-image",{staticClass:"bookcover",attrs:{src:t.cuturl+o.cover}},[e("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v("\n            加载中\n            "),e("span",{staticClass:"dot"},[t._v("...")])])])],1),e("el-col",{attrs:{span:16}},[e("div",{staticClass:"book-info"},[e("h4",[t._v(t._s(o.title))]),e("p",[t._v(t._s(o.shortIntro))]),e("span",[e("i",{staticClass:"el-icon-user"}),t._v("\n            "+t._s(o.author)+"\n          ")])])])],1)}),1)],1)},s=[],i={name:"Booklist",props:["list"],data:function(){return{cuturl:"http://statics.zhuishushenqi.com"}},methods:{gotoDetail:function(t){this.$router.push({name:"Bookdetail",query:{id:t}})}}},a=i,l=(e("0294"),e("2877")),c=Object(l["a"])(a,n,s,!1,null,"447eda0f",null);o["a"]=c.exports},3113:function(t,o,e){},5632:function(t,o,e){},"94ab":function(t,o,e){"use strict";var n=e("5632"),s=e.n(n);s.a},f184:function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{"element-loading-text":"正在翻开绘卷","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(255, 255, 255, 0.8)"}},[e("Topnav"),e("Booklist",{attrs:{list:t.booklist}}),t.nomore?e("span",[t._v("抱歉，没有更多书籍了")]):t._e(),t.nomore?t._e():e("i",{staticClass:"loading el-icon-loading"})],1)},s=[],i=e("29cf"),a=e("2fc9"),l={name:"Searchview",inject:["reload"],data:function(){return{Kword:null,booklist:[],loading:!0,nomore:!1,savelist:[],uppage:11}},components:{Booklist:i["a"],Topnav:a["a"]},created:function(){var t=this,o=this.$route.query;this.Kword=o.Kw,axios.get("https://api.kele8.cn/agent?url=http://api.zhuishushenqi.com/book/fuzzy-search?query=".concat(this.Kword)).then(function(o){t.savelist=o.data.books,t.booklist=t.savelist.slice(0,10),t.loading=!1}).catch(function(t){console.error(t)})},mounted:function(){var t=!0,o=this,e=document.querySelector(".loading");document.onscroll=function(){e.offsetTop<=window.innerHeight+document.documentElement.scrollTop&&1==t&&(t=!1,o.uppage+=10,o.booklist=o.booklist.concat(o.savelist.slice(o.uppage,o.uppage+10)),setTimeout(function(){t=!0},100))}},beforeRouteUpdate:function(t,o,e){this.reload(),e()}},c=l,r=(e("94ab"),e("2877")),u=Object(r["a"])(c,n,s,!1,null,null,null);o["default"]=u.exports}}]);
//# sourceMappingURL=Searchview.bb392e76.js.map