import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home/HomePage.vue';
import Layout from '../views/Layout/LayoutPage.vue'
import Login from "@/views/Auth/LoginPage.vue";
import auth from "@/services/middleware";
import Logout from "@/views/Auth/LogoutPage.vue";
const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home,
            },
        ],
        beforeEnter: auth,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/logout',
        name: 'Logout',
        component: Logout,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        redirect: '/login'
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
