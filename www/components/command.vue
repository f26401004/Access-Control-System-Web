<template>
    <div>
        <div> 
            <button v-on:click="changeState(1)"> 進出紀錄 </button>
            <button v-on:click="changeState(2)"> 流量統計 </button>
            <button v-on:click="changeState(3)"> 線上開門 </button>
            <button v-on:click="changeState(4)"> 電源開關 </button>
            <button v-on:click="changeState(5)"> 黑名單 </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'command',
    methods: {
        changeState: function (number) {
            this.$store.commit('setStateNumber', number)
        }
    }
}
</script>

<style scoped>
div:nth-child(1) {
    grid-area: command;
}
div:nth-child(2) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: 
        "list statistics open power blocklist";
    grid-column-gap: 10px;
    align-items: center;
    align-content: center;
    justify-content: center;
}

button {
    width: 7em;
    height: 2.5em;
    font-size: 24px;
    line-height: 2.5em;
    background-color: #EEE;
    border: 1px solid #CCC;
    color: dimgray;
    border-radius: 0.5em;
    cursor:pointer;
    position: relative;
    overflow: hidden;
}

button:nth-child(1) {
    grid-area: list;
}
button:nth-child(2) {
    grid-area: statistics;
}
button:nth-child(3) {
    grid-area: open;
}
button:nth-child(4) {
    grid-area: power;
}
button:nth-child(5) {
    grid-area: blocklist;
}
</style>
