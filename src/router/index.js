import {createRouter, createWebHistory} from "vue-router";
import RegistrationPage from "../views/RegistrationPage.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/registration',
            name: 'registration',
            component: RegistrationPage
        },
    ]
})

export default router;