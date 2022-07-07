<template>
    <component
    :is="isMobile && isMoreBlogs ? 'VMainBlogsVue' : null"
    :mobile-start-blog="2"
    :mobile-count-blog="2"
    :is-first="false"
    />
    <div class="wrapButton">
        <transition name="post-button">
            <the-all-blogs-text-vue v-if="isAllBlogs"/>
            <v-custom-button-vue
            v-else
            :additional-styles="additionalStyleCustomButton"
            :additional-listener="getBlogs"
            >
                Load More Posts
            </v-custom-button-vue>
        </transition>
    </div>
</template>

<script lang="ts">
    import { defineComponent, Transition } from "vue";
    import VMainBlogsVue from "./VMainBlogs.vue";
    import VCustomButtonVue from "../../globalComponents/VCustomButton.vue";
    import TheAllBlogsTextVue from "./TheAllBlogsText.vue";
    import { getBlogs } from "../../../functions";

    export default defineComponent({
        name: "TheAfterBlogs",
        computed: {
            isAllBlogs() {
                const nowPostId = this.$store.state.blog.nowPostId;
                const countBlogs = this.$store.state.blog.countBlogs;
                if ( nowPostId === 0 || countBlogs === 0 ) return false;
                return nowPostId >= countBlogs ? true : false;
            },
            additionalStyleCustomButton() {
                const isMobile = this.$store.state.isMobile;
                const additionalStyle = {
                    margin: "61px 0 0 0"
                };
                const additionalStyleMobile = {
                    margin: "62px 0 60px 0",
                    width: "88.1%",
                    maxWidth: "451px",
                    height: "112px",
                    fontSize: "30.4px",
                    fontWeight: 300,
                    letterSpacing: "0.05em"
                };

                return isMobile ? additionalStyleMobile : additionalStyle;
            },
            isMobile() {
                return this.$store.state.isMobile;
            },
            isMoreBlogs() {
                const countBlogs = this.$store.state.blog.blogs?.length as number;
                return countBlogs > 2;
            }
        },
        methods: {
            getBlogs
        },
        components: {
            Transition,
            VCustomButtonVue,
            TheAllBlogsTextVue,
            VMainBlogsVue
        }
    });
</script>

<style lang="scss">
    .wrapButton {
        background: transparent;

        @media screen and ( max-width: 751px ) {
            background-color: #f9f9f9;
            max-width: 673px;
            width: 89.8%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>