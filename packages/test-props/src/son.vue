<template>
    <div class="clu-son-container">
        {{ data }}
        {{myData}}
        {{obj.a.b}}
        {{myObj.a.b}}
        <div>
            <clu-button @click="changeMyData">Son 修改自己的值(基本类型)</clu-button>
            <clu-button @click="changeMyObj">Son 修改自己的值(引用类型)</clu-button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CluSon',
    props: {
        data: null,
        obj: {
            type: Object,
            default: () => {},
        },
    },
    data () {
        return {
            myData: this.data,
            myObj: this.obj,
        }
    },
    updated () {
        alert('Son 更新了')
    },
    methods: {
        changeMyData () {
            this.myData = 999
        },
        changeMyObj () {
            this.myObj.a.b = 0
        },
    },
    watch: {
        data (val) {
            this.myData = val
        },
    },

}
</script>

<style lang='scss' scoped>
    .clu-son-container {
        color: purple;
    }

</style>
