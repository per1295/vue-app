<template>
    <header :style="nowImageObj">
        <the-header-top-vue/>
    </header>
</template>

<script lang="ts">
    import { defineComponent, PropType } from "vue";
    import TheHeaderTopVue from "./TheHeaderWithArrowTop.vue";

    export default defineComponent({
        name: "TheHeader",
        props: {
            backgroundImage: {
                type: String as PropType<string>,
                required: true
            },
            mobileBackgroundImage: {
                type: String as PropType<string>,
                required: true
            }
        },
        components: {
            TheHeaderTopVue
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
        width: 100%;
        max-width: 100%;
        height: 399px;
        min-height: 399px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        background: #d4af37;
        background-repeat: no-repeat;

        @media screen and ( min-width: 1281px ) {
            background-size: cover;
        }

        @media screen and ( max-width: 751px ) {
            background: #d4af37;
            height: 1337px;
            min-height: 1337px;
        }
    }
</style>