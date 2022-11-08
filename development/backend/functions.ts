import type { Request, Response, NextFunction } from "express";
import { BlogModel, InfPostModel, LastPostModel } from "./models";
import type { Blog, InfPost, LastPost } from "./models";

export function logError<TypeError extends Error>(error: TypeError): TypeError {
    console.error(error.name + ": " + error.message);
    return error;
}

interface IArgv {
    [key: string]: string;
}

interface IParsedArgv {
    env: string;
}

export function getArgs(): IParsedArgv {
    const argv = process.argv.slice(2, process.argv.length);
    const parsedArgs = {} as IArgv;

    argv.forEach(item => {
        const [ key, value ] = item.split("=");
        parsedArgs[key] = value.toLowerCase();
    });

    return parsedArgs as unknown as IParsedArgv;
}

interface ILoggedHandler {
    (req: Request, res: Response, next?: NextFunction): Promise<any> | any;
}

export function loggedHandlers(...handlers: ILoggedHandler[]) {
    return async function(req: Request, res: Response, next?: NextFunction) {
        try {
            for ( let handler of handlers ) {
                await handler(req, res, next);
            }
        } catch (error) {
            logError(error as Error);
        }
    }
}

interface IBlogPageResponse {
    [key: string]: any;
}

export class BlogPageResponse implements IBlogPageResponse {
    [key: string]: any;

    constructor(props: IBlogPageResponse) {
        for ( let [ key, value ] of Object.entries(props) ) {
            this[key] = value;
        }
    }
}

export async function initMongoDB() {
    const reviver = (key: string, value: any) => key === "_id" ? value?.$oid : value;

    try {
        const blogsLength = (await BlogModel.find({})).length;
        const inf_postsLength = (await InfPostModel.find({})).length;
        const postsLength = (await LastPostModel.find({})).length;

        if ( blogsLength === 0 ) {
            const blogs = JSON.parse((await import("./mongodb/blogs.json")).default, reviver) as Blog[];
            await BlogModel.insertMany(blogs);
        };
        if ( inf_postsLength === 0 ) {
            const inf_posts = JSON.parse((await import("./mongodb/inf_posts.json")).default, reviver) as InfPost[];
            await InfPostModel.insertMany(inf_posts);
        };
        if ( postsLength === 0 ) {
            const posts = JSON.parse((await import("./mongodb/posts.json")).default, reviver) as LastPost[];
            await LastPostModel.insertMany(posts);
        };
    } catch (error) {
        logError(error as Error);
    }
}