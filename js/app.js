"use strict";var frilling=function(){var e=function(e,t){return t?document.querySelectorAll(e):document.querySelector(e)},t=function(e,t){return[].forEach.call(e,t)},n=function(){var t="cookiepolicy=true";document.cookie.indexOf(t)===-1&&!function(){var n=e(".cookienotice"),o=e("#cookienoticeAccept");n.style.display="block",o.addEventListener("click",function(){document.cookie=t,n.style.display="none"},!1)}()},o=function(){var t=e(".navbar-toggler"),n=e(".navbar-toggleable-xs");t.addEventListener("click",function(){t.classList.toggle("in"),n.classList.toggle("in")},!1)},c=function(){var n=e("pre",!0),o=e("table",!0);t(n,function(e){var t=e.querySelector("code"),n=t.className.replace("language-","");e.className=n,window.hljs.highlightBlock(e)}),t(o,function(e){e.classList.add("table","table-bordered","table-hover"),e.outerHTML='<div class="table-responsive">'+e.outerHTML+"</div>"})},i=function(e){o(),n(),"item"===e&&c()};return{init:i}}();