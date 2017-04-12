"use strict";

import initCookiePolicy from "./init/initCookiePolicy";
import initNav from "./init/initNav";
import initArticle from "./init/initArticle";


/**
 * Inits the page with optional page-dependent function
 *
 * @param {String} pageType name of the grav template
 */
const init = function (pageType) {
    initCookiePolicy();
    initNav();

    if (pageType === "item") {
        initArticle();
    }
};

const app = {
    init
};

export default app;
