"use strict";var precacheConfig=[["/Dr-Fisher/index.html","ff5f42ee1ce74d6d3959e56b233ae8c9"],["/Dr-Fisher/static/css/main.a19d6c14.css","0580364347715c6842598013da98c8d4"],["/Dr-Fisher/static/js/main.cf888e80.js","aadb9c7e664ba5191f15d9d28ffd2d75"],["/Dr-Fisher/static/media/barbecue.80439fca.png","80439fca1601709ee306e264cbf2eb34"],["/Dr-Fisher/static/media/chilii.ff71eb07.png","ff71eb0779047f860485d1dcdaee0bc7"],["/Dr-Fisher/static/media/jankes.1d9e0db0.png","1d9e0db0f628730b8dc5c637a0321bf0"],["/Dr-Fisher/static/media/karo.2360855b.png","2360855b127ee5e924dfaf003a6fcd7e"],["/Dr-Fisher/static/media/królewski.30310fd0.png","30310fd09f86e64461bd1e0c3ddc5bbd"],["/Dr-Fisher/static/media/logo.db0f6a9f.png","db0f6a9f2060b40c121f5b9a4dbb6c0a"],["/Dr-Fisher/static/media/logoInletta.054ed660.png","054ed66007f43837ce202d561da72662"],["/Dr-Fisher/static/media/olej.57198b55.png","57198b55e133b7430ce22297975d45e5"],["/Dr-Fisher/static/media/papryka.5d5980a9.png","5d5980a9c90cc3059754c65a5f298f78"],["/Dr-Fisher/static/media/pomidory.fe20ab3c.png","fe20ab3c5839b0a2b8b83cfdc7126d1f"],["/Dr-Fisher/static/media/sledzWOleju.cd27aad9.png","cd27aad9a091618cd2940c28c8480058"],["/Dr-Fisher/static/media/sledzZPomidorem.d6b56e7e.png","d6b56e7ea1585dc387636a5399cc848a"],["/Dr-Fisher/static/media/zaklad1.4877e842.jpg","4877e84265a10b915de9b6251e20afb2"],["/Dr-Fisher/static/media/zaklad2.00784d01.jpg","00784d01800ad900e551c973a607bcbc"],["/Dr-Fisher/static/media/zaklad3.8473fe0e.jpg","8473fe0e4dcf5f2ed1ae487d2b2142ac"],["/Dr-Fisher/static/media/zaklad4.84a20224.jpg","84a20224b0b7791223fdf327761e0a3e"],["/Dr-Fisher/static/media/zaklad5.7217579f.jpg","7217579f5afe5a7db0b95808e1ccbdf8"],["/Dr-Fisher/static/media/zaklad6.41996cc8.jpg","41996cc83dbc715ece7bef5ed7bdd4be"],["/Dr-Fisher/static/media/zdjecieZakladu1.4877e842.jpg","4877e84265a10b915de9b6251e20afb2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),n=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),e=urlsToCacheKeys.has(t));var n="/Dr-Fisher/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});