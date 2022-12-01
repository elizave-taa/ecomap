import {createRouter, createWebHistory} from "vue-router";
import ArticlesPage from "../views/ArticlesPage.vue";
import WelcomePage from "/src/views/WelcomePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/articles",
            name: "articles",
            component: ArticlesPage,
        },
        {
            name: 'WelcomePage',
            component: WelcomePage,
            path: '/ecomap'
        }
    ]
})

export default router;