<template>
    <div class="header_top">
        <the-header-top-logo-vue/>
        <keep-alive>
            <component :is="isMobile ? TheHeaderTopMenuMobileVue : TheHeaderTopMenuVue"/>
        </keep-alive>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import useStore from "../../general/stores";

    import TheHeaderTopLogoVue from "./TheHeaderWithArrowTopLogo.vue";
    import TheHeaderTopMenuVue from "../home/components/TheHeaderTopMenu.vue";
    import TheHeaderTopMenuMobileVue from "../home/mobileComponents/TheHeaderTopMenuMobile.vue";

    const indexStore = useStore();
    const { isMobile } = storeToRefs(indexStore);
</script>

<style lang="scss">
    .header_top {
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        margin: 16px 0 0 0;
        max-width: 1184px;
        min-width: 1184px;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            max-width: 100%;
            min-width: 100%;
        }

        @media screen and ( max-width: 751px ) {
            max-width: 100%;
            min-width: 100%;
            margin: 0;
            background-color: rgb(14%, 18%, 21%, .7);;
        }
    }
</style>