import {createRouter, createWebHistory} from "vue-router";
import WelcomePage from "/src/views/WelcomePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'WelcomePage',
            component: WelcomePage,
            path: '/ecomap'
        }
    ]
})

export default router;