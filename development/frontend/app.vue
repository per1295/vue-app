<template>
    <router-view/>
</template>

<script setup lang="ts">
    import { watch } from "vue";
    import { storeToRefs } from "pinia";
    import useMenuNavbar from "../general/stores/menuNavbar";

    const menuNavbarStore = useMenuNavbar();
    const { isMenuOpen } = storeToRefs(menuNavbarStore);

    watch(isMenuOpen, nowValue => {
        const bodyStyle = document.body.style;
        if ( nowValue ) {
            bodyStyle.touchAction = "pan-up";
            bodyStyle.overflowY = "hidden";
        } else {
            bodyStyle.removeProperty("touch-action");
            bodyStyle.removeProperty("overflow-y");
        }
    });
</script>

<style lang="scss">
    body {
        margin: 0 auto;
        padding: 0;
        height: 100%;
        width: 100%;

        & {
            scrollbar-width: thin;
            scrollbar-color: #d4af37 #505d68;
        }

        &::-webkit-scrollbar-button {
            display: none;
        }

        &::-webkit-scrollbar {
            width: 15px;
            background-color: #505d68;
        }

        &::-webkit-scrollbar-thumb {
            height: 12px;
            background-color: #d4af37;
            border-radius: 20px;
            border: 3px solid #505d68;
        }

        &::-webkit-scrollbar-thumb:hover {
            background-color: #ffc400;
        }
    }
</style>