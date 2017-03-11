import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.config.debug = true;

import registerRouters from './routers';
import App from './app.vue';

Vue.use(VueRouter);

var router = new VueRouter({
});

registerRouters(router);

router.start(App, '#app');
