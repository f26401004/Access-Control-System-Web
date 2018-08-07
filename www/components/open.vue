<template>
    <div>
        <section> 
            <h1> 輸入學號/卡號 </h1>
            <input type="text"> </input> <br/>
            <button v-on:click="open"> 解鎖 </button>
        </section>
    </div>
</template>

<script>
export default {
    name: 'open',
    methods: {
        open: function () {
            console.log('open!!')
        }
    }
}
</script>

<style scoped>
div {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-areas: 
        "main";
    align-items: center;
    align-content: center;
    justify-content: center;
}
section {
    grid-area: main;
}
input {
    width: 15em;
    height: 2em;
    margin: 1em;
    border-radius: 1em;
    font-size: 18px;
    text-align: center;
}

button {
    width: 18em;
    height: 2.5em;
    margin-top: 1em;
    background-color: #b0a46f;
    color: antiquewhite;
    font-size: 18px;
    text-align: center;
}
</style>
