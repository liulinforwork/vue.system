/**
 * Created by Administrator on 2017/4/25.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../App.vue';
import Index from '../pages/index.vue';
import Voucher from '../pages/voucher.vue';
import Balance from '../pages/balance.vue';
import ArticleList from '../pages/articleList.vue';
import FrontEnd from '../pages/frontEnd.vue';
import BackEnd from '../pages/backEnd.vue';
import Job from '../pages/job.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: App,
        children: [
            {path: '', redirect: '/index'},
            {path: '/index', name: '充值中心',component: Voucher},
            {path: '/index/voucher', name: '充值中心', component: Voucher},
            {path: '/index/balance', name: '余额账户', component: Balance},
            {path: '/index/articleList', name: '文章列表', component: ArticleList},
            {path: '/index/frontEnd', name: '前端开发', component: FrontEnd},
            {path: '/index/backEnd', name: '后端开发', component: BackEnd},
            {path: '/index/job', name: '求职指南', component: Job}
        ]
    }
];

const router = new VueRouter({
    hashbang:false,//去除#！开头
    mode:'history',
    routes: routes, // short for routes: routes
    linkActiveClass: 'active',  // router-link的选中状态的class，也有一个默认的值
    history: true,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
});

export default router
