<template>
    <div class="main_bottom__content">
        <the-main-bottom-content-h3-vue/>
        <the-main-bottom-content-inf-vue/>
    </div>
</template>

<script setup lang="ts">
    import TheMainBottomContentH3Vue from "./TheMainBottomContentH3.vue";
    import TheMainBottomContentInfVue from "./TheMainBottomContentInf.vue";
</script>

<style lang="scss">
    .main_bottom__content {
        margin: 35.75px 0 0 41px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            margin: 35.75px 0 41px 0;
        }

        @media screen and ( max-width: 751px ) {
            margin: 66.625px 0 0 77px;
        }

        @media screen and ( max-width: 680px ) {
            margin: 66.625px 0 0 0;
            align-items: center;
        }
    }
</style>