import { Router } from "express";
import { LastPostModel } from "../models.js";
import { loggedHandlers } from "../functions.js";

const homeRouter = Router();

homeRouter.get("/postData", loggedHandlers(
    async (_req, res) => {
        const response = await LastPostModel.findOne({}, { _id: false });
        res.status(200).json(response);
    }
));

export default homeRouter;