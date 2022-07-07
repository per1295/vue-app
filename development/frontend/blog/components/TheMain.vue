<template>
    <main>
        <div class="main_conteiner">
            <div class="main_conteiner__wrap" :class="mobileAfterBlockAppear">
                <v-main-blogs-vue
                :mobile-start-blog="0"
                :mobile-count-blog="2"
                :is-first="true"
                />
                <the-main-inf-vue/>
            </div>
            <the-after-blogs-vue/>
        </div>
    </main>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import TheMainInfVue from "./TheMainInf.vue";
    import VMainBlogsVue from "./VMainBlogs.vue";
    import TheAfterBlogsVue from "./TheAfterBlogs.vue";

    export default defineComponent({
        name: "TheMain",
        computed: {
            mobileAfterBlockAppear() {
                const isMobile = this.$store.state.isMobile;
                const blogs = this.$store.state.blog.blogs;
                if ( blogs === null ) return undefined;
                const isAfterBlogAppear = blogs.length > 2;

                if ( isMobile && isAfterBlogAppear ) {
                    return "afterBlogAppear";
                }

                return undefined;
            }
        },
        components: {
            VMainBlogsVue,
            TheMainInfVue,
            TheAfterBlogsVue
        }
    })
</script>

<style scoped lang="scss">
    main {
        width: 100%;
        min-width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;

        .main_conteiner {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            margin: 78px 0 0 0;
            width: calc(90% - 133px);
            background: #f9f9f9;
            padding: 64px 70px 65px 63px;

            @media screen and ( max-width: 751px ) {
                margin: 97px 0 0 0;
                padding: 0;
                width: 100%;
                background: #ffffff;
            }

            @media screen and ( min-width: 751px ) and ( max-width: 1241px ) {
                padding: 64px 0 65px 0;
            }

            .main_conteiner__wrap {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                width: 100%;

                @media screen and ( max-width: 751px ) {
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                }

                @media screen and ( min-width: 751px ) and ( max-width: 1241px ) {
                    justify-content: space-around;
                }
            }

            .afterBlogAppear {
                margin: 0 0 174.25px 0;
            }
        }
    }
    .post-button-enter-active,
    .post-button-leave-active {
        transition: all 1s linear;
    }

    .post-button-enter-from,
    .post-button-leave-to {
        opacity: 0;
        transform: translateY(20px);
    }
</style>