import "regenerator-runtime/runtime";
import favicon from "../../logo_icon.png";
import onlineImg from "./images/internet-access.png";
import offlineImg from "./images/offline-internet.png";

function getPath(url: string): string {
    let path = url.replace(/https?\:\/\/[\w\d\:]+?\//, "");
    return path;
}

function logError<TypeError extends Error>(err: TypeError): TypeError {
    let errMessage = `${err.name}: ${err.message}`;
    console.error(errMessage);
    return err;
}

async function startWebWorker() {
    const globalScope = self as unknown as ServiceWorkerGlobalScope;

    let masOfSourceIcons = [
        "/manifest.json",
        "/logo_icon.png",
        "/favicon.png",
        "/index.js",
        "/style.css",
        "/serviceWorker.js",
    ];

    globalScope.addEventListener("online", () => {
        if ( !("Notification" in self) ) return;
        if ( Notification.permission !== "granted" ) return;
        const goToSiteNotification = new Notification("web-app", {
            body: "It looks like you have a connection, don`t want to visit the web-app",
            lang: "en-US",
            tag: "start",
            icon: onlineImg,
            vibrate: [200, 100, 200],
            data: {
                url: globalScope.origin + "/web-app/Home"
            }
        });

        goToSiteNotification.addEventListener("click", async () => {
            try {
                goToSiteNotification.close();
                const clientList = await globalScope.clients.matchAll({ type: "window" }) as WindowClient[];
                const windowFocus = clientList.some(client => client.url === goToSiteNotification.data.url ? ( client.focus(), true) : false);
                if ( !windowFocus ) {
                    let windowClient = await globalScope.clients.openWindow(globalScope.origin + "/web-app/Home");
                    if ( !windowClient ) return;
                    await windowClient.focus();
                }
            } catch (err) {
                let error = err as Error;
                logError(error);
            }
        });
    });

    globalScope.addEventListener("offline", () => {
        if ( !("Notification" in self) ) return;
        if ( Notification.permission !== "granted" ) return;
        const offlineNotification = new Notification("web-app", {
            body: "It looks like you have lost your internet connection, please try to connect again.",
            lang: "en-US",
            tag: "start",
            icon: offlineImg,
            vibrate: [200, 100, 200]
        });
        offlineNotification.addEventListener("click", () => {
            offlineNotification.close();
        });
    });

    globalScope.addEventListener("install", (event) => {
        async function addCache() {
            let cache = await caches.open("v1");
            return cache.addAll(masOfSourceIcons);
        }

        event.waitUntil(addCache());
    });

    globalScope.addEventListener("fetch", (event) => {
        let method = event.request.method.toLowerCase(), pathName = getPath(event.request.url);

        async function getResponse() {
            try {
                let googleMapURL = event.request.url.match(/maps?/), headers = event.request.headers;
                if ( googleMapURL !== null ) return await fetch(event.request, {
                    headers
                });
                let response = await caches.match(event.request);
                if ( typeof response !== "undefined" ) return response;
                let newResponse = await fetch(event.request, { headers });
                let cloneResponse = newResponse.clone();
                let cache = await caches.open("v1");
                cache.put(event.request, cloneResponse);
                return newResponse;
            } catch (err) {
                let error = err as Error;
                let errorMessage = `${error.name}: ${error.message}`;
                console.log(errorMessage);
                return new Response(
                    `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <meta name="google" value="notranslate">
                        <title>Loading...</title>
                        <link rel="manifest" href="/manifest.json">
                        <meta name="mobile-web-app-capable" content="yes">
                        <meta name="apple-mobile-web-app-capable" content="yes">
                        <meta name="application-name" content="App">
                        <meta name="apple-mobile-web-app-title" content="App">
                        <meta name="theme-color" content="#7beec7">
                        <meta name="msapplication-navbutton-color" content="#7beec7">
                        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
                        <meta name="msapplication-starturl" content="/">
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        <link rel="apple-touch-icon" type="image/x-icon" href=${favicon}>
                        <link rel="shortcut icon" type="image/x-icon" href=${favicon}>
                        <link rel="preconnect" href="https://fonts.googleapis.com">
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
                        <link rel="preconnect" href="https://fonts.googleapis.com">
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet">
                        <script src="https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js"></script>
                        <script defer src="/sw.js"></script>
                        <script defer src="/frontend.chunks.bundle.js"></script>
                        <script defer src="/frontend.runtime.js"></script>
                        <script defer src="/frontend.vendors.bundle.js"></script>
                        <script defer src="/wsFrontend.js"></script>
                        </head>
                        <body>
                            <div id="root" translate="no"></div>
                        </body>
                        </html>
                    `,
                    {
                        headers: {
                            "Content-Type": "text/html; charset=utf-8"
                        }
                    }
                );
            }
        }

        if ( (method === "get" || method === "head") && !/server/.test(pathName) ) event.respondWith(getResponse());
    });

    globalScope.addEventListener("activate", (event) => {
        async function clearCache() {
            let cacheKeepList = [ "v2" ];
            let keyList = await caches.keys();
            let keyListCleared = keyList.map(key => {
                if ( !cacheKeepList.includes(key) ) return caches.delete(key);
            });
            return Promise.all(keyListCleared);
        }

        event.waitUntil(clearCache());
    });
}

startWebWorker();