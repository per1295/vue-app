<template>
    <div class="download_buttons">
        <v-custom-button-vue
        :additional-styles="{ 'width': '40%', 'height': '50px' }"
        :additional-listener="() => { download() }">
            Yes
        </v-custom-button-vue>
        <v-custom-button-vue
        :additional-styles="{ 'width': '40%', 'height': '50px' }"
        :additional-listener="() => { setWasImgClicked(false); }">
            No
        </v-custom-button-vue>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import VCustomButtonVue from "./VCustomButton.vue";
    import { setWasImgClicked } from "../../functions/index";

    export default defineComponent({
        name: "TheDownloadButtons",
        components: {
            VCustomButtonVue
        },
        methods: {
            setWasImgClicked,
            async download() {
                const { nowImageSrc } = this.$store.state;
                const [ filename, ext ] = nowImageSrc.split(".");
                open(`/global/download?filename=${filename}&ext=${ext}`, "image");
            } 
        }
    });
</script>

<style lang="scss">
    .download_buttons {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 50px 0 50px 0;
    }
</style>