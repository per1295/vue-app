<template>
   <main>
       <the-main-conteiner-vue/>
       <component :is="isMobile ? null : TheMainButtonsVue"/>
   </main> 
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import useStore from "../../../general/stores";

    import TheMainConteinerVue from "./TheMainConteiner.vue";
    import TheMainButtonsVue from "./TheMainButtons.vue";

    const indexStore = useStore();
    const { isMobile } = storeToRefs(indexStore);
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