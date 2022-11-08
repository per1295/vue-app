<template>
    <div class="main_whoWeAreSecond__people">
        <v-main-who-we-are-second-people-item-vue
        v-for="( item, index ) of isMobile ? SRC_ITEMS_MOBILE : SRC_ITEMS"
        :src="item"
        :position="POSITION_ITEMS[index]"
        :fullname="FULLNAME_ITEMS[index]"
        :addtional-styles="index === 0 ? { } : isMobile ? { 'margin': '59.5px 0 0 0' } : { 'margin': '0 0 0 5px' }"
        />
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import useStore from "../../../general/stores";

    import VMainWhoWeAreSecondPeopleItemVue from "./VMainWhoWeAreSecondPeopleItem.vue";

    import man_1 from "../images/man_1.png";
    import man_2 from "../images/man_2.png";
    import man_3 from "../images/man_3.png";

    import man_1_mobile from "../mobileImages/img_111.png";
    import man_2_mobile from "../mobileImages/img_131.png";
    import man_3_mobile from "../mobileImages/img_141.png";

    const SRC_ITEMS = [ man_1, man_2, man_3 ];
    const SRC_ITEMS_MOBILE = [ man_1_mobile, man_2_mobile, man_3_mobile ];
    const POSITION_ITEMS = [ "ceo", "Designer", "Developer" ];
    const FULLNAME_ITEMS = [ "Tobias Schneider", "Jack Knife", "Ricki Hall" ];

    const indexStore = useStore();
    const { isMobile } = storeToRefs(indexStore);
</script>

<style lang="scss">
    .main_whoWeAreSecond__people {
        margin: 50px 0 0 0;
        display: flex;
        align-items: center;

        @media screen and ( max-width: 751px ) {
            margin: 135px 0 0 0;
            flex-direction: column;
            justify-content: flex-start;
        }
    }
</style>