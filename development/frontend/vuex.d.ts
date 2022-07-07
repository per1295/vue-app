import { Store } from "vuex";
import State from "../types/index";

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $store: Store<State>
    };
}