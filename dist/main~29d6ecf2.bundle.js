!function(e){function n(n){for(var r,a,c=n[0],u=n[1],s=n[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(p&&p(n);f.length;)f.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,c=1;c<t.length;c++){var u=t[c];0!==o[u]&&(r=!1)}r&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={2:0},i=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var p=u;i.push([15,1,0]),t()}([,,,,,,,function(e,n,t){var r=t(3),o=t(8);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r)()((function(e){return e[1]}));o.push([e.i,'*{margin:0;padding:0;box-sizing:border-box}body{display:flex;min-height:100vh;flex-direction:column;font-family:"Poppins",sans-serif;background-color:#f9f9f9}.skip_to_content{left:0;top:-45px;z-index:100;padding:10px;position:absolute;color:#0a1931;background-color:#ecd662}.skip_to_content:focus{top:0}.app-bar{top:0;gap:10px;z-index:10;display:grid;position:sticky;padding:8px 16px;background-color:#cd113b;grid-template-columns:auto 1fr auto;box-shadow:0 2px 4px 0 rgba(0,0,0,.2)}.app-bar .app-bar__menu{width:45px;height:45px;display:5lex;align-items:center}.app-bar .app-bar__menu button{width:45px;border:none;height:45px;padding:8px;font-size:18px;cursor:pointer;background-color:transparent}.app-bar .app-bar__menu button:hover{border:1px solid #fff}.app-bar .app-bar__brand{display:flex;align-items:center}.app-bar .app-bar__brand h1{font-size:22px;user-select:none;text-transform:uppercase;color:#ecd662}.app-bar .app-bar__navigation{top:60px;left:-180px;width:150px;padding:8px;overflow:hidden;position:absolute;transition:all .3s;background-color:#cd113b}.app-bar .app-bar__navigation.open{left:0}.app-bar .app-bar__navigation ul li a{width:100%;padding:20px;margin-bottom:5px;display:inline-block;text-decoration:none;color:#f9f9f9}.app-bar .app-bar__navigation ul li a:hover{color:#0a1931;background-color:#ecd662}.hero-image{z-index:-1;width:100%;height:270px;object-fit:cover;position:relative;background-size:cover;object-position:center;background-position:top;background-repeat:no-repeat;box-shadow:0px 0px 10px #0a1931}.hero-text{top:50%;left:50%;position:absolute;text-align:center;font-family:sans-serif;color:#f9f9f9;transform:translate(-50%, -50%)}main{flex:1}.content{margin:0 auto;min-height:100%}.content .content__heading{margin-top:25px;text-align:center;padding-left:70px;font-weight:normal;padding-right:70px;margin-bottom:-40px}.res_container{gap:16px;margin:32px;padding:32px;display:grid;grid-template-columns:1fr}.res-item{width:100%;color:#0a1931;overflow:hidden;border-radius:8px;text-decoration:none;box-shadow:0 4px 8px 0 rgba(0,0,0,.2)}.res-item:hover{background-color:#e7e7e7}.res-item__header{position:relative}.res-item .res-item__header .res-item__header__poster{max-height:250px}.res-item .res-item__header .res-item__header__poster:hover{transform:scale(1.1, 1.1)}.res-item .res-item__header .res-item__header__rating{left:0;padding:8px;bottom:20px;position:absolute;display:inline-block;color:#f9f9f9;background-color:#0a1931}.res-item .res-item__header .res-item__header__rating .res-item__header__rating__score{margin-left:10px}.res-item .res-item__content{padding:16px}.res-item .res-item__content h3{margin:0 0 10px 0}.res-item .res-item__content h3 a{color:#cd113b;text-decoration:none}.res-item .res-item__content p{overflow:hidden;display:-webkit-box;-webkit-line-clamp:4;text-overflow:ellipsis;-webkit-box-orient:vertical}.res{width:100%;max-width:800px;padding-left:15px;padding-right:15px;margin:20px auto auto auto}.res .res__poster{width:100%;border-radius:10px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2)}.res .res__info h4{margin:8px 0}.res__category{margin-top:20px;margin-bottom:20px}.res__menu{display:grid;grid-template-columns:1fr 1fr}.res__menu hr{width:50%}.res__customer__review{gap:24px;display:grid;grid-template-columns:repeat(3, 1fr)}.res__customer__review .card__customer__review{width:100%;overflow:hidden;border-radius:8px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2)}.res__customer__review .card__review__header{padding:10px}.like{border:0;right:16px;width:55px;bottom:16px;height:55px;display:flex;position:fixed;font-size:18px;cursor:pointer;border-radius:50%;align-items:center;justify-content:center;color:#f9f9f9;background-color:#cd113b}footer{padding:16px}footer p{text-align:center;color:#ddd}',""]),n.default=o},function(e,n,t){var r=t(3),o=t(10);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r)()((function(e){return e[1]}));o.push([e.i,"@media screen and (max-width: 600px){.res__menu{grid-template-columns:1fr}.res__menu section{margin-top:15px;margin-bottom:15px}.res__customer__review{grid-template-columns:1fr}}@media screen and (min-width: 600px){.app-bar{grid-template-columns:1fr auto;padding:8px 32px}.app-bar .app-bar__brand h1{font-size:1.5em}.app-bar .app-bar__menu{display:none}.app-bar .app-bar__navigation{position:static;width:100%}.app-bar .app-bar__navigation ul li{display:inline-block}.app-bar .app-bar__navigation ul li a{display:inline-block;width:120px;text-align:center;margin:0}.res_container{grid-template-columns:1fr 1fr}.res__customer__review{margin-top:20px;grid-template-columns:1fr 1fr}.movie{grid-template-columns:auto 1fr}.movie .movie__title{grid-column-start:1;grid-column-end:3}.movie .movie__overview{grid-column-start:1;grid-column-end:3}}@media screen and (min-width: 800px){.app-bar .app-bar__brand h1{font-size:2em}.res__customer__review{margin-top:20px;grid-template-columns:repeat(3, 1fr)}}@media screen and (min-width: 850px){.res_container{grid-template-columns:repeat(3, 1fr)}}@media screen and (min-width: 1200px){.res_container{grid-template-columns:repeat(4, 1fr)}}@media screen and (min-width: 1600px){.res_container{grid-template-columns:repeat(5, 1fr)}}",""]),n.default=o},function(e,n){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function a(e){var n="function"==typeof Map?new Map:void 0;return(a=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,r)}function r(){return c(e,arguments,p(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,e)})(e)}function c(e,n,t){return(c=u()?Reflect.construct:function(e,n,t){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(e,r));return t&&s(o,t.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function s(e,n){return(s=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&s(e,n)}(d,e);var n,t,a,c,l,f=(n=d,t=u(),function(){var e,r=p(n);if(t){var o=p(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return i(this,e)});function d(){return r(this,d),f.apply(this,arguments)}return a=d,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n    <header class="app-bar">\n        <div class="app-bar__menu">\n            <button id="hamburgerButton">☰</button>\n        </div>\n        <div class="app-bar__brand">\n            <h1>Crossy Restaurants</h1>\n        </div>\n        <nav id="navigationDrawer" class="app-bar__navigation">\n            <ul>\n                <li><a href="#/restaurants">Home</a></li>\n                <li><a href="#/like">Likes</a></li>\n                <li><a rel="noreferrer href="https://github.com/Alphabethika-CodeHub" target="_blank">About</a></li>\n            </ul>\n        </nav>\n    </header>'}}])&&o(a.prototype,c),l&&o(a,l),d}(a(HTMLElement));customElements.define("app-bar",l)},function(e,n){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function a(e){var n="function"==typeof Map?new Map:void 0;return(a=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,r)}function r(){return c(e,arguments,p(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,e)})(e)}function c(e,n,t){return(c=u()?Reflect.construct:function(e,n,t){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(e,r));return t&&s(o,t.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function s(e,n){return(s=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&s(e,n)}(d,e);var n,t,a,c,l,f=(n=d,t=u(),function(){var e,r=p(n);if(t){var o=p(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return i(this,e)});function d(){return r(this,d),f.apply(this,arguments)}return a=d,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n        <style>          \n            @media only screen and (max-width: 800px) {\n              .hero-image {\n                background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/heroimage-small.jpg");\n                background-position: center;\n              }\n            }\n\n            @media only screen and (min-width: 800px) {\n              .hero-image {\n                background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/heroimage-large.jpg");\n                background-position: center;\n              }\n            }\n        </style>\n\n        <div class="hero-image">\n            <div class="hero-text">\n                <h1 tabindex="-1">Crossy Restaurants</h1>\n            </div>\n        </div>'}}])&&o(a.prototype,c),l&&o(a,l),d}(a(HTMLElement));customElements.define("hero-element",l)},function(e,n){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function a(e){var n="function"==typeof Map?new Map:void 0;return(a=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,r)}function r(){return c(e,arguments,p(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,e)})(e)}function c(e,n,t){return(c=u()?Reflect.construct:function(e,n,t){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(e,r));return t&&s(o,t.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function s(e,n){return(s=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&s(e,n)}(d,e);var n,t,a,c,l,f=(n=d,t=u(),function(){var e,r=p(n);if(t){var o=p(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return i(this,e)});function d(){return r(this,d),f.apply(this,arguments)}return a=d,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML="\n        <footer>\n            <p>Copyright © 2021 - Crossy Restaurant</p>\n        </footer>"}}])&&o(a.prototype,c),l&&o(a,l),d}(a(HTMLElement));customElements.define("my-footer",l)},,function(e,n,t){"use strict";t.r(n);t(6),t(7),t(9),t(11),t(12),t(13),t(2),t(14);var r={init:function(e){var n=this,t=e.button,r=e.drawer,o=e.content;t.addEventListener("click",(function(e){n._toggleDrawer(e,r)})),o.addEventListener("click",(function(e){n._closeDrawer(e,r)}))},_toggleDrawer:function(e,n){e.stopPropagation(),n.classList.toggle("open")},_closeDrawer:function(e,n){e.stopPropagation(),n.classList.remove("open")}},o={parseActiveUrlWithCombiner:function(){var e=window.location.hash.slice(1).toLowerCase(),n=this._urlSplitter(e);return this._urlCombiner(n)},parseActiveUrlWithoutCombiner:function(){var e=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(e)},_urlSplitter:function(e){var n=e.split("/");return{resource:n[1]||null,id:n[2]||null,verb:n[3]||null}},_urlCombiner:function(e){return(e.resource?"/".concat(e.resource):"/")+(e.id?"/:id":"")+(e.verb?"/".concat(e.verb):"")}},i={KEY:"12345",BASE_URL:"https://restaurant-api.dicoding.dev/",BASE_IMAGE_URL:"https://restaurant-api.dicoding.dev/images/medium/",BASE_IMAGE_URL_SM:"https://restaurant-api.dicoding.dev/images/small/",WEB_SOCKET_SERVER:"wss://javascript.info/article/websocket/chat/ws",CACHE_NAME:"crossy-restaurants-v4",DATABASE_NAME:"crossy-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"crossy"},a={LIST_RESTAURANTS:"".concat(i.BASE_URL,"list"),DETAIL:function(e){return"".concat(i.BASE_URL,"detail/").concat(e)},RESTAURANTS_REVIEW:"".concat(i.BASE_URL,"review")};function c(e,n,t,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){c(i,r,o,a,u,"next",e)}function u(e){c(i,r,o,a,u,"throw",e)}a(void 0)}))}}function s(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r,o,i;return n=e,t=null,r=[{key:"restaurantList",value:(i=u(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a.LIST_RESTAURANTS);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)}))),function(){return i.apply(this,arguments)})},{key:"restaurantDetail",value:(o=u(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a.DETAIL(n));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)})}],t&&s(n.prototype,t),r&&s(n,r),e}(),l=function(e){return'    \n    <a id="restaurant_content_id" tabindex="0" class="res-item" href="#/detail/'.concat(e.id,'">\n        <article tabindex="-1">\n            <div class="res-item__header">\n                <img class="res-item__header__poster lazyload" alt="').concat(e.name,'"\n                    data-src="').concat(e.pictureId?i.BASE_IMAGE_URL+e.pictureId:"https://picsum.photos/id/666/800/450?grayscale",'">\n                <div class="res-item__header__rating">\n                    <p>🍽️<span class="res-item__header__rating__score">').concat(e.name,'</span></p>\n                </div>\n            </div>\n            <div class="res-item__content">\n                <p>Description</p>\n                <hr>\n                ').concat((n=e.description,t=100,n.length>t?"".concat(n.slice(0,t),"..."):n),'\n            </div>\n            <div class="res-item__content">\n                <p>Rating:⭐ <strong>').concat(e.rating,"</strong></p>\n                <p>City:🏙️ <strong>").concat(e.city,"</strong></p>\n            </div>\n        </article>\n    </a>");var n,t};function f(e,n,t,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}function d(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){f(i,r,o,a,c,"next",e)}function c(e){f(i,r,o,a,c,"throw",e)}a(void 0)}))}}var h={render:function(){return d(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n    <hero-element></hero-element>\n    <div class="content">\n        <div class="content__heading">\n            <h2>Restaurants List</h2>\n            <hr>\n        </div>\n        <div id="restaurant_content" class="res_container"></div>\n    </div>');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){return d(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=document.querySelector("#restaurant_content")).innerHTML="",e.prev=2,e.next=5,p.restaurantList();case 5:t=e.sent,console.log(t),t.restaurants.forEach((function(e){n.innerHTML+=l(e)})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),n.innerHTML="Error: ".concat(e.t0,".");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))()}};function m(e,n,t,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}function v(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){m(i,r,o,a,c,"next",e)}function c(e){m(i,r,o,a,c,"throw",e)}a(void 0)}))}}var _={init:function(e){var n=this;return v(regeneratorRuntime.mark((function t(){var r,o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.likeButtonContainer,o=e.fooddb,i=e.data,n._likeButtonContainer=r,n._fooddb=o,n._restaurant=i.restaurant,t.next=6,n._renderButton();case 6:case"end":return t.stop()}}),t)})))()},_renderButton:function(){var e=this;return v(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e._restaurant.id,n.next=3,e._isRestaurantExist(t);case 3:if(!n.sent){n.next=7;break}e._renderLiked(),n.next=8;break;case 7:e._renderLike();case 8:case"end":return n.stop()}}),n)})))()},_isRestaurantExist:function(e){var n=this;return v(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._fooddb.getFood(e);case 2:return r=t.sent,t.abrupt("return",!!r);case 4:case"end":return t.stop()}}),t)})))()},_renderLike:function(){var e=this;this._likeButtonContainer.innerHTML='\n    <button aria-label="like this restaurant" id="likeButton" class="like">\n        <i class="fa fa-heart-o" aria-hidden="true"></i>\n    </button>',document.querySelector("#likeButton").addEventListener("click",v(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e._fooddb.putFood(e._restaurant);case 2:e._renderButton();case 3:case"end":return n.stop()}}),n)}))))},_renderLiked:function(){var e=this;this._likeButtonContainer.innerHTML='\n    <button aria-label="unlike this restaurant" id="likeButton" class="like">\n        <i class="fa fa-heart" aria-hidden="true"></i>\n    </button>',document.querySelector("#likeButton").addEventListener("click",v(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e._fooddb.deleteFood(e._restaurant.id);case 2:e._renderButton();case 3:case"end":return n.stop()}}),n)}))))}},b=t(5);function g(e,n,t,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}function y(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){g(i,r,o,a,c,"next",e)}function c(e){g(i,r,o,a,c,"throw",e)}a(void 0)}))}}var w=i.DATABASE_NAME,x=i.DATABASE_VERSION,k=i.OBJECT_STORE_NAME,R=Object(b.a)(w,x,{upgrade:function(e){e.createObjectStore(k,{keyPath:"id"})}}),E={getFood:function(e){return y(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,R;case 4:return n.abrupt("return",n.sent.get(k,e));case 5:case"end":return n.stop()}}),n)})))()},getAllFoods:function(){return y(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R;case 2:return e.abrupt("return",e.sent.getAll(k));case 3:case"end":return e.stop()}}),e)})))()},putFood:function(e){return y(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.hasOwnProperty("id")){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,R;case 4:return n.abrupt("return",n.sent.put(k,e));case 5:case"end":return n.stop()}}),n)})))()},deleteFood:function(e){return y(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R;case 2:return n.abrupt("return",n.sent.delete(k,e));case 3:case"end":return n.stop()}}),n)})))()}};function S(e,n,t,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}function O(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){S(i,r,o,a,c,"next",e)}function c(e){S(i,r,o,a,c,"throw",e)}a(void 0)}))}}function P(e,n,t,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}function j(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){P(i,r,o,a,c,"next",e)}function c(e){P(i,r,o,a,c,"throw",e)}a(void 0)}))}}var A={"/":h,"/restaurants":h,"/detail/:id":{render:function(){return O(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n    <div class="res" id="resDetail"></div>\n    <div id="likeButtonContainer"></div>');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){return O(regeneratorRuntime.mark((function e(){var n,t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.parseActiveUrlWithoutCombiner(),t=document.querySelector("#resDetail"),e.prev=2,e.next=5,p.restaurantDetail(n.id);case 5:return r=e.sent,t.innerHTML+=(a=r.restaurant,'\n    <p>Detail Restaurant</p>\n    <hr>\n    <h2 class="res__title">'.concat(a.name,'</h2>\n    <img class="res__poster" src="').concat(i.BASE_IMAGE_URL+a.pictureId,'" alt="').concat(a.name,'" />\n    <div class="res__info">\n        <h4>Place</h4>\n        <hr>\n        <p class="res__name">').concat(a.address,"</p>\n        <h4>City</h4>\n        <hr>\n        <p>🏙️ ").concat(a.city,"</p>\n        <h4>Rating</h4>\n        <hr>\n        <p>⭐ ").concat(a.rating,"</p>\n        <h4>Description</h4>\n        <hr>\n        <p>").concat(a.description,'</p>\n    </div>\n    <div class="res__category">\n        <h3>Dish Categories</h3>\n        <hr>\n        <span>\n            <ul>').concat(a.categories.map((function(e){return"<li>".concat(e.name,"</li>")})).join(""),'</ul>\n        </span>\n    </div>\n    <div class="res__menu">\n        <section>\n            <h3>Foods Menu</h3>\n            <hr>\n            <span>\n                <ul>').concat(a.menus.foods.map((function(e){return"<li>".concat(e.name,"</li>")})).join(""),"</ul>\n            </span>\n        </section>\n        <section>\n            <h3>Drinks Menu</h3>\n            <hr>\n            <span>\n                <ul>").concat(a.menus.drinks.map((function(e){return"<li>".concat(e.name,"</li>")})).join(""),'</ul>\n            </span>\n        </section>\n    </div>\n\n    <p><strong>Reviews</strong></p>\n    <hr>\n\n    <div class="res__customer__review">\n        ').concat(a.customerReviews.map((function(e){return'\n            <section class="card__customer__review">\n            <div class="card__review__header">\n                <p><i class="fas fa-user"></i> '.concat(e.name,"</p>\n                <p>").concat(e.date,"</p>\n                <hr>\n                <p>").concat(e.review,"</p>\n            </div>\n            </section>\n        ")})).join(""),"\n    </div>")),e.next=9,_.init({likeButtonContainer:document.querySelector("#likeButtonContainer"),fooddb:E,data:r});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),t.innerHTML="Error: ".concat(e.t0,".");case 14:case"end":return e.stop()}var a}),e,null,[[2,11]])})))()}},"/like":{render:function(){return j(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n    <div class="content">\n        <h2 class="content__heading">Your Liked Restaurants</h2>\n        <div id="res_container" class="res_container"></div>\n    </div>');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){return j(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getAllFoods();case 2:n=e.sent,t=document.querySelector("#res_container"),n.forEach((function(e){t.innerHTML+=l(e)}));case 5:case"end":return e.stop()}}),e)})))()}}};function T(e,n,t,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}function L(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var M=function(){function e(n){var t=n.button,r=n.drawer,o=n.content;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._button=t,this._drawer=r,this._content=o,this._initialAppShell()}var n,t,i,a,c;return n=e,(t=[{key:"_initialAppShell",value:function(){r.init({button:this._button,drawer:this._drawer,content:this._content})}},{key:"renderPage",value:(a=regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.parseActiveUrlWithCombiner(),t=A[n],e.next=4,t.render();case 4:return this._content.innerHTML=e.sent,e.next=7,t.afterRender();case 7:case"end":return e.stop()}}),e,this)})),c=function(){var e=this,n=arguments;return new Promise((function(t,r){var o=a.apply(e,n);function i(e){T(o,t,r,i,c,"next",e)}function c(e){T(o,t,r,i,c,"throw",e)}i(void 0)}))},function(){return c.apply(this,arguments)})}])&&L(n.prototype,t),i&&L(n,i),e}(),B=t(4),C=t.n(B);function D(e,n,t,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}var H=function(){var e,n=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=4;break}return e.next=3,C.a.register();case 3:return e.abrupt("return");case 4:console.log("Service worker not supported in this browser");case 5:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){D(i,r,o,a,c,"next",e)}function c(e){D(i,r,o,a,c,"throw",e)}a(void 0)}))});return function(){return n.apply(this,arguments)}}(),F=new M({button:document.querySelector("#hamburgerButton"),drawer:document.querySelector("#navigationDrawer"),content:document.querySelector("#mainContent")});window.addEventListener("hashchange",(function(){F.renderPage()})),window.addEventListener("load",(function(){F.renderPage(),H()}))}]);