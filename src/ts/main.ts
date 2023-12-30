import { initNavbar } from "./ui/navbar.ts";

document.addEventListener("DOMContentLoaded", () =>
	initNavbar(
		document.getElementById("navbarToggleButton") as HTMLButtonElement,
		document.getElementById("navbarMenu")!,
	),
);
