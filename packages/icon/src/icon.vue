<template>
    <svg class="clu-icon-container icon" aria-hidden="true">
        <use :xlink:href="`#clu-${type}`"></use>
    </svg>
</template>

<script>
import './resource/iconfont.js'
export default {
    name: 'CluIcon',
    props: {
        type: {
            type: String,
            default: 'fenxiang',
        },
    },

}
</script>

<style lang='scss' scoped>
.clu-icon-container {
    width: 1.1em;
    height: 1.1em;
    overflow: hidden;
    vertical-align: -0.15em;
    fill: currentColor;
}
</style>
