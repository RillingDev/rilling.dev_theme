import { init } from "./init";

declare global {
    interface Window {
        rilling: { init: typeof init };
    }
}

window.rilling = {
    init,
};
