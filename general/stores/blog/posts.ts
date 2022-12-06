import { defineStore } from "pinia";
import { Data } from "../../../functions";

interface IPost {
    id: number;
    title: string;
}

type IResponsePosts = {
    posts: IPost[];
    lastId: number;
} | string;

const usePosts = defineStore("posts", {
    state: () => ({
        posts: [] as IPost[],
        lastId: null as null | number,
        isAllPosts: false
    }),
    actions: {
        async getPosts() {
            if ( this.isAllPosts ) return;

            let response: IResponsePosts | null | string = null;
            if ( typeof this.lastId === "number" ) {
                response = await Data.getData<IResponsePosts>(`/blog/posts?lastId=${this.lastId}`, "json");
            } else {
                response = await Data.getData<IResponsePosts>("/blog/posts", "json");
            }

            if ( !response ) return;
            
            if ( typeof response === "string" ) {
                this.isAllPosts = true;
            } else {
                this.posts.push(...response.posts);
                this.lastId = response.lastId;
            }
        }
    }
});

export default usePosts;