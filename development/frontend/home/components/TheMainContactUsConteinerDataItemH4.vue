<template>
    <h4 class="main_contactUs__conteiner___data____item_____h4">
        <slot></slot>
    </h4>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "TheMainContactUsConteinerDataItemH4",
    })
</script>

<style lang="scss">
    .main_contactUs__conteiner___data____item_____h4 {
        font-family: 'Open Sans', sans-serif;
        font-size: 13px;
        margin: 0;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #505d68;

        @media screen and ( max-width: 751px ) {
            font-size: 28px;
            color: #323d43;
            letter-spacing: normal;
        }
    }
</style>