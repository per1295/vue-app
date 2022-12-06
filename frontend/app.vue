<template>
    <router-view v-slot="{ Component }">
        <transition :name="transitionName" mode="out-in">
            <component v-if="isLoaded" :is="Component" />
            <the-preloader-vue v-else />
        </transition>
    </router-view>
</template>

<script setup lang="ts">
    import { watch, ref, onMounted } from "vue";
    import { storeToRefs } from "pinia";
    import { useRoute } from "vue-router";
    import useMenuNavbar from "../general/stores/menuNavbar";
    import useStore from "../general/stores";

    import ThePreloaderVue from "./globalComponents/ThePreloader.vue";

    const route = useRoute();

    const transitionName = ref("vanish");

    const isLoaded = ref(false);

    onMounted(() => {
        setTimeout(() => isLoaded.value = true, 1500);
    });

    const menuNavbarStore = useMenuNavbar();
    const { isMenuOpen } = storeToRefs(menuNavbarStore);

    watch(isMenuOpen, nowValue => {
        const bodyStyle = document.body.style;
        if ( nowValue ) {
            bodyStyle.touchAction = "pan-up";
            bodyStyle.overflowY = "hidden";
        } else {
            bodyStyle.removeProperty("touch-action");
            bodyStyle.removeProperty("overflow-y");
        }
    });

    const index = useStore();
    const { isMobile } = storeToRefs(index);

    watch([ isMobile, route ], nowValues => {
        const [ nowIsMobile ] = nowValues;
        if ( nowIsMobile ) {
            transitionName.value = "vanish-mobile";
        } else {
            transitionName.value = "vanish";
        }
    });
</script>

<style lang="scss">
    body {
        margin: 0 auto;
        padding: 0;
        height: 100%;
        width: 100%;

        & {
            scrollbar-width: thin;
            scrollbar-color: #d4af37 #505d68;
        }

        &::-webkit-scrollbar-button {
            display: none;
        }

        &::-webkit-scrollbar {
            width: 15px;
            background-color: #505d68;
        }

        &::-webkit-scrollbar-thumb {
            height: 12px;
            background-color: #d4af37;
            border-radius: 20px;
            border: 3px solid #505d68;
        }

        &::-webkit-scrollbar-thumb:hover {
            background-color: #ffc400;
        }
    }

    .vanish-enter-active, .vanish-leave-active, .vanish-mobile-enter-active, .vanish-mobile-leave-active {
        transition: all .6s;
    }

    .vanish-enter-from, .vanish-leave-to {
        filter: grayscale(50%) blur(10px);
        transform: translateX(-100%);
    }

    .vanish-mobile-enter-from, .vanish-mobile-leave-to {
        filter: blur(10px);
    }
</style>