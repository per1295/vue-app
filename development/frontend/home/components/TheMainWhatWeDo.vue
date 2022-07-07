<template>
    <div class="main_whatWeDo">
        <v-category-h3-vue title="What We Do"/>
        <v-category-p-vue title="Show Your Amazing Work"/>
        <the-main-what-we-do-works-vue/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import VCategoryH3Vue from "../../globalComponents/VCategoryH3.vue";
    import VCategoryPVue from "../../globalComponents/VCategoryP.vue";
    import TheMainWhatWeDoWorksVue from "../../globalComponents/TheMainWhatWeDoWorks.vue";

    export default defineComponent({
        name: "TheMainWhatWeDo",
        components: {
            VCategoryH3Vue,
            VCategoryPVue,
            TheMainWhatWeDoWorksVue
        }
    })
</script>

<style lang="scss">
    .main_whatWeDo {
        margin: 163px 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            width: 100%;
            max-width: 100%;
        }

        @media screen and ( max-width: 751px ) {
            margin: 303px 0 0 0;
        }
    }
</style>