const initArticle = (document: Document): void => {
    const $tables = document.querySelectorAll(".article-content > table");

    $tables.forEach($table => {
        // Manipulate a virtual element instead of the actual one to improve performance
        const $tableClone = <Element>$table.cloneNode(true);
        const $tableWrapperVirtual = document.createElement("div");

        $tableClone.classList.add("table", "table-bordered", "table-hover");
        $tableWrapperVirtual.classList.add("table-responsive");
        $tableWrapperVirtual.appendChild($tableClone);

        $table.replaceWith($tableWrapperVirtual);
    });
};

export { initArticle };
