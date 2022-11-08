import { defineStore } from "pinia";
import { Data } from "../../../functions";

interface IBlog {
    id: number;
    image: string;
    title: string;
    date: string;
    text: string;
}

type IResponseBlogs = {
    blogs: IBlog[];
    lastId: number;
} | string

const useBlogs = defineStore("blogs", {
    state: () => ({
        blogs: [] as IBlog[],
        lastId: null as null | number,
        isAllBlogs: false
    }),
    actions: {
        async getBlogs(startBlogIndex?: number) {
            if ( this.isAllBlogs ) return;

            let response: IResponseBlogs | null | string = null;
            if ( startBlogIndex ) {
                response = await Data.getData<IResponseBlogs>(`/blog/blogs?startBlogIndex=${startBlogIndex}`, "json");
            } else if ( typeof this.lastId === "number" ) {
                response = await Data.getData<IResponseBlogs>(`/blog/blogs?lastId=${this.lastId}`, "json");
            } else {
                response = await Data.getData<IResponseBlogs>("/blog/blogs", "json");
            }

            if ( !response ) return;

            if ( typeof response === "string" ) {
                this.isAllBlogs = true;
            } else {
                this.blogs.push(...response.blogs);
                this.lastId = response.lastId;
            }
        }
    }
});

export default useBlogs;