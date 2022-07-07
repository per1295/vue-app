<template>
    <img
    @click="setWasImgClicked(true), setNowImageSrc(src)"
    :src="src" :alt="alt"
    :style="additionalStyle"
    :class="[ className, 'loadableImage' ]"
    >
</template>

<script lang="ts">
    import { defineComponent, PropType, CSSProperties } from "vue";
    import { setWasImgClicked, setNowImageSrc } from "../../functions/index";

    export default defineComponent({
        name: "VImage",
        props: {
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
        },
        data() {
            return {
                className: this.class
            }
        },
        methods: {
            setWasImgClicked,
            setNowImageSrc
        }
    });
</script>

<style lang="scss">
    .loadableImage {
        cursor: pointer;
    }
</style>