<template>
    <div class="inf_block__images">
        <v-image-vue
        v-for="( src, index ) of INF_BLOCK_IMAGES"
        class="inf_block__image___image"
        :key="index"
        :src="src"
        alt="block_images__image"
        />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import VImageVue from "../../globalComponents/VImage.vue";

    import rectangle_652_blog from "../images/rectangle_652_blog.png";
    import rectangle_656_blog from "../images/rectangle_656_blog.png";
    import rectangle_660_blog from "../images/rectangle_660_blog.png";
    import rectangle_664_blog from "../images/rectangle_664_blog.png";

    export default defineComponent({
        name: "TheMainInfBlockImages",
        data() {
            return {
                INF_BLOCK_IMAGES: [
                    rectangle_652_blog,
                    rectangle_656_blog,
                    rectangle_660_blog,
                    rectangle_664_blog
                ]
            }
        },
        components: {
            VImageVue
        }
    })
</script>

<style lang="scss">
    .inf_block__images {
        margin: 32px 0 0 0;
        display: flex;
        flex-direction: column;
        row-gap: 3px;

        @media screen and ( max-width: 751px ) {
            width: 100%;
            margin: 59px 0 0 0;
            row-gap: 5px;
        }

        @media screen and ( min-width: 751px ) and ( max-width: 1241px ) {
            width: 100%;
        }
    }
</style>