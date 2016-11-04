import Vue from "vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

import index from './components/app.vue';
import list from './components/list.vue';
import hello from './components/hello.vue';

Vue.config.debug = true;

var App = Vue.extend({});

var router = new VueRouter();

router.map({
    '/index':{
        name:'index',
        // component:require("components/app.vue"),
        component:index,
        subRoutes:{
            '/hello':{
                name:'hello',
                component:hello
            }
        }
    },
    '/list': {
        name:'list',
        component: list
    },
});

router.redirect({
	'*':"./index"
})

router.start(App,'#app');