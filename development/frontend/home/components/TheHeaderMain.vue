<template>
    <h2 class="header_main">
        <span
        v-html="isNarrowMobile ? NARROW_CONTENT : MAIN_CONTENT"></span>
    </h2>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "TheHeaderMain",
        data() {
            return {
                MAIN_CONTENT: "Say <span>Haloa</span> <span class='header_main__portfolio_mobile'>to your Portfolio</span>",
                NARROW_CONTENT: "Say <span>Haloa</span> to your Portfolio"
            }
        },
        computed: {
            isNarrowMobile() {
                return this.$store.state.isNarrowMobile;
            }
        }
    });
</script>

<style lang="scss">
    .header_main {
        font-family: 'Open Sans', sans-serif;
        font-size: 80px;
        font-weight: 300;
        letter-spacing: 0.05em;
        color: #ffffff;
        margin: 225px 0 0 0;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            text-align: center;
        }

        @media screen and ( max-width: 751px ) {
            margin: 359.25px 0 0 0;
            max-width: 650px;
            text-align: center;
            font-family: 'Open Sans';
            font-size: 95px;
            line-height: 60px;
            font-weight: 300;
            letter-spacing: 0.03em;
        }

        @media screen and ( max-width: 680px ) {
            max-width: 90%;
            margin: 169.25px 0 0 0;
            font-size: 3.2em;
        }

        span {
            font-style: italic;

            @media screen and ( max-width: 680px ) {
                line-height: 200px;
            }
        }

        .header_main__portfolio_mobile {
            @media screen and ( max-width: 751px ) {
                line-height: 140px;
            }
        }
    }
</style>