const Vue = require('vue')
const Vuex = require('vuex')

Vue.use(Vuex)

// config different status text description.
const status = (number) => {
    switch (number) {
        case 0:
            return "Login"
        case 1:
            return "Main"
        case 2:
            return "Statistics"
        case 3:
            return "Open"
        case 4:
            return "Power"
        case 5:
            return "BlackList"
    }
}

export default new Vuex.Store({
    strict: true,
    debug: true,
    state: {
        number: 0
    },
    getters: {
        getNumber: (state) => state.number,
        getStatusDescription: (state) => {
            return status(state.number)
        },
        numberMatches: (number) => {
            if (debug) {
                console.log(`this.state.number === number : ${this.state.number === number}`)
            }
            return this.state.number === number
        },
    },
    setters: {
        setStateNumber: (number) => {
            if (debug) {
                console.log(`this.state.number = ${number}`)
            }
            this.state.number = number
        }
    }
})
