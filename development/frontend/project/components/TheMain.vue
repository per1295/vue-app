<template>
   <main>
       <the-main-conteiner-vue/>
       <component :is="isMobile ? null : 'TheMainButtonsVue'"/>
   </main> 
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import TheMainConteinerVue from "./TheMainConteiner.vue";
    import TheMainButtonsVue from "./TheMainButtons.vue";

    export default defineComponent({
        name: "TheMain",
        components: {
            TheMainConteinerVue,
            TheMainButtonsVue
        },
        computed: {
            isMobile() {
                return this.$store.state.isMobile;
            }
        }
    });
</script>

<style scoped lang="scss">
    main {
        width: 100%;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>