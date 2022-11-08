<template>
    <keep-alive>
        <component :is="Component || ThePreloaderVue"/>
    </keep-alive>
    <component :is="Component ? TheNavLinksVue : null"/>
</template>

<script setup lang="ts">
    import { PropType, markRaw, ref, onMounted } from "vue";
    import { storeToRefs } from "pinia";
    import { useRoute } from "vue-router";
    import useStore from "../../general/stores";

    import ThePreloaderVue from "./ThePreloader.vue";
    import TheNavLinksVue from "./TheNavLinks.vue";

    const props = defineProps({
        asyncComponent: {
            type: Function as PropType<() => Promise<typeof import("../App.vue")>>,
            required: true
        }
    });

    const Component = ref<null | typeof import("../App.vue").default>(null);

    const indexStore = useStore();
    const { masPaths } = storeToRefs(indexStore);
    const { pushPathToMasPaths } = indexStore;

    const route = useRoute();

    onMounted(() => {
        const getComponent = async (isNeedTimeout: boolean) => {
            const componentModule = await props.asyncComponent();
            if ( typeof componentModule.default === "undefined" ) throw new TypeError("Component isn`t defined");
            if ( isNeedTimeout ) {
                setTimeout(() => {
                    Component.value = markRaw(componentModule.default);
                }, 500);
                return;
            }
            Component.value = markRaw(componentModule.default);
        };

        if ( !Component.value ) {
            if ( masPaths.value === null || !masPaths.value.includes(route.path) ) {
                getComponent(true);
                pushPathToMasPaths(route.path);
                return;
            }
            getComponent(false);
        };
    });
</script>