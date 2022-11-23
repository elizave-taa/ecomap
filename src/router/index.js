import {createRouter, createWebHistory} from "vue-router";
import WelcomePage from "../views/WelcomePage.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'WelcomePage',
            component: WelcomePage,
            path: '/'
        }
    ]
})

export default router;