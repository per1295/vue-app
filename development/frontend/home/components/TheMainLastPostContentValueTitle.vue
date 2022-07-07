<template>
    <div class="main_lastPost__content___value____title">
        {{ title }}
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "TheMainLastPostContentValueTitle",
        computed: {
            title() {
                return this.$store.state.home.postData.title
            }
        }
    })
</script>

<style lang="scss">
    .main_lastPost__content___value____title {
        font-family: 'Open Sans', sans-serif;
        font-size: 30px;
        margin: 12.5px 0 0 0;
        font-weight: 400;
        letter-spacing: 0.03em;
        color: #505d68;

        @media screen and ( max-width: 751px ) {
            opacity: 0.7;
            font-size: 60px;
            line-height: 60px;
            font-weight: 400;
            color: #021725;
            margin: 22px 0 0 0;
            letter-spacing: normal;
            max-width: 65%;
        }
    }
</style>