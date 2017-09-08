import {
    _document
} from "./constants";

/**
 * jQuery-like selector
 *
 * @param {string} query String query
 * @param {boolean} multi If the select will match multiple elements
 * @returns {NodeList} NodeList of selcted elements
 */
const $ = function (query, multi) {
    return multi ? _document.querySelectorAll(query) : _document.querySelector(query);
};

export default $;
