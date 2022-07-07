import { Module } from "vuex";
import { Payload } from "../../types/index";
import { Data } from "../../functions";

export const SET_POST_DATA = "SET_POST_DATA";
export const SET_POST_DATA_PROGRESS = "SET_POST_DATA_PAYLOAD";

export const GET_POST_DATA = "GET_POST_DATA";

interface PostData {
    imgForComputer: null | string;
    imgForMobile: null | string;
    data: null | string;
    title: null | string;
    content: null | string;
}

type PostDataPayload = PostData & Payload;

interface PostDataProgress {
    nowLength: null | number;
    length: null | number;
}

type PostDataProgressPayload = PostDataProgress & Payload;

export interface HomeModule {
    postData: PostData;
    postDataProgress: PostDataProgress;
}

const home: Module<HomeModule, any> = {
    state() {
        return {
            postData: {
                imgForComputer: null,
                imgForMobile: null,
                data: null,
                title: null,
                content: null
            },
            postDataProgress: {
                nowLength: null,
                length: null
            }
        }
    },
    mutations: {
        [SET_POST_DATA](state, payload: PostDataPayload) {
            state.postData.imgForComputer = payload.imgForComputer;
            state.postData.imgForMobile = payload.imgForMobile;
            state.postData.data = payload.data;
            state.postData.title = payload.title;
            state.postData.content = payload.content;
        },
        [SET_POST_DATA_PROGRESS](state, payload: PostDataProgressPayload) {
            state.postDataProgress.nowLength = payload.nowLength;
            state.postDataProgress.length = payload.length;
        }
    },
    getters: {
        isPostLoaded(state) {
            let { nowLength, length } = state.postDataProgress;
            if ( nowLength === null || length === null ) return false;
            return nowLength * 100 / length === 100 ? true : false;
        }
    },
    actions: {
        async [GET_POST_DATA]({ commit }) {
            const postDataGenerator = Data.getDataProgress("/home/postData");
            
            while(true) {
                const loading = await postDataGenerator.next();
                if ( loading.done ) {
                    const data = JSON.parse(loading.value) as PostData;
                    commit({
                        type: SET_POST_DATA,
                        ...data
                    });
                    break;
                };
                const [ nowLength, length ] = loading.value;
                commit({
                    type: SET_POST_DATA_PROGRESS,
                    nowLength,
                    length
                });
            }
        }
    }
};

export default home;