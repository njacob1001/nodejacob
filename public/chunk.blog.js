(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{IXGh:function(e,t,n){"use strict";function r(e){return!function(e){return void 0!==e&&null!==e}(e)||0===e.length||0===Object.keys(e).length}n.d(t,"a",function(){return r})},Lcb4:function(e,t,n){"use strict";n.r(t);var r=n("mXGw"),o=n.n(r),a=n("/m4v"),c=n("DipV");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?f(e):t}(this,l(t).call(this,e))).state={text:"",active:""},n.handleText=n.handleText.bind(f(f(n))),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r["PureComponent"]),function(e,t,n){t&&u(e.prototype,t),n&&u(e,n)}(t,[{key:"handleText",value:function(e){e.preventDefault();var t=e.target.value,n=""!==t?"is-active":"";this.props.updateSearch(t),this.setState({active:n})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Search-container"},o.a.createElement("form",{className:"Search-form ".concat(this.state.active)},o.a.createElement("input",{onFocus:function(e){return e.target.placeholder=""},onBlur:function(e){return e.target.placeholder="write something"},onChange:function(t){return e.handleText(t)},className:"Search-input",type:"text",placeholder:"write something"}),o.a.createElement("button",{className:"Search-button",type:"submit"},o.a.createElement(c.IoIosSearch,{className:"Search-icon ".concat(this.state.active)}))))}}]),t}(),m=Object(a.b)(null,function(e){return{updateSearch:function(t){e({type:"NEW_SEARCH",search:t})}}})(p),h=function(){return o.a.createElement("div",{className:"Bbar-wrapper"},o.a.createElement("div",{className:"Bbar-container"},o.a.createElement("ul",{className:"Bbar-items"},o.a.createElement("li",{className:"Bbar-item"},o.a.createElement("span",null,"All")),o.a.createElement("li",{className:"Bbar-item"},o.a.createElement("span",null,"JavaScript")),o.a.createElement("li",{className:"Bbar-item"},o.a.createElement("span",null,"CSS")),o.a.createElement("li",{className:"Bbar-item"},o.a.createElement("span",null,"HTML")),o.a.createElement("li",{className:"Bbar-item"},o.a.createElement("span",null,"Unity"))),o.a.createElement(m,null)))},b=n("thVU"),y=function(e){var t=e.img,n=e.title,r=e.resume,a=e.tags,c=e.path;return o.a.createElement(b.a,{to:"/post/".concat(c),className:"Blog-card"},o.a.createElement("img",{className:"Blog-ogimage",src:t,alt:n}),o.a.createElement("h2",{className:"Blog-name"},n),o.a.createElement("p",{className:"Blog-pretext"},r),o.a.createElement("div",{className:"Blog-tags"},a.map(function(e){return o.a.createElement("strong",{key:"".concat(e,"tag")},e)})))},d=Object.freeze({BLOG:{POSTS:"blogs"}}),v=n("yaut");function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){t&&g(e.prototype,t),n&&g(e,n)}(e,null,[{key:"getAllPosts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"client";return Object(v.a)(d.BLOG.POSTS,{fetchingFrom:t},e)}}]),e}(),O=function(){return"FETCH_POSTS_REQUEST"},S=function(){return"FETCH_POSTS_SUCCESS"},w=function(e,t){return function(n){return n({type:O()}),E.getAllPosts(t,e).then(function(e){return n(function(e){return{type:S(),payload:e.blogs}}(e))})}},j=n("IXGh");function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),P(this,_(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,r["Component"]),function(e,t,n){t&&T(e.prototype,t),n&&T(e,n)}(t,[{key:"componentDidMount",value:function(){Object(j.a)(this.props.posts)&&this.props.dispatch(t.initialAction("client"))}},{key:"render",value:function(){var e=this.props,t=e.search,n=e.posts;return o.a.createElement("section",{className:"Blog-container"},o.a.createElement("h1",{className:"Blog-header"},o.a.createElement("strong",{className:"Blog-headerTitle"},"LET’S LEARN ABOUT THE WORLD OF PROGRAMMING")),o.a.createElement(h,null),t&&o.a.createElement("h2",null,'Buscar por: "',t,'"'),o.a.createElement("main",{className:"Blog-list"},n.map(function(e){return o.a.createElement(y,e)})))}}],[{key:"initialAction",value:function(e){return w(e,{start:0,end:6})}}]),t}(),k=Object(a.b)(function(e){var t=e.blog;return{posts:t.posts,search:t.search}},null)(C);function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){x(e,t,n[t])})}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R={search:"",posts:[]};n.d(t,"Component",function(){return G}),n.d(t,"reducer",function(){return L});var G=k,L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_SEARCH":return A({},e,{search:t.search});case"FETCH_POSTS_SUCCESS":return A({},e,{posts:t.payload});default:return e}}},yaut:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return c});n("WRm0");var r=n("NWgQ"),o=n.n(r);function a(e){return console.log("LLAMANDO: https://raw.githubusercontent.com/njacob1001/post/master/".concat(e,".md")),fetch("https://raw.githubusercontent.com/njacob1001/post/master/".concat(e,".md"),{method:"GET",headers:{"Content-Type":"text/markdown"},mode:"cors",cache:"default"}).then(function(e){return e.text()}).then(function(e){return console.log("resultado es ".concat(e)),e})}function c(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=n.fetchingFrom,c=void 0===a?"client":a;delete n.fetchFrom,r&&(t=o.a.stringify(r));var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.method,n=void 0===t?"GET":t,r=e.headers,o=void 0===r?{"Content-Type":"application/json"}:r,a=e.body,c=void 0!==a&&a,i={method:n,headers:o,credentials:"include"};c&&(i.body=c);return i}(n),u=function(e,t,n){var r="",o="https://jacobgz.herokuapp.com";return t&&(r="?".concat(t)),"server"===n&&(o="https://jacobgz.herokuapp.com"),"".concat(o,"/api/").concat(e).concat(r)}(e,t,c);return fetch(u,i).then(function(e){return console.log("respuesta: ".concat(e)),e.json()})}}}]);