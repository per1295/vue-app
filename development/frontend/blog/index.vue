<template>
    <component
    :is="isMobile ? TheHeaderWithArrowTopVue : TheHeaderVue"
    :background-image="cd_intro_blog_background_2_blog"
    :mobile-background-image="''"
    />
    <the-main-vue/>
    <the-footer-vue/>
    <the-download-vue/>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import { onMounted } from "vue";
    import useStore from "../../general/stores";

    import TheHeaderVue from "../globalComponents/TheHeader.vue";
    import TheHeaderWithArrowTopVue from "../globalComponents/TheHeaderWithArrowTop.vue";
    import TheMainVue from "./components/TheMain.vue";
    import TheFooterVue from "../globalComponents/TheFooter.vue";
    import TheDownloadVue from "../globalComponents/TheDownload.vue";

    import cd_intro_blog_background_2_blog from "./images/cd_intro_blog_background_2_blog.png";

    const indexStore = useStore();
    const { isMobile } = storeToRefs(indexStore);

    onMounted(() => document.title = "Blog");
</script>