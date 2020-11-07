
// import { vuetify } from '@/plugins/vuetify';
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { router } from '@/routes/routes';

Vue.config.productionTip = false
Vue.use(Vuetify);

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
