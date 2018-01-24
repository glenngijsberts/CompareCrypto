import Vue from 'vue'
import VueRouter from 'vue-router'

//import axios for AJAX Calls
window.axios = require('axios');

Vue.use(VueRouter);

//Components
import App from './App.vue'
import Home from './components/Home.vue'

//Routes
const routes = [
  { path: '/', name: 'home', component: Home }
];

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
});

//Vue Init
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
