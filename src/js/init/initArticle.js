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
        const $tableClone = $e.cloneNode(true); //Deep-clones old table
        const $tableWrapperVirtual = _document.createElement("div"); //Manipulate a virtual node instead of the actual one to improve performance

        $tableClone.classList.add("table", "table-bordered", "table-hover");
        $tableWrapperVirtual.classList.add("table-responsive");
        $tableWrapperVirtual.appendChild($tableClone);

        $e.replaceWith($tableWrapperVirtual);
    });

    //Highlight Code Snippets
    eachNode($pre, $e => {
        _window.hljs.highlightBlock($e);
    });
};

export default initArticle;
