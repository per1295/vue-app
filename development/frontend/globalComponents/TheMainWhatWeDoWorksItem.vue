<template>
    <div class="main_whatWeDo__works___item"
    @pointerover="isMobileOrTablet ? undefined : overItem($event)"
    @pointerout="isMobileOrTablet ? undefined : outItem($event)"
    @click="isMobileOrTablet ? callSetIsPointerOnDocumentFalse(overItem)($event) : undefined"
    >
        <v-image-vue class="main_whatWeDo__works___item____image" :src="src" :alt="`item_${index}`"/>
        <div class="main_whatWeDo__works___item____backface"
        @click="setWasImgClicked(true), setNowImageSrc(src)">
            Item
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, PropType } from "vue";
    import { callSetIsPointerOnDocumentFalse, setWasImgClicked, setNowImageSrc } from "../../functions";
    import VImageVue from "./VImage.vue";
    import { isNotComputer } from "../../functions";

    export default defineComponent({
        name: "TheMainWhatWeDoWorksItem",
        components: {
            VImageVue
        },
        props: {
            src: {
                type: String as PropType<string>,
                required: true
            },
            index: {
                type: Number as PropType<number>,
                required: true
            }
        },
        computed: {
            isMobileOrTablet() {
                const isMobile = this.$store.state.isMobile;
                return isMobile || isNotComputer();
            },
            isPointerOnDocument() {
                return this.$store.state.isPointerOnDocument;
            }
        },
        watch: {
            isPointerOnDocument(nowValue) {
                if ( !nowValue ) return;
                let obj = { currentTarget: this.$el } as unknown as PointerEvent;
                this.outItem(obj);
            }
        },
        methods: {
            overItem(event: PointerEvent) {
                const currentTarget = this.$el as HTMLDivElement, target = event.target as HTMLElement,
                backfaceElement = currentTarget.children[1], addclassName = "main_whatWeDo__works___item____backfaceActive";
                if ( currentTarget !== target && backfaceElement.classList.contains(addclassName) ) return;
                backfaceElement.classList.add(addclassName);
            },
            outItem(event: PointerEvent) {
                const currentTarget = this.$el as HTMLDivElement, relatedTarget = event.relatedTarget as HTMLElement,
                backfaceElement = currentTarget.children[1], addclassName = "main_whatWeDo__works___item____backfaceActive";
                if ( currentTarget.contains(relatedTarget) ) return;
                backfaceElement.classList.remove(addclassName);
            },
            callSetIsPointerOnDocumentFalse,
            setWasImgClicked,
            setNowImageSrc
        }
    });
</script>

<style lang="scss">
    .main_whatWeDo__works___item {
        position: relative;
        width: 317px;
        height: 300px;
        background-color: #524e3f;
        cursor: pointer;

        @media screen and ( max-width: 751px ) {
            width: 100%;
            height: 565px;
        }
    }

    .main_whatWeDo__works___item____image {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;

        @media screen and ( max-width: 751px ) {
            width: 100%;
            height: 100%;
        }
    }

    .main_whatWeDo__works___item____backface {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #021725;
        filter: opacity(0);
        transition: filter .3s ease-out;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Open Sans', sans-serif;
        font-size: 18px;
        font-weight: 300;
        letter-spacing: 0.05em;
        color: #ffffff;
        z-index: 5;
    }

    .main_whatWeDo__works___item____backfaceActive {
        filter: opacity(.7);
        transition: filter .3s ease-in;
    }
</style>