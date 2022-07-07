<template>
    <img @click="scrollToMainCategoryH3" class="header_arrowButton" src="../mobileImages/img_arrow_down_6.png" alt="arrow_down">
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    import { scrollToElement } from "../../../functions";

    export default defineComponent({
        name: "TheHeaderArrowButtonMobile",
        methods: {
            scrollToMainCategoryH3() {
                const selector = ".categoryH3";
                scrollToElement(selector);
            }
        }
    });
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