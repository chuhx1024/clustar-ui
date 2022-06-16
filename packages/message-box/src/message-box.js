
import Vue from 'vue'
import msgboxVue from './message-box.vue'
const MessageBoxConstructor = Vue.extend(msgboxVue)
const MessageBox = (options = {}) => {
    if (typeof options === 'string') {
        options = {
            msg: options,
        }
    }
    const instance = new MessageBoxConstructor({
        data: {
            ...options,
        },
    })
    instance.$mount()
    instance.title = '我是自定义'
    document.body.appendChild(instance.$el)
}

export default MessageBox
