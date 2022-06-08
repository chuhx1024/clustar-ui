<template>
    <div class="clu-checkbox-group-container">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'CluCheckboxGroup',
    props: {
        value: null,
    },
    provide () {
        return {
            checkboxGroup: this,
        }
    },

}
</script>

<style lang='scss' scoped>
    .clu-checkbox-group-container {
        display: flex;
    }

</style>
