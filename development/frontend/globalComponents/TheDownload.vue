<template>
    <div @pointerdown.stop="setWasImgClicked(true)" class="download">
        <the-download-text-vue/>
        <the-download-buttons-vue/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import TheDownloadTextVue from "./TheDownloadText.vue";
    import TheDownloadButtonsVue from "./TheDownloadButtons.vue";
    import { setWasImgClicked, setIsPointerOnDocument } from "../../functions/index";

    export default defineComponent({
        name: "TheDownload",
        components: {
            TheDownloadTextVue,
            TheDownloadButtonsVue
        },
        computed: {
            wasImgClicked() {
                return this.$store.state.wasImgClicked;
            }
        },
        watch: {
            wasImgClicked(nowValue) {
                const downloadElement = this.$el as HTMLDivElement;
                if ( nowValue ) {
                    downloadElement.classList.add("download_active");
                    this.setIsPointerOnDocument(false);
                } else {
                    downloadElement.classList.remove("download_active");
                    this.setIsPointerOnDocument(true);
                };
            }
        },
        methods: {
            setWasImgClicked,
            setIsPointerOnDocument
        }
    });
</script>

<style lang="scss">
    .download {
        position: fixed;
        bottom: -110%;
        right: 0;
        left: 0;
        background-color: rgba(212, 175, 55, .7);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        z-index: 70;
        transition: bottom .4s ease-out;
    }

    .download_active {
        transition: bottom .4s ease-in;
        bottom: 0;
    }
</style>