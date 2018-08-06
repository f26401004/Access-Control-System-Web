<template>
    <div>
        <flowchart class="flow"></flowchart>
        <typechart class="type"></typechart>
    </div>
</template>

<script>
import Flowchart from './statistics-chart-flow.vue'
import Typechart from './statistics-chart-type.vue'
export default {
    name: 'statistics',
    components: {
        Flowchart,
        Typechart
    }
}
</script>

<style scoped>

</style>
