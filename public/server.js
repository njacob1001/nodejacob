!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=33)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("mongoose")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-helmet-async")},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("react-helmet")},function(e,t,n){e.exports=n.p+"assets/img/movile-grimms.png"},function(e,t,n){e.exports=n.p+"assets/img/desktop-grimms.png"},function(e,t,n){e.exports=n.p+"assets/img/movile-wok.png"},function(e,t,n){e.exports=n.p+"assets/img/desktop-wok.png"},function(e,t,n){e.exports=n.p+"assets/img/movile-marathons.png"},function(e,t,n){e.exports=n.p+"assets/img/desktop-marathons.png"},function(e,t,n){e.exports=n.p+"assets/img/movile-portfolio.png"},function(e,t,n){e.exports=n.p+"assets/img/desktop-portfolio.png"},function(e,t,n){e.exports=n.p+"assets/img/desktop-deopies.png"},function(e,t,n){e.exports=n.p+"assets/img/kineckt.png"},function(e,t,n){e.exports=n.p+"assets/img/movile-escape.png"},function(e,t,n){e.exports=n.p+"assets/img/movile-claro.png"},function(e,t,n){e.exports=n.p+"assets/img/og-image.jpg"},function(e,t){e.exports=require("react-icons/io")},function(e,t){e.exports=require("query-string")},function(e,t){e.exports=require("react-markdown")},function(e,t){e.exports=require("react-syntax-highlighter/prism")},function(e,t){e.exports=require("react-syntax-highlighter/styles/prism")},function(e,t,n){},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t){e.exports=require("express-http-to-https")},function(e,t,n){"use strict";n.r(t);var r=n(5),o=n.n(r),a=n(6),i=n.n(a),c=n(3),s=n.n(c),l=new(0,s.a.Schema)({title:{type:String,require:[!0,"the title is necesary"]},author:{type:String,required:[!0,"the author is necesary"]},path:{type:String,required:[!0,"the path route is obligatory"]},img:{type:String,required:[!0,"This post most to have a image"]},date:{type:String,required:!1},tags:{type:Array,required:!1},category:{type:String,required:[!0,"You have to assign a category"]}}),u=s.a.model("Post",l),m=n(0),p=n.n(m),f=n(7),h=n(1),d=n(2),b=n(8),y=n(9),g=n.n(y),v=n(4),E=n(10),w=n.n(E);function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){k(e,t,n[t])})}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j={search:"",posts:[]};function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P={post:""};var N=Object(v.combineReducers)({blog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_SEARCH":return S({},e,{search:t.search});case"FETCH_POSTS_SUCCESS":return S({},e,{posts:t.payload});default:return e}},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POST_SUCCESS":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){O(e,t,n[t])})}return e}({},e,{post:t.payload});default:return e}}});n(30);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var R=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=function(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?L(e):t}(this,C(t).call(this))).state={hamburger:!1},e.handleClick=e.handleClick.bind(L(L(e))),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,m["PureComponent"]),function(e,t,n){t&&_(e.prototype,t),n&&_(e,n)}(t,[{key:"componentDidUpdate",value:function(){console.log(this.state.hamburger)}},{key:"handleClick",value:function(){this.setState({hamburger:!this.state.hamburger}),console.log(this.state.hamburger)}},{key:"render",value:function(){var e=this.state.hamburger?"is-active":"";return p.a.createElement("header",{className:"Header-wrapper"},p.a.createElement("nav",{className:"Header-container"},p.a.createElement(h.Link,{to:"/",className:"Header-item Logo"},p.a.createElement("svg",{className:"Header-logo",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 165 165",style:{enableBackground:"new 0 0 165 165"},xmlSpace:"preserve"},p.a.createElement("path",{id:"border-logo",className:"Svg-borderDark is-light",d:"M15.8,53.4v-3.8c0-3.5,1.9-6.7,4.9-8.5L77.6,8.3c3-1.8,6.8-1.8,9.8,0l56.9,32.9c3,1.8,4.9,5,4.9,8.5v65.7c0,3.5-1.8,6.7-4.9,8.5l-56.9,32.9c-3,1.8-6.8,1.8-9.8,0l-56.9-32.9c-3-1.8-4.9-5-4.9-8.5V53.4"})," ",p.a.createElement("path",{id:"letter",className:"Svg-letterDark",d:"M54.9,112.5v-4.4c0-4.7,3.3-6.6,7.3-4.2l15.3,8.8c3,1.7,6.8,1.7,9.8,0l18.7-10.9c3-1.8,4.9-5,4.9-8.5l-0.1-21.6c0-3.5-1.9-6.7-4.9-8.4L87.4,52.5c-3-1.7-6.7-1.7-9.7,0l-10.2,5.8c-3.1,1.7-6.8,1.7-9.8-0.1L53.9,56c-4-2.4-3.9-6.2,0.1-8.5l23.6-13.6c3-1.8,6.8-1.7,9.8,0L122.1,54c3,1.8,4.9,5,4.9,8.5v40.2c0,3.5-1.9,6.7-4.9,8.5l-34.7,20c-3,1.7-6.7,1.7-9.8,0L59.8,121C56.8,119.3,54.9,116,54.9,112.5z"})," ",p.a.createElement("path",{id:"light",className:"Svg-letterLight",d:"M122.1,54L87.4,33.9c-3-1.8-6.8-1.8-9.8,0L54,47.5c-4,2.3-4,6.1-0.1,8.5l3.7,2.2c3,1.8,6.8,1.8,9.8,0.1l10.2-5.8c3-1.7,6.7-1.7,9.7,0l18.6,10.7c1.5,0.9,2.7,2.1,3.6,3.6l16.1-9.3C124.8,56.1,123.6,54.9,122.1,54z"})," "),p.a.createElement("h1",{className:"Visually-hidden"},"Jacob Gonzalez")),p.a.createElement("div",{onClick:this.handleClick,className:"Header-item Menu ".concat(e)},p.a.createElement(h.NavLink,{exact:!0,activeClassName:"is-active",className:"Header-link",to:"/"},"work"),p.a.createElement(h.NavLink,{activeClassName:"is-active",className:"Header-link",to:"/about"},"about"),p.a.createElement(h.NavLink,{activeClassName:"is-active",className:"Header-link",to:"/blogs"},"blog")),p.a.createElement("button",{id:"HMenu",onClick:this.handleClick,className:"hamburger hamburger--squeeze ".concat(e)},p.a.createElement("span",{className:"hamburger-box"},p.a.createElement("span",{className:"hamburger-inner"})))))}}]),t}(),z=function(){return p.a.createElement("footer",{className:"Footer-wrapper"},p.a.createElement("div",{className:"Footer-container"},p.a.createElement("span",{className:"Footer-title"},"Follow me: "),p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/jacob-gonzalez-210b84166",className:"Footer-link"},p.a.createElement("strong",null,"LinkedIn")),p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/njacob1001",className:"Footer-link"},p.a.createElement("strong",null,"GitHub")),p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/channel/UCQ-ykK7GU9qDczl7Cb2DpmA",className:"Footer-link"},p.a.createElement("strong",null,"Youtube")),p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/jacobdesarrolloweb/",className:"Footer-link"},p.a.createElement("strong",null,"Facebook"))))},A=n(11),q=n.n(A),B=function(){return p.a.createElement("section",{className:"Presentation-wrapper"},p.a.createElement("div",{className:"Presentation-container"},p.a.createElement("h2",{className:"Presentation-title"},"Multimedia Engineer"),p.a.createElement("p",{className:"Presentation-subtext"},"I am specialized on clean code and the best performance on the web"),p.a.createElement("h3",{className:"Presentation-name"},"Jacob González")))},F=function(e){var t=e.isShow,n=e.isFixed,r=e.title,o=e.text,a=e.tags;return p.a.createElement("article",{className:"Category-container ".concat(t?"is-show":"no-show"," ").concat(n?"is-fixed":"no-fixed"," ")},p.a.createElement("h2",{className:"Category-title"},r),p.a.createElement("p",{className:"Category-text"},o),p.a.createElement("div",{className:"Category-tags"},a.map(function(e){return p.a.createElement("span",{className:"Category-item",key:e},e)})))};function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),G(this,D(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(t,m["PureComponent"]),function(e,t,n){t&&H(e.prototype,t),n&&H(e,n)}(t,[{key:"componentDidMount",value:function(){console.log("hey hey")}},{key:"render",value:function(){var e=this.props,t=e.position,n=e.lastName,r=e.imgs,o=e.name;return p.a.createElement("figure",{className:"Work-container ".concat(n)},p.a.createElement("span",{className:"Work-numerator"},t),r.map(function(e,t){return p.a.createElement("img",{className:0===t?"Work-desktop":"Work-movile",key:e.alt,src:e.src,alt:e.alt})}),p.a.createElement("figcaption",{className:"Work-name"},o))}}]),t}(),J=n(12),W=n.n(J),V=n(13),Q=n.n(V),Y=n(14),X=n.n(Y),K=n(15),Z=n.n(K),$=n(16),ee=n.n($),te=n(17),ne=n.n(te),re=n(18),oe=n.n(re),ae=n(19),ie=n.n(ae),ce=[{id:"grimms",name:"grimms kindergarten",images:[{src:Q.a,alt:"Grimms desktop"},{src:W.a,alt:"Grimms movile"}]},{id:"wok",name:"wok restaurant",images:[{src:Z.a,alt:"wok desktop"},{src:X.a,alt:"Grimms movile"}]},{id:"marathons",name:"About Marathons",images:[{src:ne.a,alt:"marathons desktop"},{src:ee.a,alt:"marathons movile"}]},{id:"portfolio",name:"my first portfolio",images:[{src:ie.a,alt:"Grimms desktop"},{src:oe.a,alt:"Grimms movile"}]}],se=n(20),le=n.n(se),ue=n(21),me=n.n(ue),pe=n(22),fe=n.n(pe),he=n(23),de=n.n(he),be=[{id:"escape",name:"escape videogame",images:[{src:fe.a,alt:"escape movile videogame"}]},{id:"deopies",name:"Woman Runner (Colombia)",images:[{src:le.a,alt:"deoPies videogame"},{src:me.a,alt:"kineck"}]},{id:"claro",name:"Claro movile",images:[{src:de.a,alt:"claro videogame"}]}];function ye(e){return(ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ge(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ve(e){return(ve=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ee(e,t){return(Ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function we(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Se=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=function(e,t){return!t||"object"!==ye(t)&&"function"!=typeof t?we(e):t}(this,ve(t).call(this))).state={web:!1,games:!1,webShow:!1,gamesShow:!1},e.webProjects=p.a.createRef(),e.gameProjects=p.a.createRef(),e.handleViews=e.handleViews.bind(we(we(e))),e.handleResize=e.handleResize.bind(we(we(e))),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ee(e,t)}(t,m["PureComponent"]),function(e,t,n){t&&ge(e.prototype,t),n&&ge(e,n)}(t,[{key:"componentDidMount",value:function(){window.innerWidth>992&&window.addEventListener("scroll",this.handleViews),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleViews),window.removeEventListener("resize",this.handleResize)}},{key:"handleResize",value:function(){window.innerWidth>992?window.addEventListener("scroll",this.handleViews):window.removeEventListener("scroll",this.handleViews)}},{key:"handleViews",value:function(){var e,t,n=document,r=this.webProjects.current,o=this.gameProjects.current,a=n.getElementById("border-logo"),i=n.querySelector(".is-light"),c=n.querySelector(".is-dark"),s=r.getBoundingClientRect(),l=o.getBoundingClientRect(),u=s.top,m=s.height,p=l.top,f=m+u,h=l.height+p,d=u<=400,b=p<=400;u<=0&&!c?(a.classList.remove("is-light"),a.classList.add("is-dark")):u>=0&&!i&&(a.classList.remove("is-dark"),a.classList.add("is-light")),e=u<=0&&f>=0,t=p<=0&&h>=0,this.setState({web:e,games:t,webShow:d,gamesShow:b})}},{key:"render",value:function(){return p.a.createElement("section",{className:"Project-container"},p.a.createElement("div",{ref:this.webProjects,className:"Project-category",id:"web"},p.a.createElement("div",{className:"Project-header"},p.a.createElement(F,{isFixed:this.state.web,isShow:this.state.webShow,title:"responsive, single pages websites",text:"Improving the user experience my websites are made as single page applications, as long as is necesary, with clean code and the best news feautres on the web.",tags:["html5","css3","js"]})),p.a.createElement("div",{className:"Project-demos"},ce.map(function(e,t){return p.a.createElement(I,{key:e.id,position:t,imgs:e.images,name:e.name})}))),p.a.createElement("div",{ref:this.gameProjects,className:"Project-category",id:"games"},p.a.createElement("div",{className:"Project-header"},p.a.createElement(F,{isFixed:this.state.games,isShow:this.state.gamesShow,shortName:"games",title:"Video Games, Benefist for Companys",text:"Using videogmaes you can attract more people, this is so beneficist to comanyes for inprove the sells",tags:["Unity","C#","Maya3d"]})),p.a.createElement("div",{className:"Project-demos"},be.map(function(e,t){return p.a.createElement(I,{key:e.id,position:t,imgs:e.images,name:e.name})}))))}}]),t}(),ke=function(){return p.a.createElement("main",null,p.a.createElement(q.a,null,p.a.createElement("title",null,"Jacob Async Gonzalez"),p.a.createElement("meta",{name:"description",content:"Desarrollador javascript colombiano, jacob gonzalez"})),p.a.createElement(B,null),p.a.createElement(Se,null))},je=function(e){var t=e.value;return p.a.createElement("div",{className:"Indicator-container"},p.a.createElement("div",{className:"Indicator-bar"}),p.a.createElement("div",{className:"Indicator-value",style:{width:"".concat(t,"%")}}))},Oe=n(24),Pe=n.n(Oe),Ne=[{name:"HTML",items:"Pug, Social tags, SEO",level:90},{name:"CSS",items:"Sass, postCSS, responsive design",level:95},{name:"JavaScript (ES7)",items:"PWA, REST, JQuery, WebPack",level:80},{name:"ReactJS",items:"Redux, React Router, Helmet, SSR",level:75},{name:"Angular",items:"TypeScript, modules, routes, services",level:68},{name:"Git",items:"CMD, SCRUM",level:70},{name:"NodeJS",items:"Express, JWT, WebSockets, API REST, GraphQL",level:60},{name:"Data Base",items:"MySQL, MongoDB, MER, MRD",level:75}],xe=function(){return p.a.createElement("section",{className:"About-wrapper"},p.a.createElement("main",{className:"About-container"},p.a.createElement("img",{className:"About-image",src:Pe.a,alt:"Jacob Gonzalez"}),p.a.createElement("article",{className:"About-main"},p.a.createElement("h1",{className:"About-title"},"Hi! my name is Jacob Gonzalez, Currently I'm freelancer developer"),p.a.createElement("p",{className:"About-description"},"I've working as freelance developer for 4 years in diferents projects like videogames ans websites or web applications. I have always been insterested in the web development, currently, I use ReactJS and other libraries for improve the user experience of my web projects"))),p.a.createElement("div",{className:"About-skillContainer"},p.a.createElement("h2",{className:"About-skillTitle"},"Skillset"),Ne.map(function(e){return p.a.createElement("div",{key:e.name.slice(0,3),className:"About-skill"},p.a.createElement("strong",null,e.name),p.a.createElement("span",null,e.items),p.a.createElement(je,{value:e.level}))})))},_e=n(25);function Ce(e){return(Ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Le(e){return(Le=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Re(e,t){return(Re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ze(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Ae=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==Ce(t)&&"function"!=typeof t?ze(e):t}(this,Le(t).call(this,e))).state={text:"",active:""},n.handleText=n.handleText.bind(ze(ze(n))),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Re(e,t)}(t,m["PureComponent"]),function(e,t,n){t&&Te(e.prototype,t),n&&Te(e,n)}(t,[{key:"handleText",value:function(e){e.preventDefault();var t=e.target.value,n=""!==t?"is-active":"";this.props.updateSearch(t),this.setState({active:n})}},{key:"render",value:function(){var e=this;return p.a.createElement("div",{className:"Search-container"},p.a.createElement("form",{className:"Search-form ".concat(this.state.active)},p.a.createElement("input",{onFocus:function(e){return e.target.placeholder=""},onBlur:function(e){return e.target.placeholder="write something"},onChange:function(t){return e.handleText(t)},className:"Search-input",type:"text",placeholder:"write something"}),p.a.createElement("button",{className:"Search-button",type:"submit"},p.a.createElement(_e.IoIosSearch,{className:"Search-icon ".concat(this.state.active)}))))}}]),t}(),qe=Object(d.connect)(null,function(e){return{updateSearch:function(t){e({type:"NEW_SEARCH",search:t})}}})(Ae),Be=function(){return p.a.createElement("div",{className:"Bbar-wrapper"},p.a.createElement("div",{className:"Bbar-container"},p.a.createElement("ul",{className:"Bbar-items"},p.a.createElement("li",{className:"Bbar-item"},p.a.createElement("span",null,"All")),p.a.createElement("li",{className:"Bbar-item"},p.a.createElement("span",null,"JavaScript")),p.a.createElement("li",{className:"Bbar-item"},p.a.createElement("span",null,"CSS")),p.a.createElement("li",{className:"Bbar-item"},p.a.createElement("span",null,"HTML")),p.a.createElement("li",{className:"Bbar-item"},p.a.createElement("span",null,"Unity"))),p.a.createElement(qe,null)))},Fe=function(e){var t=e.img,n=e.title,r=e.resume,o=e.tags,a=e.path;return p.a.createElement(h.Link,{to:"/post/".concat(a),className:"Blog-card"},p.a.createElement("img",{className:"Blog-ogimage",src:t,alt:n}),p.a.createElement("h2",{className:"Blog-name"},n),p.a.createElement("p",{className:"Blog-pretext"},r),p.a.createElement("div",{className:"Blog-tags"},o.map(function(e){return p.a.createElement("strong",{key:"".concat(e,"tag")},e)})))},Me=Object.freeze({BLOG:{POSTS:"blogs"}}),He=(n(31),n(26)),Ge=n.n(He);function De(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=n.fetchingFrom,a=void 0===o?"client":o;delete n.fetchFrom,r&&(t=Ge.a.stringify(r));var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.method,n=void 0===t?"GET":t,r=e.headers,o=void 0===r?{"Content-Type":"application/json"}:r,a=e.body,i=void 0!==a&&a,c={method:n,headers:o,credentials:"include"};i&&(c.body=i);return c}(n),c=function(e,t,n){var r="",o="https://jacobgz.herokuapp.com";return t&&(r="?".concat(t)),"server"===n&&(o="https://jacobgz.herokuapp.com"),"".concat(o,"/api/").concat(e).concat(r)}(e,t,a);return fetch(c,i).then(function(e){return console.log("respuesta: ".concat(e)),e.json()})}function Ue(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Ie=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){t&&Ue(e.prototype,t),n&&Ue(e,n)}(e,null,[{key:"getAllPosts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"client";return De(Me.BLOG.POSTS,{fetchingFrom:t},e)}}]),e}(),Je=function(){return"FETCH_POSTS_REQUEST"},We=function(){return"FETCH_POSTS_SUCCESS"},Ve=function(e,t){return function(n){return n({type:Je()}),Ie.getAllPosts(t,e).then(function(e){return n(function(e){return{type:We(),payload:e.blogs}}(e))})}};function Qe(e){return!function(e){return void 0!==e&&null!==e}(e)||0===e.length||0===Object.keys(e).length}function Ye(e){return(Ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Xe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ke(e,t){return!t||"object"!==Ye(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ze(e){return(Ze=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $e(e,t){return($e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var et=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Ke(this,Ze(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$e(e,t)}(t,m["Component"]),function(e,t,n){t&&Xe(e.prototype,t),n&&Xe(e,n)}(t,[{key:"componentDidMount",value:function(){Qe(this.props.posts)&&this.props.dispatch(t.initialAction("client"))}},{key:"render",value:function(){var e=this.props,t=e.search,n=e.posts;return p.a.createElement("section",{className:"Blog-container"},p.a.createElement("h1",{className:"Blog-header"},p.a.createElement("strong",{className:"Blog-headerTitle"},"LET’S LEARN ABOUT THE WORLD OF PROGRAMMING")),p.a.createElement(Be,null),t&&p.a.createElement("h2",null,'Buscar por: "',t,'"'),p.a.createElement("main",{className:"Blog-list"},n.map(function(e){return p.a.createElement(Fe,e)})))}}],[{key:"initialAction",value:function(e){return Ve(e,{start:0,end:6})}}]),t}(),tt=Object(d.connect)(function(e){var t=e.blog;return{posts:t.posts,search:t.search}},null)(et),nt=n(27),rt=n.n(nt),ot=n(28),at=n.n(ot),it=n(29);function ct(e){return(ct="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function st(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function lt(e,t){return!t||"object"!==ct(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ut(e){return(ut=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function mt(e,t){return(mt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var pt=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),lt(this,ut(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&mt(e,t)}(t,p.a.PureComponent),function(e,t,n){t&&st(e.prototype,t),n&&st(e,n)}(t,[{key:"render",value:function(){var e=this.props,t=e.language,n=e.value;return p.a.createElement(at.a,{language:t,style:it.okaidia},n)}}]),t}();function ft(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ht=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){t&&ft(e.prototype,t),n&&ft(e,n)}(e,null,[{key:"getAllPosts",value:function(e){return function(e){return fetch("https://raw.githubusercontent.com/njacob1001/post/master/".concat(e,".md"),{method:"GET",headers:{"Content-Type":"text/markdown"},mode:"cors",cache:"default"}).then(function(e){return e.text()}).then(function(e){return console.log(e),e})}(e)}}]),e}(),dt=function(){return"FETCH_POST_REQUEST"},bt=function(){return"FETCH_POST_SUCCESS"},yt=function(e){return function(t){return t({type:dt()}),ht.getAllPosts(e).then(function(e){return t(function(e){return{type:bt(),payload:e}}(e))})}};function gt(){return(gt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var vt=function(e){return p.a.createElement("div",gt({},e,{id:"loading-blog"}),p.a.createElement("div",{className:"Loading-blog"},p.a.createElement("div",{className:"Loading-loader"},p.a.createElement("div",null)),p.a.createElement("div",{className:"Loading-loader"},p.a.createElement("div",null)),p.a.createElement("div",{className:"Loading-loader"},p.a.createElement("div",null))))};function Et(e){return(Et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function wt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function St(e,t){return!t||"object"!==Et(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function kt(e){return(kt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function jt(e,t){return(jt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ot=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),St(this,kt(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&jt(e,t)}(t,p.a.Component),function(e,t,n){t&&wt(e.prototype,t),n&&wt(e,n)}(t,[{key:"componentDidMount",value:function(){Qe(this.props.posts)&&this.props.dispatch(t.initialAction("client"))}},{key:"render",value:function(){var e=this.props.match;return console.log(e.params.id),p.a.createElement("main",{className:"Post-container"},p.a.createElement("article",{className:"Post-wrapper"},this.props.postLoaded?p.a.createElement(rt.a,{className:"Post-body",source:this.props.postLoaded,renderers:{code:pt}}):p.a.createElement(vt,{className:"Full Blog"})),p.a.createElement(h.Link,{to:"/blogs"},"Atras"))}}],[{key:"initialAction",value:function(e){return console.log(e),yt("github-pages-tutorial")}}]),t}(),Pt=[{path:"/",exact:!0,component:ke,key:"workroute"},{path:"/about",exact:!0,component:xe,key:"aboutrute"},{path:"/blogs",exact:!0,component:tt,key:"blogroute"},{path:"/post/:id",component:Object(d.connect)(function(e){return{postLoaded:e.post.post}},null)(Ot),key:"postglogroute"}],Nt=function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement(R,null),p.a.createElement(h.Switch,null,Pt.map(function(e){return p.a.createElement(h.Route,e)})),p.a.createElement(z,null))},xt=function(e,t){var n="Jacob Gonzalez Frontend developer from Colombia",r="Desarrollador web colombiano, frontend developer from colombia freelancer responsive design",o="https://jacobgz.herokuapp.com/",a="website",i="2B303A";return'\n    <!DOCTYPE html>\n    <html lang="en" prefix="og: http://ogp.me/ns#" itemscope itemtype="http://schema.org/Blog">\n      <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n        <meta name="HandheldFriendly" content="true">\n        <meta http-equiv="X-UA-Compatible" content="ie=edge">\n        <title>'.concat(n,'</title>\n        <meta name="description" content="').concat(r,'">\n        <link rel="canonical" href="').concat(o,'">\n        <noscript><p>Ncesita tener habilitado JavaScript para poder visualizar contenido</p></noscript>\n        <meta name="HandheldFriendly" content="true">\n        <meta name="MobileOptimized" content="320">\n        <meta name="theme-color" content="').concat(i,'">\n        <meta name="msapplication-TileColor" content="').concat(i,'">\n        <meta name="msapplication-TileImage" content="').concat(i,'">\n        <meta name="apple-mobile-web-app-capable" content="yes">\n        <meta name="apple-mobile-web-app-status-bar-style" content="default">\n        <link rel="apple-touch-startup-image" href="./assets/img/og-image.jpg">\n        <link rel="apple-touch-icon" href="./assets/img/og-image.jpg">\n        <link rel="author" href="https://plus.google.com/112455610659481296930">\n        <link rel="publisher" href="https://plus.google.com/112455610659481296930">\n        <meta itemprop="name" content="').concat(n,'">\n        <meta itemprop="description" content="').concat(r,'">\n        <meta itemprop="image" content="./assets/img/og-image.jpg">\n        <meta property="og:title" content="').concat(n,'">\n        <meta property="og:type" content="').concat(a,'">\n        <meta property="og:url" content="').concat(o,'">\n        <meta property="og:description" content="').concat(r,'">\n        <meta property="og:image" content="./assets/img/og-image.jpg">\n        <meta name="twitter:card" content="summary_large_image">\n        <meta name="twitter:site" content="@Jacob62213451">\n        <meta name="twitter:title" content="').concat(n,'">\n        <meta name="twitter:description" content="').concat(r,'">\n        <meta name="twitter:creator" content="@Jacob62213451">\n        <meta name="twitter:image:src" content="./assets/img/og-image.jpg">\n        <meta name="theme-color" content="#').concat(i,'">\n        <link rel="manifest" href="./manifest.json">\n        <link rel="shortcut icon" href="./favicon.ico">\n        <link href="./main.css" rel="stylesheet">\n      </head>\n      <body>\n        <div id="root">').concat(e,"</div>\n        <script>window.initialState = ").concat(t,'<\/script>\n        <script type="text/javascript" src="./chunk.vendor.js"><\/script>\n        <script type="text/javascript" src="./main.js"><\/script>\n      </body>\n    </html>')};var _t=n(32).redirectToHTTPS,Ct=process.env.PORT||3e3,Tt=o()();Tt.use(i()()),Tt.use(_t([/localhost:(\d{4})/],[/\/insecure/],301)),Tt.use(o.a.urlencoded({extended:!1})),Tt.use(o.a.json()),Tt.use(o.a.static("public")),Tt.post("/api/post",function(e,t){var n=e.body,r=n.title,o=n.author,a=n.path,i=n.resume,c=n.img,s=n.date,l=n.tags,m=n.category;new u({title:r,author:o,path:a,resume:i,img:c,date:s,tags:l,category:m}).save(function(e,n){if(e)return t.status(400).json({ok:!1,err:e});t.json({ok:!0,post:n})})}),Tt.get("/api/blogs",function(e,t){var n=e.query.start||0,r=e.query.end||3;u.find({}).skip(Number(n)).limit(Number(r)).exec(function(e,n){if(e)return t.status(400).json({ok:!1,err:e});u.countDocuments({},function(e,r){t.json({ok:!0,total:r,blogs:n})})})}),Tt.use(function(e,t,n){var r=function(e){var t=[w.a];return Object(v.createStore)(N,e,v.applyMiddleware.apply(void 0,t))}(),o=Pt.reduce(function(t,n){return Object(h.matchPath)(e.url,n)&&n.component&&n.component.initialAction&&t.push(Promise.resolve(r.dispatch(n.component.initialAction("server")))),t},[]);Promise.all(o).then(function(){var n={},o=r.getState(),a=Object(f.renderToString)(p.a.createElement(b.HelmetProvider,{context:n},p.a.createElement(d.Provider,{store:r},p.a.createElement(h.StaticRouter,{location:e.url,context:n},p.a.createElement(Nt,null)))));n.url?t.redirect(301,n.url):t.send(xt(a,g()(o)))}).catch(function(e){console.log("Error en promesa",e)})}),s.a.connect("mongodb://jacob:jacobgonzalez373222@ds143163.mlab.com:43163/jacob",{useNewUrlParser:!0},function(e,t){if(e)throw e;console.log("Base de datos ONLINE")}),Tt.listen(Ct)}]);