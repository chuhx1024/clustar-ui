import Vue from 'vue'
import App from './App.vue'
import router from './router'
import CluButton from '../packages/button'
import CluIcon from '../packages/icon'
import '../src/assets/layout.scss'
Vue.config.productionTip = false

Vue.use(CluButton)
Vue.use(CluIcon)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
