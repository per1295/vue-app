<template>
    <div class="main_bottom__content___inf">
        <the-main-bottom-content-inf-item-vue>
            We’ll work with you to define a strong visual identity. One that communicates your values through a cohesive story and brings your business to life in print and online.
        </the-main-bottom-content-inf-item-vue>
        <the-main-bottom-content-inf-item-vue
        :additional-styles="{ 'margin': isMobile ? '159.45px 0 0 0' : '0 0 0 99px' }"
        >
        <template v-for="( item ) of THE_MAIN_BOTTOM_CONTENT_INF_ITEMS">
            <the-main-bottom-content-inf-item-part-vue>
                {{ item }}
            </the-main-bottom-content-inf-item-part-vue>
            <br> 
        </template>
        </the-main-bottom-content-inf-item-vue>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import TheMainBottomContentInfItemVue from "./TheMainBottomContentInfItem.vue";
    import TheMainBottomContentInfItemPartVue from "./TheMainBottomContentInfItemPart.vue";

    export default defineComponent({
        name: "TheMainBottomContentInf",
        components: {
            TheMainBottomContentInfItemVue,
            TheMainBottomContentInfItemPartVue
        },
        data() {
            return {
                THE_MAIN_BOTTOM_CONTENT_INF_ITEMS: [
                    "-  Branding",
                    "-  Visual Identity",
                    "-  Web & Digital Design", 
                    "-  Annual Reports", 
                    "-  Books & Brochures", 
                    "-  Programs & Editorial",
                    "-  Creative Consultancy"
                ]
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
    .main_bottom__content___inf {
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        margin: 86.5px 0 10px 0;

        @media screen and ( max-width: 751px ) {
            flex-direction: column;
            align-items: flex-start;
            margin: 167.25px 0 81px 0;
        }

        @media screen and ( max-width: 680px ) {
            align-items: center;
        }
    }
</style>