<template>
    <the-header-vue/>
    <the-main-vue/>
    <the-footer-vue/>
    <the-download-vue/>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import TheHeaderVue from "./components/TheHeader.vue";
    import TheMainVue from "./components/TheMain.vue";
    import TheFooterVue from "../globalComponents/TheFooter.vue";
    import TheDownloadVue from "../globalComponents/TheDownload.vue";

    export default defineComponent({
        name: "Home",
        components: {
            TheHeaderVue,
            TheMainVue,
            TheFooterVue,
            TheDownloadVue
        },
        mounted() {
            document.title = "Home";
        }
    });
</script>