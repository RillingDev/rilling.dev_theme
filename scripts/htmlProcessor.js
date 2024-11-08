const { load } = require("cheerio");

/**
 * @typedef {import('cheerio').CheerioAPI} CheerioAPI
 * @typedef {import('cheerio').Cheerio} Cheerio
 */

/**
 * Merges a parent element into its child, taking the parents attributes and replacing the parent with it.
 *
 * @param {CheerioAPI} $
 * @param {Cheerio} $el
 */
function mergeIntoChildProcessor($, $el) {
	if ($el.children().length !== 1) {
		throw new Error(
			`Invalid usage, expected one child but got ${$el.children().length}.`,
		);
	}

	const $child = $el.children();
	$child.attr($el.attr());
	$el.replaceWith($child);
}

/**
 * Tables need a wrapper element, but markdown renders it as-is, so we add it here.
 *
 * @param {CheerioAPI} $
 * @param {Cheerio} $el
 */
function responsiveTableProcessor($, $el) {
	$el.find("table").each((_i, table) => {
		const $tableWrapper = $("<div></div>");
		$tableWrapper.addClass("table__wrapper");

		$(table).wrap($tableWrapper);
	});
}

/**
 * @param {CheerioAPI} $
 * @param {string} id
 * @param {($: CheerioAPI, $el: Cheerio) => void} processor
 */
function process($, id, processor) {
	$(`[data-processor-id="${id}"]`).each((_i, el) => {
		const $el = $(el);
		$el.removeAttr("data-processor-id");
		processor($, $el);
	});
}

hexo.extend.filter.register("after_render:html", (str) => {
	const $ = load(str);
	process($, "merge-into-child", mergeIntoChildProcessor);
	process($, "responsive-tables", responsiveTableProcessor);
	return $.html();
});
