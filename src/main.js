import Vue from 'vue'
import App from './App.vue'
import ElementUI from "element-ui";
import router from '@/router'
import http from '@/api'
import store from './store'

Vue.prototype.$http = http.service
Vue.config.productionTip = false
Vue.use(ElementUI);

router.beforeEach((to, from, next) =>{
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
