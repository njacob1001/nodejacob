!function(e){function t(t){for(var r,l,c=t[0],i=t[1],u=t[2],f=0,m=[];f<c.length;f++)l=c[f],o[l]&&m.push(o[l][0]),o[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(s&&s(t);m.length;)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={3:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,c=document.getElementsByTagName("head")[0],i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=function(e){return l.p+"chunk."+({1:"about",2:"blog",4:"post",6:"work"}[e]||e)+".js"}(e),a=function(t){i.onerror=i.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,l=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:i})},12e4);i.onerror=i.onload=a,c.appendChild(i)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="./",l.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=i;a.push(["EWOq",0]),n()}({EWOq:function(e,t,n){"use strict";n.r(t);var r=n("mXGw"),o=n.n(r),a=n("xARA"),l=n("/m4v"),c=n("Zlsc"),i=n("vtzz"),u=n("7+fG"),s=n("jf7e"),f=n("thVU"),m=n("/nht");n("dy18");function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var v=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=function(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?y(e):t}(this,d(t).call(this))).state={hamburger:!1},e.handleClick=e.handleClick.bind(y(y(e))),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r["PureComponent"]),function(e,t,n){t&&b(e.prototype,t),n&&b(e,n)}(t,[{key:"handleClick",value:function(){this.setState({hamburger:!this.state.hamburger})}},{key:"render",value:function(){var e=this.state.hamburger?"is-active":"";return o.a.createElement("header",{id:"header",className:"Header-wrapper"},o.a.createElement("nav",{className:"Header-container"},o.a.createElement(f.a,{to:"/",className:"Header-item Logo"},o.a.createElement("svg",{className:"Header-logo",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 165 165",style:{enableBackground:"new 0 0 165 165"},xmlSpace:"preserve"},o.a.createElement("path",{id:"border-logo",className:"Svg-borderDark is-light",d:"M15.8,53.4v-3.8c0-3.5,1.9-6.7,4.9-8.5L77.6,8.3c3-1.8,6.8-1.8,9.8,0l56.9,32.9c3,1.8,4.9,5,4.9,8.5v65.7c0,3.5-1.8,6.7-4.9,8.5l-56.9,32.9c-3,1.8-6.8,1.8-9.8,0l-56.9-32.9c-3-1.8-4.9-5-4.9-8.5V53.4"})," ",o.a.createElement("path",{id:"letter",className:"Svg-letterDark",d:"M54.9,112.5v-4.4c0-4.7,3.3-6.6,7.3-4.2l15.3,8.8c3,1.7,6.8,1.7,9.8,0l18.7-10.9c3-1.8,4.9-5,4.9-8.5l-0.1-21.6c0-3.5-1.9-6.7-4.9-8.4L87.4,52.5c-3-1.7-6.7-1.7-9.7,0l-10.2,5.8c-3.1,1.7-6.8,1.7-9.8-0.1L53.9,56c-4-2.4-3.9-6.2,0.1-8.5l23.6-13.6c3-1.8,6.8-1.7,9.8,0L122.1,54c3,1.8,4.9,5,4.9,8.5v40.2c0,3.5-1.9,6.7-4.9,8.5l-34.7,20c-3,1.7-6.7,1.7-9.8,0L59.8,121C56.8,119.3,54.9,116,54.9,112.5z"})," ",o.a.createElement("path",{id:"light",className:"Svg-letterLight",d:"M122.1,54L87.4,33.9c-3-1.8-6.8-1.8-9.8,0L54,47.5c-4,2.3-4,6.1-0.1,8.5l3.7,2.2c3,1.8,6.8,1.8,9.8,0.1l10.2-5.8c3-1.7,6.7-1.7,9.7,0l18.6,10.7c1.5,0.9,2.7,2.1,3.6,3.6l16.1-9.3C124.8,56.1,123.6,54.9,122.1,54z"})," "),o.a.createElement("h2",{className:"Visually-hidden"},"Jacob Gonzalez")),o.a.createElement("div",{onClick:this.handleClick,className:"Header-item Menu ".concat(e)},o.a.createElement(m.a,{exact:!0,activeClassName:"is-active",className:"Header-link",to:"/"},"work"),o.a.createElement(m.a,{activeClassName:"is-active",className:"Header-link",to:"/about"},"about"),o.a.createElement(m.a,{activeClassName:"is-active",className:"Header-link",to:"/blogs"},"blog")),o.a.createElement("button",{id:"HMenu",onClick:this.handleClick,className:"hamburger hamburger--squeeze ".concat(e)},o.a.createElement("span",{className:"hamburger-box"},o.a.createElement("span",{className:"hamburger-inner"})))))}}]),t}(),g=function(){return o.a.createElement("footer",{className:"Footer-wrapper"},o.a.createElement("div",{className:"Footer-container"},o.a.createElement("span",{className:"Footer-title"},"Follow me: "),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/jacob-gonzalez-210b84166",className:"Footer-link"},o.a.createElement("strong",null,"LinkedIn")),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/njacob1001",className:"Footer-link"},o.a.createElement("strong",null,"GitHub")),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/channel/UCQ-ykK7GU9qDczl7Cb2DpmA",className:"Footer-link"},o.a.createElement("strong",null,"Youtube")),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/jacobdesarrolloweb/",className:"Footer-link"},o.a.createElement("strong",null,"Facebook"))))},E=n("wq4O");function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var N=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=k(this,j(t).call(this,e))).state={Component:null},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,r["PureComponent"]),function(e,t,n){t&&O(e.prototype,t),n&&O(e,n)}(t,[{key:"componentWillMount",value:function(){var e=this;this.state.Component||this.props.moduleProvider().then(function(t){var n=t.Component;return e.setState({Component:n})})}},{key:"render",value:function(){var e=this.state.Component,t=(this.props||null).match;return o.a.createElement(r.Fragment,null,e?o.a.createElement(e,{match:t}):o.a.createElement(E.a,{className:t?"Full Blog":"Full"}))}}]),t}(),S=n("cnbf"),_=n("iIYa"),C=n("pJpQ");function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=function(){var e=Object(S.createStore)(F(),Object(C.composeWithDevTools)(Object(S.applyMiddleware)(_.a)));return e.async={},e}();function F(e){return Object(S.combineReducers)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){x(e,t,n[t])})}return e}({root:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:null}},e))}var H=function(e){var t={};return function(n,r){return t.hasOwnProperty(n)?Promise.resolve(t[n]):r.then(function(r){return t[n]=r,function(e,t,n){e.async[t]=n,e.replaceReducer(F(e.async))}(e,n,r.reducer),r})}}(L),M=function(){return n.e(6).then(n.bind(null,"DkH1"))},z=function(){return n.e(1).then(n.bind(null,"97eS"))},T=function(){return H("blog",Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"Lcb4")))},q=function(){return H("post",Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"3hrQ")))},D={},G=function(){return o.a.createElement(c.HelmetProvider,{context:D},o.a.createElement(l.a,{store:L},o.a.createElement(i.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(v,null),o.a.createElement(u.a,null,o.a.createElement(s.a,{path:"/",exact:!0,component:function(){return o.a.createElement(N,{moduleProvider:M})}}),o.a.createElement(s.a,{path:"/about",component:function(){return o.a.createElement(N,{moduleProvider:z})}}),o.a.createElement(s.a,{path:"/blogs",component:function(){return o.a.createElement(N,{moduleProvider:T})}}),o.a.createElement(s.a,{path:"/post/:id",component:function(e){var t=e.match;return o.a.createElement(N,{match:t,moduleProvider:q})}})),o.a.createElement(g,null)))))};n("h3ov"),n("dtJV"),n("elt4");Object(a.hydrate)(o.a.createElement(G,null),document.getElementById("root"))},dtJV:function(e,t,n){e.exports=n.p+"assets/img/og-image.jpg"},dy18:function(e,t,n){},elt4:function(e,t,n){e.exports=n.p+"robots.txt"},h3ov:function(e,t,n){},wq4O:function(e,t,n){"use strict";var r=n("mXGw"),o=n.n(r);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.a=function(e){return o.a.createElement("div",a({},e,{id:"loading-blog"}),o.a.createElement("div",{className:"Loading-blog"},o.a.createElement("div",{className:"Loading-loader"},o.a.createElement("div",null)),o.a.createElement("div",{className:"Loading-loader"},o.a.createElement("div",null)),o.a.createElement("div",{className:"Loading-loader"},o.a.createElement("div",null))))}}});