(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3,5],{329:function(t,e,o){var content=o(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("6b2842cc",content,!0,{sourceMap:!1})},330:function(t,e,o){var content=o(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("5b6e1d30",content,!0,{sourceMap:!1})},332:function(t,e,o){"use strict";o(329)},333:function(t,e,o){var n=o(21)(!1);n.push([t.i,".title[data-v-9fc9e900]{margin:20px 0}.header[data-v-9fc9e900]{font-size:1.1rem}.header-title a[data-v-9fc9e900]{text-decoration:none}.header-subtitle[data-v-9fc9e900]{font-style:italic}.content-body[data-v-9fc9e900],.content-dates[data-v-9fc9e900]{font-size:.95rem;padding:4px}.content-body[data-v-9fc9e900] a{color:#9575cd;text-decoration:none}.content-icons-row[data-v-9fc9e900]{text-align:center}.content-icon[data-v-9fc9e900]{margin:0 10px;text-decoration:none;color:#fff}.content-icon:hover>button[data-v-9fc9e900],.content-icon:hover>i[data-v-9fc9e900]{color:#9575cd}.content-icon:hover>i[data-v-9fc9e900]{transform:scale(1.2) rotate(-10deg)}.content-dates[data-v-9fc9e900]{font-style:italic;color:#a7a7a7}",""]),t.exports=n},336:function(t,e,o){var content=o(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("bb35a8d6",content,!0,{sourceMap:!1})},337:function(t,e,o){var n=o(21)(!1);n.push([t.i,".theme--light.v-footer{background-color:#f5f5f5;color:rgba(0,0,0,.87)}.theme--dark.v-footer{background-color:#272727;color:#fff}.v-sheet.v-footer{border-radius:0}.v-sheet.v-footer:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-footer.v-sheet--shaped{border-radius:24px 0}.v-footer{align-items:center;display:flex;flex:0 1 auto!important;flex-wrap:wrap;padding:6px 16px;position:relative;transition-duration:.2s;transition-property:background-color,left,right;transition-timing-function:cubic-bezier(.4,0,.2,1)}.v-footer:not([data-booted=true]){transition:none!important}.v-footer--absolute,.v-footer--fixed{z-index:3}.v-footer--absolute{position:absolute}.v-footer--absolute:not(.v-footer--inset){width:100%}.v-footer--fixed{position:fixed}.v-footer--padless{padding:0}",""]),t.exports=n},338:function(t,e,o){t.exports=o.p+"img/intro-bg.a49ab8e.jpg"},339:function(t,e,o){"use strict";o(330)},340:function(t,e,o){var n=o(21)(!1);n.push([t.i,".content[data-v-052b39b0]{max-width:900px}.content p[data-v-052b39b0]{margin-top:16px}",""]),t.exports=n},341:function(t,e,o){var content=o(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("0cd63bd9",content,!0,{sourceMap:!1})},342:function(t,e,o){var n=o(21)(!1);n.push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=n},343:function(t,e,o){"use strict";o.r(e);var n={},r=o(57),c=o(69),l=o.n(c),d=o(325),h=o(319),f=o(316),v=o(349),m=(o(11),o(7),o(13),o(18),o(12),o(19),o(1)),w=(o(36),o(152),o(336),o(82)),y=o(117),x=o(26);var _=o(0).a.extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}}),k=o(2);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j=Object(x.a)(w.a,function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(x.a)(Object(y.b)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var i=0,t=e.length;i<t;i++)this.$watch(e[i],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}("footer",["height","inset"]),_).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return C(C({},w.a.options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return C(C({},w.a.options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(k.d)(t),left:Object(k.d)(this.computedLeft),right:Object(k.d)(this.computedRight),bottom:Object(k.d)(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var data=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,data,this.$slots.default)}}),A=o(320),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-footer",{attrs:{padless:""}},[o("v-card",{staticClass:"deep-purple lighten-2 text-center",attrs:{flat:"",tile:"",width:"100%"}},[o("v-card-text",[o("div",[o("v-btn",{attrs:{text:"",href:"https://devpost.com/keshprad"}},[t._v("Devpost")]),t._v(" "),o("v-btn",{attrs:{icon:"",href:"https://www.linkedin.com/in/keshprad/"}},[o("v-icon",[t._v("mdi-linkedin")])],1),t._v(" "),o("v-btn",{attrs:{icon:"",href:"https://github.com/keshprad"}},[o("v-icon",[t._v("mdi-github")])],1),t._v(" "),o("v-btn",{attrs:{text:"",href:"https://media-exp1.licdn.com/dms/document/C562DAQGw5vHDzt84qg/profile-treasury-document-pdf-analyzed/0/1618380683177?e=1618509600&v=beta&t=d-hl2tBNbPR5mOADhMvINdawU3Jc2Tgzu4r-fRoStSs"}},[t._v("\n          Resume\n        ")])],1)]),t._v(" "),o("v-divider"),t._v(" "),o("v-card-text",{staticClass:"white--text"},[t._v("\n      "+t._s((new Date).getFullYear())+" — "),o("strong",[t._v("keshprad")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:h.a,VCardText:f.a,VDivider:v.a,VFooter:j,VIcon:A.a})},344:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{name:"Rishi Keshav Pradeep",description:"I'm a 12th-grade high-school student at Lynbrook High School with a strong interest in ML. I'm a quick learner, and I'm always happy to connect with new people and collaborate on projects. In my free time, I enjoy listening to music, learning online, and competing in hackathons."}}},r=(o(339),o(57)),c=o(69),l=o.n(c),d=o(326),h=(o(36),o(341),o(0).a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}})),f=o(26),v=Object(f.a)(h).extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}}),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-parallax",{attrs:{id:"intro-component",dark:"",src:o(338),height:"300"}},[n("v-container",{staticClass:"content"},[n("h1",[t._v("Hi, I'm "+t._s(t.name)+" 👋")]),t._v(" "),n("p",[t._v(t._s(t.description))])])],1)}),[],!1,null,"052b39b0",null);e.default=component.exports;l()(component,{VContainer:d.a,VParallax:v})},345:function(t,e,o){"use strict";o.r(e);var n={props:{title:{type:String,default:function(){return""}},data:{type:Array,default:function(){return[]}}}},r=(o(332),o(57)),c=o(69),l=o.n(c),d=o(325),h=o(316),f=o(326),v=o(349),m=o(375),w=o(379),y=o(376),x=o(380),_=o(320),k=o(377),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:""}},[o("v-row",{attrs:{justify:"center"}},[o("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),o("v-expansion-panels",{attrs:{popout:""}},t._l(t.data,(function(e,i){return o("v-expansion-panel",{key:i,attrs:{"hide-actions":""}},[o("v-expansion-panel-header",[o("v-row",{staticClass:"spacer",attrs:{align:"center","no-gutters":""}},[o("span",{staticClass:"header-title"},[o("strong",[t._v(t._s(e.header.title)+" ")])]),t._v(" "),e.header.subtitle?o("span",{staticClass:"header-subtitle"},[t._v("\n              - "+t._s(e.header.subtitle)+"\n            ")]):t._e()])],1),t._v(" "),o("v-expansion-panel-content",{staticClass:"content"},[o("v-divider"),t._v(" "),t._l(e.content.body,(function(p,e){return o("v-card-text",{key:e,staticClass:"content-body",domProps:{innerHTML:t._s(p)}})})),t._v(" "),e.content.dates?o("span",{staticClass:"content-dates"},[t._v("\n            ("+t._s(e.content.dates)+")\n          ")]):t._e(),t._v(" "),e.content.links&&e.content.links.length>0?o("v-card-text",{staticClass:"content-body"},t._l(e.content.links,(function(link,e){return o("span",{key:e},[t._v("\n              | "),o("a",{attrs:{href:link.href}},[t._v(t._s(link.text))]),t._v(" |\n            ")])})),0):t._e(),t._v(" "),e.content.icons&&e.content.icons.length>0?o("v-card-text",{staticClass:"content-icons-row"},t._l(e.content.icons,(function(e,n){return o("a",{key:n,staticClass:"content-icon",attrs:{href:e.link}},[e.icon?o("v-icon",{domProps:{textContent:t._s(e.icon)}}):e.iconText?o("v-btn",{attrs:{text:""},domProps:{textContent:t._s(e.iconText)}}):t._e()],1)})),0):t._e()],2)],1)})),1)],1)],1)}),[],!1,null,"9fc9e900",null);e.default=component.exports;l()(component,{VBtn:d.a,VCardText:h.a,VContainer:f.a,VDivider:v.a,VExpansionPanel:m.a,VExpansionPanelContent:w.a,VExpansionPanelHeader:y.a,VExpansionPanels:x.a,VIcon:_.a,VRow:k.a})},346:function(t,e,o){var content=o(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("1b7833da",content,!0,{sourceMap:!1})},373:function(t,e,o){"use strict";o(346)},374:function(t,e,o){var n=o(21)(!1);n.push([t.i,".content{max-width:1000px}#footer{margin-top:50px}",""]),t.exports=n},378:function(t,e,o){"use strict";o.r(e);var n=o(345),r=o(343),c=o(344),l={components:{Accordion:n.default,Footer:r.default,Intro:c.default},data:function(){return{projects:{title:"Projects",data:[{header:{title:"YouTube Mentions",subtitle:"2nd Place Media Track @ PickHacks 2021"},content:{body:["This application analyzes the given YouTube video, retrieves quick snippets of relevant information about people, songs, games, etc. mentioned in the video, and displays them side-by-side."],links:[{text:"GitHub",href:"https://github.com/keshprad/youtube-mentions"},{text:"Devpost",href:"https://devpost.com/software/youtube-mentions"},{text:"YouTube",href:"https://www.youtube.com/watch?v=O9BwcoK1fEM"}]}},{header:{title:"Algorithms"},content:{body:["A repository full of various algorithms and data structures that I find interesting."],links:[{text:"GitHub",href:"https://github.com/keshprad/Algorithms"}]}},{header:{title:"best-comeback"},content:{body:['Want to end an argument with a win? This repo creates an automatic "Deal With It" gif.'],links:[{text:"GitHub",href:"https://github.com/keshprad/best-comeback"}]}},{header:{title:"autoscriber-app"},content:{body:["Automatic online meeting notes with voice recognition and NLP."],links:[{text:"GitHub",href:"https://github.com/autoscriber-app"}]}},{header:{title:"CloseCans",subtitle:"Built for LA Hacks"},content:{body:["A react-native application that finds trash, recycling, and compost bins near to the user."],links:[{text:"GitHub",href:"https://github.com/keshprad/CloseCans"}]}},{header:{title:"gitCode-bot"},content:{body:["A discord bot that gets the code file from any public repo on GitHub."],links:[{text:"GitHub",href:"https://github.com/keshprad/gitCode-bot"},{text:"Discord",href:"https://discord.com/api/oauth2/authorize?client_id=759050188382797875&permissions=522304&scope=bot"}]}},{header:{title:"my-portfolio"},content:{body:["Repo for my personal portfolio site"],links:[{text:"GitHub",href:"https://github.com/keshprad/my-portfolio"},{text:"Website",href:"https://keshprad.ml/"}]}},{header:{title:"RAD_GAME"},content:{body:["This project is a pacman-style, 2D, pixel game built with Java."],links:[{text:"GitHub",href:"https://github.com/keshprad/RAD_GAME"}]}}]},workExperience:{title:"Work Experience",data:[{header:{title:"dsapps",subtitle:"Software Engineering Intern"},content:{body:["At dsapps I worked on an AML project to assist in forecasting resource requirements for new tasks based on past historical data and patterns from other tasks. I worked on k-means clustering algorithms, as well as text cleaning."],dates:"Jun 2020 - Sept 2020"}},{header:{title:"Elevate the Future",subtitle:"Director of Project Falcon, VP of San Jose, Founding Member"},content:{body:['I founded and directed <a href="https://www.elevatethefuture.org/projectfalcon/" target="_blank">Project Falcon</a> — one of our most effective programs. I lead our officer team and managed a team of 30+ volunteers. I managed communications with clients and other businesses making sure everything went smoothly on both sides. I also helped build multiple websites for our clients. Besides this, I also created the course curriculum in use.','Additionally, as part of the <a href="https://www.elevatethefuture.org">ETF</a>\'s founding team, I advised on executive decisions and worked to expand our influence to over 40+ chapters around the world. Also, we are constantly working on implementing new events. Besides this, I help update/design our website.'],dates:"Jul 2019 - Present"}},{header:{title:"Letter to Physics",subtitle:"Founder & Content Creator"},content:{body:['<a href="https://www.lettertophysics.com/" target="_blank">Letter to Physics</a> is a website I created to post hundreds of physics solutions including solutions to the PhysicsBowl competition.'],dates:"Sept 2018 - Present"}},{header:{title:"Zamono",subtitle:"Data Research Intern"},content:{body:["I researched different diseases, their symptoms, and their treatments and inputted into tables for future use at a healthcare startup."],dates:"Jun 2016 - Aug 2016"}}]},awards:{title:"Awards & Certifications",data:[{header:{title:"2nd Place Media Track",subtitle:"PickHacks 2021"},content:{body:["YouTube Mentions: This application analyzes the given YouTube video, retrieves quick snippets of relevant information about people, songs, games, etc. mentioned in the video, and displays them side-by-side."],icons:[{icon:"mdi-github",link:"https://github.com/keshprad/youtube-mentions"},{iconText:"Devpost",link:"https://devpost.com/software/youtube-mentions"},{icon:"mdi-youtube",link:"https://www.youtube.com/watch?v=O9BwcoK1fEM"}],dates:"Apr 2021"}},{header:{title:"Stanford Algorithms Specialization"},content:{body:["&bull; Divide and Conquer, Sorting and Searching, and Randomized Algorithms","&bull; Graph Search, Shortest Paths, and Data Structures","&bull; Greedy Algorithms, Minimum Spanning Trees, and Dynamic Programming","&bull; Shortest Paths Revisited, NP-Complete Problems and What To Do About Them"],icons:[{iconText:"Coursera",link:"https://www.coursera.org/account/accomplishments/specialization/JGJD68YT52NQ"}]}},{header:{title:"Google IT Support Specialization"},content:{body:["&bull; The Bits and Bytes of Computer Networking","&bull; IT Security: Defense against the digital dark arts","&bull; System Administration and IT Infrastructure Services","&bull; Technical Support Fundamentals","&bull; Operating Systems and You: Becoming a Power User"],icons:[{iconText:"Coursera",link:"https://www.coursera.org/account/accomplishments/specialization/KF6RGBL6NLTW/"}]}}]},education:{title:"Education",data:[{header:{title:"Lynbrook High School"},content:{body:['Head of Front End @ <a href="https://lhswebdev.github.io/">Lynbrook WebDev</a>: WebDev is a student interest club where we present about hundreds of topics including Networking, HTML/CSS/JS, frameworks, etc.',"Vice-President @ Lynbrook Me to We: Me to We is a club at Lynbrook affiliated with the WE Charity. Our club conducts campaigns to raise funding for a school in Totoras, Ecuador. I lead member meetings, guide our officer team, organize events, and maintain communications with affiliated organizations."],dates:"2017 - 2021"}}]}}}},d=(o(373),o(57)),h=o(69),f=o.n(h),v=o(326),m=o(324),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"portfolio"}},[o("Intro"),t._v(" "),o("v-container",{staticClass:"content"},[o("Accordion",{attrs:{title:t.projects.title,data:t.projects.data}}),t._v(" "),o("Accordion",{attrs:{title:t.workExperience.title,data:t.workExperience.data}}),t._v(" "),o("v-spacer"),t._v(" "),o("Accordion",{attrs:{title:t.awards.title,data:t.awards.data}}),t._v(" "),o("Accordion",{attrs:{title:t.education.title,data:t.education.data}})],1),t._v(" "),o("Footer",{attrs:{id:"footer"}})],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{Intro:o(344).default,Accordion:o(345).default,Footer:o(343).default}),f()(component,{VContainer:v.a,VSpacer:m.a})}}]);