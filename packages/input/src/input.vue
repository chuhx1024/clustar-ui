<template>
    <div class="clu-input-container">
        <input
            v-bind="$attrs"
            @input="handelInput"
            class="clu-input__inner"
            :type="passwordVisible ? 'text' : type"

        >
        <span v-if="type === 'password'" @click="showPassword" class="clu-input__suffix">
            <clu-icon v-if="passwordVisible" type="faxian"  />
            <clu-icon v-else type="liulan"/>
        </span>
    </div>
</template>

<script>
export default {
    name: 'CluInput',
    props: {
        type: {
            type: String,
            default: 'text',
        },
    },
    data () {
        return {
            passwordVisible: false,
        }
    },
    methods: {
        handelInput (e) {
            this.$emit('input', e.target.value)
        },
        showPassword () {
            this.passwordVisible = !this.passwordVisible
        },
    },

}
</script>

<style lang='scss' scoped>
    .clu-input-container {
        width: 100%;
        height: 40px;
        position: relative;
        .clu-input__inner {
            -webkit-appearance: none;
            background-color: #fff;
            background-image: none;
            border-radius: 4px;
            border: 1px solid #dcdfe6;
            box-sizing: border-box;
            color: #606266;
            display: inline-block;
            font-size: inherit;
            height: 40px;
            line-height: 40px;
            outline: none;
            padding: 0 15px;
            transition: border-color .2s cubic-bezier(.645,.045,.355,1);
            width: 100%;
        }

        .clu-input__suffix {
            position: absolute;
            right: 0;
            display: inline-block;
            line-height: 40px;
            padding-right: 10px;
        }
    }

</style>
