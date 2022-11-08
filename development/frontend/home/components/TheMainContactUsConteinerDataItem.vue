<template>
    <div class="main_contactUs__conteiner___data____item">
        <the-main-contact-us-conteiner-data-item-h4-vue>
            {{ title }}
        </the-main-contact-us-conteiner-data-item-h4-vue>
        <the-main-contact-us-conteiner-data-item-p-vue>
            <span class="main_contactUs__conteiner___data____item_____p______span">
                {{ dataItem1 }}
            </span>
            <span class="main_contactUs__conteiner___data____item_____p______span">
                {{ dataItem2 }}
            </span>
        </the-main-contact-us-conteiner-data-item-p-vue>
    </div>
</template>

<script setup lang="ts">
    import { PropType } from "vue";

    import TheMainContactUsConteinerDataItemH4Vue from "./TheMainContactUsConteinerDataItemH4.vue";
    import TheMainContactUsConteinerDataItemPVue from "./TheMainContactUsConteinerDataItemP.vue";

    defineProps({
        title: {
            type: String as PropType<string>,
            required: true
        },
        dataItem1: {
            type: String as PropType<string>,
            required: true
        },
        dataItem2: {
            type: String as PropType<string>,
            required: true
        }
    });
</script>

<style lang="scss">
    .main_contactUs__conteiner___data____item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .main_contactUs__conteiner___data____item_____p______span {
        min-width: 250px;
    }
</style>