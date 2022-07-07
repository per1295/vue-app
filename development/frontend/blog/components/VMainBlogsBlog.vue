<template>
    <div class="main_blogs__blog">
        <div class="main_blogs__blog___conteiner">
            <v-image-vue
            :src="imageBlog"
            alt="image_blog"
            :additional-style="additionalStyleForImg"
            />
            <v-main-blogs-blog-title-vue :title-blog="titleBlog"/>
            <v-main-blogs-blog-date-vue :date-blog="dateBlog"/>
            <v-main-blogs-blog-text-vue :text-blog="textBlog"/>
            <v-custom-button-vue :additional-styles="additionalStyleForCustomButton">
                Read More
            </v-custom-button-vue>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, PropType } from "vue";
    import VImageVue from "../../globalComponents/VImage.vue";
    import VCustomButtonVue from "../../globalComponents/VCustomButton.vue";
    import VMainBlogsBlogTitleVue from "./VMainBlogsBlogTitle.vue";
    import VMainBlogsBlogDateVue from "./VMainBlogsBlogDate.vue";
    import VMainBlogsBlogTextVue from "./VMainBlogsBlogText.vue";

    export default defineComponent({
        name: "VMainBlogsBlog",
        props: {
            imageBlog: {
                type: String as PropType<string>,
                required: true
            },
            titleBlog: {
                type: String as PropType<string>,
                required: true
            },
            dateBlog: {
                type: String as PropType<string>,
                required: true
            },
            textBlog: {
                type: String as PropType<string>,
                required: true
            }
        },
        computed: {
           additionalStyleForImg() {
               const isMobile = this.$store.state.isMobile;
               const isMiddleDevice = this.$store.state.isMiddleDevice;
               const additionalStyleForImgMobileAndTablet = {
                   width: "100%"
               };
               const additionalStyleForImg = {
                   margin: '0 0 0 5px'
               };

               return isMobile || isMiddleDevice ? additionalStyleForImgMobileAndTablet : additionalStyleForImg;
           },
           additionalStyleForCustomButton() {
               const isMobile = this.$store.state.isMobile;
               const additionalStyle = {
                    margin: "67px 0 31px 4px",
                    width: "191px",
                    height: "48px",
                    fontSize: "16px",
                    lineHeight: "32px",
                    fontWeight: 300,
                    letterSpacing: "0.05em"
               };
               const additionalStyleMobile = Object.assign(additionalStyle, {
                    margin: "126px 0 60px 0",
                    width: "92.6%",
                    maxWidth: "360px",
                    height: "91px",
                    fontSize: "30.4px",
                    lineHeight: "60px"
               });

               return isMobile ? additionalStyleMobile : additionalStyle;
           }
        },
        components: {
            VImageVue,
            VCustomButtonVue,
            VMainBlogsBlogTitleVue,
            VMainBlogsBlogDateVue,
            VMainBlogsBlogTextVue
        }
    })
</script>

<style lang="scss">
    .main_blogs__blog {
        width: 100%;
        background-color: #ffffff;

        .main_blogs__blog___conteiner {
            margin: 32px 0 0 29px;

            @media screen and ( max-width: 751px ) {
                margin: 0;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
            }

            @media screen and ( min-width: 751px ) and ( max-width: 1241px ) {
                margin: 32px 18px 0 18px;
            }
        }
    }
</style>