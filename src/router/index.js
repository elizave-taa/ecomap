import {createRouter, createWebHistory} from "vue-router";
import WelcomePage from "../views/WelcomePage.vue";
import ProfilePage from "../views/ProfilePage.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'WelcomePage',
            component: WelcomePage,
            path: '/'
        },
        {
            name: 'ProfilePage',
            component: ProfilePage,
            path: '/profile'
        }
    ]
})

export default router;