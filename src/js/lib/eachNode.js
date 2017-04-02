"use strict";

/**
 * Iterate over NodeList
 *
 * @param {NodeList} nodeList NodeList of elements
 * @param {Function} fn   Function to run
 */
const eachNode = function (nodeList, fn) {
    Array.from(nodeList).forEach(fn);
};

export default eachNode;
