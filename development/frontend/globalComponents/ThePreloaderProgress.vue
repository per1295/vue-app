<template>
    <div class="preloader_progress">
        <the-preloader-progress-bar-vue/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import ThePreloaderProgressBarVue from "./ThePreloaderProgressBar.vue";

    export default defineComponent({
        name: "ThePreloaderProgress",
        components: {
            ThePreloaderProgressBarVue
        }
    });
</script>

<style lang="scss">
    .preloader_progress {
        width: 75%;
        height: 30px;
        background-color: transparent;
        border: 8px solid #fcfcfc;
        border-radius: 4px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
    }
</style>