(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{329:function(t,n,e){var content=e(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("04df3a4a",content,!0,{sourceMap:!1})},333:function(t,n,e){"use strict";e(329)},334:function(t,n,e){var o=e(21)(!1);o.push([t.i,".title[data-v-51bfa546]{margin:20px 0}.header[data-v-51bfa546]{font-size:1.1rem}.header-title a[data-v-51bfa546]{text-decoration:none}.header-subtitle[data-v-51bfa546]{font-style:italic}.content-body[data-v-51bfa546],.content-dates[data-v-51bfa546]{font-size:.95rem;padding:4px}.content-body[data-v-51bfa546] a{color:#b1858d;text-decoration:none}.content-icons-row[data-v-51bfa546]{text-align:center}.content-icon[data-v-51bfa546]{margin:0 10px;text-decoration:none;color:#fff}.content-icon:hover>button[data-v-51bfa546],.content-icon:hover>i[data-v-51bfa546]{color:#b1858d}.content-icon:hover>i[data-v-51bfa546]{transform:scale(1.2) rotate(-10deg)}.content-dates[data-v-51bfa546]{font-style:italic;color:#a7a7a7}",""]),t.exports=o},348:function(t,n,e){"use strict";e.r(n);var o={props:{title:{type:String,default:function(){return""}},data:{type:Array,default:function(){return[]}}}},c=(e(333),e(57)),r=e(69),l=e.n(r),d=e(325),v=e(316),f=e(326),_=e(352),x=e(378),h=e(382),y=e(379),C=e(383),w=e(320),k=e(380),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{attrs:{fluid:""}},[e("v-row",{attrs:{justify:"center"}},[e("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("v-expansion-panels",{attrs:{popout:""}},t._l(t.data,(function(n,i){return e("v-expansion-panel",{key:i,attrs:{"hide-actions":""}},[e("v-expansion-panel-header",[e("v-row",{staticClass:"spacer",attrs:{align:"center","no-gutters":""}},[e("span",{staticClass:"header-title"},[e("strong",[t._v(t._s(n.header.title)+" ")])]),t._v(" "),n.header.subtitle?e("span",{staticClass:"header-subtitle"},[t._v("\n              - "+t._s(n.header.subtitle)+"\n            ")]):t._e()])],1),t._v(" "),e("v-expansion-panel-content",{staticClass:"content"},[e("v-divider"),t._v(" "),t._l(n.content.body,(function(p,n){return e("v-card-text",{key:n,staticClass:"content-body",domProps:{innerHTML:t._s(p)}})})),t._v(" "),n.content.dates?e("span",{staticClass:"content-dates"},[t._v("\n            ("+t._s(n.content.dates)+")\n          ")]):t._e(),t._v(" "),n.content.links&&n.content.links.length>0?e("v-card-text",{staticClass:"content-body"},t._l(n.content.links,(function(link,n){return e("span",{key:n},[t._v("\n              | "),e("a",{attrs:{href:link.href}},[t._v(t._s(link.text))]),t._v(" |\n            ")])})),0):t._e(),t._v(" "),n.content.icons&&n.content.icons.length>0?e("v-card-text",{staticClass:"content-icons-row"},t._l(n.content.icons,(function(n,o){return e("a",{key:o,staticClass:"content-icon",attrs:{href:n.link}},[n.icon?e("v-icon",{domProps:{textContent:t._s(n.icon)}}):n.iconText?e("v-btn",{attrs:{text:""},domProps:{textContent:t._s(n.iconText)}}):t._e()],1)})),0):t._e()],2)],1)})),1)],1)],1)}),[],!1,null,"51bfa546",null);n.default=component.exports;l()(component,{VBtn:d.a,VCardText:v.a,VContainer:f.a,VDivider:_.a,VExpansionPanel:x.a,VExpansionPanelContent:h.a,VExpansionPanelHeader:y.a,VExpansionPanels:C.a,VIcon:w.a,VRow:k.a})}}]);