(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3hrQ":function(t,e,n){"use strict";n.r(e);var o=n("mXGw"),r=n.n(o),c=n("/m4v"),u=n("thVU"),i=n("LO0j"),a=n.n(i),f=n("qNcN"),l=n.n(f),s=n("fMuL");function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,h(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,r.a.PureComponent),function(t,e,n){e&&y(t.prototype,e),n&&y(t,n)}(e,[{key:"render",value:function(){var t=this.props,e=t.language,n=t.value;return r.a.createElement(l.a,{language:e,style:s.okaidia},n)}}]),e}(),v=n("yaut");function g(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var O=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){e&&g(t.prototype,e),n&&g(t,n)}(t,null,[{key:"getAllPosts",value:function(t){return Object(v.b)(t)}}]),t}(),w=function(){return"FETCH_POST_REQUEST"},j=function(){return"FETCH_POST_SUCCESS"},P=function(t){return function(e){return e({type:w()}),O.getAllPosts(t).then(function(t){return e(function(t){return{type:j(),payload:t}}(t))})}},S=n("IXGh"),E=n("wq4O");function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function T(t,e){return!e||"object"!==_(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function N(t,e){return(N=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var F=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),T(this,C(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&N(t,e)}(e,r.a.Component),function(t,e,n){e&&k(t.prototype,e),n&&k(t,n)}(e,[{key:"componentDidMount",value:function(){Object(S.a)(this.props.posts)&&this.props.dispatch(e.initialAction("client"))}},{key:"render",value:function(){var t=this.props.match;return console.log(t.params.id),r.a.createElement("main",{className:"Post-container"},r.a.createElement("article",{className:"Post-wrapper"},this.props.postLoaded?r.a.createElement(a.a,{className:"Post-body",source:this.props.postLoaded,renderers:{code:m}}):r.a.createElement(E.a,{className:"Full Blog"})),r.a.createElement(u.a,{to:"/blogs"},"Atras"))}}],[{key:"initialAction",value:function(t){return console.log(t),P("github-pages-tutorial")}}]),e}(),A=Object(c.b)(function(t){return{postLoaded:t.post.post}},null)(F);function G(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var L={post:""};n.d(e,"Component",function(){return x}),n.d(e,"reducer",function(){return R});var x=A,R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_POST_SUCCESS":return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){G(t,e,n[e])})}return t}({},t,{post:e.payload});default:return t}}},IXGh:function(t,e,n){"use strict";function o(t){return!function(t){return void 0!==t&&null!==t}(t)||0===t.length||0===Object.keys(t).length}n.d(e,"a",function(){return o})},yaut:function(t,e,n){"use strict";n.d(e,"b",function(){return c}),n.d(e,"a",function(){return u});n("WRm0");var o=n("NWgQ"),r=n.n(o);function c(t){return fetch("https://raw.githubusercontent.com/njacob1001/post/master/".concat(t,".md"),{method:"GET",headers:{"Content-Type":"text/markdown"},mode:"cors",cache:"default"}).then(function(t){return t.text()}).then(function(t){return console.log("resultado es ".concat(t)),t})}function u(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=n.fetchingFrom,u=void 0===c?"client":c;delete n.fetchFrom,o&&(e=r.a.stringify(o));var i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.method,n=void 0===e?"GET":e,o=t.headers,r=void 0===o?{"Content-Type":"application/json"}:o,c=t.body,u=void 0!==c&&c,i={method:n,headers:r,credentials:"include"};u&&(i.body=u);return i}(n),a=function(t,e,n){var o="",r="https://jacobgz.herokuapp.com";return e&&(o="?".concat(e)),"server"===n&&(r="https://jacobgz.herokuapp.com"),"".concat(r,"/api/").concat(t).concat(o)}(t,e,u);return fetch(a,i).then(function(t){return console.log("respuesta: ".concat(t)),t.json()})}}}]);