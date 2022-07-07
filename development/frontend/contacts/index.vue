<template>
    <component
    :is="isMobile ? 'TheHeaderWithArrowTopVue' : 'TheHeaderVue'"
    :background-image="backgroundImage"
    :mobile-background-image="''"
    />
    <the-main-vue/>
    <the-footer-vue
    :additional-styles="{ 'margin': `${isMobile ? 148 : 86}px 0 0 0` }"
    />
    <the-download-vue/>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import TheHeaderVue from "../globalComponents/TheHeader.vue";
    import TheHeaderWithArrowTopVue from "../globalComponents/TheHeaderWithArrowTop.vue";
    import TheMainVue from "./components/TheMain.vue";
    import TheFooterVue from "../globalComponents/TheFooter.vue";
    import TheDownloadVue from "../globalComponents/TheDownload.vue";

    import backgroundImage from "./images/cd_intro_work_page_background_2_contacts.png";

    export default defineComponent({
        name: "Contacts",
        data() {
            return {
                backgroundImage
            }
        },
        components: {
            TheHeaderVue,
            TheHeaderWithArrowTopVue,
            TheMainVue,
            TheFooterVue,
            TheDownloadVue
        },
        computed: {
            isMobile() {
                return this.$store.state.isMobile;
            }
        },
        mounted() {
            document.title = "Contacts";
        }
    });
</script>