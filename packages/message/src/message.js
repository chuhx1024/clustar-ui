
import Vue from 'vue'
import Main from './message.vue'
const MessageConstructor = Vue.extend(Main)

let instance
const instances = []
let seed = 0
const Message = function (options = {}) {
    if (typeof options === 'string') {
        options = {
            msg: options,
        }
    }
    console.log(options, 123)
    // 整合用户传入的 onclose 和自己 的close 使用的的是方法劫持的思想
    const userClose = options.onClose
    const id = 'message_' + seed++
    options.onClose = () => {
        alert('处理高度的方法')
        // 处理高度问题
        let removedHeight
        let index = -1
        const len = instances.length
        console.log(id, 9090)
        for (let i = 0; i < len; i++) {
            console.log(instances[i].id, 8877)
            if (id === instances[i].id) {
                index = i
                removedHeight = instances[i].$el.offsetHeight
                instances.splice(i, 1)
                break
            }
        }
        // 排除不需要 移动位置的情况
        if (len <= 1 || index === -1 || index > instances.length - 1) return
        for (let i = index; i < len - 1; i++) {
            const dom = instances[i].$el
            console.log(dom, 89)
            dom.style.top =
              parseInt(dom.style.top, 10) - removedHeight - 16 + 'px'
        }

        userClose()
    }

    instance = new MessageConstructor({
        data: {
            ...options,
        },
    })

    instance.id = id

    instance.$mount()
    instance.visiable = true
    let verticalOffset = 16
    // 根据实例的个数计算 实例的偏移量
    instances.forEach(item => {
        verticalOffset += item.$el.offsetHeight + 16
    })
    instance.verticalOffset = verticalOffset
    document.body.appendChild(instance.$el)
    instances.push(instance)
    console.log(instance, 123)
    return instance
}
export default Message
