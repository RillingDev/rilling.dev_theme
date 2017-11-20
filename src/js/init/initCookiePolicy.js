import $ from "../lib/query";

/**
 * Checks if the cookie policy has been accepted and displays the notification if not.
 */
const initCookiePolicy = () => {
    if (!document.cookie.includes("cookies=true")) {
        const $cookieNotice = $(".cookienotice");
        const $cookieNoticeAccept = $("#cookienoticeAccept");

        $cookieNotice.style.display = "block";
        document.cookie = "cookies=true;expires=Fri, 31 Dec 9999 23:59:59 GMT";

        $cookieNoticeAccept.addEventListener("click", () => {
            $cookieNotice.style.display = "none";
        }, false);
    }
};

export default initCookiePolicy;
