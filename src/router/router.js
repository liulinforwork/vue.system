/**
 * Created by Administrator on 2017/4/25.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../App.vue';
import Index from '../pages/index.vue';
import Voucher from '../pages/voucher.vue';
import Balance from '../pages/balance.vue';
import O2o from '../pages/o2o.vue';
import Correct from '../pages/correct.vue';
import Statistics from '../pages/statistics.vue';

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
            {path: '/index/o2o/1', name: 'O2O收银台', component: O2o},
            {path: '/index/o2o/2', name: 'O2O收银台', component: O2o},
            {path: '/index/correct', name: '冲正中心', component: Correct},
            {path: '/index/statistics', name: '订单统计', component: Statistics},
            {path: '/index/correct', name: '业务办理', component: Correct},
            {path: '/index/correct', name: '手机配件', component: Correct},
            {path: '/index/correct', name: '活动中心', component: Correct},
            {path: '/index/correct', name: '宣传物料', component: Correct},
            {path: '/index/correct', name: '财务管理', component: Correct},
            {path: '/index/correct', name: '安全设置', component: Correct}
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