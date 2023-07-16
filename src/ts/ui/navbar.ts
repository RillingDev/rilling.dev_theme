export const initNavbar = (
	toggleButton: HTMLButtonElement,
	menu: HTMLElement,
): void => {
	let isNavOpen = false;

	toggleButton.addEventListener("click", () => {
		isNavOpen = !isNavOpen;

		toggleButton.classList.toggle("collapsed");
		toggleButton.setAttribute("aria-expanded", String(isNavOpen));

		menu.classList.toggle("show");
		menu.setAttribute("aria-hidden", String(!isNavOpen));
	});
};
