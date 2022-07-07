<template>
    <div class="main_conteiner__leftColum___images">
        <v-image-vue
        v-for="( src, index ) of isMobile ? MOBILE_IMAGES_ARRAY : IMAGES_ARRAY"
        :src="src"
        alt="leftColum_image"
        :key="index"
        :additional-style="additionalStyleImage"
        />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import VImageVue from "../../globalComponents/VImage.vue";

    import img1_540 from "../images/img1_540.png";
    import img2_545 from "../images/img2_545.png";
    import img3_546 from "../images/img3_546.png";
    import img4_547 from "../images/img4_547.png";

    import img1_349_mobile from "../mobileImages/img1_349_mobile.png";
    import img2_350_mobile from "../mobileImages/img2_350_mobile.png";
    import img3_351_mobile from "../mobileImages/img3_351_mobile.png";
    import img4_352_mobile from "../mobileImages/img4_352_mobile.png";

    export default defineComponent({
        name: "TheMainConteinerLeftColumImages",
        data() {
            return {
                IMAGES_ARRAY: [
                    img1_540,
                    img2_545,
                    img3_546,
                    img4_547
                ],
                MOBILE_IMAGES_ARRAY: [
                    img1_349_mobile,
                    img2_350_mobile,
                    img3_351_mobile,
                    img4_352_mobile
                ]
            }
        },
        components: {
            VImageVue
        },
        computed: {
            isMobile() {
                return this.$store.state.isMobile;
            },
            additionalStyleImage() {
                const isNarrowMobile = this.$store.state.isNarrowMobile,
                isMiddleDevice = this.$store.state.isMiddleDevice;
                return {
                    maxWidth: isNarrowMobile || isMiddleDevice ? "100%": "none",
                    width: isNarrowMobile || isMiddleDevice ? "100%" : "auto"
                }
            }
        }
    });
</script>

<style lang="scss">
    .main_conteiner__leftColum___images {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 19px;
        margin: 101px 0 0 0;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            grid-template-columns: 100%;
        }

        @media screen and ( max-width: 751px ) {
            margin: 154px 0 0 0;
            row-gap: 33px;
        }
    }
</style>