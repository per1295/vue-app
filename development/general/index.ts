import { createSSRApp } from "vue";
import { createPinia } from "pinia";
import createRouter from "./router";
import Index from "../frontend/index.vue";
import App from '../frontend/App.vue';

export default function() {
    const rootApp = typeof window === "undefined" ? Index : App;
    const app = createSSRApp(rootApp);
    const router = createRouter();
    const pinia = createPinia();

    app.use(pinia);
    app.use(router);

    return {
        app,
        router
    }
}