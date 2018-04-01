/**
 * Iterate over NodeList
 *
 * @param {NodeList} nodeList
 * @param {Function} fn
 */
const eachNode = (nodeList, fn) => Array.from(nodeList).forEach(fn);

export default eachNode;
