<template>
    <div class="main_lastPost__content">
        <transition name="post-appeare" mode="out-in">
            <div class="wrapper" v-if="isPostLoaded">
                <v-image-vue
                :src="src || ''"
                alt="post_image"
                :additional-style="isNarrowMobile ? { 'width': '100%' } : {}"
                />
                <the-main-last-post-content-value-vue/>
            </div>
            <v-preloader-vue v-else/>
        </transition>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import VPreloaderVue from "../../globalComponents/VPreloader.vue";
    import { GET_POST_DATA } from "../../../general/vuex/home";
    import VImageVue from "../../globalComponents/VImage.vue";
    import TheMainLastPostContentValueVue from "./TheMainLastPostContentValue.vue";

    export default defineComponent({
        name: "TheMainLastPostContent",
        components: {
            VPreloaderVue,
            VImageVue,
            TheMainLastPostContentValueVue
        },
        computed: {
            isPostLoaded() {
                return this.$store.getters.isPostLoaded;
            },
            src() {
                return this.$store.state.isMobile ?
                this.$store.state.home.postData.imgForMobile
                :
                this.$store.state.home.postData.imgForComputer
            },
            isNarrowMobile() {
                return this.$store.state.isNarrowMobile
            }
        },
        mounted() {
            this.$store.dispatch({
                type: GET_POST_DATA
            });
        }
    })
</script>

<style lang="scss">
    .main_lastPost__content {
        height: 390px;
        width: 770px;
        background-color: #f9f9f9;
        margin: 51px 0 0 0;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            max-width: 100%;
        }

        @media screen and ( max-width: 751px ) {
            margin: 103px 0 0 0;
            width: 100%;
            max-width: 680px;
            height: auto;
        }
    }

    .wrapper {
        height: 100%;
        width: 100%;
        min-height: 100%;
        background-color: transparent;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;

        @media screen and ( max-width: 751px ) {
            flex-direction: column;
            align-items: center;
        }
    }

    .post-appeare-enter-active {
        transition: filter .5s ease-out, transform .5s ease-out;
    }

    .post-appeare-leave-active {
        transition: filter .5s ease-in, transform .5s ease-in;
    }

    .post-appeare-enter-from,
    .post-appeare-leave-to {
        transform: translateX(-20px);
        filter: opacity(0);
    }
</style>