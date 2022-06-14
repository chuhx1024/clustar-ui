<template>
    <div id="app">
        <div class="row">
            <clu-button @click="handelMessage">
                Message-字符串
            </clu-button>
            <clu-button @click="handelMessage0">
                Message-对象
            </clu-button>
        </div>
        <div class="row">
            <clu-form :model="formData">
                <clu-form-item label="用户名">
                    <clu-input placeholder="请输入" v-model="formData.name0"></clu-input>
                </clu-form-item>
                <clu-form-item label="性别">
                    <clu-radio-group v-model="formData.gender">
                        <clu-radio label="0">男</clu-radio>
                        <clu-radio label="1">女</clu-radio>
                        <clu-radio label="2">保密</clu-radio>
                    </clu-radio-group>
                </clu-form-item>
                <clu-form-item label="爱好">
                    <clu-checkbox-group v-model="formData.habby">
                        <clu-checkbox label="0" >苹果</clu-checkbox>
                        <clu-checkbox label="1" >桃子</clu-checkbox>
                        <clu-checkbox label="2" >香蕉</clu-checkbox>
                    </clu-checkbox-group>
                </clu-form-item>
            </clu-form>
        </div>

        <h3>父子组件通信</h3>
        <div class="row">
            <clu-test-props />
        </div>
        <div class="row">
            <clu-checkbox-group v-model="checkeds">
                <clu-checkbox label="0" >苹果</clu-checkbox>
                <clu-checkbox label="1" >桃子</clu-checkbox>
                <clu-checkbox label="2" >香蕉</clu-checkbox>
                <clu-checkbox label="2" ></clu-checkbox>
            </clu-checkbox-group>
        </div>
        <div class="row">
            <clu-checkbox label="0" v-model="checked">苹果</clu-checkbox>
            <clu-checkbox label="1" v-model="checked">桃子</clu-checkbox>
            <clu-checkbox label="2" v-model="checked">香蕉</clu-checkbox>
            <clu-checkbox label="2" v-model="checked"></clu-checkbox>
        </div>
        <div class="row">
            <clu-radio-group v-model="radio" label="0">
                <clu-radio label="0">男</clu-radio>
                <clu-radio label="1">女</clu-radio>
                <clu-radio label="2">保密</clu-radio>
            </clu-radio-group>
        </div>
        <div class="row">
            <clu-radio v-model="radio" label="0">男</clu-radio>
            <clu-radio v-model="radio" label="1">女</clu-radio>
            <clu-radio v-model="radio" label="2">保密</clu-radio>
        </div>
        <div class="row">
            <clu-switch v-model="switchData" />
        </div>
        <div class="row">
            <clu-input style="width: 20%" v-model="inputData" type="password" placeholder='请输入' />
            <!-- <clu-input style="width: 20%" v-model="formData.name" placeholder='请输入' /> -->
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
            radio: '0',
            checked: true,
            checkeds: [],
            formData: {
                name0: 'xiaoming',
                gender: '0',
                habby: [],
            },
        }
    },
    methods: {
        fn () {
            alert(1)
        },
        handelMessage () {
            this.$message('这是一条消息提示')
        },
        handelMessage0 () {
            this.$message({
                msg: '我是对象的值',
                onClose: () => {
                    alert('用户的方法')
                },
            })
        },
    },
}
</script>

<style lang="scss">
</style>
