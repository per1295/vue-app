<template>
    <the-header-vue
    :background-image="backgroundImage"
    :mobile-background-image="mobileBackgroundImage"
    />
    <the-main-vue/>
    <the-footer-vue
    :additional-styles="
    isMobile ?
    { 'margin': '0' }
    :
    { 'margin': '6px 0 0 0' }
    "/>
    <the-download-vue/>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import TheHeaderVue from "../globalComponents/TheHeader.vue";
    import TheMainVue from "./components/TheMain.vue";
    import TheFooterVue from "../globalComponents/TheFooter.vue";
    import TheDownloadVue from "../globalComponents/TheDownload.vue";

    import backgroundImage from "./images/cd_intro_work_page_background_2.png";
    import mobileBackgroundImage from "./mobileImages/cd_work_intro_background_4.png";

    export default defineComponent({
        name: "Work",
        data() {
            return {
                backgroundImage,
                mobileBackgroundImage
            }
        },
        components: {
            TheHeaderVue,
            TheMainVue,
            TheFooterVue,
            TheDownloadVue
        },
        mounted() {
            document.title = "Work";
        },
        computed: {
            isMobile() {
                return this.$store.state.isMobile;
            }
        }
    })
</script>