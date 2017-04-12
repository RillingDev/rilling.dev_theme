"use strict";

import $ from "../lib/$";
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

export default initNav;
