<template>
    <div>
        
        <p>pp目前是: {{ count }}</p>
        <button @click='increment'>++</button>
        <button @click='decrement'>--</button>
        <childTest></childTest>
    </div>
</template>
<script>
///如不用 import this.$
//import store from '../store/index';
import childTest from './child-test';
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
        }
    },
    created(){

        //this.pp=this.$store.state.count;
    }
    ,
    components:{
        childTest

    }
}
</script>

<style scoped>

</style>
