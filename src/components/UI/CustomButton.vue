<template lang="">
    <button class='btn'>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'CustomButton'
    }
</script>

<style scoped>
    .btn {
        margin-top: 25px;
        background: none;
        padding: 10px 15px;
        color: #2c3e50;
        border: 2px solid #0b76ef;
        border-radius: 2px;
    }
</style>