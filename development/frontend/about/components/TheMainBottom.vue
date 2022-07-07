<template>
    <div class="main_bottom">
        <v-image-vue
        :src="isMobile ? rectangle_287 : rectangle_497"
        alt="services_image"
        :additional-style="isMobile ? { 'max-width': '100%' } : {}"
        />
        <the-main-bottom-content-vue/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import VImageVue from "../../globalComponents/VImage.vue";
    import rectangle_497 from "../images/rectangle_497.png";
    import rectangle_287 from "../mobileImages/rectangle_287.png";
    import TheMainBottomContentVue from "./TheMainBottomContent.vue";

    export default defineComponent({
        name: "TheMainBottom",
        components: {
            VImageVue,
            TheMainBottomContentVue
        },
        data() {
            return {
                rectangle_497,
                rectangle_287
            }
        },
        computed: {
            isMobile() {
                return this.$store.state.isMobile;
            }
        }
    });
</script>

<style lang="scss">
    .main_bottom {
        margin: 155px 0 0 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        min-width: 100%;
        background-color: #f9f9f9;

        @media screen and ( min-width: 1281px ) {
            justify-content: center;
        }

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            flex-direction: column;
        }

        @media screen and ( max-width: 751px ) {
            margin: 293px 0 0 0;
            flex-direction: column;
            align-items: flex-start;
        }
    }
</style>