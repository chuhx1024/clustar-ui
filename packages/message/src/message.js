
import Vue from 'vue'
import Main from './message.vue'
const MessageConstructor = Vue.extend(Main)
const Message = function (msg) {
    alert(msg)
    const instance = new MessageConstructor({
        data: {
            msg,
        },
    })

    // instance.$mount('#app')
    instance.$mount()
    document.body.appendChild(instance.$el)
}
export default Message
