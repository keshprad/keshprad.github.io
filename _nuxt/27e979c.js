(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{342:function(t,e,n){var content=n(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("3cba92c6",content,!0,{sourceMap:!1})},344:function(t,e,n){"use strict";n(342)},345:function(t,e,n){var o=n(14)(!1);o.push([t.i,".title[data-v-ce79eb0c]{margin:20px 0}a.icon[data-v-ce79eb0c]{text-decoration:none;margin:0 5px}.icon:hover>button[data-v-ce79eb0c],.icon:hover>i[data-v-ce79eb0c]{color:#b1858d}.icon:hover>i[data-v-ce79eb0c]{transform:scale(1.2) rotate(-10deg)}.header[data-v-ce79eb0c]{font-size:1.1rem}.header-title a[data-v-ce79eb0c]{text-decoration:none}.header-subtitle[data-v-ce79eb0c]{font-style:italic}.header-icon[data-v-ce79eb0c]{text-decoration:none}.content-body[data-v-ce79eb0c],.content-dates[data-v-ce79eb0c]{font-size:.95rem;padding:4px}.content-body[data-v-ce79eb0c] a{color:#b1858d;text-decoration:none}.content-icons-row[data-v-ce79eb0c]{text-align:center}.content-icon[data-v-ce79eb0c]{margin:0 10px;text-decoration:none;color:#fff}.content-dates[data-v-ce79eb0c]{font-style:italic;text-align:right;color:#a7a7a7;margin-bottom:0}",""]),t.exports=o},352:function(t,e,n){"use strict";n.r(e);var o=n(147),c={components:{showAt:o.showAt,hideAt:o.hideAt},props:{title:{type:String,default:function(){return""}},data:{type:Array,default:function(){return[]}}}},r=(n(344),n(49)),d=n(57),l=n.n(d),v=n(337),_=n(102),h=n(339),x=n(335),f=n(380),m=n(384),C=n(381),k=n(385),y=n(330),w=n(382),A=n(336),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{justify:"center"}},[n("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("v-expansion-panels",{attrs:{popout:""}},t._l(t.data,(function(e,i){return n("v-expansion-panel",{key:i,attrs:{"hide-actions":""}},[n("v-expansion-panel-header",[n("v-row",{staticClass:"spacer",attrs:{align:"center","no-gutters":""}},[n("span",{staticClass:"header-title"},[n("strong",[t._v(t._s(e.header.title)+" ")])]),t._v(" "),e.header.subtitle?n("show-at",{attrs:{breakpoint:"mediumAndAbove"}},[n("span",{staticClass:"header-subtitle"},[t._v("\n                - "+t._s(e.header.subtitle)+"\n              ")])]):t._e(),t._v(" "),n("v-spacer"),t._v(" "),e.header.links&&e.header.links.length>0?n("show-at",{attrs:{breakpoint:"mediumAndAbove"}},[n("span",t._l(e.header.links,(function(link,e){return n("a",{key:e,staticClass:"icon",attrs:{href:link.href}},[link.icon?n("v-icon",{attrs:{dense:""},domProps:{textContent:t._s(link.icon)}}):link.iconText?n("v-btn",{attrs:{text:"",small:""},domProps:{textContent:t._s(link.iconText)}}):t._e()],1)})),0)]):t._e()],1)],1),t._v(" "),n("v-expansion-panel-content",{staticClass:"content"},[n("v-divider"),t._v(" "),e.header.subtitle?n("hide-at",{attrs:{breakpoint:"mediumAndAbove"}},[n("v-card-text",{staticClass:"content-body"},[n("strong",[t._v(t._s(e.header.subtitle))])])],1):t._e(),t._v(" "),t._l(e.content.body,(function(p,e){return n("v-card-text",{key:e,staticClass:"content-body",domProps:{innerHTML:t._s(p)}})})),t._v(" "),e.content.dates?n("p",{staticClass:"content-dates"},[t._v("\n            ("+t._s(e.content.dates)+")\n          ")]):t._e(),t._v(" "),e.content.icons&&e.content.icons.length>0?n("v-card-text",{staticClass:"content-icons-row"},t._l(e.content.icons,(function(e,o){return n("a",{key:o,staticClass:"icon",attrs:{href:e.link}},[e.icon?n("v-icon",{domProps:{textContent:t._s(e.icon)}}):e.iconText?n("v-btn",{attrs:{text:""},domProps:{textContent:t._s(e.iconText)}}):t._e()],1)})),0):t._e(),t._v(" "),e.header.links&&e.header.links.length>0?n("hide-at",{attrs:{breakpoint:"mediumAndAbove"}},[n("v-card-text",{staticClass:"content-icons-row"},t._l(e.header.links,(function(link,e){return n("a",{key:e,staticClass:"icon",attrs:{href:link.href}},[link.icon?n("v-icon",{domProps:{textContent:t._s(link.icon)}}):link.iconText?n("v-btn",{attrs:{text:""},domProps:{textContent:t._s(link.iconText)}}):t._e()],1)})),0)],1):t._e()],2)],1)})),1)],1)],1)}),[],!1,null,"ce79eb0c",null);e.default=component.exports;l()(component,{VBtn:v.a,VCardText:_.a,VContainer:h.a,VDivider:x.a,VExpansionPanel:f.a,VExpansionPanelContent:m.a,VExpansionPanelHeader:C.a,VExpansionPanels:k.a,VIcon:y.a,VRow:w.a,VSpacer:A.a})}}]);