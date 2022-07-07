<template>
    <p class="main_lastPost__content___value____description">
        {{ content }}
    </p>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "TheMainLastPostContentValueDescription",
        computed: {
            content() {
                return this.$store.state.home.postData.content
            }
        }
    })
</script>

<style lang="scss">
    .main_lastPost__content___value____description {
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        margin: 29px 0 0 0;
        font-weight: 300;
        letter-spacing: 0.05em;
        color: #505d68;

        @media screen and ( max-width: 751px ) {
            opacity: 0.7;
            font-size: 29px;
            line-height: 47px;
            letter-spacing: normal;
            color: #021725;
            margin: 57.75px 0 0 0;
            max-width: 88%;
        }

        @media screen and ( max-width: 680px ) {
            font-size: 25px;
        }
    }
</style>