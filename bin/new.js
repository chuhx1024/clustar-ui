'use strict'

if (!process.argv[2]) {
    console.error('[组件名]必填 - Please enter new component name')
    process.exit(1)
}

const uppercamelcase = require('uppercamelcase')

const componentname = process.argv[2]
// 转换大驼峰
const ComponentName = 'Clu' + uppercamelcase(componentname)

const fileSave = require('file-save')

const File = [
    {
        filename: `/packages/${componentname}/index.js`,
        content: `import ${ComponentName} from './src/${componentname}.vue'

${ComponentName}.install = (Vue) => {
    Vue.component(${ComponentName}.name, ${ComponentName})
}

export default ${ComponentName}`,
    },
    {
        filename: `/packages/${componentname}/src/${componentname}.vue`,
        content: `<template>
    <div class="clu-${componentname}-container">
        ${ComponentName}
    </div>
</template>

<script>
export default {
    name: '${ComponentName}',

}
</script>

<style lang='scss' scoped>
    .clu-${componentname}-container {
        color: purple;
    }

</style>`,
    },
]

File.forEach(item => {
    fileSave(`./${item.filename}`)
        .write(item.content, 'utf8')
        .end('\n')
})

console.log('DONE!')
