"use strict";

import {
    _window,
    _document
} from "../lib/constants";
import $ from "../lib/$";
import eachNode from "../lib/eachNode";

/**
 * Inits article-specific html changes
 */
const initArticle = function () {
    const $pre = $("article pre", true);
    const $tables = $("article table", true);

    //Adjust Table classes
    eachNode($tables, $e => {
        const $clone = $e.cloneNode(true); //Deep-clones old table
        const $tableVirtual = _document.createElement("div"); //Manipulate a virtual node instead of the actual one to improve performance

        $clone.classList.add("table", "table-bordered", "table-hover");
        $tableVirtual.classList.add("table-responsive");
        $tableVirtual.appendChild($clone);

        $e.replaceWith($tableVirtual);
    });

    //Highlight Code Snippets
    eachNode($pre, $e => {
        _window.hljs.highlightBlock($e);
    });
};

export default initArticle;
