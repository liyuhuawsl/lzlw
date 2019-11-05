import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import ClassIfy from '../pages/ClassIfy.vue';
import Identifying from '../pages/Identifying.vue';
import ShoppingCart from '../pages/ShoppingCart.vue';
import Personal from '../pages/Personal.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "hash",
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/classify',
    name: 'classify',
    component: ClassIfy
  }, {
    path: '/identifying',
    name: 'identifying',
    component: Identifying
  }, {
    path: '/shoppingcart',
    name: 'shoppingcart',
    component: ShoppingCart
  }, {
    path: '/personal',
    name: 'personal',
    component: Personal
  }, {
    path: '*',
    redirect: '/home'
  }]
})

export default router;