const { load } = require("cheerio");

// Merges a parent element into its child, taking the parents attributes and replacing the parent with it.
hexo.extend.filter.register("after_render:html", (str, data) => {
	let $ = load(str);
	$('[data-preprocessor="merge-into-child"]').each((_i, el) => {
		const $el = $(el);
		if ($el.children().length !== 1) {
			throw new Error(
				`Invalid usage, expected one child but got ${$el.children().length}.`,
			);
		}
		$el.removeAttr("data-preprocessor");
		const $child = $($el.children()[0]);
		$child.attr($el.attr());
		$el.replaceWith($child);
	});
	return $.html();
});
