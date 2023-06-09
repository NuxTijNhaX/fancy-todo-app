import Vue from 'vue'
import App from './App.vue'
import './style.css'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router: router,
  store: store,
  render: h => h(App)
}).$mount('#app')
