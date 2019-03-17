import $ from "../util/query";

/**
 * Binds the navigation event handler
 */
const initNav = () => {
    const $navToggle = $("#navbarToggle");
    const $navMenu = $("#navbarMenu");
    let isNavOpen = false;

    $navToggle.addEventListener("click", () => {
        isNavOpen = !isNavOpen;

        $navToggle.classList.toggle("collapsed");
        $navMenu.classList.toggle("show");

        $navToggle.setAttribute("aria-expanded", String(isNavOpen));
        $navMenu.setAttribute("aria-hidden", String(!isNavOpen));
    }, false);
};

export default initNav;
