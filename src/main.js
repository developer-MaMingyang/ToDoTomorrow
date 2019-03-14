import Vue from 'vue';
import 'normalize.css/normalize.css';
import 'babel-polyfill';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import './plugins/element.js'; // eslint-disable-line
import './reset.scss';

import App from './App.vue';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});

router.afterEach(() => {
    NProgress.done();
    window.scrollTo(0, 0);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
