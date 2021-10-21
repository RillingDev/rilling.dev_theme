import { initNavbar } from "./ui/navbar";

const init = (document: Document): void => {
	initNavbar(
		document.getElementById("navbarToggleButton")!,
		document.getElementById("navbarMenu")!
	);
};

export { init };
