<template>
    <div>
        child-test: {{count}}
        <button @click='increment'>++</button>
        <button @click='decrement'>--</button>
        getters: {{msg}}
        <button @click='change_msg'>chnage msg</button>
    </div>
</template>
<script>
import store from '../store/index';
export default {
  
    computed: {
        count () {
            return store.state.count
        },
        msg(){

            return store.getters.gettersMsg
        }
    },
    methods: {
        increment () {
            store.commit('increment')
        },
        decrement () {
            store.commit('decrement')
        },
        change_msg(){

            store.dispatch('changeMsg')
        }
    },
}
</script>
<style scoped>

</style>
