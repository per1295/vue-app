<template>
    <img
    :src="src"
    alt="item_image"
    class="main_whoWeAreSecond__people___item____img"
    :style="additionalStyles"
    @click="setWasImgClicked(true), setNowImageSrc(src)"
    >
</template>

<script lang="ts">
    import { defineComponent, PropType, CSSProperties } from "vue";
    import { setWasImgClicked, setNowImageSrc } from "../../../functions/index";

    export default defineComponent({
        name: "VMainWhoWeAreSecondPeopleItemImg",
        props: {
            src: {
                type: String as PropType<string>,
                required: true
            },
            additionalStyles: {
                type: Object as PropType<CSSProperties>
            }
        },
        methods: {
            setWasImgClicked,
            setNowImageSrc
        }
    })
</script>

<style lang="scss">
    .main_whoWeAreSecond__people___item____img {
        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            width: 100%;
        }
    }
</style>