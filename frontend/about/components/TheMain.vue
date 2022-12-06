<template>
    <main>
        <the-main-description-vue/>
        <the-main-bottom-vue/>
    </main>
</template>

<script setup lang="ts">
    import TheMainDescriptionVue from "./TheMainDescription.vue";
    import TheMainBottomVue from "./TheMainBottom.vue";
</script>

<style scoped lang="scss">
    main {
        display: flex;
        flex-direction: column;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
</style>