import { Module } from "vuex";
import { Payload } from "../../types/index";
import { Data } from "../../functions";

export const SET_BLOGS_DATA = "SET_BLOGS_DATA";
export const SET_NOW_POST_ID = "SET_NOW_POST_ID";
export const SET_COUNT_BLOGS = "SET_COUNT_BLOGS";
export const SET_INF_POST_DATA = "SET_INF_POST_DATA";

export const GET_BLOGS_DATA = "GET_BLOGS_DATA";
export const GET_COUNT_BLOGS = "GET_COUNT_BLOGS";
export const GET_INF_POST_DATA = "GET_INF_POST_DATA";

interface InfPostTitle {
    title: string;
}

export type InfPostTitles = [ InfPostTitle ];

interface Blog {
    idBlog: number;
    imageBlog: string;
    titleBlog: string;
    dateBlog: string;
    textBlog: string;
}

export type Blogs = [ Blog ];

interface BlogsPayload extends Payload {
    blogs: Blogs;
}

interface InfPostTitle {
    title: string;
}

interface InfPostTitlesPayload extends Payload {
    titles: [ InfPostTitle ]
}

interface NowPostId extends Payload {
    nowPostId: number;
}

interface CountBlogsPayload extends Payload {
    countBlogs: number
}

export interface BlogModule {
    infPostTitles: InfPostTitles | null;
    countBlogs: number;
    blogs: Blogs | null;
    nowPostId: number;
}

const blog: Module<BlogModule, any> = {
    state() {
        return {
            infPostTitles: null,
            blogs: null,
            countBlogs: 0,
            nowPostId: 0
        }
    },
    mutations: {
        [SET_INF_POST_DATA](state, payload: InfPostTitlesPayload) {
            state.infPostTitles = payload.titles;
        },
        [SET_BLOGS_DATA](state, payload: BlogsPayload) {
            if ( state.blogs === null ) {
                state.blogs = payload.blogs;
            } else {
                state.blogs.push(...payload.blogs);
            }
        },
        [SET_NOW_POST_ID](state, payload: NowPostId) {
            state.nowPostId = payload.nowPostId;
        },
        [SET_COUNT_BLOGS](state, payload: CountBlogsPayload) {
            state.countBlogs = payload.countBlogs;
        }
    },
    actions: {
        async [GET_INF_POST_DATA]({ commit }) {
            const titles = await Data.getData<InfPostTitles>("/blog/posts", "json");

            if ( titles === null ) return;

            commit({
                type: SET_INF_POST_DATA,
                titles
            });
        },
        async [GET_BLOGS_DATA]({ commit, state }) {
            const { nowPostId } = state;
            const blogs = await Data.getData<Blogs>(`/blog/blogs?nowPostId=${nowPostId}`, "json");

            if ( blogs === null || blogs?.length < 1 ) return;

            commit({
                type: SET_BLOGS_DATA,
                blogs
            });

            commit({
                type: SET_NOW_POST_ID,
                nowPostId: nowPostId + 2
            });
        },
        async [GET_COUNT_BLOGS]({ commit }) {
            const countBlogs = await Data.getData<string>("/blog/countBlogs", "text");

            if ( countBlogs === null ) return;

            commit({
                type: SET_COUNT_BLOGS,
                countBlogs: +countBlogs
            });
        }
    }
}

export default blog;