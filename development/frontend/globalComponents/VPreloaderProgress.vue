<template>
    <div class="preloader_progress">
        <v-preloader-progress-bar-vue/>
    </div>
</template>

<script setup lang="ts">
    import VPreloaderProgressBarVue from "./VPreloaderProgressBar.vue";
</script>

<style lang="scss">
    .preloader_progress {
        position: relative;
        background-color: transparent;
        border: 5px solid #505d68;
        border-radius: 5px;
        height: 20px;
        width: 85%;
    }
</style>