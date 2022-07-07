<template>
    <p class="download_text">
        Download?
    </p>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "TheDownloadText"
    });
</script>

<style lang="scss">
    .download_text {
        color: #ffffff;
        font-family: 'Open Sans', sans-serif;
        font-size: 29px;
        line-height: 52px;
        font-weight: 300;
        margin: 55px 0 0 0;
    }
</style>