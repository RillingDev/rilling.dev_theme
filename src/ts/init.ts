import { initArticle } from "./ui/article";
import { initNavbar } from "./ui/navbar";

const init = (document: Document, layout: string): void => {
    initNavbar(document);

    // if (layout === "post" || layout === "index" || layout === "archive") {
    //     initArticle(document);
    // }
};

export { init };
