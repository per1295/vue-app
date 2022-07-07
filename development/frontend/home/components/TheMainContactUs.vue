<template>
    <div class="main_contactUs">
        <v-category-h3-vue title="Contact Us"/>
        <v-category-p-vue title="Work With Us"/>
        <the-main-contact-us-conteiner-vue/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import VCategoryH3Vue from "../../globalComponents/VCategoryH3.vue";
    import VCategoryPVue from "../../globalComponents/VCategoryP.vue";
    import TheMainContactUsConteinerVue from "./TheMainContactUsConteiner.vue";

    export default defineComponent({
        name: "TheMainContactUs",
        components: {
            VCategoryH3Vue,
            VCategoryPVue,
            TheMainContactUsConteinerVue
        }
    })
</script>

<style lang="scss">
    .main_contactUs {
        margin: 162px 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            width: 100%;
            max-width: 100%;
        }

        @media screen and ( max-width: 751px ) {
            margin: 305px 0 0 0;
        }
    }
</style>