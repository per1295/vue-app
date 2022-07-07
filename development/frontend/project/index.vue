<template>
    <the-header-with-arrow-vue
    :background-image="backgroundImage"
    :mobile-background-image="mobileBackgroundImage"
    :selector="headerSelector"
    />
    <the-main-vue/>
    <the-footer-vue
    :additional-styles="styleForFooter"
    />
    <the-download-vue/>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import TheHeaderWithArrowVue from "../globalComponents/TheHeaderWithArrow.vue";
    import TheMainVue from "./components/TheMain.vue";
    import TheFooterVue from "../globalComponents/TheFooter.vue";
    import TheDownloadVue from "../globalComponents/TheDownload.vue";

    import backgroundImage from "./images/cd_intro_project_background_2_project.png";
    import mobileBackgroundImage from "./mobileImages/cd_intro_background_4_project.png";

    export default defineComponent({
        name: "Project",
        data() {
            return {
                backgroundImage,
                mobileBackgroundImage,
                styleForFooter: {
                    margin: "73px 0 0 0"
                }
            }
        },
        components: {
            TheHeaderWithArrowVue,
            TheMainVue,
            TheFooterVue,
            TheDownloadVue
        },
        mounted() {
            document.title = "Project";
        },
        computed: {
            headerSelector() {
                const isMobile = this.$store.state.isMobile;
                return isMobile ? ".main_conteiner__leftColum" : ".main_buttons"
            },
            styleForFooter() {
                const isMobile = this.$store.state.isMobile;
                return {
                    margin: `${isMobile ? 32 : 73}px 0 0 0`
                }
            }
        }
    })
</script>