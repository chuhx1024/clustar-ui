<template>
    <div id="app">
        <div class="row">
            <clu-switch v-model="switchData" />
        </div>
        <div class="row">
            <clu-input style="width: 20%" v-model="inputData" type="password" placeholder='请输入' />
            <clu-input style="width: 20%" v-model="inputData" placeholder='请输入' />
        </div>
        <div class="row">
            <clu-button @click="fn">默认按钮</clu-button>
            <clu-button type="primary">默认按钮</clu-button>
            <clu-button type="success">成功按钮</clu-button>
            <clu-button type="info">警告按钮</clu-button>
        </div>
        <div class="row">
            <clu-button round>默认按钮</clu-button>
            <clu-button round type="primary">默认按钮</clu-button>
            <clu-button round type="success">成功按钮</clu-button>
            <clu-button round type="info">警告按钮</clu-button>
        </div>
        <div class="row" style="width: 1000px">
            <!-- <clu-icon/>
            <clu-icon type="fanhui"/> -->
            <div v-for="item in iconJson" :key="item.unicode" style="width: 150px; margin-bottom: 20px;">
                <clu-icon :type="item.font_class"/>
                <p>{{item.font_class}}</p>
            </div>

        </div>
        <div class="row">
            <!-- <clu-dialog :visible="true" title="我的提示"/> -->
            <clu-button @click="visible=true">显示dailog</clu-button>
            <clu-dialog :visible.sync="visible" >
                <template v-slot:title>
                    你好
                </template>
            </clu-dialog >
        </div>

    </div>
</template>
<script>
import { glyphs } from '../packages/icon/src/resource/iconfont.json'
export default {
    data () {
        return {
            iconJson: glyphs,
            visible: false,
            inputData: 123,
            switchData: false,
        }
    },
    methods: {
        fn () {
            alert(1)
        },
    },
}
</script>

<style lang="scss">
</style>
