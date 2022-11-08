<template>
    <div class="download_buttons">
        <v-custom-button-vue
        :additional-styles="{ 'width': '40%', 'height': '50px' }"
        :additional-listener="() => { download() }">
            Yes
        </v-custom-button-vue>
        <v-custom-button-vue
        :additional-styles="{ 'width': '40%', 'height': '50px' }"
        :additional-listener="setImgClickedFalse">
            No
        </v-custom-button-vue>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import useDownloadImage from "../../general/stores/downloadImage";

    import VCustomButtonVue from "./VCustomButton.vue";

    const downloadImageStore = useDownloadImage();
    const { nowImgSrc } = storeToRefs(downloadImageStore);
    const { setImgClickedFalse } = downloadImageStore;

    async function download() {
        const [ filename, ext ] = nowImgSrc.value.split(".");
        open(`/global/download?filename=${filename}&ext=${ext}`, "image");
    }
</script>

<style lang="scss">
    .download_buttons {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 50px 0 50px 0;
    }
</style>