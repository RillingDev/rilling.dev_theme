const prefersColorScheme = (colorScheme: string): boolean =>
    window.matchMedia(`(prefers-color-scheme: ${colorScheme})`).matches;

const initTheme = (container: HTMLElement, toggleButton: HTMLElement): void =>
    toggleButton.addEventListener("click", () => {
        container.classList.toggle(
            `theme--${prefersColorScheme("dark") ? "light" : "dark"}`
        );
    });

export { initTheme };
