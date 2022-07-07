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

<script lang="ts">
    import { defineComponent } from "vue";
    import VCategoryH3Vue from "../../globalComponents/VCategoryH3.vue";
    import VCategoryPVue from "../../globalComponents/VCategoryP.vue";
    import VCategoryDescriptionVue from "../../globalComponents/VCategoryDescription.vue";
    import VCustomButtonVue from "../../globalComponents/VCustomButton.vue";

    import { scrollToTop } from "../../../functions/index";

    export default defineComponent({
        name: "TheMainWhoWeAre",
        components: {
            VCategoryH3Vue,
            VCategoryPVue,
            VCategoryDescriptionVue,
            VCustomButtonVue
        },
        computed: {
            isMobile() {
                return this.$store.state.isMobile;
            }
        },
        methods: {
            toAbout() {
                this.$router.push("/about");
                scrollToTop();
            }
        }
    });
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