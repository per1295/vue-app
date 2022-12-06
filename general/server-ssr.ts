import { renderToString } from "vue/server-renderer";
import createApp from "./index.js";
import type { Request } from "express";

export async function render(req: Request) {
    const { app, router } = createApp();

    await router.push(req.url);
    await router.isReady();

    const ctx = {};

    const appHTML = await renderToString(app, ctx);

    return appHTML;
}