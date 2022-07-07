<template>
    <button class="customButton"
    :style="additionalStyles"
    @pointerover="isMobileOrTablet ? undefined : overButton()"
    @pointerout="isMobileOrTablet ? undefined : outButton()"
    @click="clickListener($event)"
    >
        <slot>
            Read More About Us
        </slot>
    </button>
</template>

<script lang="ts">
    import { defineComponent, PropType, CSSProperties } from "vue";
    import { callSetIsPointerOnDocumentFalse, isNotComputer } from "../../functions";
    export default defineComponent({
        name: "VCustomButton",
        props: {
            additionalStyles: {
                type: Object as PropType<CSSProperties>
            },
            additionalListener: {
                type: Function as PropType<Function>
            }
        },
        computed: {
            isMobileOrTablet() {
                return this.$store.state.isMobile || isNotComputer();
            },
            isPointerOnDocument() {
                return this.$store.state.isPointerOnDocument;
            }
        },
        methods: {
            overButton() {
                const buttonElement = this.$el as HTMLButtonElement;
                buttonElement.classList.add("customButtonActive");
            },
            outButton() {
                const buttonElement = this.$el as HTMLButtonElement;
                buttonElement.classList.remove("customButtonActive");
            },
            callSetIsPointerOnDocumentFalse,
            clickListener<TypeEvent extends Event>(event: TypeEvent) {
                if ( this.isMobileOrTablet ) callSetIsPointerOnDocumentFalse(this.overButton)();
                if ( this.additionalListener ) this.additionalListener(event);
            }
        },
        watch: {
            isPointerOnDocument(nowValue) {
                if ( !this.isMobileOrTablet ) return;
                if ( nowValue ) this.outButton();
            }
        }
    })
</script>

<style lang="scss">
    .customButton {
        width: 238px;
        height: 57px;
        border: 1px solid #000000;
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        line-height: 32px;
        font-weight: 300;
        letter-spacing: 0.05em;
        color: #021725;
        background-color: #ffffff;
        padding: 0;
        cursor: pointer;
        transition: color .3s ease-out, background-color .3s ease-out;

        @media screen and ( max-width: 751px ) {
            width: 452px;
            height: 108px;
            font-family: 'Open Sans';
            font-size: 27px;
        }

        @media screen and ( max-width: 680px ) {
            width: 80%;
        }
    }

    .customButtonActive {
        color: #ffffff;
        background-color: #000000;
        transition: color .3s ease-in, background-Color .3s ease-in;
    }
</style>