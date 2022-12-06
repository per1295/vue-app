<template>
    <div class="main_conteiner__rightColum">
        <v-image-vue
        v-for="( src, index ) of isMobile ? MOBILE_IMAGES_ARRAY : IMAGES_ARRAY"
        :src="src"
        alt="rightColum_image"
        :key="index"
        :additional-style="additionalStyleImage"
        />
    </div>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import { storeToRefs } from "pinia";
    import useStore from "../../../general/stores";

    import VImageVue from "../../globalComponents/VImage.vue";

    import rectangle_550 from "../images/rectangle_550.png";
    import rectangle_553 from "../images/rectangle_553.png";
    import rectangle_558 from "../images/rectangle_558.png";
    import rectangle_562 from "../images/rectangle_562.png";
    import rectangle_566 from "../images/rectangle_566.png";
    import rectangle_570 from "../images/rectangle_570.png";

    import rectangle_322_mobile from "../mobileImages/rectangle_322_mobile.png";
    import rectangle_326_mobile from "../mobileImages/rectangle_326_mobile.png";
    import rectangle_330_mobile from "../mobileImages/rectangle_330_mobile.png";
    import rectangle_334_mobile from "../mobileImages/rectangle_334_mobile.png";
    import rectangle_338_mobile from "../mobileImages/rectangle_338_mobile.png";
    import rectangle_342_mobile from "../mobileImages/rectangle_342_mobile.png";

    const IMAGES_ARRAY = [ rectangle_550, rectangle_553, rectangle_558, rectangle_562, rectangle_566, rectangle_570 ];
    const MOBILE_IMAGES_ARRAY = [
        rectangle_322_mobile,
        rectangle_326_mobile,
        rectangle_330_mobile,
        rectangle_334_mobile,
        rectangle_338_mobile,
        rectangle_342_mobile
    ];

    const indexStore = useStore();
    const { isMobile, isMiddleDevice, isNarrowMobile } = storeToRefs(indexStore);

    const additionalStyleImage = computed(() => ({
        maxWidth: isNarrowMobile || isMiddleDevice ? "100%": "none",
        width: isNarrowMobile || isMiddleDevice ? "100%" : "auto"
    }));
</script>

<style lang="scss">
    .main_conteiner__rightColum {
        margin: 64px 69px 0 0;
        width: 297px;
        max-width: 297px;
        min-width: 297px;
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 3px;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            margin: 64px 20px 64px 0;
            width: 40%;
            max-width: 40%;
            min-width: 40%;
            grid-template-columns: 100%;
        }

        @media screen and ( max-width: 751px ) {
            margin: 33px 0 29px 27px;
            width: auto;
            max-width: none;
            min-width: auto;
            row-gap: 5px;
        }

        @media screen and ( min-width: 250px ) and ( max-width: 731px ) {
            margin: 33px 0 29px 0;
            width: calc(100% - 27px);
            max-width: calc(100% - 27px);
            min-width: calc(100% - 27px);
        }
    }
</style>