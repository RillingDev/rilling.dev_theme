"use strict";

const frilling = (function () {
    const _window = window;
    const _document = document;

    /**
     * jQuery like selector
     *
     * @param {String} query String query
     * @param {Boolean} multi If the select will match multiple elements
     * @return {NodeList} NodeList of selcted elements
     */
    const $ = function (query, multi) {
        return multi ? _document.querySelectorAll(query) : _document.querySelector(query);
    };

    /**
     * Iterate over NodeList
     *
     * @param {NodeList} nodeList NodeList of elements
     * @param {Function} fn   Function to run
     */
    const eachNode = function (nodeList, fn) {
        return Array.from(nodeList).forEach(fn);
    };

    /**
     * Checks if the cookie policy has been accepted and displays the notification if not.
     */
    const initCookiepolicy = function () {
        const cookieString = "cookies=true";

        if (_document.cookie.indexOf(cookieString) === -1) {
            const $cookienotice = $(".cookienotice");
            const $cookienoticeAccept = $("#cookienoticeAccept");

            $cookienotice.style.display = "block";
            _document.cookie = cookieString + ";expires=Fri, 31 Dec 9999 23:59:59 GMT";

            $cookienoticeAccept.addEventListener("click", () => {
                $cookienotice.style.display = "none";
            }, false);
        }
    };

    /**
     * Binds the navigation event handler
     */
    const initNav = function () {
        const $toggle = $("#navbarToggle");
        const $nav = $("#navbarMenu");
        let isNavOpen = false;

        //Toggle menu
        $toggle.addEventListener("click", () => {
            isNavOpen = !isNavOpen;

            $toggle.classList.toggle("collapsed");
            $nav.classList.toggle("show");

            $toggle.setAttribute("aria-expanded", isNavOpen);
            $nav.setAttribute("aria-hidden", !isNavOpen);
        }, false);
    };

    /**
     * Inits article-specific html changes
     */
    const initArticle = function () {
        const $pre = $("article pre", true);
        const $tables = $("article table", true);

        //Highlight Code Snippets
        eachNode($pre, $e => {
            _window.hljs.highlightBlock($e);
        });

        //Adjust Table classes
        eachNode($tables, $e => {
            //@TODO makse this less dirty
            $e.classList.add("table", "table-bordered", "table-hover");
            $e.outerHTML = '<div class="table-responsive">' + $e.outerHTML + '</div>';
        });
    };

    /**
     * Inits the page with optional page-dependent function
     *
     * @param {String} pageType name of the grav template
     */
    const init = function (pageType) {
        initCookiepolicy();
        initNav();

        if (pageType === "item") {
            initArticle();
        }
    };

    return {
        init
    };
})();
