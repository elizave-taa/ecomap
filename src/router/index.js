import {createRouter, createWebHistory} from "vue-router";
import ArticlesPage from "../views/ArticlesPage.vue";
import WelcomePage from "/src/views/WelcomePage.vue";
import RegistrationPage from "../views/RegistrationPage.vue";
import ArticleView from "../views/ArticleView.vue";
import MapPage from "../views/MapPage.vue";
import DataPoint from "../views/DataPoint.vue";
import AboutUs from "../views/AboutUs.vue";
import ProfilePage from "../views/ProfilePage.vue";

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
        {
            path: '/map',
            name: 'map-page',
            component: MapPage
        },
        {
            path: '/point',
            name: 'new-point',
            component: DataPoint
        },
        {
            path: '/we',
            name: 'about-us',
            component: AboutUs
        },
        {
            path: '/profile',
            name: 'profile',
            component: ProfilePage
        }
    ]
})

export default router;