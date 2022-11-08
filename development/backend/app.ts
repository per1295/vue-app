import express from "express";
import createApp from "../general/index";
import { renderToSimpleStream } from "vue/server-renderer";
import { resolve } from "path";
import { loggedHandlers, getArgs } from "./functions";

import homeRouter from "./routes/home";
import globalRouter from "./routes/global";
import blogRouter from "./routes/blog";

const app = express();

app.use(
    express.static(resolve(__dirname, "../frontend")),
    express.static(resolve(__dirname, "../service-worker"))
);

app.use("/home", homeRouter);
app.use("/global", globalRouter);
app.use("/blog", blogRouter);

app.get(/\//, loggedHandlers(
    async (req, res) => {
        const { app, router } = createApp();

        await router.push(req.url);
        await router.isReady();

        const { env } = getArgs();

        const startHTML = `
        <!DOCTYPE html>
        <html lang="en" translate="no">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Loading...</title>
            <link rel="manifest" href="/manifest.json">
            <meta name="mobile-web-app-capable" content="yes">
            <meta name="apple-mobile-web-app-capable" content="yes">
            <meta name="application-name" content="App">
            <meta name="apple-mobile-web-app-title" content="App">
            <meta name="theme-color" content="#d4af37">
            <meta name="msapplication-navbutton-color" content="#d4af37">
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
            <meta name="msapplication-starturl" content="/home">
            <link rel="icon" href="/logo_icon.png">
            ${env === "production" ? '<link rel="stylesheet" href="/style.css">' : ''}
            <script src="/runtime~index.js"></script>
            <script src="/vue.bundle.js"></script>
            <script src="/${env === "production" ? "686" : "vendors-node_modules_pinia_index_js-node_modules_regenerator-runtime_runtime_js-node_modules_-47eb87"}.js"></script>
            <script src="/serviceWorker.js"></script>
            <script defer src="/index.js"></script>
        </head>
        <body>
        `;
        const endHTML = `
        </body>
        </html>
        `;
        
        res.write(startHTML);
        renderToSimpleStream(app, {}, {
            push(chunk) {
                if ( chunk === null ) res.end(endHTML);
                else res.write(chunk);
            },
            destroy(error) {
                let err = error as Error;
                if ( err ) throw new Error(err.message);
            }
        });
    }
));

export default app;