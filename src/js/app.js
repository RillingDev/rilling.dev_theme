"use strict";
const frilling = (function() {
    const _window = window;
    const _document = _window.document;

    /**
     * jQuery like selector
     * @param  {String} query String query
     * @param  {Boolean} multi If the select will match multiple elements
     * @return {NodeList}       NodeList of selcted elements
     */
    const $ = function(query, multi) {
        return multi ? _document.querySelectorAll(query) : _document.querySelector(query);
    };

    /**
     * Iterate over NodeList
     * @param  {NodeList}   node NodeList of elements
     * @param  {Function} fn   Function to run
     */
    const eachNode = function(node, fn) {
        return [].forEach.call(node, fn);
    };

    const initNav = function() {
        const $toggle = $(".navbar-toggler");
        const $nav = $(".navbar-toggleable-xs");

        $toggle.addEventListener("click", () => {
            $nav.classList.toggle("in");
        }, false);
    };

    const initArticle = function() {
        const $pre = $("pre", true);
        const $tables = $("table", true);

        //Highlight Code Snippets
        eachNode($pre, function($e) {
            const $code = $e.querySelector("code");
            const lang = $code.className.replace("language-", "");
            $e.className = lang;

            hljs.highlightBlock($e);
        });

        //Adjust Table classes
        eachNode($tables, function(e) {
            e.classList.add("table");
            e.classList.add("table-bordered");
            e.classList.add("table-hover");
            e.outerHTML = '<div class="table-responsive">' + e.outerHTML + '</div>';
        });
    };

    const init = function(pageType) {
        initNav();
        if (pageType === "item") {
            initArticle();
        }
    };

    return {
        init: init
    };
})();
