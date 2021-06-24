import { initArticle } from "./ui/article";
import { initNavbar } from "./ui/navbar";

const ARTICLE_LAYOUTS = new Set(["post", "archive", "index"]);

const init = (document: Document, layout: string): void => {
    initNavbar(
        document.getElementById("navbarToggleButton")!,
        document.getElementById("navbarMenu")!
    );

    if (ARTICLE_LAYOUTS.has(layout)) {
        initArticle(document);
    }
};

export { init };
