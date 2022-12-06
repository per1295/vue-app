<template>
    <div>
        <slot></slot>
        <the-nav-links-vue />
        <the-download-vue />
    </div>
</template>

<script setup lang="ts">
    import TheDownloadVue from './TheDownload.vue';
    import TheNavLinksVue from './TheNavLinks.vue';
</script>