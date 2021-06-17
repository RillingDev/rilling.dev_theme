import { initNavbar } from "./ui/navbar";

const init = (document: Document, _layout: string): void => {
    initNavbar(
        document.getElementById("navbarToggleButton")!,
        document.getElementById("navbarMenu")!
    );

    // if (layout === "post" || layout === "index" || layout === "archive") {
    //     initArticle(document);
    // }
};

export { init };
