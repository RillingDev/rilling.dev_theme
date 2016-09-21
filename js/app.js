"use strict";

(function () {
    function $(query, multi) {
        const _document = document;

        return multi ? _document.querySelectorAll(query) : _document.querySelector(query);
    }

    function initNav() {
        const $toggle = $(".navbar-toggler");
        const $nav = $(".navbar-toggleable-xs");

        $toggle.addEventListener("click", () => {
            $nav.classList.toggle("in");
        }, false);
    }

    function initArticle() {
        function eachNode(node, fn) {
            return [].forEach.call(node, fn);
        }

        //Highlight Code Snippets
        eachNode($("pre", true), function (e) {
            hljs.highlightBlock(e, $("code").className.replace("language-", ""));
        });

        //Adjust Table classes
        eachNode($("table", true), function (e) {
            e.classList.add("table");
            e.classList.add("table-bordered");
            e.classList.add("table-hover");
            e.outerHTML = "<div class='table-responsive'>" + e.outerHTML + "</div>";
        });
    }

    initNav();
    initArticle();
})();