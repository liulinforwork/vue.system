// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
//添加mockjs拦截请求，模拟返回服务器数据
import mock from './server/mock';
Vue.config.productionTip = false;

Vue.config.debug = true;
window.log = console.log;


Vue.use(ElementUI);
Vue.prototype.$ajax = axios;

/* eslint-disable no-new */

// 创建一个app实例，并且挂载到选择符#app匹配的元素上
new Vue({router}).$mount('#app');
