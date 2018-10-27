"use strict";var precacheConfig=[["./assets/img/desktop-deopies.png","ee70dbb737dae37287bc3982bbe4fd0e"],["./assets/img/desktop-grimms.png","7491fd3b9313493e1a23113e17c7253e"],["./assets/img/desktop-marathons.png","8ca38eb179f34117f71cf77ee5bfe998"],["./assets/img/desktop-portfolio.png","a39f05675198f021dfe708acd1561856"],["./assets/img/desktop-wok.png","b5380b4b72691e2a57636dc1e290dd22"],["./assets/img/kineckt.png","62e403ed45002b1041d44505c18b7a9e"],["./assets/img/movile-claro.png","9f27cabeca74647cce22999a2b0ccf1f"],["./assets/img/movile-escape.png","a6977700acc522b2e39f2d77037f0a28"],["./assets/img/movile-grimms.png","9f21d74870a02ae44d0a5702a17da8c7"],["./assets/img/movile-marathons.png","e424a94f8108dec3ac2b08d7aa09d338"],["./assets/img/movile-portfolio.png","d792773c0439fb7d139b1090ec1de720"],["./assets/img/movile-wok.png","635cde33033c9983471b69ef749db15f"],["./assets/img/og-image.jpg","19c986f67fed6cf79037896c13b69dbb"],["./chunk.about.js","c09c55d30123010a8e0001ef789f2b08"],["./chunk.about.js.gz","df377e3d4569dca468e0845a4d5ec9fa"],["./chunk.blog.js","4738ff08cfa66b818254c824e074dcdf"],["./chunk.blog.js.gz","7b2859ca7fd641377166959ed66d6544"],["./chunk.post.js","3f7a3b185e37ac5a107583f9d268c275"],["./chunk.vendor.js","db6790d0539221d80ace8584c31441e0"],["./chunk.vendor.js.gz","bba79aef6202b9cd0aabf843e09b8657"],["./chunk.work.js","33e5dc6948a5526888f9e1fff2427c48"],["./chunk.work.js.gz","a123acc69e091f764e0c05bb47e9db03"],["./favicon.ico","6c3a27e60d56c89d43ac8f91747c3c86"],["./icon_1024x1024.png","fe67d1c78094fcbd5b58efc1a54957f3"],["./icon_128x128.png","eb55b362e48857f7b9d2561c0f06f85a"],["./icon_16x16.png","29876ed5393ca5f11df4ee5f43e388aa"],["./icon_192x192.png","d9628b73b335b1a7d87aaf0d19ed3726"],["./icon_256x256.png","ebe2e4a5ba857ca6c9a30f1fb17e65ea"],["./icon_32x32.png","805247b358133b7ebeef283f75f4a286"],["./icon_384x384.png","1e82d53efa18d68408487d7b498a4e7f"],["./icon_512x512.png","162d72f8c4bfbb671566367ef6fe39d2"],["./icon_64x64.png","9bd531cfb4ffb97578b452b92d635d9d"],["./icon_96x96.png","fe3205be25415f5bd4f8705b90a2b396"],["./index.html","4f9191754acb32533ce33dd080c24cb0"],["./main.css","9108c4d5d140a6ca1c7c5ecdc110bd3a"],["./main.css.gz","66dff84782de229cb2ae9a0e02ece9c4"],["./main.js","2118a9ad630e8b23bfac92b727c6a120"],["./main.js.gz","89c0ca40cb6ee78e38c2370d5d0990e6"],["./manifest.json","ed8d75658c8cc1db4c08aaecf959a7b6"]],cacheName="sw-precache-v3-jacob-gonzalez-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=n),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,a,t){var c=new URL(e);return t&&c.pathname.match(t)||(c.search+=(c.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var a=new URL(n).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,n){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],a=e[1],t=new URL(n,self.location),c=createCacheKey(t,hashParamName,a,/\.\w{8}\./);return[t.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!n.has(a)){var t=new Request(a,{credentials:"same-origin"});return fetch(t).then(function(n){if(!n.ok)throw new Error("Request for "+a+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(a,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!n.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),n=urlsToCacheKeys.has(a));var t="C:UsersjacobDesktop\react-projectsjacobcodepublicindex.html";!n&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(a=new URL(t,self.location).toString(),n=urlsToCacheKeys.has(a)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});