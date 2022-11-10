<template>
  <q-page class="flex flex-center">

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
          localStorage.setItem('team', res.data.data)
          this.SET_TEAM(res.data.data)
        console.log(res.data.data)
      });

      this.ActionGetStandings().then((res)=>{
          this.SET_STANDINGS(res.data.data)
          localStorage.setItem('standings', res.data.data)
          console.log(res.data.data)
      });

      this.ActionGetMatch().then((res)=>{
          localStorage.setItem('match', res.data.data)
          this.SET_MATCH(res.data.data)
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
