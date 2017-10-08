import $ from "../lib/query";

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

export default initNav;
