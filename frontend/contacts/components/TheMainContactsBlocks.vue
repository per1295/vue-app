<template>
    <div class="main_contacts__blocks">
        <v-main-contacts-blocks-inf-block-vue
        :additional-style="{ 'background': '#d3b000' }"
        >
            Rua Serpa Pinto,
            <br>
            Lisbon, Portugal
        </v-main-contacts-blocks-inf-block-vue>
        <v-image-vue
        :src="isMobile ? mobileBlockImage : blockImage"
        alt="blockImage"
        :additional-style="{
            'margin': `0 0 0 ${isMobile ? 0 : 6}px`,
            'max-width': isMobile ? '100%' : 'none',
        }"
        />
        <the-main-contacts-blocks-text-block-vue/>
        <v-main-contacts-blocks-inf-block-vue
        :additional-style="{ 'margin': `0 0 0 ${isMobile ? 0 : 4}px`, 'background': '#212121' }"
        >
            +88 (0) 101 0000 000
            <br> 
            +88 (0) 101 0000 000
        </v-main-contacts-blocks-inf-block-vue>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import useStore from "../../../general/stores";

    import TheMainContactsBlocksTextBlockVue from "./TheMainContactsBlocksTextBlock.vue";
    import VMainContactsBlocksInfBlockVue from "./VMainContactsBlocksInfBlock.vue";
    import VImageVue from "../../globalComponents/VImage.vue";

    import blockImage from "../images/rectangle_602.png";
    import mobileBlockImage from "../mobileImages/rectangle_397_mobile.png";

    const indexStore = useStore()
    const { isMobile } = storeToRefs(indexStore);
</script>

<style lang="scss">
    .main_contacts__blocks {
        margin: 87px 0 0 0;
        width: 63%;
        max-width: 768px;
        display: flex;
        flex-wrap: wrap;

        @media screen and ( min-width: 751px ) and ( max-width: 1220px ) {
            flex-wrap: nowrap;
            flex-direction: column;
            align-items: center;
            row-gap: 30px;
        }

        @media screen and ( max-width: 751px ) {
            margin: 159px 0 0 0;
            width: 89.3%;
            max-width: 89.3%;
            flex-direction: column;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: flex-start;
        }
    }
</style>