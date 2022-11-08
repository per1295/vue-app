<template>
    <div class="main_conteiner__leftColum">
        <the-main-conteiner-left-colum-h2-vue/>
        <the-main-conteiner-left-colum-p-vue/>
        <the-main-conteiner-left-colum-images-vue/>
    </div>
</template>

<script setup lang="ts">
    import TheMainConteinerLeftColumH2Vue from "./TheMainConteinerLeftColumH2.vue";
    import TheMainConteinerLeftColumPVue from "./TheMainConteinerLeftColumP.vue";
    import TheMainConteinerLeftColumImagesVue from "./TheMainConteinerLeftColumImages.vue";
</script>

<style lang="scss">
    .main_conteiner__leftColum {
        margin: 64px 0 64px 64px;
        width: 666px;
        max-width: 666px;
        min-width: 666px;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            margin: 64px 0 64px 20px;
            width: 40%;
            max-width: 40%;
            min-width: 40%;
        }

        @media screen and ( max-width: 751px ) {
            margin: 64px 0 0 27px;
            width: calc(100% - 27px);
            max-width: calc(100% - 27px);
            min-width: calc(100% - 27px);
        }

        @media screen and ( min-width: 250px ) and ( max-width: 731px ) {
            margin: 64px 0 0 0;
        }
    }
</style>