<template>
    <div class="main_conteiner__inf">
        <the-main-inf-block-vue title="Recent Posts">
            <the-main-inf-block-post-vue/>
        </the-main-inf-block-vue>
        <the-main-inf-block-vue title="Categories">
            <the-main-inf-block-categories-vue/>
        </the-main-inf-block-vue>
        <the-main-inf-block-vue title="Projects">
            <the-main-inf-block-images-vue/>
        </the-main-inf-block-vue>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import TheMainInfBlockVue from "./TheMainInfBlock.vue";
    import TheMainInfBlockPostVue from "./TheMainInfBlockPost.vue";
    import TheMainInfBlockCategoriesVue from "./TheMainInfBlockCategories.vue";
    import TheMainInfBlockImagesVue from "./TheMainInfBlockImages.vue";

    export default defineComponent({
        name: "TheMainInf",
        components: {
            TheMainInfBlockVue,
            TheMainInfBlockPostVue,
            TheMainInfBlockCategoriesVue,
            TheMainInfBlockImagesVue
        }
    })
</script>

<style lang="scss">
    .main_conteiner__inf {
        width: 297px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        row-gap: 57px;

        @media screen and ( max-width: 751px ) {
            background: #f9f9f9;
            max-width: 673px;
            width: 89.8%;
            padding: 174.25px 0 0 0;
            align-items: center;
        }

        @media screen and ( min-width: 751px ) and ( max-width: 1241px ) {
            width: 40%;
        }
    }
</style>