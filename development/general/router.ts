import { createRouter, createMemoryHistory, createWebHistory, RouteRecordRaw } from "vue-router";
import TheFoundation from "../frontend/globalComponents/TheFoundation.vue";

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
        component: TheFoundation,
        props: {
            asyncComponent: Home,
            key: "0"
        }
    },
    {
        path: "/about",
        component: TheFoundation,
        props: {
            asyncComponent: About,
            key: "1"
        }
    },
    {
        path: "/work",
        component: TheFoundation,
        props: {
            asyncComponent: Work,
            key: "2"
        }
    },
    {
        path: "/project",
        component: TheFoundation,
        props: {
            asyncComponent: Project,
            key: "3"
        }
    },
    {
        path: "/contacts",
        component: TheFoundation,
        props: {
            asyncComponent: Contacts,
            key: "4"
        }
    },
    {
        path: "/blog",
        component: TheFoundation,
        props: {
            asyncComponent: Blog,
            key: "5"
        }
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