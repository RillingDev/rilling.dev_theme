import initCookiePolicy from "./init/initCookiePolicy";
import initNav from "./init/initNav";
import initArticle from "./init/initArticle";

/**
 * Inits the page with optional page-dependent function
 *
 * @param {string} pageType name of the grav template
 */
const init = (pageType) => {
    initCookiePolicy();
    initNav();

    if (pageType === "item") {
        initArticle();
    }
};

// noinspection JSUnusedGlobalSymbols
window.frilling = {
    init
};
