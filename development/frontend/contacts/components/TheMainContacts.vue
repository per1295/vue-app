<template>
    <div class="main_contacts">
        <v-category-h3-vue :title="'This is it!'"/>
        <v-category-p-vue
        :title="'Contact Us'"
        :additional-styles="{ 'margin': '13px 0 0 0' }"
        />
        <the-main-contacts-blocks-vue/>
        <v-custom-button-vue
        :additional-styles="{ 'margin': `${isMobile ? 150 : 77}px 0 0 0` }"
        >
            Shote us an Email
        </v-custom-button-vue>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import useStore from "../../../general/stores";

    import VCategoryH3Vue from "../../globalComponents/VCategoryH3.vue";
    import VCategoryPVue from "../../globalComponents/VCategoryP.vue";
    import TheMainContactsBlocksVue from "./TheMainContactsBlocks.vue";
    import VCustomButtonVue from "../../globalComponents/VCustomButton.vue";

    const indexStore = useStore();
    const { isMobile } = storeToRefs(indexStore);
</script>

<style scoped lang="scss">
    .main_contacts {
        margin: 128px 0 0 0;
        width: 100%;
        max-width: 100%;
        min-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>