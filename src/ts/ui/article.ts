const initArticle = (document: Document): void => {
    const $tables = document.querySelectorAll(".article-content > table");

    $tables.forEach(($table) => {
        // Manipulate a virtual element instead of the actual one to improve performance
        const $tableClone = $table.cloneNode(true) as Element;
        $tableClone.classList.add("table", "table-bordered", "table-hover");

        const $tableWrapperVirtual = document.createElement("div");
        $tableWrapperVirtual.classList.add("table-responsive");
        $tableWrapperVirtual.appendChild($tableClone);

        $table.replaceWith($tableWrapperVirtual);
    });
};

export { initArticle };
