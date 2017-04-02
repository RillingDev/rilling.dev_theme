"use strict";

import {
    _document
} from "./constants";

/**
 * jQuery-like selector
 * @param {String} query String query
 * @param {Boolean} multi If the select will match multiple elements
 * @returns {NodeList} NodeList of selcted elements
 */
const $ = function (query, multi) {
    return multi ? _document.querySelectorAll(query) : _document.querySelector(query);
};

export default $;
