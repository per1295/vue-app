<template>
    <router-view/>
    <transition :name="isMobile ? 'mobile-menu' : 'menu'" mode="out-in">
        <the-nav-links-vue v-if="isMenuOpen"/>
    </transition>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import TheNavLinksVue from "./globalComponents/TheNavLinks.vue";

    export default defineComponent({
        name: "App",
        components: {
            TheNavLinksVue
        },
        computed: {
            isMenuOpen() {
                return this.$store.state.isMenuOpen;
            },
            isMobile() {
                return this.$store.state.isMobile;
            }
        }
    });
</script>

<style lang="scss">
    body {
        margin: 0 auto;
        padding: 0;
        height: 100%;
        width: 100%;
    }

    * {
        scrollbar-width: thin;
        scrollbar-color: #d4af37 #505d68;
    }


    *::-webkit-scrollbar-button {
        display: none;
    }

    *::-webkit-scrollbar {
        width: 15px;
        background-color: #505d68;
    }

    *::-webkit-scrollbar-thumb {
        height: 12px;
        background-color: #d4af37;
        border-radius: 20px;
        border: 3px solid #505d68;
    }

    *::-webkit-scrollbar-thumb:hover {
        background-color: #ffc400;
    }

    .menu-enter-from, .menu-leave-to {
        transform: translateX(-100%);
    }

    .mobile-menu-enter-from, .mobile-menu-leave-to {
        transform: translateY(-110%);
    }

    .menu-enter-active, .mobile-menu-enter-active {
        transition: .3s ease-in;
    }
    
    .menu-leave-active, .mobile-menu-leave-active {
        transition: .3s ease-out;
    }
</style>