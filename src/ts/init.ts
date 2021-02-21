import { initNavbar } from "./ui/navbar";
import { initTheme } from "./ui/theme";

const init = (document: Document, _layout: string): void => {
    initTheme(document.body, document.getElementById("themeToggleButton")!);
    initNavbar(
        document.getElementById("navbarToggleButton")!,
        document.getElementById("navbarMenu")!
    );

    // if (layout === "post" || layout === "index" || layout === "archive") {
    //     initArticle(document);
    // }
};

export { init };
