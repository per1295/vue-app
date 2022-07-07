import { createSSRApp } from "vue";
import createRouter from "./router";
import Index from "../frontend/index.vue";
import App from '../frontend/app.vue';
import store from "./vuex/index";

export default function() {
    const rootApp = typeof window === "undefined" ? Index : App;
    const app = createSSRApp(rootApp);
    const router = createRouter();

    app.use(router);
    app.use(store);

    return {
        app,
        router
    }
}