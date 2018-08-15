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
            datas: [0, 0, 0, 0]
        }
    },
    mounted () {
        // fetch the record from database and draw the result.
        fetch('http://localhost:3000/record/getAllMethodRecord', { method: 'GET' }).then(response => {
            return response.json();
        }).then(data => {
            for(let element of data) {
                this.datas[element.method - '0']++;
            }
            // draw the chart.
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
        })

    }
}
</script>

<style scoped>
div {
    background-color: antiquewhite;
}
</style>