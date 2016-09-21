"use strict";

(function() {
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
        const $pre = $("pre", true);
        const $tables = ("table", true);

        function eachNode(node, fn) {
            return [].forEach.call(node, fn);
        }

        //Highlight Code Snippets
        eachNode($pre, function($e) {
            const $code = $e.querySelector("code");
            const lang = $code.className.replace("language-", "");
            $e.className = lang;

            //console.log(lang);
            hljs.highlightBlock($e);

        });

        //Adjust Table classes
        eachNode($tables, function(e) {
            e.classList.add("table");
            e.classList.add("table-bordered");
            e.classList.add("table-hover");
            e.outerHTML = "<div class='table-responsive'>" + e.outerHTML + "</div>";
        });


    }



    initNav();
    initArticle();
})();
