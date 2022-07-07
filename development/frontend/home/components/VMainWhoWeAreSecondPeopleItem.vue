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

<script lang="ts">
    import { defineComponent, PropType, CSSProperties } from "vue";
    import VCategoryH3Vue from "../../globalComponents/VCategoryH3.vue";
    import VMainWhoWeAreSecondPeopleItemImgVue from "./VMainWhoWeAreSecondPeopleItemImg.vue";
    import VMainWhoWeAreSecondPeopleItemConteinerVue from "./VMainWhoWeAreSecondPeopleItemConteiner.vue";
    import VMainWhoWeAreSecondPeopleItemConteinerFullnameVue from "./VMainWhoWeAreSecondPeopleItemConteinerFullname.vue";
    import VMainWhoWeAreSecondPeopleItemConteinerDescriptionVue from "./VMainWhoWeAreSecondPeopleItemConteinerDescription.vue";

    export default defineComponent({
        name: "VMainWhoWeAreSecondPeopleItem",
        components: {
            VCategoryH3Vue,
            VMainWhoWeAreSecondPeopleItemImgVue,
            VMainWhoWeAreSecondPeopleItemConteinerVue,
            VMainWhoWeAreSecondPeopleItemConteinerFullnameVue,
            VMainWhoWeAreSecondPeopleItemConteinerDescriptionVue
        },
        props: {
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
        },
        computed: {
            isMobile() {
                return this.$store.state.isMobile;
            },
            additionalStylesH3() {
                const additionalStylesH3: CSSProperties = {
                    fontSize: "29px",
                    fontWeight: 600
                };
                return this.isMobile ? additionalStylesH3 : {};
            },
            isNarrowMobile() {
                return this.$store.state.isNarrowMobile;
            }
        }
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