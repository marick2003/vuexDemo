<template>
    <div>
        
        <p>pp目前是: {{ count }}</p>
        <button @click='increment'>++</button>
        <button @click='decrement'>--</button>
        <childTest></childTest>
        <button @click='animto'>animto</button>
        <div id="box"></div>
    </div>
</template>
<script>
///如不用 import this.$
//import store from '../store/index';
import childTest from './child-test';
import anime from 'animejs';
export default {

    
    data(){
        return {
            
            pp: '',
        }

    },
    computed: {
        count () {
            return this.$store.state.count
        }
    },
    methods: {
        increment () {
            this.$store.commit('increment')
        },
        decrement () {
            this.$store.commit('decrement')
        },
        animto(){
                anime({
                            targets: '#box',
                            translateX: [
                                { value: 100, duration: 1200 },
                                { value: 200, duration: 800 }
                            ],
                            rotate: '1turn',
                            backgroundColor: '#FFFaaa',
                            duration: 2000,
                            loop: true
                        })

        }
    },
    ////intro
    //https://css-tricks.com/intro-to-vue-3-vue-cli-lifecycle-hooks/
    mounted(){
        this.animto();

    },
    created(){
        console.log("sdasd");
        //this.pp=this.$store.state.count;
       this.animto();
    }
    ,
    components:{
        childTest

    }
}
</script>

<style scoped>
#box{

    position: relative;
    width: 100px;
    height: 100px;
    background-color: aquamarine;

}
</style>
