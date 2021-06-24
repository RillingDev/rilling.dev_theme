const initArticle = (document: Document): void => {
    // Tables need a wrapper element, but due to being rendered via markdown cannot have it added during build
    document.querySelectorAll("article table").forEach((table) => {
        const tableWrapper = document.createElement("div");
        tableWrapper.classList.add("table__wrapper");
        tableWrapper.appendChild(table.cloneNode(true));

        table.replaceWith(tableWrapper);
    });
};

export { initArticle };
