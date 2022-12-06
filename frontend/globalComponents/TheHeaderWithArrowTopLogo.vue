<template>
    <img @click="redirectToHome"
    class="header_top__logo"
    :src="isMobile && !isNarrowMobile ? mobile_menu :
    isMobile && isNarrowMobile ? narrow_mobile_menu : main_menu"
    alt="logo"
    >
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import useStore from "../../general/stores";
    import { useRouter } from "vue-router";

    import main_menu from "./images/cd_logo_5.png";
    import mobile_menu from "./mobileImages/cd_logo_9.png";
    import narrow_mobile_menu from "./mobileImages/mobile_menu__image.png";

    const indexStore = useStore();
    const { isMobile, isNarrowMobile } = storeToRefs(indexStore);

    const router = useRouter();

    function redirectToHome() {
        router.push({ path: "/home" });
    }
</script>

<style lang="scss">
    .header_top__logo {
        cursor: pointer;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            margin: 0 0 0 20px;
        }

        @media screen and ( max-width: 751px ) {
            margin: 14px 0 18px 28px;
        }
    }
</style>