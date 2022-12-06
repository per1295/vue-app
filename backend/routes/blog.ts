import { Router } from "express";
import { InfPostModel, BlogModel } from "../models.js";
import { loggedHandlers, BlogPageResponse } from "../functions.js";
import type { Document } from "mongoose";
import type { InfPost, Blog } from "../models.js";

interface IQuery {
    lastId?: string;
    startBlogIndex?: string;
}

const blogRouter = Router();

blogRouter.get("/posts", loggedHandlers(
    async (req, res) => {
        let { lastId } = req.query as unknown as IQuery;
        let response: Document<any, any, InfPost>[] = [];
        if ( lastId ) {
            response = await InfPostModel
            .find({}, { _id: false })
            .where("id")
            .lt(+lastId)
            .sort({
                id: -1
            })
            .limit(6);

            if ( response.length === 0 ) {
                return res.send("No more posts for now.");
            }
        } else {
            response = await InfPostModel
            .find({}, { _id: false })
            .sort({
                id: -1
            })
            .limit(6);
        }
        lastId = response.at(-1)?.get("id");
        res.json(
            new BlogPageResponse({ posts: response, lastId })
        );
    }
));

blogRouter.get("/blogs", loggedHandlers(
    async (req, res) => {
        let { lastId, startBlogIndex } = req.query as unknown as IQuery;
        let response: Document<any, any, Blog>[] = [];

        if ( startBlogIndex ) {
            response = await BlogModel
            .find({}, { _id: false })
            .where("id")
            .sort({
                id: -1
            })
            .limit(+startBlogIndex + 2);
            response = response.slice(+startBlogIndex);
        } else if ( lastId ) {
            response = await BlogModel
            .find({}, { _id: false })
            .where("id")
            .lt(+lastId)
            .sort({
                id: -1
            })
            .limit(2);

            if ( response.length === 0 ) {
                return res.send("No more blogs for now.");
            }
        } else {
            response = await BlogModel
            .find({}, { _id: false })
            .sort({
                id: -1
            })
            .limit(2);
        }

        lastId = response.at(-1)?.get("id");
        res.json(
            new BlogPageResponse({ blogs: response, lastId })
        );
    }
));

export default blogRouter;