<template>
    <div ref="rootElRef" @pointerdown.stop="setImgClickedTrue" class="download">
        <the-download-text-vue/>
        <the-download-buttons-vue/>
    </div>
</template>

<script setup lang="ts">
    import { watch, ref } from "vue";
    import { storeToRefs } from "pinia";
    import useDownloadImage from "../../general/stores/downloadImage";
    import useStore from "../../general/stores";

    import TheDownloadTextVue from "./TheDownloadText.vue";
    import TheDownloadButtonsVue from "./TheDownloadButtons.vue";

    const downloadImageStore = useDownloadImage();
    const { wasImgClicked } = storeToRefs(downloadImageStore);
    const { setImgClickedTrue } = downloadImageStore;

    const indexStore = useStore();
    const { setPointerOnDocumentTrue, setPointerOnDocumentFalse } = indexStore;

    const rootElRef = ref();

    watch(wasImgClicked, (nowValue) => {
        const downloadElement = rootElRef.value as HTMLDivElement;
        if ( nowValue ) {
            downloadElement.classList.add("download_active");
            setPointerOnDocumentFalse();
        } else {
            downloadElement.classList.remove("download_active");
            setPointerOnDocumentTrue();
        };
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