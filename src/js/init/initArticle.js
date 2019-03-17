import $ from "../util/query";
import eachNode from "../util/eachNode";

const hljs = window.hljs;

/**
 * Inits article-specific html changes
 */
const initArticle = () => {
    const $pre = $("article pre", true);
    const $tables = $("article table", true);

    eachNode($tables, $e => {
        // Manipulate a virtual node instead of the actual one to improve performance
        const $tableClone = $e.cloneNode(true);
        const $tableWrapperVirtual = document.createElement("div");

        $tableClone.classList.add("table", "table-bordered", "table-hover");
        $tableWrapperVirtual.classList.add("table-responsive");
        $tableWrapperVirtual.appendChild($tableClone);

        $e.replaceWith($tableWrapperVirtual);
    });

    eachNode($pre, $e => {
        // noinspection JSUnresolvedFunction
        hljs.highlightBlock($e);
    });
};

export default initArticle;
