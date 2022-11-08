<template>
    <div
    ref="rootElRef"
    :class="{ navLinks: true, navLinksMobile: isMobile, navLinksOther: !isMobile }"
    @click="isMobile ? undefined : closeMenu()"
    >
        <the-nav-links-colum-vue/>
        <keep-alive>
            <component :is="isMobile ? TheNavLinksGrabVue : undefined"/>
        </keep-alive>
    </div>
</template>

<script setup lang="ts">
    import { watch, ref } from "vue";
    import { storeToRefs } from "pinia";
    import useStore from "../../general/stores";
    import useMenuNavbar from "../../general/stores/menuNavbar";

    import TheNavLinksColumVue from "./TheNavLinksColum.vue";
    import TheNavLinksGrabVue from "./TheNavLinksGrab.vue";

    const rootElRef = ref();

    const indexStore = useStore();
    const { isMobile } = storeToRefs(indexStore);

    const menuNavbarStore = useMenuNavbar();
    const { yGrabPercent, isMenuOpen, wasDownOnGrab } = storeToRefs(menuNavbarStore);
    const { closeMenu, setYGrabPercent } = menuNavbarStore;

    watch([ yGrabPercent, isMobile ], (nowValues, oldValues) => {
        const [ percentValue, mobileValue ] = nowValues;
        const [ _oldPercentValue, oldMobileValue ] = oldValues;

        if ( !mobileValue ) return;

        const navLinksElement = rootElRef.value as HTMLDivElement;
        
        if ( wasDownOnGrab.value || mobileValue !== oldMobileValue ) navLinksElement.style.transition = "none";
        else navLinksElement.style.removeProperty("transition");

        navLinksElement.style.transform = `translateY(-${percentValue}%)`;
    });

    watch([ isMenuOpen, isMobile ], (nowValues, oldValues) => {
        const [ menuValue, mobileValue ] = nowValues;
        const [ _oldMenuValue, oldMobileValue ] = oldValues;

        if ( !mobileValue ) {
            const navLinksElement = rootElRef.value as HTMLDivElement;

            if ( mobileValue !== oldMobileValue ) navLinksElement.style.transition = "none";
            else navLinksElement.style.removeProperty("transition");

            if ( menuValue ) navLinksElement.style.transform = "translateX(0)";
            else navLinksElement.style.removeProperty("transform");

            return;
        }

        if ( menuValue ) setYGrabPercent(0);
        else setYGrabPercent(110);
    });

    watch(wasDownOnGrab, nowValue => {
        if ( nowValue ) return;
        if ( yGrabPercent.value >= 10 ) closeMenu();
        else setYGrabPercent(0); 
    });
</script>

<style lang="scss">
    .navLinks {
        position: fixed;
        z-index: 99;
        height: 100%;
        width: 100%;
        transition: transform .3s linear;
        background: rgba(36, 47, 53, .7);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .navLinksMobile {
        transform: translateY(-110%);
    }

    .navLinksOther {
        transform: translateX(-100%);
    }
</style>