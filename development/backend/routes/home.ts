import { Router } from "express";
import { LastPostModel } from "../models";
import { logError } from "../functions";

const homeRouter = Router();

homeRouter.get("/postData", async (_req, res) => {
    try {
        let response = await LastPostModel.findOne({});
        res.status(200).json(response);
    } catch (error) {
        let err = error as Error;
        logError(err);
    }
});

export default homeRouter;