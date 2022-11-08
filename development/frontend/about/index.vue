<template>
    <the-header-with-arrow-vue
    :background-image="backgroundImage"
    :mobile-background-image="mobileBackgroundImage"
    selector=".main_bottom"
    />
    <the-main-vue/>
    <the-footer-vue :additional-styles="{ 'margin': '0' }"/>
    <the-download-vue/>
</template>

<script setup lang="ts">
    import { onMounted } from "vue";

    import TheHeaderWithArrowVue from "../globalComponents/TheHeaderWithArrow.vue";
    import TheMainVue from "./components/TheMain.vue";
    import TheFooterVue from "../globalComponents/TheFooter.vue";
    import TheDownloadVue from "../globalComponents/TheDownload.vue";

    import backgroundImage from "./images/cd_intro_about_background_2.png";
    import mobileBackgroundImage from "./mobileImages/cd_intro_background_4.png";

    onMounted(() => document.title = "About");
</script>