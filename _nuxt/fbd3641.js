(window.webpackJsonp=window.webpackJsonp||[]).push([[18,9,12,14],{437:function(t,e,n){var content=n(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("513c0da4",content,!0,{sourceMap:!1})},438:function(t,e,n){var content=n(445);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("8b968ecc",content,!0,{sourceMap:!1})},439:function(t,e,n){"use strict";n.r(e);var r=n(478),o=n(670),c=(n(13),n(54),n(38),n(449)),l=n.n(c),d={props:{title:{type:String,default:""},subtitle:{type:String,default:""},description:{type:String,default:""},height:{type:Number,default:375},imgSrc:{type:String,default:""},randImgSrcArr:{type:Array,default:function(){return[]}}},computed:{src:function(){return this.imgSrc?this.imgSrc:l.a.sample(this.randImgSrcArr)}}},f=(n(442),n(444),n(48)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{dark:"",src:t.src,height:t.height}},[e(r.a,{staticClass:"content"},[e("h1",[t._v(t._s(t.title))]),t._v(" "),t.subtitle?e("br"):t._e(),t._v(" "),t.subtitle?e("h2",[t._v(t._s(t.subtitle))]):t._e(),t._v(" "),t.description?e("br"):t._e(),t._v(" "),t.description?e("h3",[t._v(t._s(t.description))]):t._e()])],1)}),[],!1,null,"5d9c867b",null);e.default=component.exports},442:function(t,e,n){"use strict";n(437)},443:function(t,e,n){var r=n(19)(!1);r.push([t.i,".content[data-v-5d9c867b]{max-width:900px}.content p[data-v-5d9c867b]{margin-top:16px}.content h1[data-v-5d9c867b]{font-size:2em}.content h3[data-v-5d9c867b]{font-size:1.17em}",""]),t.exports=r},444:function(t,e,n){"use strict";n(438)},445:function(t,e,n){var r=n(19)(!1);r.push([t.i,".v-parallax__content{background:rgba(0,0,0,.25)}",""]),t.exports=r},473:function(t,e,n){"use strict";n.r(e);var r=n(185),o=n(104),c=n(284),l=(n(286),n(13),n(54),n(77),n(56),{props:{post:{type:Object,default:function(){}}},computed:{tagsStr:function(){return this.post.tags.map((function(t){return"#".concat(t)})).join(", ")}}}),d=n(48),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"mx-auto",attrs:{"max-width":"400"}},[e(r.a,{attrs:{to:t.post.link.internalLink,href:t.post.link.externalLink,target:t.post.link.target}},[e(c.a,{staticClass:"white--text align-end",attrs:{height:"200px",src:t.post.img,gradient:"to top, rgba(0,0,0,.50), transparent"}},[e(o.d,[t._v(t._s(t.post.title))]),t._v(" "),t.post.description?e(o.b,{staticClass:"white--text"},[t._v("\n        "+t._s(t.post.description)+"\n      ")]):t._e()],1)],1),t._v(" "),e(o.a,{staticClass:"d-flex justify-space-between"},[e(o.b,[t._v(t._s(t.post.createdAt)+" in "+t._s(t.tagsStr))])],1)],1)}),[],!1,null,null,null);e.default=component.exports},474:function(t,e,n){"use strict";n.r(e);var r=n(657),o=n(669),c={props:{tags:{type:Array,default:function(){return[]}},update:{type:Function,default:function(){}}},data:function(){return{}}},l=n(48),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e(o.a,t._l(t.tags,(function(n,i){return e(r.a,{key:i,attrs:{value:n.label,filter:"",outlined:""},on:{input:t.update},model:{value:n.active,callback:function(e){t.$set(n,"active",e)},expression:"tag.active"}},[t._v("\n    #"+t._s(n.label)+"\n  ")])})),1)}),[],!1,null,null,null);e.default=component.exports},481:function(t,e,n){var content=n(547);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("35502c9e",content,!0,{sourceMap:!1})},482:function(t,e,n){var content=n(549);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("31dd89fb",content,!0,{sourceMap:!1})},536:function(t){t.exports=JSON.parse('[{"title":"A Brief History of Anomaly Detection","description":"Background and applications of anomaly detection.","link":{"type":"external","externalLink":"https://www.chaosgenius.io/blog/a-brief-history-of-anomaly-detection/","target":"_blank"},"img":"/writing/a-brief-history-of-anomaly-detection/cover-art.png","createdAt":"08-16-2021","tags":["professional"]}]')},546:function(t,e,n){"use strict";n(481)},547:function(t,e,n){var r=n(19)(!1);r.push([t.i,".content[data-v-b8726ae4]{max-width:1024px}#footer[data-v-b8726ae4]{margin-top:50px}",""]),t.exports=r},548:function(t,e,n){"use strict";n(482)},549:function(t,e,n){var r=n(19)(!1);r.push([t.i,".fill-animation,div.md a{color:var(--v-anchor-base);text-decoration:none;border:none;border-bottom:2px solid var(--v-anchor-base);background-image:linear-gradient(120deg,var(--v-anchor-base),var(--v-anchor-base));background-size:100% 0;background-position:0 100%;transition:background-size .125s ease-in,color .125s ease-in}.fill-animation:hover,div.md a:hover{color:var(--v-text1-base);border-color:var(--v-anchor-base);background-size:100% 100%}",""]),t.exports=r},665:function(t,e,n){"use strict";n.r(e);var r=n(104),o=n(478),c=n(516),l=(n(49),n(35),n(57),n(25),n(13),n(54),n(61),n(150)),d=n(32),f=(n(86),n(34),n(292),n(6),n(517),n(42),n(519),n(521),n(522),n(523),n(524),n(525),n(526),n(527),n(528),n(529),n(530),n(531),n(532),n(533),n(534),n(535),n(43),n(286),n(16),n(536)),v=n(473),h=n(474),m=n(439);function y(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var x={components:{PostCard:v.default,WritingTagsGroup:h.default,ParallaxImageHeader:m.default},asyncData:function(t){return Object(d.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,d,v,h,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.prev=1,e.next=4,n("post").only(["title","description","slug","img","createdAt","tags"]).fetch();case 4:r=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),r=[];case 10:o=[].concat(Object(l.a)(f),Object(l.a)(r)),c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],d=y(o);try{for(d.s();!(v=d.n()).done;)(h=v.value).dt=new Date(h.createdAt),h.createdAt="".concat(c[h.dt.getMonth()]," ").concat(h.dt.getDate(),", ").concat(h.dt.getFullYear()),h.tags=new Set(h.tags),h.link||(h.link={type:"internal",internalLink:"/writing/".concat(h.slug)},delete h.slug)}catch(t){d.e(t)}finally{d.f()}return o.sort((function(a,b){return b.dt>a.dt?1:-1})),m=Object(l.a)(o),e.abrupt("return",{posts:o,displayedPosts:m});case 17:case"end":return e.stop()}}),e,null,[[1,7]])})))()},data:function(){return{tags:[{active:!1,label:"professional"}],headerTitle:"Writing",headerSubtitle:"A collection of my writing. :)",bannerSrc:"/img/writing-banner.jpeg"}},head:function(){return{title:"Writing"}},methods:{filterPosts:function(t){var e,n=[],r=y(this.tags);try{for(r.s();!(e=r.n()).done;){var o=e.value;o.active&&n.push(o.label)}}catch(t){r.e(t)}finally{r.f()}this.displayedPosts=this.posts.filter((function(p){if(n.length>0){for(var t=!0,i=0;t&&i<n.length;i++)p.tags.has(n[i])||(t=!1);return t}return!0}))}}},w=(n(546),n(548),n(48)),component=Object(w.a)(x,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"portfolio"}},[e("ParallaxImageHeader",{attrs:{title:t.headerTitle,subtitle:t.headerSubtitle,"img-src":t.bannerSrc}}),t._v(" "),e(o.a,{staticClass:"content my-0"},[e(r.c,[e("h2",{staticClass:"text-h6 mb-2"},[t._v("Filter By Categories")]),t._v(" "),e("WritingTagsGroup",{attrs:{tags:t.tags,update:t.filterPosts}})],1),t._v(" "),e(o.a,{staticClass:"post-cards d-flex justify-space-around flex-wrap"},t._l(t.displayedPosts,(function(t,i){return e(c.a,{key:i,staticClass:"my-4"},[e("PostCard",{attrs:{post:t}})],1)})),1)],1)],1)}),[],!1,null,"b8726ae4",null);e.default=component.exports;installComponents(component,{ParallaxImageHeader:n(439).default,WritingTagsGroup:n(474).default,PostCard:n(473).default})}}]);