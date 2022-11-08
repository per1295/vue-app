<template>
    <div class="main_whoWeAreSecond">
        <v-category-h3-vue title="Who We Are"/>
        <v-category-p-vue title="The Amazing People Behind This"
        :additional-styles="isMobile ? { 'margin': '14.5px 0 0 0' } : {}"
        />
        <v-category-description-vue
        :additional-styles="isMobile ? { 'margin': '72.75px 0 0 0' } : { 'margin': '40.5px 0 0 0' }"
        >
            Typi non habent claritatem insitam; est usus <span v-html="BR_MOBILE_HTML"></span> legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.
        </v-category-description-vue>
        <the-main-who-we-are-second-people-vue/>
    </div>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import { storeToRefs } from "pinia";
    import useStore from "../../../general/stores";

    import VCategoryH3Vue from "../../globalComponents/VCategoryH3.vue";
    import VCategoryPVue from "../../globalComponents/VCategoryP.vue";
    import VCategoryDescriptionVue from "../../globalComponents/VCategoryDescription.vue";
    import TheMainWhoWeAreSecondPeopleVue from "./TheMainWhoWeAreSecondPeople.vue";

    const indexStore = useStore();
    const { isMobile } = storeToRefs(indexStore);

    const BR_MOBILE_HTML = computed(() => (
        isMobile.value ? "<br>" : ""
    ));
</script>

<style lang="scss">
    .main_whoWeAreSecond {
        margin: 162px 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        @media screen and ( max-width: 751px ) {
            margin: 306px 0 0 0;
        }
    }
</style>