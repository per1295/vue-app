<template>
    <div class="main_whatWeDo__works" :style="additionalStyles">
        <the-main-what-we-do-works-item-vue
        v-for="( srcItem, index ) of isMobile ? SRC_ITEMS_MOBILE : SRC_ITEMS"
        :src="srcItem"
        :index="index"
        :key="index"
        />
    </div>
</template>

<script setup lang="ts">
    import { PropType, CSSProperties } from "vue";
    import { storeToRefs } from "pinia";
    import useStore from "../../general/stores";

    import TheMainWhatWeDoWorksItemVue from "./TheMainWhatWeDoWorksItem.vue";

    import row_image__1 from "./images/row_image__1.png";
    import row_image__2 from "./images/row_image__2.png";
    import row_image__3 from "./images/row_image__3.png";
    import row_image__4 from "./images/row_image__4.png";
    import row_image__5 from "./images/row_image__5.png";
    import row_image__6 from "./images/row_image__6.png";
    import row_image__7 from "./images/row_image__7.png";
    import row_image__8 from "./images/row_image__8.png";

    import colum_image__1 from "./mobileImages/colum_image__1.png";
    import colum_image__2 from "./mobileImages/colum_image__2.png";
    import colum_image__3 from "./mobileImages/colum_image__3.png";
    import colum_image__4 from "./mobileImages/colum_image__4.png";
    import colum_image__5 from "./mobileImages/colum_image__5.png";
    import colum_image__6 from "./mobileImages/colum_image__6.png";
    import colum_image__7 from "./mobileImages/colum_image__7.png";
    import colum_image__8 from "./mobileImages/colum_image__8.png";

    defineProps({
        additionalStyles: {
            type: Object as PropType<CSSProperties>
        }
    });

    const indexStore = useStore();
    const { isMobile } = storeToRefs(indexStore);

    const SRC_ITEMS = [
        row_image__1,
        row_image__2,
        row_image__3,
        row_image__4,
        row_image__5,
        row_image__6,
        row_image__7,
        row_image__8
    ];

    const SRC_ITEMS_MOBILE = [
        colum_image__1,
        colum_image__2,
        colum_image__3,
        colum_image__4,
        colum_image__5,
        colum_image__6,
        colum_image__7,
        colum_image__8
    ];
</script>

<style lang="scss">
    .main_whatWeDo__works {
        margin: 81px 0 0 2px;
        display: grid;
        grid-template-columns: repeat(auto-fit, 317px);
        gap: 3px;
        width: 1278px;
        max-width: 1278px;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            margin: 81px 0 0 0px;
            width: 100%;
            max-width: 100%;
            min-width: 100%;
            justify-content: center;
        }

        @media screen and ( max-width: 751px ) {
            margin: 148px 0 0 0;
            grid-template-columns: repeat(1, 100%);
            gap: 5px 0;
            width: 100%;
            max-width: 100%;
        }
    }
</style>