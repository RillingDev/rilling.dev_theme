!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="../js/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?document.querySelectorAll(e):document.querySelector(e)},o=function(){if(!document.cookie.includes("cookies=true")){var e=r(".cookienotice"),t=r("#cookienoticeAccept");e.style.display="block",t.addEventListener("click",function(){document.cookie="cookies=true;expires=Fri, 31 Dec 9999 23:59:59 GMT",e.style.display="none"},!1)}},i=function(){var e=r("#navbarToggle"),t=r("#navbarMenu"),n=!1;e.addEventListener("click",function(){n=!n,e.classList.toggle("collapsed"),t.classList.toggle("show"),e.setAttribute("aria-expanded",String(n)),t.setAttribute("aria-hidden",String(!n))},!1)},c=function(e,t){return Array.from(e).forEach(t)},l=window.hljs,u=function(){var e=r("article pre",!0),t=r("article table",!0);c(t,function(e){var t=e.cloneNode(!0),n=document.createElement("div");t.classList.add("table","table-bordered","table-hover"),n.classList.add("table-responsive"),n.appendChild(t),e.replaceWith(n)}),c(e,function(e){l.highlightBlock(e)})};window.frilling={init:function(e){o(),i(),"item"===e&&u()}}}]);