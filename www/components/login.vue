<template>
    <div id="wrapper">
        <div>
            <transition name="slide-fade" appear>
                <img v-show="show" src="https://i.imgur.com/9mqnLHV.png" style="display: block; margin: auto;"/>
            </transition>
            <transition name="slide-fade" appear>
                <h1 v-show="show" style="margin: 1em;"> Access Control System </h1>
            </transition> 
            <transition name="slide-fade" appear>
                <section v-show="show" class="text-align-center"> 
                    <label class="float-right"> 帳號 username </label> <br/>
                    <input name="username" type="text" class="text-align-center"/> <br/>
                    <label class="float-right"> 密碼 password </label> <br/>
                    <input name="password" type="password" class="text-align-center"> <br/>
                </section>
            </transition>
        </div>

    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            show: true
        }
    }
}
</script>

<style scoped>
#wrapper {
    display: flex;
    position: absolute;
    margin: auto;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
}
section {
    width: 18.6em;
    height: 12em;
    margin: 0px auto;
    padding: 0px;
}
input {
    width: 15em;
    height: 2em;
    margin: .8em;
    border-radius: 1em;
}
label {
    font-size: 12px;
    margin-right: 1em;
    color: antiquewhite;
}

.text-align-center {
    text-align: center;
}

.float-right {
    float: right;
}

.slide-fade-enter-active {
    transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(2.5em);
  opacity: 0;
}

</style>
