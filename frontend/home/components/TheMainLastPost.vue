<template>
    <div class="main_lastPost">
        <v-category-h3-vue title="Last Post"/>
        <v-category-p-vue title="We Like to Write"
        :additional-styles="isMobile ? { 'margin': '14.5px 0 0 0' } : {}"
        />
        <the-main-last-post-content-vue/>
        <v-custom-button-vue
        :additional-styles="isMobile ?
        { 'margin': '77px 0 0 0' }
        :
        { 'margin': '84px 0 0 0' }"
        
        :additional-listener="toBlog">
            More From Our Blog
        </v-custom-button-vue>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import useStore from "../../../general/stores";
    import { useRouter } from "vue-router";

    import VCategoryH3Vue from "../../globalComponents/VCategoryH3.vue";
    import VCategoryPVue from "../../globalComponents/VCategoryP.vue";
    import TheMainLastPostContentVue from "./TheMainLastPostContent.vue";
    import VCustomButtonVue from "../../globalComponents/VCustomButton.vue";

    const indexStore = useStore();
    const { isMobile } = storeToRefs(indexStore);

    const router = useRouter();

    function toBlog() {
        router.push("/blog");
    }
</script>

<style lang="scss">
    .main_lastPost {
        margin: 165px 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            width: 100%;
            max-width: 100%;
        }

        @media screen and ( max-width: 751px ) {
            margin: 304px 0 0 0;
        }
    }
</style>