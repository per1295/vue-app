import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    plugins: [ 
        vue(),
        VitePWA({
            manifest: {
                name: "Vue-app",
                short_name: "App",
                lang: "en-GB",
                start_url: "/",
                display: "standalone",
                theme_color: "#d4af37",
                description: "Vue-app Web-app",
                background_color: "#d4af37",
                orientation: "any",
                icons: [
                    {
                        src: "./logo_icon.png",
                        sizes: "43x42",
                        type: "image/png"
                    }
                ]
            },
            injectRegister: "script",
            registerType: "autoUpdate",
            devOptions: {
                enabled: true
            }
        })
    ],
    build: {
        target: "esnext",
    },
})