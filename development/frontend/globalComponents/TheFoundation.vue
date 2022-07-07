<template>
    <keep-alive>
        <component :is="Component || 'ThePreloaderVue'"/>
    </keep-alive>
</template>

<script lang="ts">
    import { defineComponent, PropType, markRaw } from "vue";
    import ThePreloaderVue from "./ThePreloader.vue";

    import { pushPathToMas } from "../../functions/index";

    export default defineComponent({
        name: "TheFoundation",
        components: {
            ThePreloaderVue
        },
        props: {
            asyncComponent: {
                type: Function as PropType<() => Promise<typeof import("../app.vue")>>,
                required: true
            }
        },
        data() {
            return {
                Component: null
            } as {
                Component: null | typeof import("../app.vue").default
            }
        },
        mounted() {
            const getComponent = async (isNeedTimeOut: boolean) => {
                const componentModule = await this.asyncComponent();
                if ( typeof componentModule.default === "undefined" ) throw new TypeError("Component isn`t defined");
                if ( isNeedTimeOut ) {
                    setTimeout(() => {
                        this.Component = markRaw(componentModule.default);
                    }, 500);
                    return;
                }
                this.Component = markRaw(componentModule.default);
            };

            const masPaths = this.$store.state.masPaths;
            const path = this.$route.path;

            if ( !this.Component ) {
                if ( masPaths === null || !masPaths.includes(path) ) {
                    getComponent(true);
                    pushPathToMas(path);
                    return;
                }
                getComponent(false);
            };
        }
    })
</script>