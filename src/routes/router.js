import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import transaksiRouter from "./transaksiRouter";
import productRouter from "./productRouter";

const BaseRouter = [
    {path: '/', name:'dashboard', component: Dashboard},
]

const routes = [
    ...BaseRouter,
    ...productRouter,
    ...transaksiRouter
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;