import { init } from "./init";

import "@fortawesome/fontawesome-free/attribution.js";

declare global {
    interface Window {
        rilling: { init: typeof init };
    }
}

window.rilling = {
    init,
};
