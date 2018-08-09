<template>
    <div>
        child-test: {{count}}
        <button @click='increment'>++</button>
        <button @click='decrement'>--</button>
        getters: {{msg}}
        <button @click='change_msg'>chnage msg</button>
           <table>
               
                    <!-- <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr> -->
              
                <tbody>
                    <tr>
                        <th>Big</th>
                        <td>1</td>
                        <td>3</td>
                    </tr>
                    <tr><th>Small</th><td>5</td><td>7</td></tr>
                </tbody>
          </table>

      <!-- container-fluid  container-->
      <div class="container" style="background-color: #fffffff">
        <!-- 情好得都動如，總有斷區們方統那、方孩足減是千夠什還我率面：作個規子業我此到們模。最媽他會起同安的臺風收治特新，知土生球是起，有就人已：代無聲那面他想，中運臺輕？起在性代？族好德覺屋家不不裡亞改很件位聽們，火注美夠、紀感然西過；善數經股產間技著外中本照，一玩有不力的件力個葉治傷：福那當會代著推。來間體根色需見可自話成雖。件談年起不一星精光溫車這道型一此問法日哥們車？上都要受候……半是世關：方裡情的，情光一背如自就的車外，且難農到角然他自慢速本人力公言考之際在病證時象度美工人因每道地中生量們價高我果仍任去布小花用裡進是權政民有跟己樂……認建也國灣出公習山地表你由用性府人明而夜統親得的了風。力質現策人？要成表葉他。中庭難次，時是說者然說究力國土說！成初世；程到可之白燈；人立十包任研客但看訴支二到是開我。

        麼旅到發有……提國數進光語裡起直部。我濟校？奇後多在生該道流。
        
        像次裡發中西：國書可種來，好收首裝友一是跟先汽下，才門市可不節一在：生職之課聲灣物性可數？ -->
            
            
            <!-- <div class="row">
                <div class="col">
                    <img src="../assets/food.jpg">
                </div>
                <div class="col-sm">
                    <img src="../assets/food.jpg">
                </div>
                <div class="col-sm">
                        <img src="../assets/food.jpg">
                </div>
                <div class="col-sm">
                    <img src="../assets/food.jpg">   
                </div>
            </div> -->
            <div class="row">
                <div class="col-8">
                    <img src="../assets/food.jpg">
                </div>
            </div>

      </div>
        <ul id="demo">
        <item
            class="item"
            :model="treeData" >
        </item>
        </ul>
      
    </div>


    
</template>





<script>
import store from '../store/index';
import item from './item';


var data = {
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



export default {
    data(){
        return {
            // demo data
          treeData: data,
         open: false

        }
    },
    computed: {
        count () {
            return store.state.count
        },
        msg(){

            return store.getters.gettersMsg
        },
        
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
        },
        
    },
    components: {
        item
    }
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

