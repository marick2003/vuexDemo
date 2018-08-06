<template>
    <div>
        child-test: {{count}}
        <button @click='increment'>++</button>
        <button @click='decrement'>--</button>
        getters: {{msg}}
        <button @click='change_msg'>chnage msg</button>
           <table>
                <thead>
                    <!-- <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr> -->
                </thead>
                <tbody>
                    <tr><th>Big</th><td>1</td><td>3</td></tr>
                    <tr><th>Small</th><td>5</td><td>7</td></tr>
                </tbody>
          </table>
    </div>
</template>
<script>
import store from '../store/index';
export default {
    data(){
        return {
            // demo data
          info: data = {
            name: 'My Tree',
            children: [
                { name: 'hello' },
                { name: 'wat' },
                {
                name: 'child folder',
                children: [
                    {
                    name: 'child folder',
                    children: [
                        { name: 'hello' },
                        { name: 'wat' }
                    ]
                    },
                    { name: 'hello' },
                    { name: 'wat' },
                    {
                    name: 'child folder',
                    children: [
                        { name: 'hello' },
                        { name: 'wat' }
                    ]
                    }
                ]
                }
            ]
            }

        }
    },
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
    body {
    font-family: Menlo, Consolas, monospace;
    color: #444;
    }
    .item {
    cursor: pointer;
    }
    .bold {
    font-weight: bold;
    }
    ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
    }
</style>
<style scoped lang="scss">
    
</style>

