(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{451:function(t,e,n){var content=n(466);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("3c8e955a",content,!0,{sourceMap:!1})},465:function(t,e,n){"use strict";n(451)},466:function(t,e,n){var r=n(19)(!1);r.push([t.i,".post-title[data-v-44ac182a],.title[data-v-44ac182a]{font-weight:400;font-size:1.125rem;letter-spacing:.0125em}",""]),t.exports=r},475:function(t,e,n){"use strict";n.r(e);var r=n(185),c=n(284),o=(n(13),n(54),n(77),n(56),n(34),{props:{currentPost:{type:Object,default:function(){}},containerClass:{type:String,default:""},containerStyle:{type:String,default:""}},computed:{currentPostTagsStr:function(){return this.currentPost.tags.map((function(t){return"#".concat(t)})).join(", ")},currentPostDtStr:function(){var dt=new Date(this.currentPost.createdAt);return"".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][dt.getMonth()]," ").concat(dt.getDate(),", ").concat(dt.getFullYear())}}}),l=(n(465),n(48)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{class:"".concat(t.containerClass," post-sidebar-component"),style:t.containerStyle},[e(r.a,{staticClass:"mb-4",attrs:{"max-width":"300"}},[e(c.a,{attrs:{height:"200",src:t.currentPost.img}})],1),t._v(" "),e("h6",{staticClass:"post-title mb-1"},[t._v(t._s(t.currentPost.title))]),t._v(" "),t.currentPost.description?e("div",{staticClass:"text-body-1 text2--text"},[t._v("\n    "+t._s(t.currentPost.description)+"\n  ")]):t._e(),t._v(" "),e("div",{staticClass:"text-subtitle-2 text2--text mt-2"},[t._v("\n    "+t._s(t.currentPostDtStr)+" in "+t._s(t.currentPostTagsStr)+"\n  ")])],1)}),[],!1,null,"44ac182a",null);e.default=component.exports}}]);