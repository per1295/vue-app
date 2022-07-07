<template>
    <div class="main_buttons">
        <v-main-buttons-button-vue v-for="( title ) of ARRAY_BUTTONS">
            {{ title }}
        </v-main-buttons-button-vue>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import VMainButtonsButtonVue from "./VMainButtonsButton.vue";

    export default defineComponent({
        name: "TheMainButtons",
        data() {
            return {
                ARRAY_BUTTONS: [
                    "Facebook",
                    "Twitter",
                    "Google+"
                ]
            }
        },
        components: {
            VMainButtonsButtonVue
        }
    });
</script>

<style lang="scss">
    .main_buttons {
        margin: 104px 0 0 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;
        max-width: 80%;
        min-width: 80%;
        align-self: center;

        @media screen and ( max-width: 751px ) {
            display: none;
        }
    }
</style>