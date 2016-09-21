"use strict";

(function() {
    function $(query, multi) {
        var _document = document;

        return multi ? _document.querySelectorAll(query) : _document.querySelector(query);
    }

    function initNav() {
        var $toggle = $(".navbar-toggler");
        var $nav = $(".navbar-toggleable-xs");

        $toggle.addEventListener("click", () => {
            $nav.classList.toggle("in");
        }, false);
    }

    function initArticle() {
        var $pre = $("pre", true);
        var $tables = $("table", true);

        function eachNode(node, fn) {
            return [].forEach.call(node, fn);
        }

        //Highlight Code Snippets
        eachNode($pre, function($e) {
            var $code = $e.querySelector("code");
            var lang = $code.className.replace("language-", "");
            $e.className = lang;

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
