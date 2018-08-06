<template>
    <div>
        <canvas></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js'
export default {
    name: 'typechart',
    data () {
        return {
            labels: ['非學生會幹部(刷卡)', '學生會幹部(刷卡)', '網路開鎖', '超級管理員解鎖'],
            datas: [500, 200, 50, 10]
        }
    },
    mounted () {
        const ctx = this.$el.querySelector('canvas').getContext('2d')
        const flowchart = new Chart (ctx, {
            type: 'pie',
            data: {
                labels: this.labels,
                datasets: [{
                    label: '目前為止的總流量分類',
                    data: this.datas,
                    backgroundColor: ["crimson", "violet", "coral", "indigo"]
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