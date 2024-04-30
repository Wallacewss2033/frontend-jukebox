import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home/HomePage.vue';
import Layout from '../views/Layout/LayoutPage.vue'
const routes = [
    { 
        path: '',
        component: Layout,
        children: [
            {
                path: '', 
                name: 'Home',
                component: Home
            },
        ] 
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
