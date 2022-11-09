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
import {mapActions} from "vuex";

export default defineComponent({
  name: 'IndexPage',
  data(){
    return{

    }
  },

  methods:{
    ...mapActions('worldCup', ['ActionDoLogin']),
    getStarted(){
      this.ActionDoLogin({
        email: "yv.grando@gmail.com",
        password: "1o*18*v9*"
      }).then((res)=>{
        console.log(res)
      })

    }
  },

  mounted() {
    this.getStarted()
  }
})
</script>
