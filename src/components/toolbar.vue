<template>
  <q-toolbar
    class="text-white flex flex-center q-pa-sm"
    style="border-radius: 0 0 100% 100%; background: radial-gradient(#8c184e , #400822 60%)"
  >
    <div class="flex flex-center">
      <div class="text-h6 q-mx-lg fontQatar toolbar-link">
        Home
      </div>

      <div class="text-h6 q-mx-lg toolbar-link fontQatar">
        Tabela
      </div>

      <img
        src="../../public/img/logo_branco.png"
        alt="Logo_copadomundo"
        style="width: 60px"
        class="text-center q-mx-lg"
      >

      <div class="text-h6 q-mx-lg toolbar-link fontQatar">
        Times
      </div>

      <div class="text-h6 q-mx-lg toolbar-link fontQatar">
        Partidas
      </div>
    </div>

  </q-toolbar>
</template>

<script>
export default {
  name: "toolbar"
}
</script>

<style scoped>
.toolbar-link{
  cursor: pointer;
}

.toolbar-link:hover{
  transition: 0.5s;
  color: #e72581;
}

</style>
