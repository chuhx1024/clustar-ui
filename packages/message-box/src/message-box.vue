<template>
    <transition name="fade">
        <div class="clu-message-box-container" v-if="visible" @click.self="handelCancel">
            <div class="clu-message-box">
                <div class="clu-message-box__header">
                    <slot name="title">
                        <span class="clu-message-box__title">{{title}}</span>
                    </slot>
                    <clu-icon class="clu-message-box__headerbtn" type="guanbi" @click.native="handelCancel" />
                </div>
                <div class="clu-message-box__body">
                    <span>{{body}}</span>
                </div>
                <div class="clu-message-box__footer">
                    <clu-button @click="handelCancel">取消</clu-button>
                    <clu-button @click="handelOk" type="primary">确定</clu-button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Clumessage-box',
    data () {
        return {
            visible: true,
            title: '默认标题',
            body: '默认内容',

        }
    },
    methods: {
        handelCancel () {
            this.visible = false
            // 用户传入的钩子函数 如果没有传入 就不执行了
            if (typeof this.onClose === 'function') {
                this.onClose()
            }
        },
        handelOk () {
            this.visible = false
            // 用户传入的钩子函数 如果没有传入 就不执行了
            if (typeof this.onOk === 'function') {
                this.onOk()
            }
        },
    },

}
</script>

<style lang='scss' scoped>
    .clu-message-box-container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba($color: #000000, $alpha: .5);
        .clu-message-box {
            position: relative;
            width: 30%;
            background-color: #fff;
            margin: 15vh auto;

            .clu-message-box__header {
                padding: 20px;
                line-height: 24px;
                font-size: 18px;
                display: flex;
                justify-content: space-between;
            }
            .clu-message-box__body {
                padding: 20px;
            }

            .clu-message-box__footer {
                padding: 20px;
                text-align: right;
                .clu-button-container {
                    &:first-child {
                        margin-right: 20px;
                    }
                }
            }
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
        transform: translateY(-20px);
    }

</style>
