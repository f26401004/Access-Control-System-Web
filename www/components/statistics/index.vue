<template>
    <div>
        <flowchart class="flow"></flowchart>
        <typechart class="type"></typechart>
    </div>
</template>

<script>
import Flowchart from './chart-flow.vue'
import Typechart from './chart-type.vue'
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
