!function(e){var n={};function t(o){if(n[o])return n[o].exports;var s=n[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)t.d(o,s,function(n){return e[n]}.bind(null,s));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="./",t(t.s="9/Ks")}({"9/Ks":function(e,n){var t=["./","./main.js","./chunk.vendor.js","./chunk.about.js","./chunk.post.js","./chunk.work.js","./chunk.blog.js","./manifest.json","./sw.js","_redirect","./main.css","./favicon.ico","./assets/img/og-image.jpg","./icon_16x16.png","./icon_32x32.png","./icon_48x48.png","./icon_64x64.png","./icon_96x96.png","./icon_128x128.png","./icon_192x192.png","./icon_256x256.png","./icon_384x384.png","./icon_512x512.png","./assets/img/desktop-deopies.png","./assets/img/desktop-grimms.png","./assets/img/desktop-marathons.png","./assets/img/desktop-portfolio.png","./assets/img/desktop-wok.png","./assets/img/kineckt.png","./assets/img/movile-claro.png","./assets/img/movile-escape.png","./assets/img/movile-grimms.png","./assets/img/movile-marathons.png","./assets/img/movile-wok.png"];self.addEventListener("install",function(e){e.waitUntil(caches.open("cache-jacob-v11").then(function(e){return e.addAll(t)}).catch(function(e){return console.log("fallo registro de cache",e)}))}),self.addEventListener("activate",function(e){var n=["cache-jacob-v11"];e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(-1===n.indexOf(e))return console.log("se elimino: ".concat(e)),caches.delete(e)}))}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){e.respondWith(fetch(e.request).catch(function(){return caches.match(e.request)}))})}});