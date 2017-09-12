"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","0d0d600629574ddebaa87478a80b7548"],["static/js/main.80287b91.js","8cf5ac8e79d1ebc04914b8c1df760d76"],["static/media/full_broly.91638d77.png","91638d77ee8349804d9ca753ffd62feb"],["static/media/full_buu.130f9f35.png","130f9f35d749a80d4f88db0875885507"],["static/media/full_cell.daaa3ba1.png","daaa3ba195007b47d43634bcae90027b"],["static/media/full_freeza.3f70fb4a.png","3f70fb4ad3aabdee3e144888f33623b5"],["static/media/full_gohan.d4b3f79f.png","d4b3f79f13bc1868b62e81d101704d32"],["static/media/full_goku.8c21f820.png","8c21f8206a64d1b5e4e34bec68126e51"],["static/media/full_piccolo.82043d33.png","82043d3398b29ec40bb92d4cfc55dba7"],["static/media/full_vegeta.4a626b72.png","4a626b72f558ef02204e93df6a479512"],["static/media/hero_broly.53ac5568.png","53ac5568e98f7906abc4519f978b3882"],["static/media/hero_buu.2f2ee2a9.png","2f2ee2a9e281de829e364e8fe6790cf9"],["static/media/hero_cell.0a27a003.png","0a27a003ea178399f70ce10e705d4d73"],["static/media/hero_freeza.f56db71b.png","f56db71b60c95217910abba6ccf99c6f"],["static/media/hero_gohan.04e488bd.png","04e488bd96f295695b99e7dacf060932"],["static/media/hero_goku.7c0e942d.png","7c0e942d455482242875a4ef5923d6fb"],["static/media/hero_piccolo.fe468208.png","fe468208bb4cc6a57530ac92d7496109"],["static/media/hero_vegeta.53b1b945.png","53b1b945db239afda64050d5fc127223"],["static/media/menu_broly.cac25590.JPG","cac25590f1f7656afee2592c9ab2bbf4"],["static/media/menu_buu.483d4677.jpg","483d46775a8fd922590ba3495f4e4037"],["static/media/menu_cell.62f99a07.jpg","62f99a071c1fe45455e93782816c2284"],["static/media/menu_freeza.92cb9b55.jpg","92cb9b55d0d30cdbade8575d9b577bcf"],["static/media/menu_gohan.e52493a7.jpg","e52493a7fc566c9cb266be2a1ac57b3f"],["static/media/menu_goku.c45d2b6d.jpg","c45d2b6d7311d469a7890002135d7a41"],["static/media/menu_piccolo.38292dc0.jpg","38292dc08f002b501f872f062cb85373"],["static/media/menu_vegeta.fe40bb97.jpg","fe40bb9710f67f57cb9984ad236dfb2d"],["static/media/react-redux-logo.1c1a05a5.png","1c1a05a5e3930ae20340c2ac4a960dec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/redux-simple-example/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});