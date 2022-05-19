<template>
    <button
        class="clu-button-container"
        :class="[
            `clu-button--${type}`,
            {
                'is-round': round
            }
        ]"
        @click="handleClick"
    >
        <slot>按钮</slot>
    </button>
</template>

<script>
export default {
    name: 'CluButton',
    props: {
        type: {
            type: String,
            default: 'default',
        },
        round: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        handleClick (e) {
            this.$emit('click', e)
        },
    },

}
</script>

<style lang='scss' scoped>
    .clu-button-container {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        border: 1px solid #dcdfe6;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
    }
    .clu-button--default {
        background: #fff;
        color: #606266;
    }
    .clu-button--primary {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
    }
    .clu-button--success {
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
    }
    .clu-button--info {
        color: #fff;
        background-color: #909399;
        border-color: #909399;
    }
    .is-round {
        border-radius: 20px;
    }

</style>
