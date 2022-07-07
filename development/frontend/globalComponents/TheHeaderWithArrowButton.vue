<template>
    <img
    @click="scrollToServices(selector)"
    :src="isMobile || isMiddleDevice ? mobileArrowButton : mainArrowButton"
    alt="img_arrow_down_18"
    class="header_button"
    >
</template>

<script lang="ts">
    import { defineComponent, PropType } from "vue";
    import mainArrowButton from "./images/img_arrow_down_18.png";
    import mobileArrowButton from "./mobileImages/img_arrow_down.png";

    import { scrollToElement } from "../../functions";

    export default defineComponent({
        name: "TheHeaderWithArrowButton",
        data() {
            return {
                mainArrowButton,
                mobileArrowButton
            }
        },
        props: {
            selector: {
                type: String as PropType<string>,
                required: true
            }
        },
        methods: {
            scrollToServices(selector: string) {
                scrollToElement(selector);
            }
        },
        computed: {
            isMobile() {
                return this.$store.state.isMobile;
            },
            isMiddleDevice() {
                return this.$store.state.isMiddleDevice;
            }
        }
    })
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