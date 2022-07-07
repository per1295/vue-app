<template>
    <main>
        <the-main-contacts-vue/>
    </main>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import TheMainContactsVue from "./TheMainContacts.vue";

    export default defineComponent({
        name: "TheMain",
        components: {
            TheMainContactsVue
        }
    });
</script>

<style scoped lang="scss">
    main {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
    }
</style>