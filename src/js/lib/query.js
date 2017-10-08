/**
 * jQuery-like selector
 *
 * @param {string} query String query
 * @param {boolean} multi If the select will match multiple elements
 * @returns {NodeList} NodeList of selcted elements
 */
const $ = function (query, multi) {
    return multi ? document.querySelectorAll(query) : document.querySelector(query);
};

export default $;
