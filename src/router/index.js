import {createRouter, createWebHistory} from "vue-router";
import ArticlesPage from "../views/ArticlesPage.vue";
import WelcomePage from "/src/views/WelcomePage.vue";
import RegistrationPage from "../views/RegistrationPage.vue";
import ArticleView from "../views/ArticleView.vue";
import MapPage from "../views/MapPage.vue";
import DataPoint from "../views/DataPoint.vue";
import AboutUs from "../views/AboutUs.vue";
import ProfilePage from "../views/ProfilePage.vue";
import AdminPanel from "../views/AdminPanel.vue";
import PostAdd from "../components/PostAdd.vue";
import DataPointEdit from "../views/DataPointEdit.vue";
import ProfileEdit from "../views/ProfileEdit.vue";

const router = createRouter({
    history: createWebHistory("/ecomap/"),
    routes: [
        {
            path: "/articles",
            name: "articles",
            component: ArticlesPage,
        },
        {
            path: '/',
            name: 'welcome-page',
            component: WelcomePage,
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
            path: '/point/:id',
            name: 'edit-point',
            component: DataPointEdit,
            props: true
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
        },
        {
            path: '/admin',
            name: 'admin',
            component: AdminPanel
        },
        {
            path: '/admin/post/add',
            name: 'post-add',
            component: PostAdd
        },
        {
            path: '/profile/edit',
            name: 'profile-edit',
            component: ProfileEdit
        }
    ]
})

export default router;