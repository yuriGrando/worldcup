<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-primary text-white" style="border-radius: 0 0 100% 100%; ">
      <toolbar/>
    </q-header>

    <q-page-container class="q-pa-xl">
      <router-view />
    </q-page-container>

    <q-footer class="bg-primary text-white">
      <footer-page/>
    </q-footer>

  </q-layout>

<!--  <q-layout view="lHh lpr lFf">-->

<!--    <toolbar/>-->

<!--    <q-page-container>-->
<!--      <router-view />-->
<!--    </q-page-container>-->

<!--    <footer/>-->
<!--  </q-layout>-->

</template>

<script>
import { defineComponent, ref } from 'vue'
import Toolbar from "components/toolbar";
import FooterPage from "components/footerPage";

export default defineComponent({
  name: 'MainLayout',
  components: {
    FooterPage,
    Toolbar,
  },

  setup () {
    return {

    }
  }
})
</script>
