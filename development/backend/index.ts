import "regenerator-runtime";
import * as dotenv from "dotenv";
import { initMongoDB } from "./functions";
import mongoose from "mongoose";
import app from "./app";
dotenv.config();

const MONGODB_URL = process.env.DOCKER_MONGODB_URL || process.env.LOCAL_MONGODB_URL as string;

async function startServer() {
    await mongoose.connect(MONGODB_URL);
    await initMongoDB();
    app.listen(process.env.PORT, () => {
        console.log("Server is working on:", "\x1b[36m", `http://localhost:${process.env.PORT}`);
    });
}

startServer();