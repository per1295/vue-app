<template>
    <component
    :is="isMobile ? TheHeaderWithArrowTopVue : TheHeaderVue"
    :background-image="backgroundImage"
    :mobile-background-image="''"
    />
    <the-main-vue/>
    <the-footer-vue
    :additional-styles="{ 'margin': `${isMobile ? 148 : 86}px 0 0 0` }"
    />
    <the-download-vue/>
</template>

<script setup lang="ts">
    import { onMounted } from "vue";
    import { storeToRefs } from "pinia";
    import useStore from "../../general/stores";

    import TheHeaderVue from "../globalComponents/TheHeader.vue";
    import TheHeaderWithArrowTopVue from "../globalComponents/TheHeaderWithArrowTop.vue";
    import TheMainVue from "./components/TheMain.vue";
    import TheFooterVue from "../globalComponents/TheFooter.vue";
    import TheDownloadVue from "../globalComponents/TheDownload.vue";

    import backgroundImage from "./images/cd_intro_work_page_background_2_contacts.png";

    const indexStore = useStore();
    const { isMobile } = storeToRefs(indexStore);

    onMounted(() => document.title = "Contacts");
</script>