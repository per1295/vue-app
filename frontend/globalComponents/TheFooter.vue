<template>
    <footer :style="additionalStyles">
        <the-footer-conteiner-vue/>
    </footer>
</template>

<script setup lang="ts">
    import { PropType, CSSProperties } from "vue";
    import TheFooterConteinerVue from "./TheFooterConteiner.vue";

    defineProps({
        additionalStyles: {
            type: Object as PropType<CSSProperties>
        }
    });
</script>

<style lang="scss" scoped>
    footer {
        margin: 80px 0 0 0;
        background-color: #eeeeee;
        width: 100%;
        height: 93px;
        display: flex;
        justify-content: center;
        align-items: flex-start;

        @media screen and ( max-width: 751px ) {
            margin: 153px 0 0 0;
            height: 230px;
        }

        @media screen and ( max-width: 680px ) {
            height: auto;
        }
    }
</style>