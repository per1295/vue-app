import { createStore, useStore as baseUseStore, Store } from "vuex";
import { InjectionKey } from "vue";
import State,
{
    IsMobilePayload,
    IsPointerOnDocumentPayload,
    IsNarrowMobilePayload,
    WasImgClicked,
    NowImageSrc,
    IsMiddleDevice,
    IsMenuOpen,
    YGrabPercent,
    WasDownOnGrab,
    MasPathsPayload
} from "../../types/index";

import home from "./home";
import blog from "./blog";

const key: InjectionKey<Store<State>> = Symbol();

export const SET_IS_MOBILE = "SET_ISMOBILE";
export const SET_IS_POINTER_ON_DOCUMENT = "SET_IS_POINTER_ON_DOCUMENT";
export const SET_IS_NARROW_MOBILE = "SET_IS_NARROW_MOBILE";
export const SET_WAS_IMG_CLICKED = "SET_WAS_IMG_CLICKED";
export const SET_NOW_IMAGE_SRC = "SET_NOW_IMAGE_SRC";
export const SET_IS_MIDDLE_DEVICE = "SET_IS_MIDDLE_DEVICE";
export const SET_IS_MENU_OPEN = "SET_IS_MENU_OPEN";
export const SET_Y_GRAB_PERCENT = "SET_Y_GRAB_PERCENT";
export const SET_WAS_DOWN_ON_GRAB = "SET_DOWN_ON_GRAB";
export const SET_MAS_PATHS = "SET_MAS_PATHS";

const store = createStore<State>({
    modules: {
        home,
        blog
    },
    state() {
        return {
           isMobile: false,
           isPointerOnDocument: false,
           isNarrowMobile: false,
           wasImgClicked: false,
           nowImageSrc: "",
           isMiddleDevice: false,
           isMenuOpen: false,
           yGrabPercent: 0,
           wasDownOnGrab: false,
           masPaths: null
        } as State;
    },
    getters: {
        BR_MOBILE_HTML(state) {
            return state.isMobile ? "<br>" : ""
        }
    },
    mutations: {
        [SET_IS_MOBILE](state, payload: IsMobilePayload) {
            state.isMobile = payload.isTrue;
        },
        [SET_IS_POINTER_ON_DOCUMENT](state, payload: IsPointerOnDocumentPayload) {
            state.isPointerOnDocument = payload.isTrue;
        },
        [SET_IS_NARROW_MOBILE](state, payload: IsNarrowMobilePayload) {
            state.isNarrowMobile = payload.isTrue;
        },
        [SET_WAS_IMG_CLICKED](state, payload: WasImgClicked) {
            state.wasImgClicked = payload.isTrue;
        },
        [SET_NOW_IMAGE_SRC](state, payload: NowImageSrc) {
            state.nowImageSrc = payload.src;
        },
        [SET_IS_MIDDLE_DEVICE](state, payload: IsMiddleDevice) {
            state.isMiddleDevice = payload.isTrue;
        },
        [SET_IS_MENU_OPEN](state, payload: IsMenuOpen) {
            state.isMenuOpen = payload.isTrue;
        },
        [SET_Y_GRAB_PERCENT](state, payload: YGrabPercent) {
            state.yGrabPercent = payload.percent;
        },
        [SET_WAS_DOWN_ON_GRAB](state, payload: WasDownOnGrab) {
            state.wasDownOnGrab = payload.isTrue;
        },
        [SET_MAS_PATHS](state, payload: MasPathsPayload) {
            if ( state.masPaths === null ) {
                state.masPaths = [ payload.path ];
                return;
            }
            state.masPaths.push(payload.path);
        }
    }
});

export function useStore() {
    baseUseStore(key);
}

export default store;