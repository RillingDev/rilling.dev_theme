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



    initNav();
})();
