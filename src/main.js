import Vue from 'vue'
import VueRouter from 'vue-router'

//import axios for AJAX Calls
window.axios = require('axios');

import Vuex from 'vuex'

Vue.use(Vuex);
Vue.use(VueRouter);

//Components
import App from './App.vue'
import Home from './components/Home.vue'
import Charts from './components/Charts.vue'

//Routes
const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/koers', name: 'charts', component: Charts }
];

const router = new VueRouter({
  mode: 'history',
  routes, // short for `routes: routes`
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

//Import store for state management
import store from './store'
import {mapActions} from 'vuex'

//Vue Init
new Vue({
  el: '#app',

  methods: {
    ...mapActions(['getValue'])
  },

  created() {
    this.getValue();
  },

  router,
  store: new Vuex.Store(store),
  render: h => h(App)
})
