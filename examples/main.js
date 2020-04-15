import Vue from 'vue'
import App from './App.vue'
import CxUi from '../packages'
Vue.config.productionTip = false
Vue.use(CxUi)
new Vue({
  render: h => h(App)
}).$mount('#app')
