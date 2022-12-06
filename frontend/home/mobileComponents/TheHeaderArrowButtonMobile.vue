<template>
    <img
    @click="scrollToElement('.categoryH3')"
    class="header_arrowButton"
    src="../mobileImages/img_arrow_down_6.png"
    alt="arrow_down">
</template>

<script setup lang="ts">
    import { scrollToElement } from "../../../functions";
</script>

<style lang="scss">
    .header_arrowButton {
        display: none;

        @media screen and ( max-width: 751px ) {
            display: block;
            cursor: pointer;
            margin: 53px 0 0 0;
        }
    }
</style>