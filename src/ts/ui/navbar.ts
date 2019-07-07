const initNavbar = (document: Document): void => {
    const $navToggler = <Element>document.querySelector("#navbarToggler");
    const $navMenu = <Element>document.querySelector("#navbarMenu");
    let isNavOpen = false;

    $navToggler.addEventListener(
        "click",
        () => {
            isNavOpen = !isNavOpen;

            $navToggler.classList.toggle("collapsed");
            $navMenu.classList.toggle("show");

            $navToggler.setAttribute("aria-expanded", String(isNavOpen));
            $navMenu.setAttribute("aria-hidden", String(!isNavOpen));
        },
        false
    );
};

export { initNavbar };
