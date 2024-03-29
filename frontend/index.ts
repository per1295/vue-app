import "regenerator-runtime";
import createApp from "../general/index";
import { setMatchMedia } from "../functions/index";
import { storeToRefs } from "pinia";
import useStore from "../general/stores";
import useDownloadImage from "../general/stores/downloadImage";
import useMenuNavbar from "../general/stores/menuNavbar";

let lastDocumentWidth = document.documentElement.clientWidth;
let lastTimeout: NodeJS.Timeout;

window.addEventListener("resize", () => {
    if ( lastTimeout ) clearTimeout(lastTimeout);
    lastTimeout = setTimeout(() => {
        const documentWidth = document.documentElement.clientWidth;
        if ( lastDocumentWidth !== documentWidth ) {
            setMatchMedia();
            lastDocumentWidth = documentWidth;
        }
    }, 500);
});

window.addEventListener("orientationchange", () => setTimeout(setMatchMedia, 10));

window.addEventListener("load", setMatchMedia);

window.addEventListener("pointerdown", () => {
    const indeStore = useStore();
    const { setPointerOnDocumentTrue } = indeStore;

    const downloadImageStore = useDownloadImage();
    const { setImgClickedFalse } = downloadImageStore;

    setPointerOnDocumentTrue();
    setImgClickedFalse();
});

window.addEventListener("pointermove", (event) => {
    const menuNavbarStore = useMenuNavbar();
    const { wasDownOnGrab } = storeToRefs(menuNavbarStore);
    const { setYGrabPercent } = menuNavbarStore;

    if ( !wasDownOnGrab.value ) return;
    let y = event.clientY, windowHeight = document.documentElement.clientHeight;
    let percent = 100 - Math.floor( ( y + 22.5 ) * 100 / windowHeight);
    if ( percent < 0 ) percent = 0;
    if ( percent > 110 ) percent = 110;
    setYGrabPercent(percent);
});

async function startApp() {
    const { app, router } = createApp();
    await router.isReady();
    app.mount("#app");
}

startApp();