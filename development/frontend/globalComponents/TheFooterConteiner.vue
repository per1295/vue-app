<template>
    <div class="footer_conteiner">
        <v-footer-conteiner-item-vue>
            © 2014 Designed and Developed by Diogo Dantas
        </v-footer-conteiner-item-vue>
        <v-footer-conteiner-item-vue
        :additional-styles="
        isNarrowMobile ?
        { 'margin': '20.5px 0 69.5px 0' }
        :
        isMobile
        ?
        { 'margin': '20.5px 0 0 0' }
        :
        {}"
        >
            {{ isNarrowMobile ? "Email: imdiogodantas @gmail.com" : "Email: imdiogodantas@gmail.com" }}
        </v-footer-conteiner-item-vue>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import VFooterConteinerItemVue from "./VFooterConteinerItem.vue";

    export default defineComponent({
        name: "TheFooterConteiner",
        components: {
            VFooterConteinerItemVue
        },
        computed: {
            isMobile() {
                return this.$store.state.isMobile;
            },
            isNarrowMobile() {
                return this.$store.state.isNarrowMobile;
            }
        }
    })
</script>

<style lang="scss">
    .footer_conteiner {
        width: 746px;
        min-width: 746px;
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        font-weight: 300;
        color: #505d68;
        margin: 41px 0 0 0;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            max-width: 100%;
            width: 100%;
            justify-content: space-around;
        }

        @media screen and ( max-width: 751px ) {
            width: 100%;
            min-width: auto;
            margin: 69.5px 0 0 13px;
            opacity: 0.7;
            font-size: 30px;
            line-height: 48px;
            font-weight: 400;
            color: #323d43;
            flex-wrap: wrap;
        }

        @media screen and ( max-width: 680px ) {
            margin: 69.5px 0 0 0;
            text-align: center;
            display: flex;
            flex-direction: column;
        }
    }
</style>