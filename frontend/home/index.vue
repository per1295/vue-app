<template>
    <the-layout-vue>
        <the-header-vue/>
        <the-main-vue/>
        <the-footer-vue/>
    </the-layout-vue>
</template>

<script setup lang="ts">
    import { onMounted } from "vue";
    import TheHeaderVue from "./components/TheHeader.vue";
    import TheMainVue from "./components/TheMain.vue";
    import TheFooterVue from "../globalComponents/TheFooter.vue";
    import TheLayoutVue from "../globalComponents/TheLayout.vue";

    onMounted(() => document.title = "Home");
</script>