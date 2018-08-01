<template>
    <div>
        <h1> {{message}} </h1>
        <login> </login>
        <list> </list>
        <command> </command>
    </div>    
</template>

<script>
// import all component
import LoginComponent from './components/login-component.vue'
import ListComponent from './components/list-component.vue'
import CommandComponent from './components/command-component.vue'

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
        Command: CommandComponent
    }
}
</script>

<style scoped>

</style>
