<template>
    <span class="blog_conteiner__text">
        {{ textBlog }}
    </span>
</template>

<script lang="ts">
    import { defineComponent, PropType } from "vue";

    export default defineComponent({
        name: "VMainBlogsBlogText",
        props: {
            textBlog: {
                type: String as PropType<string>,
                required: true
            }
        }
    })
</script>

<style lang="scss">
    .blog_conteiner__text {
        display: block;
        margin: 33px 0 0 0;
        max-width: 584px;
        opacity: 0.7;
        font-family: 'Cardo', sans-serif;
        font-size: 16px;
        line-height: 25px;
        font-weight: 400;
        letter-spacing: 0.005em;
        color: #021725;

        @media screen and ( max-width: 751px ) {
            margin: 54.5px 0 0 0;
            opacity: 0.7;
            font-size: 30px;
            line-height: 47px;
            max-width: 549px;
        }
    }
</style>