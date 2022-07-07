<template>
    <span class="footer_conteiner__item" :style="additionalStyles">
        <slot></slot>
    </span>
</template>

<script lang="ts">
    import { defineComponent, PropType, CSSProperties } from "vue";

    export default defineComponent({
        name: "VFooterConteinerItem",
        props: {
            additionalStyles: {
                type: Object as PropType<CSSProperties>
            }
        }
    })
</script>