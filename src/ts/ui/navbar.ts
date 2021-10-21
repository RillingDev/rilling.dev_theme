const initNavbar = (toggleButton: Element, menu: Element): void => {
	let isNavOpen = false;

	toggleButton.addEventListener("click", () => {
		isNavOpen = !isNavOpen;

		toggleButton.classList.toggle("collapsed");
		menu.classList.toggle("show");

		toggleButton.setAttribute("aria-expanded", String(isNavOpen));
		menu.setAttribute("aria-hidden", String(!isNavOpen));
	});
};

export { initNavbar };
