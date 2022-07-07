<template>
    <button class="header_top__menu_mobile" @click="setIsMenuOpen(true), setYGrabPercent(0)">
        <img src="../mobileImages/cd_menu_icon_11.png" alt="mobile_icon">
    </button>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { setIsMenuOpen, setYGrabPercent } from "../../../functions/index";

    export default defineComponent({
        name: "TheHeaderTopMenuMobile",
        methods: {
            setIsMenuOpen,
            setYGrabPercent
        }
    })
</script>

<style lang="scss">
    .header_top__menu_mobile {
        display: none;

        @media screen and ( max-width: 751px ) {
            width: 87px;
            height: 113px;
            opacity: .9;
            background-color: rgba(39, 51, 56, .9);;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            cursor: pointer;
        }
    }
</style>