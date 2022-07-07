import { Schema, model } from "mongoose";

interface LastPost {
    imgForComputer: string;
    imgForMobile: string;
    date: string;
    title: string;
    content: string;
}

const lastPostSchema = new Schema<LastPost>({
    imgForComputer: String,
    imgForMobile: String,
    date: String,
    title: String,
    content: String
}, {
    collection: "posts",
    autoIndex: false
});

export const LastPostModel = model("post", lastPostSchema);

interface InfPost {
    title: string;
}

const infPostSchema = new Schema<InfPost>({
    title: String
}, {
    collection: "inf_posts",
    autoIndex: false
});

export const InfPostModel = model("inf_post", infPostSchema);

interface Blog {
    idBlog: number;
    imageBlog: string;
    titleBlog: string;
    dateBlog: string;
    textBlog: string;
}

const blogSchema = new Schema<Blog>({
    idBlog: Number,
    imageBlog: String,
    titleBlog: String,
    dateBlog: String,
    textBlog: String
}, {
    collection: "blogs",
    autoIndex: false
});

export const BlogModel = model("blog", blogSchema);