<template>
    <div class="main_conteiner__inf">
        <the-main-inf-block-vue title="Recent Posts">
            <the-main-inf-block-posts-vue/>
        </the-main-inf-block-vue>
        <the-main-inf-block-vue title="Categories">
            <the-main-inf-block-categories-vue/>
        </the-main-inf-block-vue>
        <the-main-inf-block-vue title="Projects">
            <the-main-inf-block-images-vue/>
        </the-main-inf-block-vue>
    </div>
</template>

<script setup lang="ts">
    import TheMainInfBlockVue from "./TheMainInfBlock.vue";
    import TheMainInfBlockPostsVue from "./TheMainInfBlockPosts.vue";
    import TheMainInfBlockCategoriesVue from "./TheMainInfBlockCategories.vue";
    import TheMainInfBlockImagesVue from "./TheMainInfBlockImages.vue";
</script>

<style lang="scss">
    .main_conteiner__inf {
        position: sticky;
        top: 20px;
        max-height: calc(100vh - 20px);
        overflow-y: scroll;
        width: 297px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        row-gap: 57px;

        & {
            scrollbar-width: 0;
        }

        &::-webkit-scrollbar-button {
            display: none;
        }

        &::-webkit-scrollbar {
            width: 0;
        }

        &::-webkit-scrollbar-thumb {
            height: 0;
        }

        @media screen and ( max-width: 751px ) {
            position: static;
            max-height: none;
            overflow-y: auto;
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