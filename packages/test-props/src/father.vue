<template>
    <div class="clu-father-container">
        <clu-button @click="changeData">父组件修改自己的值(基本类型)</clu-button>
        <clu-button @click="changeObj">父组件修改自己的值(引用类型)</clu-button>
        <div>
            {{fatherData}}
            <br>
            {{fatherObj}}
        </div>
        <br/>
        <son :data="fatherData" :obj="fatherObj"/>
    </div>
</template>

<script>
import Son from './son.vue'
export default {
    name: 'CluFather',
    components: {
        Son,
    },
    data () {
        return {
            fatherData: 123,
            fatherObj: {
                a: {
                    b: {
                        c: [1, 2, 3, 4],
                    },
                },
            },
        }
    },
    updated () {
        alert('Father 更新了')
    },
    methods: {
        changeData () {
            this.fatherData = 777
        },
        changeObj () {
            this.fatherObj.a.b.c.splice(0, 1, 9)
        },

    },

}
</script>

<style lang='scss' scoped>
    .clu-father-container {
        color: purple;
    }

</style>
