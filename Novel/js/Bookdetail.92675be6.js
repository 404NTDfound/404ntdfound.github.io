(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Bookdetail"],{"102a":function(t,e,o){"use strict";var a=o("3adf"),i=o.n(a);i.a},"386b":function(t,e,o){var a=o("5ca1"),i=o("79e5"),s=o("be13"),n=/"/g,c=function(t,e,o,a){var i=String(s(t)),c="<"+e;return""!==o&&(c+=" "+o+'="'+String(a).replace(n,"&quot;")+'"'),c+">"+i+"</"+e+">"};t.exports=function(t,e){var o={};o[t]=e(c),a(a.P+a.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",o)}},"3adf":function(t,e,o){},"60e7":function(t,e,o){"use strict";var a=o("b3bf"),i=o.n(a);i.a},"6ba0":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"Bookdetail",attrs:{"element-loading-text":"正在翻开绘卷","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(255, 255, 255, 0.8)"}},[o("Topnav",{scopedSlots:t._u([{key:"bookname",fn:function(){return[t._v(t._s(t.Bookdetail.title))]},proxy:!0}])}),o("img",{staticClass:"detailbg",attrs:{src:t.cuturl+t.Bookdetail.cover,alt:""}}),t.Bookdetail?o("el-row",{staticClass:"Bookdetail-info"},[o("el-col",{attrs:{span:8}},[o("el-image",{attrs:{src:t.cuturl+t.Bookdetail.cover}},[o("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[o("i",{staticClass:"el-icon-picture-outline"})])])],1),o("el-col",{staticClass:"text-info",attrs:{span:16}},[o("h4",[t._v(t._s(t.Bookdetail.title))]),t.Bookdetail.author?o("span",[o("i",{staticClass:"el-icon-user"}),t._v("\n        "+t._s(t.Bookdetail.author)+"\n      ")]):t._e(),t.Bookdetail.majorCate?o("p",{staticClass:"classes"},[t._v(t._s(t.Bookdetail.majorCate)+"/"+t._s(t.Bookdetail.minorCate))]):t._e(),o("span",{staticClass:"Sizecount"},[t._v(t._s(this.wordcount)+"万字")]),t.Bookdetail.isFineBook?o("span",{staticClass:"Sizecount"},[t._v("| 已完结")]):t._e(),t.Bookdetail.isFineBook?t._e():o("span",{staticClass:"Sizecount"},[t._v("| 连载中")])])],1):t._e(),o("el-row",[o("el-col",{staticClass:"button-area",attrs:{span:24}},[o("el-button",{attrs:{type:"danger"},on:{click:t.gotoRead}},[t._v("开始阅读")]),o("el-button",[t._v("加入书架")])],1)],1),o("div",{staticClass:"longIntro"},[o("p",[t._v(t._s(t.Bookdetail.longIntro))])]),t.loadcompelet?o("Bookchapters",{staticClass:"loglist",attrs:{chaptersid:this.Bookdetail._id}},[o("span",[o("b",[t._v("目录")])]),o("span",[t._v(t._s(t.Bookdetail.lastChapter))])]):t._e()],1)},i=[],s=(o("b54a"),o("2fc9")),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"Bookchapters"},[o("el-collapse",{attrs:{accordion:""}},[o("el-collapse-item",[o("template",{slot:"title"},[t._t("default")],2),o("div",{staticClass:"text listitem re",on:{click:t.re}},[t.chaptersList?t._e():o("span",{staticClass:"loadcheapter"},[t._v("\n          加载章节列表中\n          "),o("i",{staticClass:"el-icon-loading"})]),t.rever?o("span",[t._v("倒序")]):t._e(),t.rever?t._e():o("span",[t._v("正序")])]),t._l(t.chaptersList.chapters,function(e,a){return o("div",{key:a,staticClass:"text listitem",on:{click:function(o){return t.readbook(e.link,t.chaptersList._id,e.order)}}},[t._v(t._s(e.title))])})],2)],1)],1)},c=[],r=(o("5118"),{name:"Bookchapters",props:["chaptersid"],data:function(){return{chaptersList:[],swichID:[],rever:!0}},mounted:function(){var t=this,e="https://api.kele8.cn/agent?url=http://api.zhuishushenqi.com/atoc?view=summary&book=".concat(this.chaptersid);axios.get(e).then(function(e){t.swichID=e.data[0]._id}).then(function(e){var o="https://api.kele8.cn/agent?url=http://api.zhuishushenqi.com/atoc/".concat(t.swichID,"?view=chapters");axios.get(o).then(function(e){t.chaptersList=e.data,window.sessionStorage.setItem("".concat(t.chaptersid,"-chaptersList"),JSON.stringify(e.data))}).catch(function(t){console.error(t)})}).catch(function(t){console.error(t)})},methods:{re:function(){this.rever=!this.rever,this.chaptersList.chapters.reverse()},readbook:function(t,e,o){window.localStorage.setItem("".concat(this.chaptersid,"-schedule"),JSON.stringify(o)),this.$router.push({name:"Reader",query:{readlink:t,id:e,n:o,orid:this.chaptersid}})}}}),l=r,d=(o("102a"),o("2877")),u=Object(d["a"])(l,n,c,!1,null,null,null),h=u.exports,p={name:"Bookdetail",data:function(){return{Bookid:[],Bookdetail:"",cuturl:"http://statics.zhuishushenqi.com",loading:!0,wordcount:"",loadcompelet:!1,Readlist:[],schedule:0,linklist:[]}},components:{Topnav:s["a"],Bookchapters:h},methods:{getList:function(){},gotoRead:function(){sessionStorage.getItem("".concat(this.Bookdetail._id,"-chaptersList"))&&(this.linklist=JSON.parse(sessionStorage.getItem("".concat(this.Bookdetail._id,"-chaptersList")))),localStorage.getItem("".concat(this.Bookdetail._id,"-schedule"))?this.schedule=localStorage.getItem("".concat(this.Bookdetail._id,"-schedule")):this.schedule=0,this.$router.push({name:"Reader",query:{readlink:this.linklist.chapters[this.schedule].link,n:this.schedule,orid:this.Bookdetail._id}})}},created:function(){var t=this,e=this.$route.query;this.Bookid=e;var o="https://api.kele8.cn/agent?url=http://novel.juhe.im/book-info/".concat(this.Bookid.id);axios.get(o).then(function(e){t.loading=!1,t.loadcompelet=!0,t.Bookdetail=e.data,t.wordcount=Math.round(t.Bookdetail.wordCount/1e4)}).catch(function(e){t.loading=!1,console.error(e)})},mounted:function(){}},k=p,f=(o("60e7"),Object(d["a"])(k,a,i,!1,null,"26c99b60",null));e["default"]=f.exports},b3bf:function(t,e,o){},b54a:function(t,e,o){"use strict";o("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})}}]);
//# sourceMappingURL=Bookdetail.92675be6.js.map