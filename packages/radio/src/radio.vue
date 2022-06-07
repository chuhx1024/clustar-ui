<template>
    <div class="clu-radio-container" @click="handleClick">
        <input
            class="clu-radio_input"
            type="radio"
            :value="value"
            :checked="checked"
        >
        <span :class="['clu-radio_inner', value === label ? 'is-checked' : '']"></span>
        <span>
            <slot>{{label}}</slot>
        </span>
    </div>
</template>

<script>
export default {
    name: 'CluRadio',
    props: {
        label: {
            type: [String, Number, Boolean],
            default: '',
        },
        value: null,
    },
    computed: {
        checked () {
            return this.value === this.label
        },
    },
    methods: {
        handleClick () {
            this.$emit('input', this.label)
        },
    },

}
</script>

<style lang='scss' scoped>
    .clu-radio-container {
        cursor: pointer;
        .clu-radio_input {
            opacity: 0;
            width: 0;
            height: 0;
        }
        .clu-radio_inner {
            border: 1px solid #dcdfe6;
            border-radius: 100%;
            width: 14px;
            height: 14px;
            background-color: #fff;
            position: relative;
            display: inline-block;
            box-sizing: border-box;
            margin-right: 5px;
            &:after {
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background-color: #fff;
                content: "";
                position: absolute;
                left: 50%;
                top: 50%;
                margin: -2px 0 0 -2px;
                transform: scale(0);
                transition: transform .15s ease-in;
            }

            &.is-checked {
                border-color: #409eff;
                background: #409eff;
                 &:after {
                    transform: scale(1);
                }
            }
        }
    }

</style>
