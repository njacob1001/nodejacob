!function(e){function t(t){for(var r,c,l=t[0],i=t[1],u=t[2],f=0,m=[];f<l.length;f++)c=l[f],o[c]&&m.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(s&&s(t);m.length;)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={1:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,l=document.getElementsByTagName("head")[0],i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=function(e){return c.p+"chunk."+({2:"workpage",3:"aboutpage",4:"blogpage"}[e]||e)+"."+{2:"399b0a9f86327746092a",3:"d9b12f44645987bbabf4",4:"9728f45ff01387e8b2d8"}[e]+".js"}(e),a=function(t){i.onerror=i.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:i})},12e4);i.onerror=i.onload=a,l.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="./",c.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=i;a.push(["EWOq",0]),n()}({EWOq:function(e,t,n){"use strict";n.r(t);var r=n("mXGw"),o=n.n(r),a=n("xARA"),c=n.n(a),l=n("/m4v"),i=n("vtzz"),u=n("7+fG"),s=n("jf7e"),f=n("cnbf"),m=n("iIYa"),p=n("pJpQ");function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(){var e=Object(f.createStore)(h(),Object(p.composeWithDevTools)(Object(f.applyMiddleware)(m.a)));return e.async={},e}();function h(e){return Object(f.combineReducers)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){b(e,t,n[t])})}return e}({root:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:null}},e))}var v=n("thVU"),y=n("/nht");n("dy18");function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var j=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=function(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?O(e):t}(this,w(t).call(this))).state={hamburger:!1},e.handleClick=e.handleClick.bind(O(O(e))),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,r["PureComponent"]),function(e,t,n){t&&E(e.prototype,t),n&&E(e,n)}(t,[{key:"componentDidUpdate",value:function(){console.log(this.state.hamburger)}},{key:"handleClick",value:function(){this.setState({hamburger:!this.state.hamburger}),console.log(this.state.hamburger)}},{key:"render",value:function(){var e=this.state.hamburger?"is-active":"";return o.a.createElement("header",{className:"Header-wrapper"},o.a.createElement("nav",{className:"Header-container"},o.a.createElement(v.a,{to:"/",className:"Header-item Logo"},o.a.createElement("svg",{className:"Header-logo",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 165 165",style:{enableBackground:"new 0 0 165 165"},xmlSpace:"preserve"},o.a.createElement("path",{id:"border-logo",className:"Svg-borderDark is-light",d:"M15.8,53.4v-3.8c0-3.5,1.9-6.7,4.9-8.5L77.6,8.3c3-1.8,6.8-1.8,9.8,0l56.9,32.9c3,1.8,4.9,5,4.9,8.5v65.7c0,3.5-1.8,6.7-4.9,8.5l-56.9,32.9c-3,1.8-6.8,1.8-9.8,0l-56.9-32.9c-3-1.8-4.9-5-4.9-8.5V53.4"})," ",o.a.createElement("path",{id:"letter",className:"Svg-letterDark",d:"M54.9,112.5v-4.4c0-4.7,3.3-6.6,7.3-4.2l15.3,8.8c3,1.7,6.8,1.7,9.8,0l18.7-10.9c3-1.8,4.9-5,4.9-8.5l-0.1-21.6c0-3.5-1.9-6.7-4.9-8.4L87.4,52.5c-3-1.7-6.7-1.7-9.7,0l-10.2,5.8c-3.1,1.7-6.8,1.7-9.8-0.1L53.9,56c-4-2.4-3.9-6.2,0.1-8.5l23.6-13.6c3-1.8,6.8-1.7,9.8,0L122.1,54c3,1.8,4.9,5,4.9,8.5v40.2c0,3.5-1.9,6.7-4.9,8.5l-34.7,20c-3,1.7-6.7,1.7-9.8,0L59.8,121C56.8,119.3,54.9,116,54.9,112.5z"})," ",o.a.createElement("path",{id:"light",className:"Svg-letterLight",d:"M122.1,54L87.4,33.9c-3-1.8-6.8-1.8-9.8,0L54,47.5c-4,2.3-4,6.1-0.1,8.5l3.7,2.2c3,1.8,6.8,1.8,9.8,0.1l10.2-5.8c3-1.7,6.7-1.7,9.7,0l18.6,10.7c1.5,0.9,2.7,2.1,3.6,3.6l16.1-9.3C124.8,56.1,123.6,54.9,122.1,54z"})," "),o.a.createElement("h1",{className:"Visually-hidden"},"Jacob Gonzalez")),o.a.createElement("div",{onClick:this.handleClick,className:"Header-item Menu ".concat(e)},o.a.createElement(y.a,{exact:!0,activeClassName:"is-active",className:"Header-link",to:"/"},"work"),o.a.createElement(y.a,{activeClassName:"is-active",className:"Header-link",to:"/about"},"about"),o.a.createElement(y.a,{activeClassName:"is-active",className:"Header-link",to:"/blog"},"blog")),o.a.createElement("button",{id:"HMenu",onClick:this.handleClick,className:"hamburger hamburger--squeeze ".concat(e)},o.a.createElement("span",{className:"hamburger-box"},o.a.createElement("span",{className:"hamburger-inner"})))))}}]),t}(),N=function(){return o.a.createElement("footer",{className:"Footer-wrapper"},o.a.createElement("div",{className:"Footer-container"},o.a.createElement("span",{className:"Footer-title"},"Follow me: "),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/jacob-gonzalez-210b84166",className:"Footer-link"},o.a.createElement("strong",null,"LinkedIn")),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/njacob1001",className:"Footer-link"},o.a.createElement("strong",null,"GitHub")),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/channel/UCQ-ykK7GU9qDczl7Cb2DpmA",className:"Footer-link"},o.a.createElement("strong",null,"Youtube")),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/jacobdesarrolloweb/",className:"Footer-link"},o.a.createElement("strong",null,"Facebook"))))},P=function(e){var t=e.mode;return o.a.createElement("div",{className:"Load-container ".concat(t)},o.a.createElement("div",{className:"Load-item"}),o.a.createElement("div",{className:"Load-item"}),o.a.createElement("div",{className:"Load-item"}),o.a.createElement("div",{className:"Load-item"}),o.a.createElement("div",{className:"Load-item"}),o.a.createElement("div",{className:"Load-item"}))};function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var F=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=C(this,x(t).call(this,e))).state={Component:null},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,r["PureComponent"]),function(e,t,n){t&&_(e.prototype,t),n&&_(e,n)}(t,[{key:"componentWillMount",value:function(){var e=this;this.state.Component||this.props.moduleProvider().then(function(t){var n=t.Component;return e.setState({Component:n})})}},{key:"render",value:function(){var e=this.state.Component;return o.a.createElement(r.Fragment,null,e?o.a.createElement(e,null):o.a.createElement(P,null))}}]),t}(),H=function(e){var t={};return function(n,r){return t.hasOwnProperty(n)?Promise.resolve(t[n]):r.then(function(r){return t[n]=r,function(e,t,n){e.async[t]=n,e.replaceReducer(h(e.async))}(e,n,r.reducer),r})}}(d),M=function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"DkH1"))},z=function(){return n.e(3).then(n.bind(null,"97eS"))},T=function(){return H("blog",Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"Lcb4")))},D=function(){return o.a.createElement(l.a,{store:d},o.a.createElement(i.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(j,null),o.a.createElement(u.a,null,o.a.createElement(s.a,{path:"/",exact:!0,component:function(){return o.a.createElement(F,{moduleProvider:M})}}),o.a.createElement(s.a,{path:"/about",component:function(){return o.a.createElement(F,{moduleProvider:z})}}),o.a.createElement(s.a,{path:"/blog",component:function(){return o.a.createElement(F,{moduleProvider:T})}})),o.a.createElement(N,null))))};n("h3ov"),n("dtJV");c.a.render(o.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js")},dtJV:function(e,t,n){e.exports=n.p+"assets/img/og-image.jpg"},dy18:function(e,t,n){},h3ov:function(e,t,n){}});