<template>
    <div>
        <h1> List Component </h1>
        <list-table> </list-table>
    </div>
</template>

<script>
import ListTable from './table.vue'

export default {
    name: 'list',
    components: {
        ListTable
    }
}
</script>

<style scoped>
div {
    grid-area: main;
}
</style>
