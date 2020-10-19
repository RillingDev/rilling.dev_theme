const prefersColorScheme = (colorScheme: string): boolean =>
    window.matchMedia(`(prefers-color-scheme: ${colorScheme})`).matches;

const initDarkMode = (
    container: HTMLElement,
    toggleButton: HTMLElement
): void => {
    const darkModeByDefault = prefersColorScheme("dark");

    toggleButton.addEventListener("click", () => {
        container.classList.toggle(
            `theme--${darkModeByDefault ? "light" : "dark"}`
        );
    });
};

export { initDarkMode };
