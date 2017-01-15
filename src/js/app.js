"use strict";

const frilling = (function () {

    /**
     * jQuery like selector
     * @param  {String} query String query
     * @param  {Boolean} multi If the select will match multiple elements
     * @return {NodeList}       NodeList of selcted elements
     */
    const $ = function (query, multi) {
        return multi ? document.querySelectorAll(query) : document.querySelector(query);
    };

    /**
     * Iterate over NodeList
     * @param  {NodeList}   node NodeList of elements
     * @param  {Function} fn   Function to run
     */
    const eachNode = function (node, fn) {
        return [].forEach.call(node, fn);
    };

    const cookiePolicy = function () {
        const cookieString = "cookiepolicyAccepted=true;";

        if (document.cookie.indexOf(cookieString) === -1) {
            const $cookienotice = $(".cookienotice");
            const $cookienoticeAccept = $("#cookienoticeAccept");

            $cookienotice.style.display = "block";

            $cookienoticeAccept.addEventListener("click", () => {
                document.cookie = cookieString + " expires=Fri, 31 Dec 9999 23:59:59 GMT";
                $cookienotice.style.display = "none";
            }, false);
        }
    };

    const initNav = function () {
        const $toggle = $(".navbar-toggler");
        const $nav = $(".navbar-toggleable-xs");

        $toggle.addEventListener("click", () => {
            $toggle.classList.toggle("in");
            $nav.classList.toggle("in");
        }, false);
    };

    const initArticle = function () {
        const $pre = $("pre", true);
        const $tables = $("table", true);

        //Highlight Code Snippets
        eachNode($pre, $e => {
            const $code = $e.querySelector("code");
            const lang = $code.className.replace("language-", "");

            $e.className = lang;
            window.hljs.highlightBlock($e);
        });

        //Adjust Table classes
        eachNode($tables, $e => {
            $e.classList.add("table", "table-bordered", "table-hover");
            $e.outerHTML = '<div class="table-responsive">' + $e.outerHTML + '</div>';
        });
    };

    const init = function (pageType) {
        initNav();
        cookiePolicy();
        if (pageType === "item") {
            initArticle();
        }
    };

    return {
        init: init
    };
})();
