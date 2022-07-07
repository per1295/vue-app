<template>
    <div id="preloader">
        <the-preloader-progress-vue/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import ThePreloaderProgressVue from "./ThePreloaderProgress.vue";

    export default defineComponent({
        name: "ThePreloader",
        components: {
            ThePreloaderProgressVue
        }
    })
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