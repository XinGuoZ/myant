import Vue from 'vue'
import App from './App.vue'
import ElementUI from "element-ui";
import router from '@/router'
import {getRequest} from '@/api'
import {postRequest} from '@/api'
import {deleteRequest} from '@/api'
import {putRequest} from '@/api'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.putRequest = putRequest;
router.beforeEach((to, from, next) =>{
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
