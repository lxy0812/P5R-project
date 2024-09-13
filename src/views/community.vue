<template>
    <div class="common-layout" style="min-width: 1460px;">
        <Header />
        <Bottom />
    </div>
</template>

<script setup>
import Header from './header.vue';
import Bottom from './bottom.vue';
</script>

<style lang="less" scoped>
.common-layout {
    background-color: black;
}
</style>
