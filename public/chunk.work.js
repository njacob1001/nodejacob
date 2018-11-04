(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/zN2":function(e,t,n){e.exports=n.p+"assets/img/desktop-deopies.png"},"3Oo/":function(e,t,n){e.exports=n.p+"assets/img/movile-claro.png"},DkH1:function(e,t,n){"use strict";n.r(t);var a=n("mXGw"),o=n.n(a),s=function(){return o.a.createElement("section",{className:"Presentation-wrapper"},o.a.createElement("div",{className:"Presentation-container"},o.a.createElement("h1",{className:"Presentation-title"},"Multimedia Engineer"),o.a.createElement("p",{className:"Presentation-subtext"},"I am specialized on clean code and the best performance on the web"),o.a.createElement("h3",{className:"Presentation-name"},"Jacob González")))},i=function(e){var t=e.isShow,n=e.isFixed,a=e.title,s=e.text,i=e.tags;return o.a.createElement("article",{className:"Category-container ".concat(t?"is-show":"no-show"," ").concat(n?"is-fixed":"no-fixed"," ")},o.a.createElement("h2",{className:"Category-title"},a),o.a.createElement("p",{className:"Category-text"},s),o.a.createElement("div",{className:"Category-tags"},i.map(function(e){return o.a.createElement("span",{className:"Category-item",key:e},e)})))},r=function(e){var t=e.position,n=e.lastName,a=e.imgs,s=e.name;return o.a.createElement("figure",{className:"Work-container ".concat(n)},o.a.createElement("span",{className:"Work-numerator"},t),a.map(function(e,t){return o.a.createElement("img",{className:0===t?"Work-desktop":"Work-movile",key:e.alt,src:e.src,alt:e.alt})}),o.a.createElement("figcaption",{className:"Work-name"},s))},c=n("kgC4"),m=n.n(c),l=n("pU+/"),p=n.n(l),u=n("joiN"),d=n.n(u),g=n("kqTw"),f=n.n(g),h=n("DzHW"),w=n.n(h),v=n("Sv6U"),y=n.n(v),b=n("In2B"),E=n.n(b),k=n("jKtV"),j=n.n(k),P=[{id:"grimms",name:"grimms kindergarten",images:[{src:p.a,alt:"Grimms desktop"},{src:m.a,alt:"Grimms movile"}]},{id:"wok",name:"wok restaurant",images:[{src:f.a,alt:"wok desktop"},{src:d.a,alt:"Grimms movile"}]},{id:"marathons",name:"About Marathons",images:[{src:y.a,alt:"marathons desktop"},{src:w.a,alt:"marathons movile"}]},{id:"portfolio",name:"my first portfolio",images:[{src:j.a,alt:"Grimms desktop"},{src:E.a,alt:"Grimms movile"}]}],N=n("/zN2"),x=n.n(N),S=n("T7pC"),z=n.n(S),C=n("V3fx"),V=n.n(C),O=n("3Oo/"),R=n.n(O),W=[{id:"escape",name:"escape videogame",images:[{src:V.a,alt:"escape movile videogame"}]},{id:"deopies",name:"Woman Runner (Colombia)",images:[{src:x.a,alt:"deoPies videogame"},{src:z.a,alt:"kineck"}]},{id:"claro",name:"Claro movile",images:[{src:R.a,alt:"claro videogame"}]}];function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var I=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=function(e,t){return!t||"object"!==G(t)&&"function"!=typeof t?B(e):t}(this,_(t).call(this))).state={web:!1,games:!1,webShow:!1,gamesShow:!1},e.webProjects=o.a.createRef(),e.gameProjects=o.a.createRef(),e.handleViews=e.handleViews.bind(B(B(e))),e.handleResize=e.handleResize.bind(B(B(e))),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(t,a["PureComponent"]),function(e,t,n){t&&L(e.prototype,t),n&&L(e,n)}(t,[{key:"componentDidMount",value:function(){window.innerWidth>992&&window.addEventListener("scroll",this.handleViews),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleViews),window.removeEventListener("resize",this.handleResize)}},{key:"handleResize",value:function(){window.innerWidth>992?window.addEventListener("scroll",this.handleViews):window.removeEventListener("scroll",this.handleViews)}},{key:"handleViews",value:function(){var e,t,n=document,a=this.webProjects.current,o=this.gameProjects.current,s=n.getElementById("border-logo"),i=n.querySelector(".is-light"),r=n.querySelector(".is-dark"),c=a.getBoundingClientRect(),m=o.getBoundingClientRect(),l=c.top,p=c.height,u=m.top,d=p+l,g=m.height+u,f=l<=400,h=u<=400;l<=0&&!r?(s.classList.remove("is-light"),s.classList.add("is-dark")):l>=0&&!i&&(s.classList.remove("is-dark"),s.classList.add("is-light")),e=l<=0&&d>=0,t=u<=0&&g>=0,this.setState({web:e,games:t,webShow:f,gamesShow:h})}},{key:"render",value:function(){return o.a.createElement("section",{className:"Project-container"},o.a.createElement("div",{ref:this.webProjects,className:"Project-category",id:"web"},o.a.createElement("div",{className:"Project-header"},o.a.createElement(i,{isFixed:this.state.web,isShow:this.state.webShow,title:"responsive, single pages websites",text:"Improving the user experience my websites are made as single page applications, as long as is necesary, with clean code and the best news feautres on the web.",tags:["html5","css3","js"]})),o.a.createElement("div",{className:"Project-demos"},P.map(function(e,t){return o.a.createElement(r,{key:e.id,position:t,imgs:e.images,name:e.name})}))),o.a.createElement("div",{ref:this.gameProjects,className:"Project-category",id:"games"},o.a.createElement("div",{className:"Project-header"},o.a.createElement(i,{isFixed:this.state.games,isShow:this.state.gamesShow,shortName:"games",title:"Video Games, Benefist for Companys",text:"Using videogmaes you can attract more people, this is so beneficist to comanyes for inprove the sells",tags:["Unity","C#","Maya3d"]})),o.a.createElement("div",{className:"Project-demos"},W.map(function(e,t){return o.a.createElement(r,{key:e.id,position:t,imgs:e.images,name:e.name})}))))}}]),t}(),T=n("Vw49"),D=function(){return o.a.createElement("main",null,o.a.createElement(T.a,{canocnical:"https://jacobgz.herokuapp.com",title:"Jacob Gonzalez Ingeniero multimedia",description:"Desarrollador javascript colombiano, jacob gonzalez",type:"website",image:"/assets/img/og-image.jpg"}),o.a.createElement(s,null),o.a.createElement(I,null))};n.d(t,"Component",function(){return q});var q=D},DzHW:function(e,t,n){e.exports=n.p+"assets/img/movile-marathons.png"},In2B:function(e,t,n){e.exports=n.p+"assets/img/movile-portfolio.png"},Sv6U:function(e,t,n){e.exports=n.p+"assets/img/desktop-marathons.png"},T7pC:function(e,t,n){e.exports=n.p+"assets/img/kineckt.png"},V3fx:function(e,t,n){e.exports=n.p+"assets/img/movile-escape.png"},Vw49:function(e,t,n){"use strict";var a=n("mXGw"),o=n.n(a),s=n("Zlsc"),i=n.n(s);t.a=function(e){var t=e.canonical,n=e.title,a=e.description,s=e.type,r=e.image;return o.a.createElement(i.a,null,o.a.createElement("link",{rel:"canonical",href:t}),o.a.createElement("title",null,n),o.a.createElement("meta",{name:"description",content:a}),o.a.createElement("meta",{itemProp:"name",content:n}),o.a.createElement("meta",{itemProp:"description",content:a}),o.a.createElement("meta",{itemProp:"image",content:r}),o.a.createElement("meta",{property:"og:title",content:n}),o.a.createElement("meta",{property:"og:type",content:s}),o.a.createElement("meta",{property:"og:url",content:t}),o.a.createElement("meta",{property:"og:description",content:a}),o.a.createElement("meta",{name:"twitter:title",content:n}),o.a.createElement("meta",{name:"twitter:description",content:a}),o.a.createElement("meta",{name:"twitter:image:src",content:r}))}},jKtV:function(e,t,n){e.exports=n.p+"assets/img/desktop-portfolio.png"},joiN:function(e,t,n){e.exports=n.p+"assets/img/movile-wok.png"},kgC4:function(e,t,n){e.exports=n.p+"assets/img/movile-grimms.png"},kqTw:function(e,t,n){e.exports=n.p+"assets/img/desktop-wok.png"},"pU+/":function(e,t,n){e.exports=n.p+"assets/img/desktop-grimms.png"}}]);