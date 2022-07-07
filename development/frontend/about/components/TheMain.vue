<template>
    <main>
        <the-main-description-vue/>
        <the-main-bottom-vue/>
    </main>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import TheMainDescriptionVue from "./TheMainDescription.vue";
    import TheMainBottomVue from "./TheMainBottom.vue";

    export default defineComponent({
        name: "TheMain",
        components: {
            TheMainDescriptionVue,
            TheMainBottomVue
        }
    });
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