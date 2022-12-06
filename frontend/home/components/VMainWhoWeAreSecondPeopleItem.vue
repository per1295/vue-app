<template>
    <div class="main_whoWeAreSecond__people___item" :style="addtionalStyles">
        <v-main-who-we-are-second-people-item-img-vue
        :src="src"
        :additional-styles="isNarrowMobile ? { 'width': '100%' } : { }"
        />
        <v-main-who-we-are-second-people-item-conteiner-vue>
            <v-category-h3-vue :title="position" :additional-styles="additionalStylesH3"/>
            <v-main-who-we-are-second-people-item-conteiner-fullname-vue :full-name="fullname" />
            <v-main-who-we-are-second-people-item-conteiner-description-vue/>
        </v-main-who-we-are-second-people-item-conteiner-vue>
    </div>
</template>

<script setup lang="ts">
    import { computed, PropType, CSSProperties } from "vue";
    import { storeToRefs } from "pinia";
    import useStore from "../../../general/stores";

    import VCategoryH3Vue from "../../globalComponents/VCategoryH3.vue";
    import VMainWhoWeAreSecondPeopleItemImgVue from "./VMainWhoWeAreSecondPeopleItemImg.vue";
    import VMainWhoWeAreSecondPeopleItemConteinerVue from "./VMainWhoWeAreSecondPeopleItemConteiner.vue";
    import VMainWhoWeAreSecondPeopleItemConteinerFullnameVue from "./VMainWhoWeAreSecondPeopleItemConteinerFullname.vue";
    import VMainWhoWeAreSecondPeopleItemConteinerDescriptionVue from "./VMainWhoWeAreSecondPeopleItemConteinerDescription.vue";

    defineProps({
        src: {
            type: String as PropType<string>,
            required: true
        },
        position: {
            type: String as PropType<string>,
            required: true
        },
        fullname: {
            type: String as PropType<string>,
            required: true
        },
        addtionalStyles: {
            type: Object as PropType<CSSProperties>
        }
    });

    const indexStore = useStore();
    const { isMobile, isNarrowMobile } = storeToRefs(indexStore);

    const additionalStylesH3 = computed(() => {
        const additionalStylesH3: CSSProperties = {
            fontSize: "29px",
            fontWeight: 600
        };
        return isMobile.value ? additionalStylesH3 : {};
    });
</script>

<style lang="scss">
    .main_whoWeAreSecond__people___item {
        width: 245px;
        background-color: #f9f9f9;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        @media screen and ( max-width: 751px ) {
            max-width: 680px;
            width: 100%;
        }

        @media screen and ( max-width: 680px ) {
            width: auto;
        }
    }
</style>