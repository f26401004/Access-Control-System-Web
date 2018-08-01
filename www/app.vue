<template>
    <div>
        <h1> {{message}} </h1>
        <login> </login>
        <list> </list>
        <command> </command>
        <statistics> </statistics>
        <open> </open>
        <power> </power>
        <block-list> </block-list>
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
            message: 'Access Control System'
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
