var frilling = (function (exports) {
'use strict';

const _window = window;
const _document = document;

/**
 * jQuery-like selector
 *
 * @param {string} query String query
 * @param {boolean} multi If the select will match multiple elements
 * @returns {NodeList} NodeList of selcted elements
 */
const $ = function (query, multi) {
    return multi ? _document.querySelectorAll(query) : _document.querySelector(query);
};

/**
 * Checks if the cookie policy has been accepted and displays the notification if not.
 */
const initCookiePolicy = function () {
    const cookieString = "cookies=true";

    if (!_document.cookie.includes(cookieString)) {
        const $cookieNotice = $(".cookienotice");
        const $cookieNoticeAccept = $("#cookienoticeAccept");

        $cookieNotice.style.display = "block";
        _document.cookie = cookieString + ";expires=Fri, 31 Dec 9999 23:59:59 GMT";

        $cookieNoticeAccept.addEventListener("click", () => {
            $cookieNotice.style.display = "none";
        }, false);
    }
};

/**
 * Binds the navigation event handler
 */
const initNav = function () {
    const $navToggle = $("#navbarToggle");
    const $navMenu = $("#navbarMenu");
    let isNavOpen = false;

    //Toggle menu
    $navToggle.addEventListener("click", () => {
        isNavOpen = !isNavOpen;

        $navToggle.classList.toggle("collapsed");
        $navMenu.classList.toggle("show");

        //Set Aria attributes
        $navToggle.setAttribute("aria-expanded", isNavOpen);
        $navMenu.setAttribute("aria-hidden", !isNavOpen);
    }, false);
};

/**
 * Iterate over NodeList
 *
 * @param {NodeList} nodeList NodeList of elements
 * @param {Function} fn   Function to run
 */
const eachNode = function (nodeList, fn) {
    Array.from(nodeList).forEach(fn);
};

/**
 * Inits article-specific html changes
 */
const initArticle = function () {
    const $pre = $("article pre", true);
    const $tables = $("article table", true);

    //Adjust Table classes
    eachNode($tables, $e => {
        const $tableClone = $e.cloneNode(true); //Deep-clones old table
        const $tableWrapperVirtual = _document.createElement("div"); //Manipulate a virtual node instead of the actual one to improve performance

        $tableClone.classList.add("table", "table-bordered", "table-hover");
        $tableWrapperVirtual.classList.add("table-responsive");
        $tableWrapperVirtual.appendChild($tableClone);

        $e.replaceWith($tableWrapperVirtual);
    });

    //Highlight Code Snippets
    eachNode($pre, $e => {
        _window.hljs.highlightBlock($e);
    });
};

/**
 * Inits the page with optional page-dependent function
 *
 * @param {string} pageType name of the grav template
 */
const init = function (pageType) {
    initCookiePolicy();
    initNav();

    if (pageType === "item") {
        initArticle();
    }
};

exports.init = init;

return exports;

}({}));
