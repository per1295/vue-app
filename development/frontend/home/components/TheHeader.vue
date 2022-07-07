<template>
    <header>
        <the-header-top-vue/>
        <the-header-main-vue/>
        <keep-alive>
            <component :is="isMobile ? 'TheHeaderArrowButtonMobileVue' : null" />
        </keep-alive>
    </header>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import TheHeaderTopVue from "../../globalComponents/TheHeaderWithArrowTop.vue";
    import TheHeaderMainVue from "./TheHeaderMain.vue";
    import TheHeaderArrowButtonMobileVue from "../mobileComponents/TheHeaderArrowButtonMobile.vue";

    export default defineComponent({
        name: "TheHeader",
        components: {
            TheHeaderTopVue,
            TheHeaderMainVue,
            TheHeaderArrowButtonMobileVue
        },
        computed: {
            isMobile() {
                return this.$store.state.isMobile;
            }
        }
    });
</script>

<style lang="scss" scoped>
    header {
        background: #1c60a7 url("../images/cd_intro_background_2.png");
        min-width: 100%;
        max-width: 100%;
        min-height: 699px;
        max-height: 699px;
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        @media screen and ( max-width: 751px ) {
            background: #1c60a7 url("../mobileImages/header_mobile__background.png");
            min-height: 1337px;
            height: 1337px;
            max-height: 1337px;
        }

        @media screen and ( max-width: 680px ) {
            background-position: center;
        }
    }
</style>