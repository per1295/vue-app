<template>
    <the-layout-vue>
        <the-header-vue
        :background-image="backgroundImage"
        :mobile-background-image="mobileBackgroundImage"
        />
        <the-main-vue/>
        <the-footer-vue
        :additional-styles="
        isMobile ?
        { 'margin': '0' }
        :
        { 'margin': '6px 0 0 0' }
        "/>
    </the-layout-vue>
</template>

<script setup lang="ts">
    import { onMounted } from "vue";
    import { storeToRefs } from "pinia";
    import useStore from "../../general/stores";

    import TheHeaderVue from "../globalComponents/TheHeader.vue";
    import TheMainVue from "./components/TheMain.vue";
    import TheFooterVue from "../globalComponents/TheFooter.vue";
    import TheLayoutVue from "../globalComponents/TheLayout.vue";

    import backgroundImage from "./images/cd_intro_work_page_background_2.png";
    import mobileBackgroundImage from "./mobileImages/cd_work_intro_background_4.png";

    onMounted(() => document.title = "Work");

    const indexStore = useStore();
    const { isMobile } = storeToRefs(indexStore);
</script>