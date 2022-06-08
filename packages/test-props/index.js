import CluTestProps from './src/test-props.vue'

CluTestProps.install = (Vue) => {
    Vue.component(CluTestProps.name, CluTestProps)
}

export default CluTestProps
