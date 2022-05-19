import Vue from 'vue'
import App from './App.vue'
import router from './router'
import CluButton from '../packages/button'
import '../src/assets/layout.scss'
Vue.config.productionTip = false

Vue.use(CluButton)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
