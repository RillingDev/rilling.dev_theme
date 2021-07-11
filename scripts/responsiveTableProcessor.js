const { load } = require("cheerio");

const ARTICLE_LAYOUTS = new Set(["post", "archive", "index"]);

// Tables need a wrapper element, but markdown renders it as-is, so we add it here.
hexo.extend.filter.register("after_render:html", (str, data) => {
    if (!ARTICLE_LAYOUTS.has(data.page.layout)) {
        return str;
    }

    let $ = load(str);
    // Only select tables directly in content. THis ensures the tables used for code blocks are not included.
    $(".article__content__body > table").each((_i, table) => {
        const $tableWrapper = $("<div></div>");
        $tableWrapper.addClass("table__wrapper");

        $(table).wrap($tableWrapper);
    });
    return $.html();
});
