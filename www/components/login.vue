<template>
    <div>
        <transition name="slide-fade" appear>
            <img v-show="show" src="https://i.imgur.com/9mqnLHV.png"/>
        </transition>
        <transition name="slide-fade" appear>
            <h1 v-show="show"> NCKUCU <br/> Access Control System </h1>
        </transition> 
        <transition name="slide-fade" appear>
            <section v-show="show" class="text-align-center"> 
                <label> 帳號 username </label> <br/>
                <input name="username" type="text" class="text-align-center"/> <br/>
                <label> 密碼 password </label> <br/>
                <input name="password" type="password" class="text-align-center"> <br/>
                <button> 登入 Login </button> <br/>
                <a class="float-right"> 註冊 Register </a>
             </section>
        </transition>
            
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

div {
    display: grid;
    grid-template-rows: 3fr 1fr 3fr;
    grid-template-areas: 
        "logo"
        "title"
        "login";
    align-items: center;
    align-content: center;
    justify-content: center;
}
img {
    grid-area: logo;
    margin: auto;
}

h1 {
    grid-area: title;
}

section {
    grid-area: login;

    margin: 0px auto;
    padding: 1em;
}
input {
    width: 15em;
    height: 2em;
    margin: 1em;
    border-radius: 1em;
    font-size: 18px;
}
a {
    margin-right: 0.5em;
    color: antiquewhite;
}

label {
    font-size: 12px;
    margin-right: 1em;
    color: antiquewhite;
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
