<template>
  <q-layout view="lHh Lpr lFf">
    <toolbar/>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

</template>

<script>
import { defineComponent, ref } from 'vue'
import Toolbar from "components/toolbar";

export default defineComponent({
  name: 'MainLayout',
  components: {
    Toolbar

  },

  setup () {
    return {

    }
  }
})
</script>
