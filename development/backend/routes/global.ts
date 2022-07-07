import { Router } from "express";
import { logError } from "../functions";
import { resolve } from "path";
    
const globalRouter = Router();

interface RequestQuery {
    filename: string;
    ext: string;
}

globalRouter
    .route("/download")
    .get(async (req, res) => {
        try {
            const { filename, ext } = req.query as unknown as RequestQuery;
            const path = resolve(__dirname, `../frontend${filename}.${ext}`);
            res.download(path, `${filename}.${ext}`, (err) => {
                if ( err ) logError(err);
            });
        } catch (error) {
            const err = error as Error;
            logError(err);
        }
    });

export default globalRouter;