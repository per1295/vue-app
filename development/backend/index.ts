import "regenerator-runtime";
import express from "express";
import createApp from "../general/index";
import { renderToSimpleStream } from "vue/server-renderer";
import { resolve } from "path";
import { logError } from "./functions";
import { connect } from "mongoose";
import homeRouter from "./routes/home";
import globalRouter from "./routes/global";
import blogRouter from "./routes/blog";

let server = express();

const LOCAL_MONGODB_URL = "mongodb://localhost:27017/elegant-app";
const MONGODB_URL = process.env?.DOCKER_MONGODB_URL || LOCAL_MONGODB_URL;

server.set("env", process.env?.NODE_ENV);

server.use(
    express.static(resolve(__dirname, "../frontend")),
    express.static(resolve(__dirname, "../service-worker"))
);

server.use("/home", homeRouter);
server.use("/global", globalRouter);
server.use("/blog", blogRouter);

server.get(/\//, async (req, res) => {
    try {
        const { app, router } = createApp();

        await router.push(req.url);
        await router.isReady();

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
            ${process.env.NODE_ENV === "production" ? '<link rel="stylesheet" href="/style.css">' : '<link rel="stylesheet">'}
            <script src="/runtime~index.js"></script>
            <script src="/vue.bundle.js"></script>
            <script src="/${process.env.NODE_ENV === "production" ? "430" : "vendors-node_modules_regenerator-runtime_runtime_js-node_modules_fontsource_cardo_index_css-n-408662"}.js"></script>
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
    } catch (error) {
        let err = error as Error;
        logError(err);
    }
});

async function startServer() {
    await connect(MONGODB_URL);
    server.listen(3000, () => {
        console.log("Server is running.");
    });
}

startServer();