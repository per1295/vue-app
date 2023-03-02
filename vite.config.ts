import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    plugins: [ 
        vue(),
        VitePWA({
            workbox: {
                runtimeCaching: [
                        {
                            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                            handler: 'CacheFirst',
                            options: {
                                cacheName: 'google-fonts-cache',
                                expiration: {
                                    maxEntries: 10,
                                    maxAgeSeconds: 60 * 60 * 24 * 365
                                },
                                cacheableResponse: {
                                    statuses: [0, 200]
                                }
                            }
                        },
                        {
                            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
                            handler: 'CacheFirst',
                            options: {
                                cacheName: 'gstatic-fonts-cache',
                                expiration: {
                                    maxEntries: 10,
                                    maxAgeSeconds: 60 * 60 * 24 * 365
                                },
                                cacheableResponse: {
                                    statuses: [0, 200]
                                },
                            }
                        }
                ]
            },
            manifest: {
                name: "Vue-app",
                short_name: "App",
                lang: "en-GB",
                start_url: "/home",
                display: "standalone",
                theme_color: "#d4af37",
                description: "Vue-app Web-app",
                background_color: "#d4af37",
                orientation: "any",
                icons: [
                    {
                        src: "logo_icon.png",
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