'use strict'

if (!process.argv[2]) {
    console.error('[组件名]必填 - Please enter new component name')
    process.exit(1)
}

const ComponentName = process.argv[2]

const fileSave = require('file-save')

const File = [
    {
        filename: `/packages/${ComponentName}/index.js`,
        content: `import ${ComponentName} from './src/${ComponentName}.vue'

${ComponentName}.install = (Vue) => {
    Vue.component(${ComponentName}.name, ${ComponentName})
}

export default ${ComponentName}`,
    },
    {
        filename: `/packages/${ComponentName}/src/${ComponentName}.vue`,
        content: `<template>
    <div class="clu-city-container">
        city
    </div>
</template>

<script>
export default {
    name: '${ComponentName}',

}
</script>

<style lang='scss' scoped>
    .clu-city-container {
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
