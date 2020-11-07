
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/components/views/HomeView.vue';
import LogIn from '@/components/auth/LogIn.vue';
import SignUp from '@/components/auth/SignUp.vue';
import OwnerPage from '@/components/owners/OwnerPage.vue';
import TenantPage from '@/components/tenants/TenantPage.vue';
import { component } from 'vue/types/umd';

Vue.use(VueRouter);
Vue.config.productionTip = false;

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: HomeView
        },

        {
            path: '/auth/login',
            component: LogIn
        },

        {
            path: '/auth/signup',
            component: SignUp
        },

        {
            path: '/owner',
            component: OwnerPage
        },

        {
            path: '/tenant',
            component: TenantPage
        }
    ]
})