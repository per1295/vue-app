import express from "express";
import { initMongoDB, getArgs } from "./backend/functions.js";
import mongoose from "mongoose";
import { config } from "dotenv";
import { resolve, dirname } from "path";
import { createServer, ViteDevServer } from "vite";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";

import homeRouter from "./backend/routes/home.js";
import globalRouter from "./backend/routes/global.js";
import blogRouter from "./backend/routes/blog.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

config();

const { DOCKER_MONGODB_URL, LOCAL_MONGODB_URL, PRODUCTION_MONGODB_URL, PORT } = process.env;

const MONGODB_URL = DOCKER_MONGODB_URL || PRODUCTION_MONGODB_URL || LOCAL_MONGODB_URL as string;

mongoose.set("strictQuery", true);

const { NODE_ENV } = getArgs();

async function server() {
    const app = express();

    let vite: ViteDevServer;

    app.set("env", NODE_ENV);
    app.disable("x-powered-by");

    if ( NODE_ENV === "development" ) {
        vite = await createServer({
            server: { middlewareMode: true },
            appType: "custom"
        });
    
        app.use(vite.middlewares);
    } else {
        app.use(
            express.static(resolve(__dirname, "dist/client")),
        );
    }

    app.use("/home", homeRouter);
    app.use("/global", globalRouter);
    app.use("/blog", blogRouter);

    app.use("*", async (req, res, next) => {
        const originalURL = req.originalUrl;

        try {
            let template = await readFile(
                resolve(__dirname, NODE_ENV === "production" ? "dist/client/index.html" : "index.html"),
                "utf-8"
            );

            if ( NODE_ENV === "development" ) template = await vite.transformIndexHtml(originalURL, template);

            const { render } =
            NODE_ENV === "production"
            ?
            await import("./dist/server/server-ssr.js")
            :
            await vite.ssrLoadModule("/general/server-ssr.ts");

            const appHTML = await render(req);

            const html = template.replace("<!--ssr-outlet-->", appHTML);

            res.status(200).set({ "Content-Type": "text/html" }).end(html);
        } catch (error) {
            const e = error as Error;
            vite.ssrFixStacktrace(e);
            next(e);
        }
    });

    return app;
}

async function startServer() {
    await mongoose.connect(MONGODB_URL, { dbName: "vue-app" });

    await initMongoDB();

    const app = await server();

    app.listen(PORT, () => {
        console.log(`Server is working on: http://localhost:${PORT}\nNODE_ENV: ${NODE_ENV}`);
    });
}

startServer();