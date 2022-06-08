<template>
    <div class="clu-test-props-container">
        <father />
    </div>
</template>

<script>
import Father from './father.vue'
export default {
    name: 'CluTestProps',
    components: {
        Father,
    },

}
</script>

<style lang='scss' scoped>
    .clu-test-props-container {
        color: purple;
    }

</style>
