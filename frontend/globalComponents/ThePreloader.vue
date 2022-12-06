<template>
    <div id="preloader">
        <the-preloader-progress-vue/>
    </div>
</template>

<script setup lang="ts">
    import ThePreloaderProgressVue from "./ThePreloaderProgress.vue";
</script>

<style lang="scss">
    #preloader {
        position: fixed;
        height: 100%;
        width: 100%;
        background-color: #283339;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>