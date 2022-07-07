import { HomeModule } from "../general/vuex/home";
import { BlogModule } from "../general/vuex/blog";

export default interface State {
    home: HomeModule;
    blog: BlogModule;
    isFirstTime: boolean;
    isMobile: boolean;
    isPointerOnDocument: boolean;
    isNarrowMobile: boolean;
    isMiddleDevice: boolean;
    wasImgClicked: boolean;
    nowImageSrc: string;
    isMenuOpen: boolean;
    yGrabPercent: number;
    wasDownOnGrab: boolean;
    masPaths: MasPaths;
};

export interface Payload {
    type: string;
}

export interface PostDataPayload extends Payload {
    imgForComputer: null | string;
    imgForMobile: null | string;
    data: null | string;
    title: null | string;
    content: null | string;
}

export interface PostDataProgressPayload extends Payload {
    nowLength: null | number;
    length: null | number;
}

export type PostData = Omit<PostDataPayload, "type">;

export type PostDataProgress = Omit<PostDataProgressPayload, "type">;

export interface IsMobilePayload extends Payload {
    isTrue: boolean;
}

export interface IsPointerOnDocumentPayload extends Payload {
    isTrue: boolean;
}

export interface IsNarrowMobilePayload extends Payload {
    isTrue: boolean;
}

export interface WasImgClicked extends Payload {
    isTrue: boolean;
}

export interface NowImageSrc {
    src: string;
}

export interface IsMiddleDevice extends Payload {
    isTrue: boolean;
}

export interface IsMenuOpen extends Payload {
    isTrue: boolean;
}

export interface YGrabPercent extends Payload {
    percent: number;
}

export interface WasDownOnGrab extends Payload {
    isTrue: boolean;
}

export interface IsFirstTimePayload extends Payload {
    isTrue: boolean;
}

type MasPaths = [ string ] | null;

export interface MasPathsPayload extends Payload {
    path: string;
}