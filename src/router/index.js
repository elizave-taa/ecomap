import {createRouter, createWebHistory} from "vue-router";
import ArticlesPage from "../views/ArticlesPage.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/articles",
            name: "articles",
            component: ArticlesPage,
        }
    ]
})

export default router;