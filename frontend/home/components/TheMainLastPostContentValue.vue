<template>
    <div class="main_lastPost__content___value">
        <the-main-last-post-content-value-date-vue/>
        <the-main-last-post-content-value-title-vue/>
        <the-main-last-post-content-value-description-vue/>
        <v-custom-button-vue
        :additional-styles="
        isNarrowMobile ?
        { 'width': '80%', 'height': '92px', 'margin': '97px 0 83px 0' }
        :
        isMobile ?
        { 'width': '242px', 'height': '92px', 'margin': '97px 0 83px 0' }
        :
        { 'width': '127px', 'height': '48px', 'margin': '58px 0 0 0' }"
        >
            Read
        </v-custom-button-vue>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import useStore from "../../../general/stores";

    import TheMainLastPostContentValueDateVue from "./TheMainLastPostContentValueDate.vue";
    import TheMainLastPostContentValueTitleVue from "./TheMainLastPostContentValueTitle.vue";
    import TheMainLastPostContentValueDescriptionVue from "./TheMainLastPostContentValueDescription.vue";
    import VCustomButtonVue from "../../globalComponents/VCustomButton.vue";

    const indexStore = useStore();
    const { isMobile, isNarrowMobile } = storeToRefs(indexStore);
</script>

<style lang="scss">
    .main_lastPost__content___value {
        margin: 39.75px 0 0 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        @media screen and ( max-width: 751px ) {
            margin: 76px 0 0 77px;
        }

        @media screen and ( max-width: 680px ) {
            margin: 76px 0 0 26px;
        }
    }
</style>