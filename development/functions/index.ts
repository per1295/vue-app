import store, {
    SET_IS_MOBILE,
    SET_IS_POINTER_ON_DOCUMENT,
    SET_WAS_IMG_CLICKED,
    SET_NOW_IMAGE_SRC,
    SET_IS_MENU_OPEN,
    SET_Y_GRAB_PERCENT,
    SET_WAS_DOWN_ON_GRAB,
    SET_MAS_PATHS
} from "../general/vuex/index";
import { GET_BLOGS_DATA } from "../general/vuex/blog";

type GetAndDeleteOptions = Omit<RequestInit, "body" | "method">;
type FormatResponse = "json" | "text";

export class Data {

    public static async getData<TypeData>(url: string, format: FormatResponse, options?: GetAndDeleteOptions): Promise<TypeData | null> {
        try {
            const response = await fetch(url, options);
            if ( !response.ok ) throw new Error("GetData - Request was failed");
            
            switch (format) {
                case "json":
                    return await response.json();
                case "text":
                default:
                    return await response.text() as any;
            }
        } catch (error) {
            const err = error as Error;
            logError(err);
            return null;
        }
    }

    public static async *getDataProgress(url: string, options?: GetAndDeleteOptions) {
        try {
            const response = await fetch(url, options);
            if ( typeof response.body?.getReader === "undefined" ) throw Error("GetDataProgress - Reader isn`t defined");
            const reader = response.body.getReader();
            const contentLength = response.headers.get("Content-Length");
            if ( contentLength === null ) throw new Error("Content-Length is null");
            
            let nowLength = 0, chunks: Uint8Array[] = [];

            while(true) {
                const { done, value } = await reader.read();
                if ( done ) break;
                if ( value ) {
                    chunks.push(value);
                    nowLength += value.length;
                }
                yield [ nowLength, +contentLength ];
            }

            const allChunks = new Uint8Array(nowLength);
            let position = 0;

            for ( let chunk of chunks ) {
                allChunks.set(chunk, position);
                position += chunk.length;
            }

            const decoder = new TextDecoder("utf-8");
            const result = decoder.decode(allChunks);

            return result;
        } catch(error) {
            let err = error as Error;
            logError(err);
            return "";
        }
    }
}

export function logError<TypeError extends Error>(error: TypeError): TypeError {
    let name = error.name, message = error.message;
    console.error(name, message);
    return error;
}

export function setMatchMedia(_query: string = "(max-width: 751px)", type: string = SET_IS_MOBILE) {
    let matches = matchMedia(_query).matches;
    if ( matches ) {
        store.commit({
            type,
            isTrue: true
        });
        return;
    }
    store.commit({
        type,
        isTrue: false
    });
}

export function setIsPointerOnDocument(isTrue: boolean) {
    store.commit({
        type: SET_IS_POINTER_ON_DOCUMENT,
        isTrue
    });
}

export function callSetIsPointerOnDocumentFalse<TypeFn extends Function>(fn: TypeFn): Function  {
    return function (...args: any[]) {
        if ( args.length !== fn.length ) throw new SyntaxError("Wrong arguments");

        setIsPointerOnDocument(false);
        fn(args);
    }
}

export function getMonthName(num: number): string {
    try {
        let result: string;
        switch( num ) {
            case 1:
                result = "January"
                break;
            case 2:
                result = "February"
                break;
            case 3:
                result = "March"
                break;
            case 4:
                result = "April"
                break;
            case 5:
                result = "May"
                break;
            case 6:
                result = "June"
                break;
            case 7:
                result = "July"
                break;
            case 8:
                result = "August"
                break;
            case 9:
                result = "September"
                break;
            case 10:
                result = "October"
                break;
            case 11:
                result = "November"
                break;
            case 12:
                result = "December"
                break;
            default:
                throw new TypeError("The number must be in the range from 1 to 12");
        }
        return result;
    } catch (error) {
        let err = error as Error;
        logError(err);
        return "";
    }
}

export function setWasImgClicked(isTrue: boolean) {
    store.commit({
        type: SET_WAS_IMG_CLICKED,
        isTrue
    });
}

export function setNowImageSrc(src: string) {
    store.commit({
        type: SET_NOW_IMAGE_SRC,
        src
    });
}

export function setIsMenuOpen(isTrue: boolean) {
    const bodyStyle = document.body.style;
    if ( isTrue ) {
        bodyStyle.touchAction = "none";
        bodyStyle.overflowY = "hidden";
    } else {
        bodyStyle.touchAction = "auto";
        bodyStyle.removeProperty("overflow-y");
    }
    store.commit({
        type: SET_IS_MENU_OPEN,
        isTrue
    });
}

export function setYGrabPercent(percent: number) {
    store.commit({
        type: SET_Y_GRAB_PERCENT,
        percent
    });
}

export function setDownOnGrab(isTrue: boolean) {
    store.commit({
        type: SET_WAS_DOWN_ON_GRAB,
        isTrue
    });
}

export function isDownOnGrab(): boolean {
    return store.state.wasDownOnGrab;
}

export function addClass(event: PointerEvent, className: string) {
    const elem = event.currentTarget as HTMLElement;
    elem.classList.add(className);
}

export function removeClass(event: PointerEvent, className: string) {
    const elem = event.currentTarget as HTMLElement;
    elem.classList.remove(className);
}

export function getBlogs() {
    store.dispatch({
        type: GET_BLOGS_DATA
    });
}

export function scrollToTop() {
    if ( typeof navigator !== "undefined" ) {
        if ( 
            /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
        )
        {
            let timeout = setTimeout(function scrolling() {
                scrollBy(0, -20);
                if ( scrollY > 0 ) timeout = setTimeout(scrolling, 10);
                else clearTimeout(timeout);
            }, 10);
        } 
        else {
            window.scroll({
                top: 0,
                behavior: "smooth"
            });
        }
    }
}

export function closeMobileMenu() {
    if ( store.state.isMenuOpen ) {
        const bodyStyle = document.body.style;
        bodyStyle.touchAction = "auto";
        bodyStyle.removeProperty("overflow-y");
        store.commit({
            type: SET_IS_MENU_OPEN,
            isTrue: false
        })
    }
}

export function scrollToElement(selector: string) {
    const mainBottomElement = document.querySelector(selector) as HTMLDivElement;
    const top = scrollY + mainBottomElement.getBoundingClientRect().top;

    if ( 
        /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
    )
    {
        let timeout = setTimeout(function scrolling() {
            scrollBy(0, 40);
            const isBottomDocument = Math.floor( document.documentElement.scrollHeight - ( document.documentElement.clientHeight + scrollY) ) <= 0;
            if ( Math.floor(scrollY - top) >= scrollY || isBottomDocument ) clearTimeout(timeout);
            else timeout = setTimeout(scrolling, 10);
        }, 10);
    } 
    else {
        window.scroll({
            top,
            behavior: "smooth"
        });
    }
}

export function pushPathToMas(path: string) {
    store.commit({
        type: SET_MAS_PATHS,
        path
    });
}

export function isNotComputer(): boolean {
    return /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}