(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{513:function(t,e,n){var content=n(650);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("067e4bba",content,!0,{sourceMap:!1})},649:function(t,e,n){"use strict";n(513)},650:function(t,e,n){var o=n(19)(!1);o.push([t.i,".title[data-v-1d93adc4]{font-size:1.75rem}.subtitle[data-v-1d93adc4]{font-size:1rem;font-weight:400}div.md[data-v-1d93adc4] p{margin:0}a.icon[data-v-1d93adc4]{text-decoration:none;margin:0 5px}.icon:hover>i[data-v-1d93adc4]{transform:scale(1.2) rotate(-10deg)}.header[data-v-1d93adc4]{font-size:1.1rem}.header-title a[data-v-1d93adc4]{text-decoration:none}.header-subtitle[data-v-1d93adc4]{font-style:italic}.header-icon[data-v-1d93adc4]{text-decoration:none}.content-body[data-v-1d93adc4],.content-dates[data-v-1d93adc4]{font-size:.95rem;padding:4px}.content-icons-row[data-v-1d93adc4]{text-align:center}.content-icon[data-v-1d93adc4]{margin:0 10px;text-decoration:none;color:#fff}.content-dates[data-v-1d93adc4]{font-style:italic;text-align:right;color:#a7a7a7;margin-bottom:0}",""]),t.exports=o},671:function(t,e,n){"use strict";n.r(e);var o=n(437),r=n(105),c=n(662),d=n(481),l=n(434),_=n(664),v=n(674),f=n(665),h=n(663),m=n(438),x=n(428),y=n(661),k=n(435),C=(n(33),n(55),n(288),n(158)),w=n(488),A=n.n(w),P={components:{showAt:C.showAt,hideAt:C.hideAt,VueMarkdown:A.a},props:{title:{type:String,default:function(){return""}},subtitle:{type:String,default:function(){return""}},data:{type:Array,default:function(){return[]}}}},T=(n(649),n(48)),component=Object(T.a)(P,(function(){var t=this,e=t._self._c;return e(d.a,{attrs:{fluid:""}},[e(y.a,{attrs:{justify:"center"}},[e(c.a,[e("h1",{staticClass:"text-center title",attrs:{id:t.title.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s+/g,"-").toLowerCase()}},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t.subtitle?e("h1",{staticClass:"subtitle text-center"},[t._v("\n        "+t._s(t.subtitle)+"\n      ")]):t._e()]),t._v(" "),e(h.a,{attrs:{popout:""}},t._l(t.data,(function(n,i){return e(_.a,{key:i,attrs:{"hide-actions":""}},[e(f.a,[e(y.a,{staticClass:"spacer",attrs:{align:"center","no-gutters":""}},[e("span",{staticClass:"header-title"},[e("strong",[t._v(t._s(n.header.title)+" ")])]),t._v(" "),n.header.subtitle?e("show-at",{attrs:{breakpoint:"mediumAndAbove"}},[e("span",{staticClass:"header-subtitle"},[t._v("\n                - "+t._s(n.header.subtitle)+"\n              ")])]):t._e(),t._v(" "),e(k.a),t._v(" "),n.header.links&&n.header.links.length>0?e("show-at",{attrs:{breakpoint:"mediumAndAbove"}},[e("span",t._l(n.header.links,(function(link,n){return e("a",{key:n,staticClass:"icon",attrs:{href:link.href,target:link.target?link.target:""}},[e(m.a,{scopedSlots:t._u([{key:"default",fn:function(n){var r=n.hover;return[link.icon?e(x.a,{attrs:{color:r?"primary":"text1",dense:""},domProps:{textContent:t._s(link.icon)}}):link.iconText?e(o.a,{attrs:{color:r?"primary":"text1",text:"",small:""},domProps:{textContent:t._s(link.iconText)}}):t._e()]}}],null,!0)})],1)})),0)]):t._e()],1)],1),t._v(" "),e(v.a,{staticClass:"content"},[e(l.a),t._v(" "),n.header.subtitle?e("hide-at",{attrs:{breakpoint:"mediumAndAbove"}},[e(r.c,{staticClass:"content-body"},[e("strong",[t._v(t._s(n.header.subtitle))])])],1):t._e(),t._v(" "),t._l(n.content.body,(function(content,n){return e(r.c,{key:n,staticClass:"content-body my-3"},[e("vue-markdown",{staticClass:"md"},[t._v(t._s(content))])],1)})),t._v(" "),n.content.dates?e("p",{staticClass:"content-dates"},[t._v("\n            ("+t._s(n.content.dates)+")\n          ")]):t._e(),t._v(" "),n.content.icons&&n.content.icons.length>0?e(r.c,{staticClass:"content-icons-row"},t._l(n.content.icons,(function(n,r){return e("a",{key:r,staticClass:"icon",attrs:{href:n.link,target:n.target?n.target:""}},[e(m.a,{scopedSlots:t._u([{key:"default",fn:function(r){var c=r.hover;return[n.icon?e(x.a,{attrs:{color:c?"primary":"text1"},domProps:{textContent:t._s(n.icon)}}):n.iconText?e(o.a,{attrs:{color:c?"primary":"text1",text:""},domProps:{textContent:t._s(n.iconText)}}):t._e()]}}],null,!0)})],1)})),0):t._e(),t._v(" "),n.header.links&&n.header.links.length>0?e("hide-at",{attrs:{breakpoint:"mediumAndAbove"}},[e(r.c,{staticClass:"content-icons-row"},t._l(n.header.links,(function(link,n){return e("a",{key:n,staticClass:"icon",attrs:{href:link.href,target:link.target?link.target:""}},[e(m.a,{scopedSlots:t._u([{key:"default",fn:function(n){var r=n.hover;return[link.icon?e(x.a,{attrs:{color:r?"primary":"text1"},domProps:{textContent:t._s(link.icon)}}):link.iconText?e(o.a,{attrs:{color:r?"primary":"text1",text:""},domProps:{textContent:t._s(link.iconText)}}):t._e()]}}],null,!0)})],1)})),0)],1):t._e()],2)],1)})),1)],1)],1)}),[],!1,null,"1d93adc4",null);e.default=component.exports}}]);