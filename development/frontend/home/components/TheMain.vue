<template>
    <main>
        <the-main-who-we-are-vue/>
        <the-main-what-we-do-vue/>
        <the-main-who-we-are-second-vue/>
        <the-main-last-post-vue/>
        <the-main-contact-us-vue/>
    </main>
</template>

<script setup lang="ts">
    import TheMainWhoWeAreVue from "./TheMainWhoWeAre.vue";
    import TheMainWhatWeDoVue from "./TheMainWhatWeDo.vue";
    import TheMainWhoWeAreSecondVue from "./TheMainWhoWeAreSecond.vue";
    import TheMainLastPostVue from "./TheMainLastPost.vue";
    import TheMainContactUsVue from "./TheMainContactUs.vue";
</script>

<style lang="scss" scoped>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        background-color: #ffffff;
    }
</style>