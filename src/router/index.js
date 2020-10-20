import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/pages/Home';
import product from '@/pages/Home/product'
import Login from "../pages/Login";

Vue.use(VueRouter);

const routes = [{
        path: "/login",
        component: Login
    },
    {
        path: "/",
        component: Home,
        children: [{
            path: '/product',
            component: product
        }]
    }
];

const router = new VueRouter({
    routes
});

export default router;