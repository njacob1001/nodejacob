!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=33)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("mongoose")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-helmet-async")},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("react-helmet")},function(e,t,n){e.exports=n.p+"assets/img/movile-grimms.png"},function(e,t,n){e.exports=n.p+"assets/img/desktop-grimms.png"},function(e,t,n){e.exports=n.p+"assets/img/movile-wok.png"},function(e,t,n){e.exports=n.p+"assets/img/desktop-wok.png"},function(e,t,n){e.exports=n.p+"assets/img/movile-marathons.png"},function(e,t,n){e.exports=n.p+"assets/img/desktop-marathons.png"},function(e,t,n){e.exports=n.p+"assets/img/movile-portfolio.png"},function(e,t,n){e.exports=n.p+"assets/img/desktop-portfolio.png"},function(e,t,n){e.exports=n.p+"assets/img/desktop-deopies.png"},function(e,t,n){e.exports=n.p+"assets/img/kineckt.png"},function(e,t,n){e.exports=n.p+"assets/img/movile-escape.png"},function(e,t,n){e.exports=n.p+"assets/img/movile-claro.png"},function(e,t,n){e.exports=n.p+"assets/img/og-image.jpg"},function(e,t){e.exports=require("react-icons/io")},function(e,t){e.exports=require("query-string")},function(e,t){e.exports=require("react-markdown")},function(e,t){e.exports=require("react-syntax-highlighter/prism")},function(e,t){e.exports=require("react-syntax-highlighter/styles/prism")},function(e,t,n){},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t){e.exports=require("express-http-to-https")},function(e,t,n){"use strict";n.r(t);var r=n(5),o=n.n(r),a=n(6),i=n.n(a),c=n(3),s=n.n(c),l=new(0,s.a.Schema)({title:{type:String,require:[!0,"the title is necesary"]},author:{type:String,required:[!0,"the author is necesary"]},path:{type:String,required:[!0,"the path route is obligatory"]},img:{type:String,required:[!0,"This post most to have a image"]},date:{type:String,required:!1},tags:{type:Array,required:!1},category:{type:String,required:[!0,"You have to assign a category"]}}),u=s.a.model("Post",l),m=n(0),p=n.n(m),f=n(7),d=n(1),h=n(2),g=n(8),b=n(9),y=n.n(b),v=n(4),w=n(10),E=n.n(w);function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){S(e,t,n[t])})}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j={search:"",posts:[]};var O=Object(v.combineReducers)({blog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_SEARCH":return k({},e,{search:t.search});case"FETCH_POSTS_SUCCESS":return k({},e,{posts:t.payload});default:return e}}});n(30);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var T=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=function(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?C(e):t}(this,x(t).call(this))).state={hamburger:!1},e.handleClick=e.handleClick.bind(C(C(e))),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,m["PureComponent"]),function(e,t,n){t&&P(e.prototype,t),n&&P(e,n)}(t,[{key:"componentDidUpdate",value:function(){console.log(this.state.hamburger)}},{key:"handleClick",value:function(){this.setState({hamburger:!this.state.hamburger}),console.log(this.state.hamburger)}},{key:"render",value:function(){var e=this.state.hamburger?"is-active":"";return p.a.createElement("header",{id:"header",className:"Header-wrapper"},p.a.createElement("nav",{className:"Header-container"},p.a.createElement(d.Link,{to:"/",className:"Header-item Logo"},p.a.createElement("svg",{className:"Header-logo",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 165 165",style:{enableBackground:"new 0 0 165 165"},xmlSpace:"preserve"},p.a.createElement("path",{id:"border-logo",className:"Svg-borderDark is-light",d:"M15.8,53.4v-3.8c0-3.5,1.9-6.7,4.9-8.5L77.6,8.3c3-1.8,6.8-1.8,9.8,0l56.9,32.9c3,1.8,4.9,5,4.9,8.5v65.7c0,3.5-1.8,6.7-4.9,8.5l-56.9,32.9c-3,1.8-6.8,1.8-9.8,0l-56.9-32.9c-3-1.8-4.9-5-4.9-8.5V53.4"})," ",p.a.createElement("path",{id:"letter",className:"Svg-letterDark",d:"M54.9,112.5v-4.4c0-4.7,3.3-6.6,7.3-4.2l15.3,8.8c3,1.7,6.8,1.7,9.8,0l18.7-10.9c3-1.8,4.9-5,4.9-8.5l-0.1-21.6c0-3.5-1.9-6.7-4.9-8.4L87.4,52.5c-3-1.7-6.7-1.7-9.7,0l-10.2,5.8c-3.1,1.7-6.8,1.7-9.8-0.1L53.9,56c-4-2.4-3.9-6.2,0.1-8.5l23.6-13.6c3-1.8,6.8-1.7,9.8,0L122.1,54c3,1.8,4.9,5,4.9,8.5v40.2c0,3.5-1.9,6.7-4.9,8.5l-34.7,20c-3,1.7-6.7,1.7-9.8,0L59.8,121C56.8,119.3,54.9,116,54.9,112.5z"})," ",p.a.createElement("path",{id:"light",className:"Svg-letterLight",d:"M122.1,54L87.4,33.9c-3-1.8-6.8-1.8-9.8,0L54,47.5c-4,2.3-4,6.1-0.1,8.5l3.7,2.2c3,1.8,6.8,1.8,9.8,0.1l10.2-5.8c3-1.7,6.7-1.7,9.7,0l18.6,10.7c1.5,0.9,2.7,2.1,3.6,3.6l16.1-9.3C124.8,56.1,123.6,54.9,122.1,54z"})," "),p.a.createElement("h1",{className:"Visually-hidden"},"Jacob Gonzalez")),p.a.createElement("div",{onClick:this.handleClick,className:"Header-item Menu ".concat(e)},p.a.createElement(d.NavLink,{exact:!0,activeClassName:"is-active",className:"Header-link",to:"/"},"work"),p.a.createElement(d.NavLink,{activeClassName:"is-active",className:"Header-link",to:"/about"},"about"),p.a.createElement(d.NavLink,{activeClassName:"is-active",className:"Header-link",to:"/blogs"},"blog")),p.a.createElement("button",{id:"HMenu",onClick:this.handleClick,className:"hamburger hamburger--squeeze ".concat(e)},p.a.createElement("span",{className:"hamburger-box"},p.a.createElement("span",{className:"hamburger-inner"})))))}}]),t}(),L=function(){return p.a.createElement("footer",{className:"Footer-wrapper"},p.a.createElement("div",{className:"Footer-container"},p.a.createElement("span",{className:"Footer-title"},"Follow me: "),p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/jacob-gonzalez-210b84166",className:"Footer-link"},p.a.createElement("strong",null,"LinkedIn")),p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/njacob1001",className:"Footer-link"},p.a.createElement("strong",null,"GitHub")),p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/channel/UCQ-ykK7GU9qDczl7Cb2DpmA",className:"Footer-link"},p.a.createElement("strong",null,"Youtube")),p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/jacobdesarrolloweb/",className:"Footer-link"},p.a.createElement("strong",null,"Facebook"))))},R=n(11),z=n.n(R),A=function(){return p.a.createElement("section",{className:"Presentation-wrapper"},p.a.createElement("div",{className:"Presentation-container"},p.a.createElement("h2",{className:"Presentation-title"},"Multimedia Engineer"),p.a.createElement("p",{className:"Presentation-subtext"},"I am specialized on clean code and the best performance on the web"),p.a.createElement("h3",{className:"Presentation-name"},"Jacob González")))},B=function(e){var t=e.isShow,n=e.isFixed,r=e.title,o=e.text,a=e.tags;return p.a.createElement("article",{className:"Category-container ".concat(t?"is-show":"no-show"," ").concat(n?"is-fixed":"no-fixed"," ")},p.a.createElement("h2",{className:"Category-title"},r),p.a.createElement("p",{className:"Category-text"},o),p.a.createElement("div",{className:"Category-tags"},a.map(function(e){return p.a.createElement("span",{className:"Category-item",key:e},e)})))};function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var G=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),F(this,H(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,m["PureComponent"]),function(e,t,n){t&&M(e.prototype,t),n&&M(e,n)}(t,[{key:"componentDidMount",value:function(){console.log("hey hey")}},{key:"render",value:function(){var e=this.props,t=e.position,n=e.lastName,r=e.imgs,o=e.name;return p.a.createElement("figure",{className:"Work-container ".concat(n)},p.a.createElement("span",{className:"Work-numerator"},t),r.map(function(e,t){return p.a.createElement("img",{className:0===t?"Work-desktop":"Work-movile",key:e.alt,src:e.src,alt:e.alt})}),p.a.createElement("figcaption",{className:"Work-name"},o))}}]),t}(),I=n(12),U=n.n(I),W=n(13),J=n.n(W),V=n(14),Q=n.n(V),Y=n(15),X=n.n(Y),K=n(16),Z=n.n(K),$=n(17),ee=n.n($),te=n(18),ne=n.n(te),re=n(19),oe=n.n(re),ae=[{id:"grimms",name:"grimms kindergarten",images:[{src:J.a,alt:"Grimms desktop"},{src:U.a,alt:"Grimms movile"}]},{id:"wok",name:"wok restaurant",images:[{src:X.a,alt:"wok desktop"},{src:Q.a,alt:"Grimms movile"}]},{id:"marathons",name:"About Marathons",images:[{src:ee.a,alt:"marathons desktop"},{src:Z.a,alt:"marathons movile"}]},{id:"portfolio",name:"my first portfolio",images:[{src:oe.a,alt:"Grimms desktop"},{src:ne.a,alt:"Grimms movile"}]}],ie=n(20),ce=n.n(ie),se=n(21),le=n.n(se),ue=n(22),me=n.n(ue),pe=n(23),fe=n.n(pe),de=[{id:"escape",name:"escape videogame",images:[{src:me.a,alt:"escape movile videogame"}]},{id:"deopies",name:"Woman Runner (Colombia)",images:[{src:ce.a,alt:"deoPies videogame"},{src:le.a,alt:"kineck"}]},{id:"claro",name:"Claro movile",images:[{src:fe.a,alt:"claro videogame"}]}];function he(e){return(he="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ge(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function be(e){return(be=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ye(e,t){return(ye=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ve(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var we=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=function(e,t){return!t||"object"!==he(t)&&"function"!=typeof t?ve(e):t}(this,be(t).call(this))).state={web:!1,games:!1,webShow:!1,gamesShow:!1},e.webProjects=p.a.createRef(),e.gameProjects=p.a.createRef(),e.handleViews=e.handleViews.bind(ve(ve(e))),e.handleResize=e.handleResize.bind(ve(ve(e))),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ye(e,t)}(t,m["PureComponent"]),function(e,t,n){t&&ge(e.prototype,t),n&&ge(e,n)}(t,[{key:"componentDidMount",value:function(){window.innerWidth>992&&window.addEventListener("scroll",this.handleViews),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleViews),window.removeEventListener("resize",this.handleResize)}},{key:"handleResize",value:function(){window.innerWidth>992?window.addEventListener("scroll",this.handleViews):window.removeEventListener("scroll",this.handleViews)}},{key:"handleViews",value:function(){var e,t,n=document,r=this.webProjects.current,o=this.gameProjects.current,a=n.getElementById("border-logo"),i=n.querySelector(".is-light"),c=n.querySelector(".is-dark"),s=r.getBoundingClientRect(),l=o.getBoundingClientRect(),u=s.top,m=s.height,p=l.top,f=m+u,d=l.height+p,h=u<=400,g=p<=400;u<=0&&!c?(a.classList.remove("is-light"),a.classList.add("is-dark")):u>=0&&!i&&(a.classList.remove("is-dark"),a.classList.add("is-light")),e=u<=0&&f>=0,t=p<=0&&d>=0,this.setState({web:e,games:t,webShow:h,gamesShow:g})}},{key:"render",value:function(){return p.a.createElement("section",{className:"Project-container"},p.a.createElement("div",{ref:this.webProjects,className:"Project-category",id:"web"},p.a.createElement("div",{className:"Project-header"},p.a.createElement(B,{isFixed:this.state.web,isShow:this.state.webShow,title:"responsive, single pages websites",text:"Improving the user experience my websites are made as single page applications, as long as is necesary, with clean code and the best news feautres on the web.",tags:["html5","css3","js"]})),p.a.createElement("div",{className:"Project-demos"},ae.map(function(e,t){return p.a.createElement(G,{key:e.id,position:t,imgs:e.images,name:e.name})}))),p.a.createElement("div",{ref:this.gameProjects,className:"Project-category",id:"games"},p.a.createElement("div",{className:"Project-header"},p.a.createElement(B,{isFixed:this.state.games,isShow:this.state.gamesShow,shortName:"games",title:"Video Games, Benefist for Companys",text:"Using videogmaes you can attract more people, this is so beneficist to comanyes for inprove the sells",tags:["Unity","C#","Maya3d"]})),p.a.createElement("div",{className:"Project-demos"},de.map(function(e,t){return p.a.createElement(G,{key:e.id,position:t,imgs:e.images,name:e.name})}))))}}]),t}(),Ee=function(){return p.a.createElement("main",null,p.a.createElement(z.a,null,p.a.createElement("title",null,"Jacob Async Gonzalez"),p.a.createElement("meta",{name:"description",content:"Desarrollador javascript colombiano, jacob gonzalez"})),p.a.createElement(A,null),p.a.createElement(we,null))},ke=function(e){var t=e.value;return p.a.createElement("div",{className:"Indicator-container"},p.a.createElement("div",{className:"Indicator-bar"}),p.a.createElement("div",{className:"Indicator-value",style:{width:"".concat(t,"%")}}))},Se=n(24),je=n.n(Se),Oe=[{name:"HTML",items:"Pug, Social tags, SEO",level:90},{name:"CSS",items:"Sass, postCSS, responsive design",level:95},{name:"JavaScript (ES7)",items:"PWA, REST, JQuery, WebPack",level:80},{name:"ReactJS",items:"Redux, React Router, Helmet, SSR",level:75},{name:"Angular",items:"TypeScript, modules, routes, services",level:68},{name:"Git",items:"CMD, SCRUM",level:70},{name:"NodeJS",items:"Express, JWT, WebSockets, API REST, GraphQL",level:60},{name:"Data Base",items:"MySQL, MongoDB, MER, MRD",level:75}],Ne=function(){return p.a.createElement("section",{className:"About-wrapper"},p.a.createElement("main",{className:"About-container"},p.a.createElement("img",{className:"About-image",src:je.a,alt:"Jacob Gonzalez"}),p.a.createElement("article",{className:"About-main"},p.a.createElement("h1",{className:"About-title"},"Hi! my name is Jacob Gonzalez, Currently I'm freelancer developer"),p.a.createElement("p",{className:"About-description"},"I've working as freelance developer for 4 years in diferents projects like videogames ans websites or web applications. I have always been insterested in the web development, currently, I use ReactJS and other libraries for improve the user experience of my web projects"))),p.a.createElement("div",{className:"About-skillContainer"},p.a.createElement("h2",{className:"About-skillTitle"},"Skillset"),Oe.map(function(e){return p.a.createElement("div",{key:e.name.slice(0,3),className:"About-skill"},p.a.createElement("strong",null,e.name),p.a.createElement("span",null,e.items),p.a.createElement(ke,{value:e.level}))})))},Pe=n(25);function xe(e){return(xe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ce(e){return(Ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Te(e,t){return(Te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Le(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Re=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==xe(t)&&"function"!=typeof t?Le(e):t}(this,Ce(t).call(this,e))).state={text:"",active:""},n.handleText=n.handleText.bind(Le(Le(n))),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Te(e,t)}(t,m["PureComponent"]),function(e,t,n){t&&_e(e.prototype,t),n&&_e(e,n)}(t,[{key:"handleText",value:function(e){e.preventDefault();var t=e.target.value,n=""!==t?"is-active":"";this.props.updateSearch(t),this.setState({active:n})}},{key:"render",value:function(){var e=this;return p.a.createElement("div",{className:"Search-container"},p.a.createElement("form",{className:"Search-form ".concat(this.state.active)},p.a.createElement("input",{onFocus:function(e){return e.target.placeholder=""},onBlur:function(e){return e.target.placeholder="write something"},onChange:function(t){return e.handleText(t)},className:"Search-input",type:"text",placeholder:"write something"}),p.a.createElement("button",{className:"Search-button",type:"submit"},p.a.createElement(Pe.IoIosSearch,{className:"Search-icon ".concat(this.state.active)}))))}}]),t}(),ze=Object(h.connect)(null,function(e){return{updateSearch:function(t){e({type:"NEW_SEARCH",search:t})}}})(Re),Ae=function(){return p.a.createElement("div",{className:"Bbar-wrapper"},p.a.createElement("div",{className:"Bbar-container"},p.a.createElement("ul",{className:"Bbar-items"},p.a.createElement("li",{className:"Bbar-item"},p.a.createElement("span",null,"All")),p.a.createElement("li",{className:"Bbar-item"},p.a.createElement("span",null,"JavaScript")),p.a.createElement("li",{className:"Bbar-item"},p.a.createElement("span",null,"CSS")),p.a.createElement("li",{className:"Bbar-item"},p.a.createElement("span",null,"HTML")),p.a.createElement("li",{className:"Bbar-item"},p.a.createElement("span",null,"Unity"))),p.a.createElement(ze,null)))},Be=function(e){var t=e.img,n=e.title,r=e.resume,o=e.tags,a=e.path;return p.a.createElement(d.Link,{to:"/post/".concat(a),className:"Blog-card"},p.a.createElement("img",{className:"Blog-ogimage",src:t,alt:n}),p.a.createElement("h2",{className:"Blog-name"},n),p.a.createElement("p",{className:"Blog-pretext"},r),p.a.createElement("div",{className:"Blog-tags"},o.map(function(e){return p.a.createElement("strong",{key:"".concat(e,"tag")},e)})))},qe=Object.freeze({BLOG:{POSTS:"blogs"}}),Me=(n(31),n(26)),Fe=n.n(Me);function He(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=n.fetchingFrom,a=void 0===o?"client":o;delete n.fetchFrom,r&&(t=Fe.a.stringify(r));var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.method,n=void 0===t?"GET":t,r=e.headers,o=void 0===r?{"Content-Type":"application/json"}:r,a=e.body,i=void 0!==a&&a,c={method:n,headers:o,credentials:"include"};i&&(c.body=i);return c}(n),c=function(e,t,n){var r="",o="https://jacobgz.herokuapp.com";return t&&(r="?".concat(t)),"server"===n&&(o="https://jacobgz.herokuapp.com"),"".concat(o,"/api/").concat(e).concat(r)}(e,t,a);return fetch(c,i).then(function(e){return console.log("respuesta: ".concat(e)),e.json()})}function De(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Ge=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){t&&De(e.prototype,t),n&&De(e,n)}(e,null,[{key:"getAllPosts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"client";return He(qe.BLOG.POSTS,{fetchingFrom:t},e)}}]),e}(),Ie=function(){return"FETCH_POSTS_REQUEST"},Ue=function(){return"FETCH_POSTS_SUCCESS"},We=function(e,t){return function(n){return n({type:Ie()}),Ge.getAllPosts(t,e).then(function(e){return n(function(e){return{type:Ue(),payload:e.blogs}}(e))})}};function Je(e){return(Je="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ve(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Qe(e,t){return!t||"object"!==Je(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ye(e){return(Ye=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Xe(e,t){return(Xe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ke=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Qe(this,Ye(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Xe(e,t)}(t,m["Component"]),function(e,t,n){t&&Ve(e.prototype,t),n&&Ve(e,n)}(t,[{key:"componentDidMount",value:function(){(function(e){return!function(e){return void 0!==e&&null!==e}(e)||0===e.length||0===Object.keys(e).length})(this.props.posts)&&this.props.dispatch(t.initialAction("client"))}},{key:"render",value:function(){var e=this.props,t=e.search,n=e.posts;return p.a.createElement("section",{className:"Blog-container"},p.a.createElement("h1",{className:"Blog-header"},p.a.createElement("strong",{className:"Blog-headerTitle"},"LET’S LEARN ABOUT THE WORLD OF PROGRAMMING")),p.a.createElement(Ae,null),t&&p.a.createElement("h2",null,'Buscar por: "',t,'"'),p.a.createElement("main",{className:"Blog-list"},n.map(function(e){return p.a.createElement(Be,e)})))}}],[{key:"initialAction",value:function(e){return We(e,{start:0,end:6})}}]),t}(),Ze=Object(h.connect)(function(e){var t=e.blog;return{posts:t.posts,search:t.search}},null)(Ke),$e=n(27),et=n.n($e),tt=n(28),nt=n.n(tt),rt=n(29);function ot(e){return(ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function at(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function it(e,t){return!t||"object"!==ot(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ct(e){return(ct=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function st(e,t){return(st=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var lt=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),it(this,ct(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&st(e,t)}(t,p.a.PureComponent),function(e,t,n){t&&at(e.prototype,t),n&&at(e,n)}(t,[{key:"render",value:function(){var e=this.props,t=e.language,n=e.value;return p.a.createElement(nt.a,{language:t,style:rt.okaidia},n)}}]),t}();function ut(){return(ut=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var mt=function(e){return p.a.createElement("div",ut({},e,{id:"loading-blog"}),p.a.createElement("div",{className:"Loading-blog"},p.a.createElement("div",{className:"Loading-loader"},p.a.createElement("div",null)),p.a.createElement("div",{className:"Loading-loader"},p.a.createElement("div",null)),p.a.createElement("div",{className:"Loading-loader"},p.a.createElement("div",null))))};function pt(e){return(pt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ft(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function dt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ht(e,t){return!t||"object"!==pt(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function gt(e){return(gt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function bt(e,t){return(bt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var yt=[{path:"/",exact:!0,component:Ee,key:"workroute"},{path:"/about",exact:!0,component:Ne,key:"aboutrute"},{path:"/blogs",exact:!0,component:Ze,key:"blogroute"},{path:"/post/:id",component:function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=ht(this,gt(t).call(this,e))).state={post:null},n.editor=p.a.createRef(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&bt(e,t)}(t,m["PureComponent"]),function(e,t,n){t&&dt(e.prototype,t),n&&dt(e,n)}(t,[{key:"componentDidMount",value:function(){var e=this;document.getElementById("header").style.backgroundColor="var(--dark-color)",fetch("https://raw.githubusercontent.com/njacob1001/post/master/".concat(this.props.match.params.id,".md")).then(function(e){return e.text()}).then(function(t){return e.setState({post:t})}).catch(function(e){return console.log(e)})}},{key:"componentDidUpdate",value:function(){ft(document.querySelectorAll(".Post-body > pre")).map(function(e){e.style.width="100%",e.style.background="var(--dark-color)"})}},{key:"componentWillUnmount",value:function(){document.getElementById("header").style.backgroundColor="transparent"}},{key:"render",value:function(){return p.a.createElement("main",{className:"Post-container"},p.a.createElement("article",{ref:this.editor,className:"Post-wrapper"},this.state.post?p.a.createElement(et.a,{className:"Post-body",source:this.state.post,renderers:{code:lt}}):p.a.createElement(mt,{className:"Full Blog"})))}}]),t}(),key:"postglogroute"}],vt=function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement(T,null),p.a.createElement(d.Switch,null,yt.map(function(e){return p.a.createElement(d.Route,e)})),p.a.createElement(L,null))},wt=function(e,t){var n="Jacob Gonzalez Frontend developer from Colombia",r="Desarrollador web colombiano, frontend developer from colombia freelancer responsive design",o="https://jacobgz.herokuapp.com/",a="website",i="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i,900",c="2B303A";return'\n    <!DOCTYPE html>\n    <html lang="en" prefix="og: http://ogp.me/ns#" itemscope itemtype="http://schema.org/Blog">\n      <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n        <meta name="HandheldFriendly" content="true">\n        <meta http-equiv="X-UA-Compatible" content="ie=edge">\n        <title>'.concat(n,'</title>\n        <meta name="description" content="').concat(r,'">\n        <link rel="canonical" href="').concat(o,'">\n        <base href="/">\n        <noscript><p>Ncesita tener habilitado JavaScript para poder visualizar contenido</p></noscript>\n        <meta name="HandheldFriendly" content="true">\n        <meta name="MobileOptimized" content="320">\n        <meta name="theme-color" content="').concat(c,'">\n        <meta name="msapplication-TileColor" content="').concat(c,'">\n        <meta name="msapplication-TileImage" content="').concat(c,'">\n        <meta name="apple-mobile-web-app-capable" content="yes">\n        <meta name="apple-mobile-web-app-status-bar-style" content="default">\n        <link rel="apple-touch-startup-image" href="./assets/img/og-image.jpg">\n        <link rel="apple-touch-icon" href="./assets/img/og-image.jpg">\n        <link rel="author" href="https://plus.google.com/112455610659481296930">\n        <link rel="publisher" href="https://plus.google.com/112455610659481296930">\n        <meta itemprop="name" content="').concat(n,'">\n        <meta itemprop="description" content="').concat(r,'">\n        <meta itemprop="image" content="./assets/img/og-image.jpg">\n        <meta property="og:title" content="').concat(n,'">\n        <meta property="og:type" content="').concat(a,'">\n        <meta property="og:url" content="').concat(o,'">\n        <meta property="og:description" content="').concat(r,'">\n        <meta property="og:image" content="./assets/img/og-image.jpg">\n        <meta name="twitter:card" content="summary_large_image">\n        <meta name="twitter:site" content="@Jacob62213451">\n        <meta name="twitter:title" content="').concat(n,'">\n        <meta name="twitter:description" content="').concat(r,'">\n        <meta name="twitter:creator" content="@Jacob62213451">\n        <meta name="twitter:image:src" content="./assets/img/og-image.jpg">\n        <meta name="theme-color" content="#').concat(c,'">\n        <link href="').concat(i,'" rel="stylesheet">\n        <link rel="manifest" href="./manifest.json">\n        <link rel="shortcut icon" href="./favicon.ico">\n        <link href="./main.css" rel="stylesheet">\n        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script>\n        <script>\n          (adsbygoogle = window.adsbygoogle || []).push({\n            google_ad_client: "ca-pub-9596502450064095",\n            enable_page_level_ads: true\n          });\n        <\/script>\n      </head>\n      <body>\n        <div id="root">').concat(e,"</div>\n        <script>window.initialState = ").concat(t,'<\/script>\n        <script type="text/javascript" src="./chunk.vendor.js"><\/script>\n        <script type="text/javascript" src="./main.js"><\/script>\n      </body>\n    </html>')};var Et=n(32).redirectToHTTPS,kt=process.env.PORT||3e3,St=o()();St.use(i()()),St.use(Et([/localhost:(\d{4})/],[/\/insecure/],301)),St.use(o.a.urlencoded({extended:!1})),St.use(o.a.json()),St.get("/*.js",function(e,t,n){"/sw.js"===e.url?t.setHeader("content-type","text/javascript"):(e.url="".concat(e.url,".gz"),t.set("Content-Encoding","gzip"),t.set("Content-Type","text/javascript")),n()}),St.use(o.a.static("public")),St.post("/api/post",function(e,t){var n=e.body,r=n.title,o=n.author,a=n.path,i=n.resume,c=n.img,s=n.date,l=n.tags,m=n.category;new u({title:r,author:o,path:a,resume:i,img:c,date:s,tags:l,category:m}).save(function(e,n){if(e)return t.status(400).json({ok:!1,err:e});t.json({ok:!0,post:n})})}),St.get("/api/blogs",function(e,t){var n=e.query.start||0,r=e.query.end||3;u.find({}).skip(Number(n)).limit(Number(r)).exec(function(e,n){if(e)return t.status(400).json({ok:!1,err:e});u.countDocuments({},function(e,r){t.json({ok:!0,total:r,blogs:n})})})}),St.use(function(e,t,n){"/sw.js"===e.url&&n();var r=function(e){var t=[E.a];return Object(v.createStore)(O,e,v.applyMiddleware.apply(void 0,t))}(),o=yt.reduce(function(t,n){return Object(d.matchPath)(e.url,n)&&n.component&&n.component.initialAction&&t.push(Promise.resolve(r.dispatch(n.component.initialAction("server")))),t},[]);Promise.all(o).then(function(){var n={},o=r.getState(),a=Object(f.renderToString)(p.a.createElement(g.HelmetProvider,{context:n},p.a.createElement(h.Provider,{store:r},p.a.createElement(d.StaticRouter,{location:e.url,context:n},p.a.createElement(vt,null)))));n.url?t.redirect(301,n.url):t.send(wt(a,y()(o)))}).catch(function(e){console.log("Error en promesa",e)})}),s.a.connect("mongodb://jacob:jacobgonzalez373222@ds143163.mlab.com:43163/jacob",{useNewUrlParser:!0},function(e,t){if(e)throw e;console.log("Base de datos ONLINE")}),St.listen(kt)}]);