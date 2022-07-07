<template>
    <div class="preloader_progress">
        <v-preloader-progress-bar-vue/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import VPreloaderProgressBarVue from "./VPreloaderProgressBar.vue";

    export default defineComponent({
        name: "VPreloaderProgress",
        components: {
            VPreloaderProgressBarVue
        }
    });
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