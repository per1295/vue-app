import supertest from "supertest";
import * as dotenv from "dotenv";
import { loggedHandlers, BlogPageResponse } from "../backend/functions";
import type { Request, Response, NextFunction } from "express";

dotenv.config();

const baseURI = `http://localhost:${process.env.PORT}`;
const getFullPath = (...paths: string[]): string => {
    let pathArray = [];
    for ( let path of paths ) {
        pathArray.push(`/${path}`);
    }
    return pathArray.join("");
};

describe("/blog", () => {
    const getPath = getFullPath.bind(null, "blog");
    const mockGetPath = jest.fn(getPath);

    test("mockGetPath returns values", () => {
        const mockGetPathArgs = [ "posts", "posts?lastId=6", "blogs" ];
        mockGetPathArgs.forEach(item => mockGetPath(item));

        expect(mockGetPath.mock.results.at(0)?.value).toBe(`/blog/${mockGetPathArgs.at(0)}`);
        expect(mockGetPath.mock.results.at(1)?.value).toBe(`/blog/${mockGetPathArgs.at(1)}`);
        expect(mockGetPath.mock.results.at(2)?.value).toBe(`/blog/${mockGetPathArgs.at(2)}`);
    });

    test("GET /posts", async () => {
        const response = await supertest(baseURI).get(mockGetPath("posts"));
        expect(response.body).not.toBeUndefined();
        expect(response.body?.lastId).toBeGreaterThan(0);
    });

    test("GET /posts?lastId=6", async () => {
        const response = await supertest(baseURI).get(mockGetPath("posts?lastId=6"));
        expect(response.body?.lastId).toBe(0);
    });

    test("GET /blogs", async () => {
        const response = await supertest(baseURI).get(mockGetPath("blogs"));
        expect(response.body).not.toBeUndefined();
        expect(response.body?.lastId).toBeGreaterThan(0);
    });

    test("GET /blogs?lastId=0", async () => {
        const response = await supertest(baseURI).get(mockGetPath("blogs?lastId=0"));
        expect(response.body).toEqual({});
    });

    test("GET /blogs?startBlogIndex=3", async () => {
        const response = await supertest(baseURI).get(mockGetPath("blogs/?startBlogIndex=3"));
        expect(response.body?.blogs?.length).toBe(2);
    });
});

describe("/global", () => {
    const getPath = getFullPath.bind(null, "global");

    test("GET /download", async () => {
        const response = await supertest(baseURI).get(getPath("download"));
        expect(response.body).toBeTruthy();
    });
});

describe("/home", () => {
    const getPath = getFullPath.bind(null, "home");

    test("GET /postData", async () => {
        const response = await supertest(baseURI).get(getPath("postData"));
        expect(response.body?.title).toBe("Change Your Space");
    });
});

describe("loggedHandlers", () => {
    const mockLoggedHandlers = jest.fn(loggedHandlers); 

    const handlers = [
        (req: Request, res: Response, next?: NextFunction) => {
            req.app.locals.CONST = "Hello, world";
            next ? next() : res.status(505).end("Something goes wrong");
        },
        (req: Request, res: Response) => {
            const CONST = req.app.locals.CONST;
            res.end(`Our const - ${CONST}`);
        }
    ];

    test("Count of calls", () => {
        handlers.forEach(item => mockLoggedHandlers(item));

        expect(mockLoggedHandlers.mock.calls.length).toBe(2);
    });

    test("Results of calls", () => {
        handlers.forEach(item => mockLoggedHandlers(item));

        expect(mockLoggedHandlers.mock.results.at(0)?.value).toBeInstanceOf(Function);
        expect(mockLoggedHandlers.mock.calls.at(0)?.at(0)).toBeInstanceOf(Function);
    });
});

describe("BlogPageResponse", () => {
    const mockFactoryFn = jest.fn((obj) => new BlogPageResponse(obj));

    const arrayOfObjects = [
        {
            name: "Joe",
            age: 27,
            isAdmin: true
        },
        {
            name: "Mike",
            age: 20,
            isAdmin: false
        }
    ];

    test("equality of returned values", () => {
        arrayOfObjects.forEach(item => mockFactoryFn(item));

        expect(mockFactoryFn.mock.results.at(0)?.value).toEqual(arrayOfObjects.at(0));
        expect(mockFactoryFn.mock.results.at(1)?.value).toEqual(arrayOfObjects.at(1));
    });
});