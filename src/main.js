// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import io from 'socket.io-client'
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import { XButton } from 'vux'
import App from './App'
import Home from './components/HelloFromVux'

const socket = io();
socket.on('chat message', function(msg){
  console.log('incoming: ' + msg)
});
socket.on('connect_error', (error) => {
  console.log('connect_error');
  console.log(error);
});
socket.on('connect', () => {
  console.log('connect');
});

Vue.prototype.$socket = socket;
Vue.use(VueRouter);
Vue.component('x-button', XButton);

const routes = [{
  path: '/',
  component: Home
}];

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
