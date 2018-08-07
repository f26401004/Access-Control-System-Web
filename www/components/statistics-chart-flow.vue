<template>
    <div>
        <canvas></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js'
export default {
    name: 'flowchart',
    data () {
        return {
            yAxis: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.'],
            datas: [100, 200, 300, 600, 50, 10]
        }
    },
    mounted () {
        const ctx = this.$el.querySelector('canvas').getContext('2d')
        const flowchart = new Chart (ctx, {
            type: 'bar',
            data: {
                labels: this.yAxis,
                datasets: [{
                    label: '近 6 個月的流量統計',
                    data: this.datas,
                    backgroundColor: "rgba(0, 148, 255, 0.6)"
                }]
            }
        })
        flowchart.update()
    }
}
</script>

<style scoped>
div {
    background-color: antiquewhite;
}
</style>
