import { initNavbar } from "./ui/navbar";

const init = (document: Document, _layout: string): void => {
    initNavbar(
        document.getElementById("navbarToggleButton")!,
        document.getElementById("navbarMenu")!
    );
};

export { init };
