<template>
    <div class="main_works">
        <v-category-h3-vue title="Our Amazing Work"/>
        <v-category-p-vue title="What We Do"
        :additional-styles="
        isMobile
        ?
        { 'margin': '16.5px 0 0 0', 'opacity': '.7' }
        :
        { 'margin': '12px 0 0 0', 'opacity': '1' }
        "/>
        <v-category-description-vue
        :additional-styles="
        isMobile ?
        { 'margin': '74.75px 0 0 0' }
        :
        { 'margin': '49.5px 0 0 0' }">
            Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.
        </v-category-description-vue>
        <the-main-what-we-do-works-vue
        :additional-styles="
        isMobile ?
        { 'margin': '225px 0 0 0' }
        :
        { 'margin': '132px 0 0 0' }
        "/>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import useStore from "../../../general/stores";

    import VCategoryH3Vue from "../../globalComponents/VCategoryH3.vue";
    import VCategoryPVue from "../../globalComponents/VCategoryP.vue";
    import VCategoryDescriptionVue from "../../globalComponents/VCategoryDescription.vue";
    import TheMainWhatWeDoWorksVue from "../../globalComponents/TheMainWhatWeDoWorks.vue";

    const indexStore = useStore();
    const { isMobile } = storeToRefs(indexStore);
</script>

<style lang="scss">
    .main_works {
        margin: 124.75px 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        min-width: 100%;
    }
</style>