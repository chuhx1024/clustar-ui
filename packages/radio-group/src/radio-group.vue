<template>
    <div class="clu-radio-group-container">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'CluRadioGroup',
    props: {
        value: null,
    },
    provide () {
        return {
            radioGroup: this,
        }
    },

}
</script>

<style lang='scss' scoped>
    .clu-radio-group-container {
        display: flex;
    }

</style>
