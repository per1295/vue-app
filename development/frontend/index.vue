<template>
    <div id="app">
        <app/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import App from "./app.vue";

    export default defineComponent({
        components: {
            App
        }
    });
</script>