// vite.config.ts
import { defineConfig } from "file:///C:/Users/Egor/Desktop/vue-app/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/Egor/Desktop/vue-app/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { VitePWA } from "file:///C:/Users/Egor/Desktop/vue-app/node_modules/vite-plugin-pwa/dist/index.mjs";
var vite_config_default = defineConfig({
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
    target: "esnext"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxFZ29yXFxcXERlc2t0b3BcXFxcdnVlLWFwcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcRWdvclxcXFxEZXNrdG9wXFxcXHZ1ZS1hcHBcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0Vnb3IvRGVza3RvcC92dWUtYXBwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tIFwidml0ZS1wbHVnaW4tcHdhXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gICAgcGx1Z2luczogWyBcclxuICAgICAgICB2dWUoKSxcclxuICAgICAgICBWaXRlUFdBKHtcclxuICAgICAgICAgICAgbWFuaWZlc3Q6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiVnVlLWFwcFwiLFxyXG4gICAgICAgICAgICAgICAgc2hvcnRfbmFtZTogXCJBcHBcIixcclxuICAgICAgICAgICAgICAgIGxhbmc6IFwiZW4tR0JcIixcclxuICAgICAgICAgICAgICAgIHN0YXJ0X3VybDogXCIvXCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcInN0YW5kYWxvbmVcIixcclxuICAgICAgICAgICAgICAgIHRoZW1lX2NvbG9yOiBcIiNkNGFmMzdcIixcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlZ1ZS1hcHAgV2ViLWFwcFwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZF9jb2xvcjogXCIjZDRhZjM3XCIsXHJcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogXCJhbnlcIixcclxuICAgICAgICAgICAgICAgIGljb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiLi9sb2dvX2ljb24ucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemVzOiBcIjQzeDQyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluamVjdFJlZ2lzdGVyOiBcInNjcmlwdFwiLFxyXG4gICAgICAgICAgICByZWdpc3RlclR5cGU6IFwiYXV0b1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBkZXZPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgXSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgICAgdGFyZ2V0OiBcImVzbmV4dFwiLFxyXG4gICAgfSxcclxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQW1SLFNBQVMsb0JBQW9CO0FBQ2hULE9BQU8sU0FBUztBQUNoQixTQUFTLGVBQWU7QUFFeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLElBQ0wsSUFBSTtBQUFBLElBQ0osUUFBUTtBQUFBLE1BQ0osVUFBVTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsU0FBUztBQUFBLFFBQ1QsYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLFFBQ2Isa0JBQWtCO0FBQUEsUUFDbEIsYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBLFVBQ0g7QUFBQSxZQUNJLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNWO0FBQUEsUUFDSjtBQUFBLE1BQ0o7QUFBQSxNQUNBLGdCQUFnQjtBQUFBLE1BQ2hCLGNBQWM7QUFBQSxNQUNkLFlBQVk7QUFBQSxRQUNSLFNBQVM7QUFBQSxNQUNiO0FBQUEsSUFDSixDQUFDO0FBQUEsRUFDTDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0gsUUFBUTtBQUFBLEVBQ1o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
