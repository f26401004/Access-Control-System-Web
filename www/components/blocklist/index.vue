<template>
    <div>
        <h1> 黑名單 BlockList </h1>
        <button> 新增 </button> <button> 修改 </button>
        <block-list> </block-list>
    </div>
</template>

<script>
import BlockList from './table.vue'
export default {
    name: 'blocklist',
    components: {
        BlockList
    }
}
</script>

<style scoped>

</style>
