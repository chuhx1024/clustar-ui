<template>
    <div id="app">
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
    </div>
</template>
<script>
export default {
    methods: {
        fn () {
            alert(1)
        },
    },
}
</script>

<style lang="scss">
</style>
