<template>
    <div class="main_contactUs__conteiner">
        <v-image-vue :src="src" alt="map_image" :additional-style="additionalStyle" />
        <the-main-contact-us-conteiner-data-vue/>
    </div>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import { storeToRefs } from "pinia";
    import useStore from "../../../general/stores";

    import VImageVue from "../../globalComponents/VImage.vue";
    import TheMainContactUsConteinerDataVue from "./TheMainContactUsConteinerData.vue";

    import map_image from "../images/map_img.png";
    import map_image__mobile from "../mobileImages/map_image__mobile.png";

    const indexStore = useStore();
    const { isMobile, isMiddleDevice, isNarrowMobile } = storeToRefs(indexStore);

    const src = computed(() => (
        isMobile.value ? map_image__mobile : map_image
    ));

    const additionalStyle = computed(() => (
        isMiddleDevice.value ?
        { 'max-width': '100%' }
        :
        isNarrowMobile.value
        ?
        { 'width': '100%' }
        :
        {}
    ));
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