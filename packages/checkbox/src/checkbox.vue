<template>
    <div class="clu-checkbox-container" @click="handelChange">
        <input
            class="clu-radio_input"
            type="checkbox"
            :checked="value"
        >
        <span :class="['clu-checkbox_inner', value === true ? 'is-checked' : '']"></span>
        <span>
            <slot>{{label}}</slot>
        </span>
    </div>
</template>

<script>
export default {
    name: 'CluCheckbox',
    props: {
        value: null,
        label: {
            type: String,
            default: '',
        },
    },
    methods: {
        handelChange () {
            this.$emit('input', !this.value)
        },
    },

}
</script>

<style lang='scss' scoped>
    .clu-checkbox-container {
        .clu-checkbox_inner {
            display: inline-block;
            width: 14px;
            height: 14px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 2px;
            position: relative;
            &::after {
                content: "";
                border: 1px solid #fff;
                border-left: 0;
                border-top: 0;
                height: 7px;
                left: 4px;
                position: absolute;
                top: 1px;
                transform: rotate(45deg) scaleY(0);
                width: 3px;
                transition: transform .15s ease-in .05s;
                transform-origin: center;
            }
            &.is-checked {
                background-color: #409eff;
                 &:after {
                    transform: rotate(45deg) scale(1);
                }
            }
        }
    }

</style>
