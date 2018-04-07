/**
 * jQuery-like selector
 *
 * @param {string} query
 * @param {boolean} multi
 * @returns {NodeList}
 */
const $ = (query, multi) => multi ? document.querySelectorAll(query) : document.querySelector(query);

export default $;
