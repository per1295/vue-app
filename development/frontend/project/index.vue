<template>
    <the-header-with-arrow-vue
    :background-image="backgroundImage"
    :mobile-background-image="mobileBackgroundImage"
    :selector="headerSelector"
    />
    <the-main-vue/>
    <the-footer-vue
    :additional-styles="styleForFooter"
    />
    <the-download-vue/>
</template>

<script setup lang="ts">
    import { onMounted, computed } from "vue";
    import { storeToRefs } from "pinia";
    import useStore from "../../general/stores";

    import TheHeaderWithArrowVue from "../globalComponents/TheHeaderWithArrow.vue";
    import TheMainVue from "./components/TheMain.vue";
    import TheFooterVue from "../globalComponents/TheFooter.vue";
    import TheDownloadVue from "../globalComponents/TheDownload.vue";

    import backgroundImage from "./images/cd_intro_project_background_2_project.png";
    import mobileBackgroundImage from "./mobileImages/cd_intro_background_4_project.png";

    onMounted(() => document.title = "Project");

    const indexStore = useStore();
    const { isMobile } = storeToRefs(indexStore);

    const headerSelector = computed(() => isMobile.value ? ".main_conteiner__leftColum" : ".main_buttons");
    const styleForFooter = computed(() => ({
        margin: `${isMobile ? 32 : 73}px 0 0 0`
    }));
</script>