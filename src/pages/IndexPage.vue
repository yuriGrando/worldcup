<template>
  <q-page class="flex flex-center">
    <table-group>

    </table-group>
    <img
      alt="App da Copa do Mundo"
      src="https://upload.wikimedia.org/wikipedia/pt/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
      style=" height: 200px"
    >
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import {mapActions, mapMutations} from "vuex";
import TableGroup from "components/table/tableGroup";
import {SET_TOKEN} from "src/store/worldCup/mutations";

export default defineComponent({
  name: 'IndexPage',
  components: {TableGroup},
  data(){
    return{

    }
  },

  methods:{
    ...mapActions('worldCup', ['ActionDoLogin', 'ActionGetStandings', 'ActionGetMatch', 'ActionGetTeam']),
    ...mapMutations('worldCup', ['SET_STANDINGS', "SET_MATCH", "SET_TEAM"]),

    getInfo(){
      this.ActionGetTeam().then((res)=>{
        console.log(res)
      })
    }
    // getStarted(){
    //   this.ActionDoLogin({
    //     email: "yv.grando@gmail.com",
    //     password: "1o*18*v9*"
    //   }).then((res)=>{
    //     SET_TOKEN(res.data.data.token)
    //     console.log(res)
    //   })
    //
    // }
  },

  mounted() {
    this.getInfo()
  }
})
</script>
