import { initNavbar } from "./ui/navbar";

document.addEventListener("DOMContentLoaded", () =>
	initNavbar(
		document.getElementById("navbarToggleButton") as HTMLButtonElement,
		document.getElementById("navbarMenu") as HTMLElement
	)
);
