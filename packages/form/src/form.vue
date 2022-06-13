<template>
    <div class="clu-form-container">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'CluForm',
    props: {
        model: {
            type: Object,
            default: () => {},
        },
    },

}
</script>

<style lang='scss' scoped>
    .clu-form-container {
        color: purple;
    }

</style>
