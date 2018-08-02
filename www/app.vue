<template>
    <div class="app">
        <command id="command" v-if="this.$store.getters.getNumber !== 0"> </command>
        <login id="login" v-if="this.$store.getters.getNumber === 0"> </login>
        <list id="list" v-if="this.$store.getters.getNumber === 1"> </list>
        <statistics id="statistics" v-if="this.$store.getters.getNumber === 2"> </statistics>
        <open id="open" v-if="this.$store.getters.getNumber === 3"> </open>
        <power id="power" v-if="this.$store.getters.getNumber === 4"> </power>
        <block-list id="block-list" v-if="this.$store.getters.getNumber === 5"> </block-list>
    </div>    
</template>

<script>
// import all component
import LoginComponent from './components/login.vue'
import ListComponent from './components/list.vue'
import CommandComponent from './components/command.vue'
import StatisticsComponent from './components/statistics.vue'
import OpenComponent from './components/open.vue'
import PowerComponent from './components/power.vue'
import BlockListComponent from './components/blocklist.vue'

export default {
    name: 'custom-index',
    data() {
        return {
        }
    },
    components: {
        Login: LoginComponent,
        List: ListComponent,
        Command: CommandComponent,
        Statistics: StatisticsComponent,
        Open: OpenComponent,
        Power: PowerComponent,
        BlockList: BlockListComponent
    }
}
</script>

<style>
* {
    -webkit-tap-highlight-color: rgba(0,0,0,0); /* make transparent link selection, adjust last value opacity 0 to 1.0 */
}

body {
    -webkit-touch-callout: none;                /* prevent callout to copy image, etc when tap to hold */
    -webkit-text-size-adjust: none;             /* prevent webkit from resizing text to fit */
    -webkit-user-select: none;                  /* prevent copy paste, to allow, change 'none' to 'text' */
    background-color: #1f6a5b; /* Old browsers */
    background-image: -moz-radial-gradient(center, circle, #1f6a5b 0%, #19433b 100%); /* FF3.6-15 */
    background-image: -webkit-radial-gradient(center, circle, #1f6a5b 0%,#19433b 100%); /* Chrome10-25,Safari5.1-6 */
    background-image: radial-gradient(circle at center, #1f6a5b 0%,#19433b 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    background-attachment:fixed;
    font-family:'HelveticaNeue-Light', 'HelveticaNeue', Helvetica, Arial, sans-serif;
    font-size:12px;
    height:100%;
    margin:0px;
    padding:0px;
    text-transform:uppercase;
    width:100%;


}

.app {
    display: flex; 
    position: absolute; 
    justify-content: center; 
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #1f6a5b; /* Old browsers */
    background-image: -moz-radial-gradient(center, circle, #1f6a5b 0%, #19433b 100%); /* FF3.6-15 */
    background-image: -webkit-radial-gradient(center, circle, #1f6a5b 0%,#19433b 100%); /* Chrome10-25,Safari5.1-6 */
    background-image: radial-gradient(circle at center, #1f6a5b 0%,#19433b 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}

/* Landscape layout (with min-width) */
@media screen and (min-aspect-ratio: 1/1) and (min-width:400px) {
    #app {
        background-position:left center;
        padding:75px 0px 75px 170px;  /* padding-top + padding-bottom + text area = image height */
        margin:-90px 0px 0px -198px;  /* offset vertical: half of image height */
                                      /* offset horizontal: half of image width and text area width */
    }
}

h1 {
    font-size:24px;
    font-weight:normal;
    margin:0px;
    overflow:visible;
    padding:0px;
    text-align:center;
    color: antiquewhite;
}

</style>
