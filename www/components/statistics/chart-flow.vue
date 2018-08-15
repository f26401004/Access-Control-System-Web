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
            records: [],
            yAxis: ['', '', '', '', '', ''],
            datas: [0, 0, 0, 0, 0, 0]
        }
    },
    mounted () {
        // fetch the record from database and draw the result.
        fetch('http://localhost:3000/record/getAllTimeRecord', { method: 'GET' }).then(response => {
            return response.json();
        }).then(data => {
            const current = new Date();
            // update the y-axis label
            for(let i = this.yAxis.length - 1 ; i > -1 ; --i)
            {
                this.yAxis[this.yAxis.length - i - 1] = this.getMonthStr(current.getMonth() - i > -1 ? 
                    current.getMonth() - i : 12 + current.getMonth() - i)
            }
            // add the records to the data.
            for(let element of data) {
                const time = new Date(element.time);
                this.records.push(time);
                // add the record to the corresponse column of datas.
                this.datas[this.yAxis.length - 1 + time.getMonth() - current.getMonth()]++;
            }
            // draw the chart.
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
            flowchart.update();
        })
    },
    methods: {
        getMonthStr: (num) => {
            switch(num) {
                case 0:
                    return 'Jun.';
                case 1:
                    return 'Feb.';
                case 2:
                    return 'Mar.';
                case 3:
                    return 'Apr.';
                case 4:
                    return 'May';
                case 5:
                    return 'Jun.';
                case 6:
                    return 'Jul.';
                case 7:
                    return 'Aug.';
                case 8:
                    return 'Sep.';
                case 9:
                    return 'Oct.';
                case 10:
                    return 'Nov.';
                case 11:
                    return 'Dec.';
            }
        }
    }
}
</script>

<style scoped>
div {
    background-color: antiquewhite;
}
</style>
