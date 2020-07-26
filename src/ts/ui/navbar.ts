const initNavbar = (document: Document): void => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches;
    const toggleButton = document.getElementById("toggle")!;
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle(
            `theme--${prefersDarkScheme ? "light" : "dark"}`
        );
    });
    // const $navToggler = document.querySelector("#navbarToggler") as Element;
    // const $navMenu = document.querySelector("#navbarMenu") as Element;
    // let isNavOpen = false;
    //
    // $navToggler.addEventListener(
    //     "click",
    //     () => {
    //         isNavOpen = !isNavOpen;
    //
    //         $navToggler.classList.toggle("collapsed");
    //         $navMenu.classList.toggle("show");
    //
    //         $navToggler.setAttribute("aria-expanded", String(isNavOpen));
    //         $navMenu.setAttribute("aria-hidden", String(!isNavOpen));
    //     },
    //     false
    // );
};

export { initNavbar };
