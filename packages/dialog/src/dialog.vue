<template>
    <transition name="fade">
        <div class="clu-dialog-container" v-if="visible" @click.self="handelCancel">
            <div class="clu-dailog">
                <div class="clu-dailog__header">
                    <slot name="title">
                        <span class="clu-dailog__title">{{title}}</span>
                    </slot>
                    <clu-icon class="clu-dailog__headerbtn" type="guanbi" @click.native="handelCancel" />
                </div>
                <div class="clu-dailog__body">
                    <span>一段信息</span>
                </div>
                <div class="clu-dailog__footer">
                    <clu-button @click="handelCancel">取消</clu-button>
                    <clu-button type="primary">确定</clu-button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'CluDialog',
    props: {
        visible: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: '提示',
        },
    },
    methods: {
        handelCancel () {
            this.$emit('update:visible', false)
        },
    },

}
</script>

<style lang='scss' scoped>
    .clu-dialog-container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba($color: #000000, $alpha: .5);
        .clu-dailog {
            position: relative;
            width: 30%;
            background-color: #fff;
            margin: 15vh auto;

            .clu-dailog__header {
                padding: 20px;
                line-height: 24px;
                font-size: 18px;
                display: flex;
                justify-content: space-between;
            }
            .clu-dailog__body {
                padding: 20px;
            }

            .clu-dailog__footer {
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
