<template>
    <div class="clu-form-item-container">
        <div class="clu-form-item__label">
            {{ label }}
        </div>
        <div class="clu-form-item__content">

            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'CluFormItem',
    props: {
        label: {
            type: String,
            default: '',
        },
    },

}
</script>

<style lang='scss' scoped>
    .clu-form-item-container {
        display: flex;
        height: 40px;
        line-height: 40px;
        padding-bottom: 10px;
        .clu-form-item__label {
            width: 80px;
        }
    }

</style>
