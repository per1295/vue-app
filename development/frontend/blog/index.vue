<template>
    <component
    :is="isMobile ? 'TheHeaderWithArrowTopVue' : 'TheHeaderVue'"
    :background-image="cd_intro_blog_background_2_blog"
    :mobile-background-image="''"
    />
    <the-main-vue/>
    <the-footer-vue/>
    <the-download-vue/>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { GET_COUNT_BLOGS } from "../../general/vuex/blog";
    import TheHeaderVue from "../globalComponents/TheHeader.vue";
    import TheHeaderWithArrowTopVue from "../globalComponents/TheHeaderWithArrowTop.vue";
    import TheMainVue from "./components/TheMain.vue";
    import TheFooterVue from "../globalComponents/TheFooter.vue";
    import TheDownloadVue from "../globalComponents/TheDownload.vue";

    import cd_intro_blog_background_2_blog from "./images/cd_intro_blog_background_2_blog.png";

    export default defineComponent({
        name: "Blog",
        data() {
            return {
                cd_intro_blog_background_2_blog
            }
        },
        components: {
            TheHeaderVue,
            TheHeaderWithArrowTopVue,
            TheMainVue,
            TheFooterVue,
            TheDownloadVue
        },
        computed: {
            isMobile() {
                return this.$store.state.isMobile;
            }
        },
        mounted() {
            document.title = "Blog"

            this.$store.dispatch({
                type: GET_COUNT_BLOGS
            });
        }
    })
</script>