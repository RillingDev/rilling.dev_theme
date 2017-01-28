"use strict";

const frilling = (function () {
    const _window = window;
    const _document = document;
    const screenWidthSm = 606;

    /**
     * jQuery like selector
     * @param  {String} query String query
     * @param  {Boolean} multi If the select will match multiple elements
     * @return {NodeList}       NodeList of selcted elements
     */
    const $ = function (query, multi) {
        return multi ? _document.querySelectorAll(query) : _document.querySelector(query);
    };

    /**
     * Iterate over NodeList
     * @param  {NodeList}   node NodeList of elements
     * @param  {Function} fn   Function to run
     */
    const eachNode = function (node, fn) {
        return [].forEach.call(node, fn);
    };

    /**
     * Check if the cookie policy has been accepted and displays the notification if not.
     */
    const initCookiepolicy = function () {
        const cookieString = "cookies=true";

        if (_document.cookie.indexOf(cookieString) === -1) {
            const $cookienotice = $(".cookienotice");
            const $cookienoticeAccept = $("#cookienoticeAccept");

            $cookienotice.style.display = "block";

            $cookienoticeAccept.addEventListener("click", () => {
                _document.cookie = cookieString + ";expires=Fri, 31 Dec 9999 23:59:59 GMT";
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
        const setAriaHidden = function (val) {
            const ariaHidden = "aria-hidden";

            $toggle.setAttribute(ariaHidden, val);
            $nav.setAttribute(ariaHidden, val);
        };
        let isNavOpen = false;

        //Expand menu
        $toggle.addEventListener("click", () => {
            isNavOpen = !isNavOpen;
            $toggle.classList.toggle("collapsed");
            $nav.classList.toggle("show");

            if (isNavOpen) {
                setAriaHidden(false);
            } else {
                setAriaHidden(true);
            }
        }, false);

        //Toggle aria-hidden on mobile
        if (_window.innerWidth <= screenWidthSm) {
            setAriaHidden(true);
        }
    };

    /**
     * Inits article-specific html changes
     */
    const initArticle = function () {
        const $pre = $("pre", true);
        const $tables = $("table", true);

        //Highlight Code Snippets
        eachNode($pre, $e => {
            const $code = $e.querySelector("code");
            const lang = $code.className.replace("language-", "");

            $e.className = lang;
            _window.hljs.highlightBlock($e);
        });

        //Adjust Table classes
        eachNode($tables, $e => {
            $e.classList.add("table", "table-bordered", "table-hover");
            $e.outerHTML = '<div class="table-responsive">' + $e.outerHTML + '</div>';
        });
    };

    /**
     * Master function to init all functions
     */
    const init = function (pageType) {
        initNav();
        initCookiepolicy();

        if (pageType === "item") {
            initArticle();
        }
    };

    return {
        init: init
    };
})();
