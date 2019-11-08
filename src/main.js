import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

/* 导入公共样式 */
import './assets/reset.min.css';
import './assets/font/iconfont.css';
import './assets/w-font/font/iconfont.css';
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
import Swiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.config.productionTip = false;
Vue.use(Swiper);
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
