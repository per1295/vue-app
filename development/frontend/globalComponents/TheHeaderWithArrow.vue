<template>
    <header :style="nowImageObj">
        <the-header-top-vue/>
        <the-header-with-arrow-button :selector="selector" />
    </header>
</template>

<script lang="ts">
    import { defineComponent, PropType } from "vue";
    import TheHeaderTopVue from "./TheHeaderWithArrowTop.vue";
    import TheHeaderWithArrowButton from "./TheHeaderWithArrowButton.vue";

    export default defineComponent({
        name: "TheHeaderWithArrow",
        props: {
            backgroundImage: {
                type: String as PropType<string>,
                required: true
            },
            mobileBackgroundImage: {
                type: String as PropType<string>,
                required: true
            },
            selector: {
                type: String as PropType<string>,
                required: true
            }
        },
        components: {
            TheHeaderTopVue,
            TheHeaderWithArrowButton
        },
        computed: {
            nowImageObj() {
                const isMobile = this.$store.state.isMobile;
                let nowImage: string;
                if ( isMobile ) nowImage = this.mobileBackgroundImage;
                else nowImage = this.backgroundImage;
                return {
                    backgroundImage: `url(${nowImage})`
                }
            }
        }
    })
</script>

<style lang="scss" scoped>
    header {
        background: #d4af37;
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        height: 699px;
        min-height: 699px;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        background-size: cover;

        @media screen and ( max-width: 751px ) {
            height: 1337px;
            min-height: 1337px;
            background-position: center;
        }

        @media screen and ( max-width: 680px ) {
            background-position: unset;
        }
    }
</style>