
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/components/views/HomeView.vue';
import LogIn from '@/components/auth/LogIn.vue';
import SignUp from '@/components/auth/SignUp.vue';

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
        }
    ]
})