!function(e){function t(t){for(var r,o,c=t[0],s=t[1],i=t[2],u=0,d=[];u<c.length;u++)o=c[u],n[o]&&d.push(n[o][0]),n[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(m&&m(t);d.length;)d.shift()();return l.push.apply(l,i||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],r=!0,c=1;c<a.length;c++){var s=a[c];0!==n[s]&&(r=!1)}r&&(l.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={3:0},l=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise(function(t,r){a=n[e]=[t,r]});t.push(a[2]=r);var l,c=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=function(e){return o.p+"chunk."+({1:"about",2:"blog",4:"post",6:"work"}[e]||e)+".js"}(e),l=function(t){s.onerror=s.onload=null,clearTimeout(i);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+l+")");o.type=r,o.request=l,a[1](o)}n[e]=void 0}};var i=setTimeout(function(){l({type:"timeout",target:s})},12e4);s.onerror=s.onload=l,c.appendChild(s)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="./",o.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var m=s;l.push(["EWOq",0]),a()}({EWOq:function(e,t,a){"use strict";a.r(t);var r=a("mXGw"),n=a.n(r),l=a("xARA"),o=a("/m4v"),c=a("Zlsc"),s=a("vtzz"),i=a("7+fG"),m=a("jf7e"),u=a("thVU"),d=a("/nht");a("dy18");var p=class extends r.PureComponent{constructor(){super(),this.state={hamburger:!1},this.handleClick=this.handleClick.bind(this)}componentDidUpdate(){console.log(this.state.hamburger)}handleClick(){this.setState({hamburger:!this.state.hamburger}),console.log(this.state.hamburger)}render(){const e=this.state.hamburger?"is-active":"";return n.a.createElement("header",{id:"header",className:"Header-wrapper"},n.a.createElement("nav",{className:"Header-container"},n.a.createElement(u.a,{to:"/",className:"Header-item Logo"},n.a.createElement("svg",{className:"Header-logo",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 165 165",style:{enableBackground:"new 0 0 165 165"},xmlSpace:"preserve"},n.a.createElement("path",{id:"border-logo",className:"Svg-borderDark is-light",d:"M15.8,53.4v-3.8c0-3.5,1.9-6.7,4.9-8.5L77.6,8.3c3-1.8,6.8-1.8,9.8,0l56.9,32.9c3,1.8,4.9,5,4.9,8.5v65.7c0,3.5-1.8,6.7-4.9,8.5l-56.9,32.9c-3,1.8-6.8,1.8-9.8,0l-56.9-32.9c-3-1.8-4.9-5-4.9-8.5V53.4"})," ",n.a.createElement("path",{id:"letter",className:"Svg-letterDark",d:"M54.9,112.5v-4.4c0-4.7,3.3-6.6,7.3-4.2l15.3,8.8c3,1.7,6.8,1.7,9.8,0l18.7-10.9c3-1.8,4.9-5,4.9-8.5l-0.1-21.6c0-3.5-1.9-6.7-4.9-8.4L87.4,52.5c-3-1.7-6.7-1.7-9.7,0l-10.2,5.8c-3.1,1.7-6.8,1.7-9.8-0.1L53.9,56c-4-2.4-3.9-6.2,0.1-8.5l23.6-13.6c3-1.8,6.8-1.7,9.8,0L122.1,54c3,1.8,4.9,5,4.9,8.5v40.2c0,3.5-1.9,6.7-4.9,8.5l-34.7,20c-3,1.7-6.7,1.7-9.8,0L59.8,121C56.8,119.3,54.9,116,54.9,112.5z"})," ",n.a.createElement("path",{id:"light",className:"Svg-letterLight",d:"M122.1,54L87.4,33.9c-3-1.8-6.8-1.8-9.8,0L54,47.5c-4,2.3-4,6.1-0.1,8.5l3.7,2.2c3,1.8,6.8,1.8,9.8,0.1l10.2-5.8c3-1.7,6.7-1.7,9.7,0l18.6,10.7c1.5,0.9,2.7,2.1,3.6,3.6l16.1-9.3C124.8,56.1,123.6,54.9,122.1,54z"})," "),n.a.createElement("h2",{className:"Visually-hidden"},"Jacob Gonzalez")),n.a.createElement("div",{onClick:this.handleClick,className:`Header-item Menu ${e}`},n.a.createElement(d.a,{exact:!0,activeClassName:"is-active",className:"Header-link",to:"/"},"work"),n.a.createElement(d.a,{activeClassName:"is-active",className:"Header-link",to:"/about"},"about"),n.a.createElement(d.a,{activeClassName:"is-active",className:"Header-link",to:"/blogs"},"blog")),n.a.createElement("button",{id:"HMenu",onClick:this.handleClick,className:`hamburger hamburger--squeeze ${e}`},n.a.createElement("span",{className:"hamburger-box"},n.a.createElement("span",{className:"hamburger-inner"})))))}};var h=()=>n.a.createElement("footer",{className:"Footer-wrapper"},n.a.createElement("div",{className:"Footer-container"},n.a.createElement("span",{className:"Footer-title"},"Follow me: "),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/jacob-gonzalez-210b84166",className:"Footer-link"},n.a.createElement("strong",null,"LinkedIn")),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/njacob1001",className:"Footer-link"},n.a.createElement("strong",null,"GitHub")),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/channel/UCQ-ykK7GU9qDczl7Cb2DpmA",className:"Footer-link"},n.a.createElement("strong",null,"Youtube")),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/jacobdesarrolloweb/",className:"Footer-link"},n.a.createElement("strong",null,"Facebook")))),b=a("wq4O"),f=class extends r.PureComponent{constructor(e){super(e),this.state={Component:null}}componentWillMount(){this.state.Component||this.props.moduleProvider().then(({Component:e})=>this.setState({Component:e}))}render(){const{Component:e}=this.state,{match:t}=this.props||null;return n.a.createElement(r.Fragment,null,e?n.a.createElement(e,{match:t}):n.a.createElement(b.a,{className:t?"Full Blog":"Full"}))}},g=a("cnbf"),v=a("iIYa"),E=a("pJpQ");function w(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var y=(()=>{const e=Object(g.createStore)(k(),Object(E.composeWithDevTools)(Object(g.applyMiddleware)(v.a)));return e.async={},e})();function k(e){return Object(g.combineReducers)(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){w(e,t,a[t])})}return e}({root:(e=null)=>e},e))}const N=(e=>{const t={};return(a,r)=>t.hasOwnProperty(a)?Promise.resolve(t[a]):r.then(r=>(t[a]=r,function(e,t,a){e.async[t]=a,e.replaceReducer(k(e.async))}(e,a,r.reducer),r))})(y),O=()=>a.e(6).then(a.bind(null,"DkH1")),j=()=>a.e(1).then(a.bind(null,"97eS")),P=()=>N("blog",Promise.all([a.e(0),a.e(2)]).then(a.bind(null,"Lcb4"))),x=()=>N("post",Promise.all([a.e(0),a.e(4)]).then(a.bind(null,"3hrQ"))),C={};var L=()=>n.a.createElement(c.HelmetProvider,{context:C},n.a.createElement(o.a,{store:y},n.a.createElement(s.a,null,n.a.createElement(n.a.Fragment,null,n.a.createElement(p,null),n.a.createElement(i.a,null,n.a.createElement(m.a,{path:"/",exact:!0,component:()=>n.a.createElement(f,{moduleProvider:O})}),n.a.createElement(m.a,{path:"/about",component:()=>n.a.createElement(f,{moduleProvider:j})}),n.a.createElement(m.a,{path:"/blogs",component:()=>n.a.createElement(f,{moduleProvider:P})}),n.a.createElement(m.a,{path:"/post/:id",component:({match:e})=>n.a.createElement(f,{match:e,moduleProvider:x})})),n.a.createElement(h,null)))));a("h3ov"),a("dtJV"),a("elt4");Object(l.hydrate)(n.a.createElement(L,null),document.getElementById("root"))},dtJV:function(e,t,a){e.exports=a.p+"assets/img/og-image.jpg"},dy18:function(e,t,a){},elt4:function(e,t,a){e.exports=a.p+"robots.txt"},h3ov:function(e,t,a){},wq4O:function(e,t,a){"use strict";var r=a("mXGw"),n=a.n(r);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}t.a=(e=>n.a.createElement("div",l({},e,{id:"loading-blog"}),n.a.createElement("div",{className:"Loading-blog"},n.a.createElement("div",{className:"Loading-loader"},n.a.createElement("div",null)),n.a.createElement("div",{className:"Loading-loader"},n.a.createElement("div",null)),n.a.createElement("div",{className:"Loading-loader"},n.a.createElement("div",null)))))}});