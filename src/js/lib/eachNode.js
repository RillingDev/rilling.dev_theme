import {
    arrFrom
} from "lightdash";

/**
 * Iterate over NodeList
 *
 * @param {NodeList} nodeList
 * @param {Function} fn
 */
const eachNode = (nodeList, fn) => arrFrom(nodeList).forEach(fn);

export default eachNode;
