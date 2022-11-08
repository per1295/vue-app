<template>
    <img
    @click="setImgClickedTrue(), setNowImgSrc(src)"
    :src="src" :alt="alt"
    :style="additionalStyle"
    :class="[ props.class, 'loadableImage' ]"
    >
</template>

<script setup lang="ts">
    import { PropType, CSSProperties } from "vue";
    import useDownloadImage from "../../general/stores/downloadImage";

    const props = defineProps({
        src: {
            type: String as PropType<string>,
            required: true
        },
        alt: {
            type: String as PropType<string>,
            required: true
        },
        additionalStyle: {
            type: Object as PropType<CSSProperties>
        },
        class: {
            type: String as PropType<string>
        }
    });

    const downloadImageStore = useDownloadImage();
    const { setImgClickedTrue, setNowImgSrc } = downloadImageStore;
</script>

<style lang="scss">
    .loadableImage {
        cursor: pointer;
    }
</style>