<template>
    <main>
        <the-main-works-vue/>
    </main>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import TheMainWorksVue from "./TheMainWorks.vue";

    export default defineComponent({
        name: "TheMain",
        components: {
            TheMainWorksVue
        }
    })
</script>

<style lang="scss" scoped>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
</style>