<template>
    <div class="clu-switch-container" @click="handleChange" >
        <input
            class="clu-switch_input"
            type="checkbox"
            ref="input"
        >
        <span  :class="['clu-switch_btn', value ? 'is-active' : '']"></span>
    </div>
</template>

<script>
export default {
    name: 'CluSwitch',
    props: {
        value: {
            type: Boolean,
            default: false,
        },
    },
    data () {
        return {
            activeValue: true,
            inactiveValue: false,
            switchDisabled: false,
        }
    },
    methods: {
        handleChange (e) {
            this.$emit('input', !this.value)
            this.$nextTick(() => {
                this.$refs.input.checked = this.value
            })
        },
    },

}
</script>

<style lang='scss' scoped>
    .clu-switch-container {
        .clu-switch_input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .clu-switch_btn {
            position: relative;
            display: inline-block;
            width: 40px;
            height: 20px;
            border: 1px solid #dcdfe6;
            background-color: #ccc;
            border-radius:10px;
            box-sizing: border-box;
            &:after {
                content: '';
                position: absolute;
                top: 1px;
                left: 1px;
                display: inline-block;
                width: 16px;
                height: 16px;
                background-color: #fff;
                border-radius: 50%;
            }

            &.is-active {
                background-color: blue;
                &:after {
                    left: 100%;
                    margin-left: -16px - 1px;
                }
            }

        }

    }

</style>
