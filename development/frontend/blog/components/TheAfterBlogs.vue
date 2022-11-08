<template>
    <component :is="isMobile ? VMainBlogsVue : null" :start-blog-index="2"/>
    <div class="wrapButton">
        <transition name="post-button" mode="out-in">
            <the-all-blogs-text-vue v-if="isAllBlogs"/>
            <v-custom-button-vue v-else :additional-styles="additionalStyleCustomButton" :additional-listener="() => getBlogs()">
                Load More Posts
            </v-custom-button-vue>
        </transition>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import useStore from "../../../general/stores";
    import useBlogs from "../../../general/stores/blog/blogs";
    import { Transition, computed } from "vue";

    import VMainBlogsVue from "./VMainBlogs.vue";
    import VCustomButtonVue from "../../globalComponents/VCustomButton.vue";
    import TheAllBlogsTextVue from "./TheAllBlogsText.vue";

    const indexStore = useStore();
    const { isMobile } = storeToRefs(indexStore);

    const blogsStore = useBlogs();
    const { isAllBlogs } = storeToRefs(blogsStore);
    const { getBlogs } = blogsStore;

    const additionalStyleCustomButton = computed(() => {
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
        
        return isMobile.value ? additionalStyleMobile : additionalStyle;
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

    .post-button-enter-active, .post-button-leave-active {
        transition: transform .25s linear, opacity .25s linear;
    }

    .post-button-enter-from, .post-button-leave-to {
        transform: translateX(-20px);
        opacity: 0;
    }
</style>