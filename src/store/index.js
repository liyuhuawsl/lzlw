import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger';

import classify from './classify';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
		classify
	},
  state: {
  },
  mutations: {
  },
  actions: {
  },
  plugins: [logger()]
  
})
