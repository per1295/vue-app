<template>
    <img
    @click="scrollToElement(selector)"
    :src="isMobile || isMiddleDevice ? mobileArrowButton : mainArrowButton"
    alt="img_arrow_down_18"
    class="header_button"
    >
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import useStore from "../../general/stores";
    import { PropType } from "vue";

    import mainArrowButton from "./images/img_arrow_down_18.png";
    import mobileArrowButton from "./mobileImages/img_arrow_down.png";

    import { scrollToElement } from "../../functions";

    defineProps({
        selector: {
            type: String as PropType<string>,
            required: true
        }
    });

    const indexStore = useStore();
    const { isMobile, isMiddleDevice } = storeToRefs(indexStore);
</script>

<style lang="scss">
    .header_button {
        margin: 555px 0 0 0;
        cursor: pointer;

        @media screen and ( max-width: 751px ) {
            margin: 1077px 0 0 0;
        }
    }
</style>