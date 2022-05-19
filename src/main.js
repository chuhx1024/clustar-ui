import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import CluButton from '../packages/button'
// import CluIcon from '../packages/icon'
import CluUI from '../packages/index.js'
// import CluUI from '../dist/clustar-ui.umd.min'
// import '../dist/clustar-ui.css'
import '../src/assets/layout.scss'
Vue.config.productionTip = false

// Vue.use(CluButton)
// Vue.use(CluIcon)
console.log(CluUI)
Vue.use(CluUI)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
