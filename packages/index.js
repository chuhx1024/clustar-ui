import { version } from '../package.json'

import Button from './button/index.js'
import Icon from './icon/index.js'
import Dialog from './dialog/index.js'
import Input from './input/index.js'
import Switch from './switch/index.js'
import Radio from './radio/index.js'
import RadioGroup from './radio-group/index.js'
import Checkbox from './checkbox/index.js'
import CheckboxGroup from './checkbox-group/index.js'
import TestProps from './test-props/index.js'
import Form from './form/index.js'
import FormItem from './form-item/index.js'
import Message from './message/index.js'
import MessageBox from './message-box/index.js'

const components = [
    Button,
    Icon,
    Dialog,
    Input,
    Switch,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    TestProps,
    Form,
    FormItem,

]

const install = (Vue) => {
    components.forEach(component => {
        Vue.component(component.name, component)
    })

    Vue.prototype.$message = Message
    Vue.prototype.$messageBox = MessageBox
}

// if (typeof window !== 'undefined' && window.Vue) {
//     install(window.Vue)
// }

// vue 插件机制  导出一个对象的话  这个对象要有一个 install 方法
export default {
    // version: require('../package.json').version,
    version: version,
    install,
    Button,
    Icon,
    Dialog,
    Input,
    Switch,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    TestProps,
    Form,
    FormItem,
    Message,
    MessageBox,

}
