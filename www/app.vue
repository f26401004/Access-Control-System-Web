<template>
    <div>
        <command v-show="this.$store.getters.getNumber !== 0"> </command>
        <login v-show="this.$store.getters.getNumber === 0"> </login>
        <list v-show="this.$store.getters.getNumber === 1"> </list>
        <statistics v-show="this.$store.getters.getNumber === 2"> </statistics>
        <open v-show="this.$store.getters.getNumber === 3"> </open>
        <power v-show="this.$store.getters.getNumber === 4"> </power>
        <block-list v-show="this.$store.getters.getNumber === 5"> </block-list>
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

<style scoped>

</style>
