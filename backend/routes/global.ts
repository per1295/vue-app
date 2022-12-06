import { Router } from "express";
import { loggedHandlers } from "../functions.js";
import { resolve } from "path";
    
const globalRouter = Router();

globalRouter.get("/download", loggedHandlers(
    async (req, res) => {
        const { filename, ext } = req.query;
        const path = resolve(__dirname, `../frontend${filename}.${ext}`);
        res.download(path, `${filename}.${ext}`);
    }
));

export default globalRouter;