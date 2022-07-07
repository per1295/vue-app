<template>
    <div class="inf_block__posts">
        <span
        v-for="( postTitle, index ) of INF_POST_DATA"
        :key="index"
        class="inf_block__posts___post"
        @pointerenter="addClass($event, 'post_active')"
        @pointerleave="removeClass($event, 'post_active')"
        >
            {{ postTitle.title }}
        </span>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { GET_INF_POST_DATA } from "../../../general/vuex/blog";
    import { addClass, removeClass } from "../../../functions";

    export default defineComponent({
        name: "TheMainInfBlockPost",
        mounted() {
            this.$store.dispatch({
                type: GET_INF_POST_DATA
            });
        },
        computed: {
            INF_POST_DATA() {
                return this.$store.state.blog.infPostTitles;
            }
        },
        methods: {
            addClass,
            removeClass
        }
    })
</script>

<style lang="scss">
    .inf_block__posts {
        margin: 33px 0 0 0;

        @media screen and ( max-width: 751px ) {
            margin: 61.525px 0 0 0;
        }

        .inf_block__posts___post {
            display: block;
            font-family: 'Open Sans', sans-serif;
            font-size: 16px;
            line-height: 26px;
            font-weight: 300;
            font-style: italic;
            color: #021725;
            transition: color .25s ease-out;
            cursor: pointer;

            @media screen and ( max-width: 751px ) {
                font-size: 29.9px;
                line-height: 59px;
            }
        }

        .post_active {
            color: #d3b000;
        }
    }
</style>