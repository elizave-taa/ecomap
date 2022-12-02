import {createRouter, createWebHistory} from "vue-router";
import ArticlesPage from "../views/ArticlesPage.vue";
import WelcomePage from "/src/views/WelcomePage.vue";
import RegistrationPage from "../views/RegistrationPage.vue";
import ArticleView from "../views/ArticleView.vue";

const router = createRouter({
    history: createWebHistory("/ecomap/"),
    routes: [
        {
            path: "/articles",
            name: "articles",
            component: ArticlesPage,
        },
        {
            name: 'WelcomePage',
            component: WelcomePage,
            path: '/'
        },
        {
            path: '/registration',
            name: 'registration',
            component: RegistrationPage
        },
        {
            path: "/article/:id",
            name: "article",
            component: ArticleView,
            props: true,
        },
    ]
})

export default router;