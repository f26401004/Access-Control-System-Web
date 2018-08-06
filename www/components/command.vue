<template>
    <div> 
        <button v-on:click="changeState(1)"> 進出紀錄 </button>
        <button v-on:click="changeState(2)"> 流量統計 </button>
        <button v-on:click="changeState(3)"> 線上開門 </button>
        <button v-on:click="changeState(4)"> 電源開關 </button>
        <button v-on:click="changeState(5)"> 黑名單 </button>
    </div>
</template>

<script>
export default {
    name: 'command'
}
</script>

<style scoped>
div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 
        "list statistics open power blocklist";
    grid-column-gap: 10px;
    align-items: center;
    align-content: center;
    justify-content: center;
}

</style>
