<template>
    <div class="main_whoWeAre">
        <v-category-h3-vue title="Who we Are"/>
        <v-category-p-vue title="Tell The World About Yourself"/>
        <v-category-description-vue
        :additional-styles="isMobile ? { 'margin': '75.75px 0 0 0' } : { 'margin': '48.5px 0 0 0' }"
        />
        <v-custom-button-vue
        :additional-styles="isMobile ? { 'margin': '68px 0 0 0' } : { 'margin': '46px 0 0 0' }"
        :additional-listener="toAbout"
        />
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import useStore from "../../../general/stores";
    import { useRouter } from "vue-router";
    import { scrollToTop } from "../../../functions/index";

    import VCategoryH3Vue from "../../globalComponents/VCategoryH3.vue";
    import VCategoryPVue from "../../globalComponents/VCategoryP.vue";
    import VCategoryDescriptionVue from "../../globalComponents/VCategoryDescription.vue";
    import VCustomButtonVue from "../../globalComponents/VCustomButton.vue";

    const indexStore = useStore();
    const { isMobile } = storeToRefs(indexStore);

    const router = useRouter();

    function toAbout() {
        router.push("/about");
        scrollToTop();
    }
</script>

<style lang="scss">
    .main_whoWeAre {
        margin: 77.75px 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        @media screen and ( max-width: 751px ) {
            margin: 146px 0 0 0;
            max-width: 100%;
        }
    }
</style>