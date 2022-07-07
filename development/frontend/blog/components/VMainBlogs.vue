<template>
    <div class="main_blogs" :style="additionalStyle" :class="additionalClass">
        <transition-group name="blogs-list" :appear="true">
            <v-main-blogs-blog-vue
            v-for="blog of blogs"
            :key="blog.idBlog"
            :image-blog="blog.imageBlog"
            :title-blog="blog.titleBlog"
            :date-blog="blog.dateBlog"
            :text-blog="blog.textBlog"
            />
        </transition-group>
    </div>
</template>

<script lang="ts">
    import { defineComponent, TransitionGroup, PropType, CSSProperties } from "vue";
    import { GET_BLOGS_DATA } from "../../../general/vuex/blog";
    import VMainBlogsBlogVue from "./VMainBlogsBlog.vue";

    export default defineComponent({
        name: "VMainBlogs",
        props: {
            mobileStartBlog: {
                type: Number as PropType<number>,
                required: true
            },
            mobileCountBlog: {
                type: Number as PropType<number>,
                required: true
            },
            isFirst: {
                type: Boolean as PropType<boolean>,
                required: true
            },
            additionalStyle: {
                type: Object as PropType<CSSProperties>
            },
            additionalClass: {
                type: String as PropType<string>
            }
        },
        computed: {
            blogs() {
                const blogs = this.$store.state.blog.blogs;
                const isMobile = this.$store.state.isMobile;
                const mobileStartBlog = this.mobileStartBlog;
                const mobileCountBlog = this.mobileCountBlog;
                const mobileEndBlog = mobileStartBlog + mobileCountBlog;

                if ( isMobile ) return blogs?.filter((_item, index) => {
                    return index >= mobileStartBlog && index < mobileEndBlog;
                });

                return blogs;
            }
        },
        mounted() {
            if ( !this.isFirst ) return;
            this.$store.dispatch({
                type: GET_BLOGS_DATA
            });
        },
        components: {
            VMainBlogsBlogVue,
            TransitionGroup
        }
    })
</script>

<style lang="scss">
    .main_blogs {
        width: 666px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        row-gap: 57px;


        @media screen and ( max-width: 751px ) {
            width: 74.5%;
            row-gap: 120px;
            max-width: 558px;
        }

        @media screen and ( min-width: 751px ) and ( max-width: 1241px ) {
            width: 55%;
        }
    }

    .blogs-list-enter-active,
    .blogs-list-leave-active,
    .blogs-list-move {
        transition: all .5s ease;
    }

    .blogs-list-enter-from,
    .blogs-list-leave-to {
        opacity: 0;
        transform: translateX(-20px);
    }
</style>