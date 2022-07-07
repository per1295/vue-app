import "regenerator-runtime";
import "@fontsource/open-sans";
import "@fontsource/cardo"
import createApp from "../general/index";
const { app, router } = createApp();
import {
    setMatchMedia,
    setIsPointerOnDocument,
    logError,
    setWasImgClicked,
    setYGrabPercent,
    isDownOnGrab,
    setIsMenuOpen
} from "../functions/index";
import { SET_IS_NARROW_MOBILE, SET_IS_MIDDLE_DEVICE } from "../general/vuex/index";

window.addEventListener("resize", () => {
    setTimeout(() => {
        setMatchMedia();
        setMatchMedia("(max-width: 680px)", SET_IS_NARROW_MOBILE);
        setMatchMedia("(min-width: 751px) and (max-width: 1280px)", SET_IS_MIDDLE_DEVICE);
    }, 500);
    
});

window.addEventListener("orientationchange", () => {
    setTimeout(() => {
        setMatchMedia();
        setMatchMedia("(max-width: 680px)", SET_IS_NARROW_MOBILE);
        setMatchMedia("(min-width: 751px) and (max-width: 1280px)", SET_IS_MIDDLE_DEVICE);
    }, 10);
});

window.addEventListener("load", () => {
    setMatchMedia();
    setMatchMedia("(max-width: 680px)", SET_IS_NARROW_MOBILE);
    setMatchMedia("(min-width: 751px) and (max-width: 1280px)", SET_IS_MIDDLE_DEVICE);
});

window.addEventListener("pointerdown", () => {
    setIsPointerOnDocument(true);
    setWasImgClicked(false);
});

window.addEventListener("pointermove", (event) => {
    if ( !isDownOnGrab() ) return;
    let y = event.clientY, windowHeight = document.documentElement.clientHeight;
    let percent = 100 - Math.floor( ( y + 22.5 ) * 100 / windowHeight);
    if ( percent < 0 ) percent = 0;
    if ( percent > 110 ) percent = 110;
    setYGrabPercent(percent);
});

window.addEventListener("pointercancel", () => {
    if ( !isDownOnGrab() ) return;
    setIsMenuOpen(false);
    setYGrabPercent(110);
});

async function registerServiceWorker() {
    try {
        if ( "serviceWorker" in navigator ) {
            await navigator.serviceWorker.register("/serviceWorker.js", { scope: "/" });
        }
    } catch (error) {
        let err = error as Error;
        logError(err);
    }
}

registerServiceWorker();

async function startApp() {
    await router.isReady();
    app.mount("#app");
}

startApp();