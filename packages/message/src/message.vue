<template>
    <transition name="clu-message-fade">
        <div v-if="visiable" @click="handleClose" class="clu-message-container" :style="positionStyle">
            {{msg}}
            <clu-icon type="guanbi"/>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'CluMessage',
    data () {
        return {
            visiable: false,
            verticalOffset: 20,
        }
    },
    computed: {
        positionStyle () {
            return {
                'top': `${this.verticalOffset}px`,
            }
        },
    },
    methods: {
        handleClose () {
            this.visiable = false
            // 用户传入的钩子函数 如果没有传入 就不执行了
            if (typeof this.onClose === 'function') {
                this.onClose()
            }
        },
    },

}
</script>

<style lang='scss' scoped>
    .clu-message-container {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        height: 30px;
        transition: opacity 0.3s, transform .4s, top 0.4s;
        background-color: #EBEEF5;
        line-height: 30px;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 14px;
    }
    .clu-message-fade-enter,
    .clu-message-fade-leave {
        opacity: 0;
        transform: translate(-50%, -100%);
    }

</style>
