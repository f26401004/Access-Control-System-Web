<template>
    <div>
        <section>
            <h2> 設定門禁週期 </h2> <br/>
            <label> 門禁開啟 </label>
            <select> 
                <option v-for="(item, index) in time"> {{item}}  </option>
            </select> <br/>
            <label> 門禁關閉 </label>
            <select> 
                <option v-for="(item, index) in time"> {{item}}  </option>
            </select> <br/>
            <button> 設定 </button>
        </section>
        <section>
            <h2> 設定門禁 </h2> <br/>
            <button>強制開啟</button> <br/>
            <button>強制關閉</button>
        </section>
    </div>
</template>

<script>
export default {
    name: 'power',
    data () {
        return {
            time: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', 
                '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', 
                '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', 
                '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', 
            ]
        }
    }
}
</script>

<style scoped>
h2 {
    color: antiquewhite;
}
label {
    color: antiquewhite;
}
</style>
