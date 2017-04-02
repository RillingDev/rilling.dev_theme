"use strict";

import {
    _window,
    _document
} from "./lib/constants";
import $ from "./lib/$";
import eachNode from "./lib/eachNode";
//import hljs from "highlight.js/build/lib/index";

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

        //Set Aria attributes
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

    //Adjust Table classes
    eachNode($tables, $e => {
        const $clone = $e.cloneNode(true); //Deep-clones old table
        const $tableVirtual = _document.createElement("div"); //Manipulate a virtual node instead of the actual one to improve performance

        $clone.classList.add("table", "table-bordered", "table-hover");
        $tableVirtual.classList.add("table-responsive");
        $tableVirtual.appendChild($clone);

        $e.replaceWith($tableVirtual);
    });

    //Highlight Code Snippets
    eachNode($pre, $e => {
        _window.hljs.highlightBlock($e);
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

const app = {
    init
};

export default app;
