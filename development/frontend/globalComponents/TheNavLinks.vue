<template>
    <div class="navLinks" @click="isMobile ? undefined : setIsMenuOpen(false)">
        <the-nav-links-colum-vue/>
        <keep-alive>
            <component :is="isMobile ? 'TheNavLinksGrabVue' : undefined"/>
        </keep-alive>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import TheNavLinksColumVue from "./TheNavLinksColum.vue";
    import { setIsMenuOpen } from "../../functions/index";
    import TheNavLinksGrabVue from "./TheNavLinksGrab.vue";

    export default defineComponent({
        name: "TheNavLinks",
        components: {
            TheNavLinksColumVue,
            TheNavLinksGrabVue
        },
        methods: {
            setIsMenuOpen
        },
        computed: {
            isMobile() {
                return this.$store.state.isMobile;
            },
            yGrabPercent() {
                return this.$store.state.yGrabPercent;
            },
            wasDownOnGrab() {
                return this.$store.state.wasDownOnGrab;
            }
        },
        watch: {
            yGrabPercent(value, oldValue) {
                const navLinksElement = this.$el as HTMLDivElement;

                navLinksElement.animate([
                    {
                        transform: `translateY(-${oldValue}%)`
                    },
                    {
                        transform: `translateY(-${value}%)`
                    }
                ], {
                    duration: !this.wasDownOnGrab ? 300 : 1,
                    fill: "forwards",
                    easing: "linear"
                });
            }
        }
    });
</script>

<style lang="scss">
    .navLinks {
        position: fixed;
        z-index: 99;
        height: 100%;
        width: 100%;
        background: rgba(36, 47, 53, .7);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>