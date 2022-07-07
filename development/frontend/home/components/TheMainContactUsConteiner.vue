<template>
    <div class="main_contactUs__conteiner">
        <v-image-vue :src="src" alt="map_image"
        :additional-style="
        isMiddleDevice ?
        { 'max-width': '100%' }
        :
        isNarrowMobile
        ?
        { 'width': '100%' }
        :
        {}"
        />
        <the-main-contact-us-conteiner-data-vue/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import VImageVue from "../../globalComponents/VImage.vue";
    import TheMainContactUsConteinerDataVue from "./TheMainContactUsConteinerData.vue";

    import map_image from "../images/map_img.png";

    import map_image__mobile from "../mobileImages/map_image__mobile.png";

    export default defineComponent({
        name: "TheMainContactUsConteiner",
        components: {
            VImageVue,
            TheMainContactUsConteinerDataVue
        },
        computed: {
            src() {
                return this.$store.state.isMobile ? map_image__mobile : map_image;
            },
            isNarrowMobile() {
                return this.$store.state.isNarrowMobile;
            },
            isMiddleDevice() {
                return this.$store.state.isMiddleDevice;
            }
        }
    })
</script>

<style lang="scss">
    .main_contactUs__conteiner {
        margin: 55px 0 0 0;
        background-color: #f9f9f9;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            max-width: 100%;
        }

        @media screen and ( max-width: 751px ) {
            margin: 101px 0 0 0;
            width: 100%;
            max-width: 680px;
        }
    }
</style>