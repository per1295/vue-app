import { Router } from "express";
import { InfPostModel, BlogModel } from "../models";
import { logError } from "../functions";

const blogRouter = Router();

blogRouter.get("/posts", async (_req, res) => {
    const response = await InfPostModel.find({}).limit(4);
    res.status(200).json(response);
});

blogRouter.get("/blogs", async (req, res) => {
    try {
        const { nowPostId } = req.query;
        if ( typeof nowPostId === "undefined" ) return res.status(404).send("Id isn`t defined!");
        const firstBlog = +nowPostId, secondBlog = +nowPostId + 1;
        const response = await BlogModel.find({
            idBlog: {
                $lte: secondBlog,
                $gte: firstBlog
            }
        }).limit(2);
        res.status(200).json(response);
    } catch (error) {
        let err = error as Error;
        logError(err);
    }
});

blogRouter.get("/countBlogs", async (_req, res) => {
    try {
        const countBlogs = await BlogModel.find().count();
        res.status(200).send(`${countBlogs}`);
    } catch (error) {
        let err = error as Error;
        logError(err);
    }
});

export default blogRouter;