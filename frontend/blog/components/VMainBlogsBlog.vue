<template>
    <div class="main_blogs__blog">
        <div class="main_blogs__blog___conteiner">
            <v-image-vue
            :src="image"
            alt="image_blog"
            :additional-style="additionalStyleForImg"
            />
            <v-main-blogs-blog-title-vue :title="title"/>
            <v-main-blogs-blog-date-vue :date="date"/>
            <v-main-blogs-blog-text-vue :text="text"/>
            <v-custom-button-vue :additional-styles="additionalStyleForCustomButton">
                Read More
            </v-custom-button-vue>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, PropType } from "vue";
    import { storeToRefs } from "pinia";
    import useStore from "../../../general/stores";

    import VImageVue from "../../globalComponents/VImage.vue";
    import VCustomButtonVue from "../../globalComponents/VCustomButton.vue";
    import VMainBlogsBlogTitleVue from "./VMainBlogsBlogTitle.vue";
    import VMainBlogsBlogDateVue from "./VMainBlogsBlogDate.vue";
    import VMainBlogsBlogTextVue from "./VMainBlogsBlogText.vue";

    defineProps({
        image: {
            type: String as PropType<string>,
            required: true
        },
        title: {
            type: String as PropType<string>,
            required: true
        },
        date: {
            type: String as PropType<string>,
            required: true
        },
        text: {
            type: String as PropType<string>,
            required: true
        }
    });

    const indexStore = useStore();
    const { isMobile, isMiddleDevice } = storeToRefs(indexStore);

    const additionalStyleForImg = computed(() => {
        const additionalStyleForImgMobileAndTablet = {
            width: "100%"
        };
        const additionalStyleForImg = {
            margin: '0 0 0 5px'
        };

        return isMobile.value || isMiddleDevice ? additionalStyleForImgMobileAndTablet : additionalStyleForImg;
    });

    const additionalStyleForCustomButton = computed(() => {
        const additionalStyle = {
            margin: "67px 0 31px 4px",
            width: "191px",
            height: "48px",
            fontSize: "16px",
            lineHeight: "32px",
            fontWeight: 300,
            letterSpacing: "0.05em"
        };
        const additionalStyleMobile = {
            margin: "126px 0 60px 0",
            width: "92.6%",
            maxWidth: "360px",
            height: "91px",
            fontSize: "30.4px",
            lineHeight: "60px",
            fontWeight: 300,
            letterSpacing: "0.05em"
        };

        return isMobile.value ? additionalStyleMobile : additionalStyle;
    });
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