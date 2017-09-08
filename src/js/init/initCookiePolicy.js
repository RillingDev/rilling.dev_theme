import {
    _document
} from "../lib/constants";
import $ from "../lib/$";

/**
 * Checks if the cookie policy has been accepted and displays the notification if not.
 */
const initCookiePolicy = function () {
    const cookieString = "cookies=true";

    if (!_document.cookie.includes(cookieString)) {
        const $cookieNotice = $(".cookienotice");
        const $cookieNoticeAccept = $("#cookienoticeAccept");

        $cookieNotice.style.display = "block";
        _document.cookie = cookieString + ";expires=Fri, 31 Dec 9999 23:59:59 GMT";

        $cookieNoticeAccept.addEventListener("click", () => {
            $cookieNotice.style.display = "none";
        }, false);
    }
};

export default initCookiePolicy;
