(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{475:function(t,e,n){var content=n(494);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("16e95d7a",content,!0,{sourceMap:!1})},493:function(t,e,n){"use strict";n(475)},494:function(t,e,n){var r=n(20)((function(i){return i[1]}));r.push([t.i,".post-title[data-v-7e1ee926],.title[data-v-7e1ee926]{font-size:1.125rem;font-weight:400;letter-spacing:.0125em}",""]),r.locals={},t.exports=r},500:function(t,e,n){"use strict";n.r(e);var r=n(190),c=n(293),o=(n(11),n(53),n(34),n(80),n(57),{props:{currentPost:{type:Object,default:function(){}},containerClass:{type:String,default:""},containerStyle:{type:String,default:""}},computed:{currentPostTagsStr:function(){return this.currentPost.tags.map((function(t){return"#".concat(t)})).join(", ")},currentPostDtStr:function(){var dt=new Date(this.currentPost.createdAt);return"".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"][dt.getMonth()]," ").concat(dt.getDate(),", ").concat(dt.getFullYear())}}}),l=(n(493),n(49)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{class:"".concat(t.containerClass," post-sidebar-component"),style:t.containerStyle},[e(r.a,{staticClass:"mb-4",attrs:{"max-width":"300"}},[e(c.a,{attrs:{height:"200",src:t.currentPost.img}})],1),t._v(" "),e("h6",{staticClass:"post-title mb-1"},[t._v(t._s(t.currentPost.title))]),t._v(" "),t.currentPost.description?e("div",{staticClass:"text-body-1 text2--text"},[t._v("\n    "+t._s(t.currentPost.description)+"\n  ")]):t._e(),t._v(" "),e("div",{staticClass:"text-subtitle-2 text2--text mt-2"},[t._v("\n    "+t._s(t.currentPostDtStr)+" in "+t._s(t.currentPostTagsStr)+"\n  ")])],1)}),[],!1,null,"7e1ee926",null);e.default=component.exports}}]);