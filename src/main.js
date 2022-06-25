import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import './assets/scss/main.scss';

Vue.config.productionTip = false;
Vue.prototype.$imgUrl = 'https://5367-197-61-80-159.eu.ngrok.io';
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
