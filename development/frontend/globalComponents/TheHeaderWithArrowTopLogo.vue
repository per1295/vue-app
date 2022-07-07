<template>
    <img @click="redirectToHome"
    class="header_top__logo"
    :src="isMobile && !isNarrowMobile ? mobile_menu :
    isMobile && isNarrowMobile ? narrow_mobile_menu : main_menu"
    alt="logo"
    >
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import main_menu from "./images/cd_logo_5.png";
    import mobile_menu from "./mobileImages/cd_logo_9.png";
    import narrow_mobile_menu from "./mobileImages/mobile_menu__image.png";

    export default defineComponent({
        name: "TheHeaderLogo",
        methods: {
            redirectToHome() {
                this.$router.push({ path: "/home" });
            }
        },
        data() {
            return {
                mobile_menu,
                main_menu,
                narrow_mobile_menu
            }
        },
        computed: {
            isMobile() {
                return this.$store.state.isMobile;
            },
            isNarrowMobile() {
                return this.$store.state.isNarrowMobile;
            }
        }
    })
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