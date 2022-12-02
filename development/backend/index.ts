import "regenerator-runtime";
import * as dotenv from "dotenv";
import { initMongoDB } from "./functions";
import mongoose from "mongoose";
import app from "./app";

dotenv.config();

const { DOCKER_MONGODB_URL, LOCAL_MONGODB_URL, PRODUCTION_MONGODB_URL } = process.env;

const MONGODB_URL = DOCKER_MONGODB_URL || PRODUCTION_MONGODB_URL || LOCAL_MONGODB_URL as string;

async function startServer() {
    await mongoose.connect(MONGODB_URL, { dbName: "vue-app" });
    await initMongoDB();

    app.listen(process.env.PORT, () => {
        console.log(`Server is working on: http://localhost:${process.env.PORT}`);
    });
}

startServer();