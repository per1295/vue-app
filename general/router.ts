import { createRouter, createMemoryHistory, createWebHistory, RouteRecordRaw } from "vue-router";

const isServer = typeof window === "undefined";
const createHistory = isServer ? createMemoryHistory : createWebHistory;

const Home = () => import("../frontend/home/index.vue");
const About = () => import("../frontend/about/index.vue");
const Work = () => import("../frontend/work/index.vue");
const Project = () => import("../frontend/project/index.vue");
const Contacts = () => import("../frontend/contacts/index.vue");
const Blog = () => import("../frontend/blog/index.vue");

import { resetMenu, scrollToTop } from "../functions";

const routes: RouteRecordRaw[] = [
    {
        path: "/home",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/work",
        component: Work
    },
    {
        path: "/project",
        component: Project
    },
    {
        path: "/contacts",
        component: Contacts
    },
    {
        path: "/blog",
        component: Blog
    },
    {
        path: "/",
        redirect: "/home"
    },
];

export default function() {
    const router = createRouter({
        history: createHistory(),
        routes
    });

    router.afterEach(() => {
        resetMenu();
        scrollToTop();
    });

    return router;
}