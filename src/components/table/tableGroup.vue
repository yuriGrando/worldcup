<template>
  <q-table
    title="Grupo A"
    :rows="teams"
    :columns="columns"
    row-key="name"
    hide-bottom
  >
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="flag" :props="props">
          <q-avatar>
            <img :src="props.row.flag" alt="flag">
          </q-avatar>
        </q-td>
        <q-td key="pts" :props="props">
          {{props.row.pts}}
        </q-td>
        <q-td key="mp" :props="props">
          {{props.row.mp}}
        </q-td>
        <q-td key="w" :props="props">
          {{props.row.w}}
        </q-td>
        <q-td key="l" :props="props">
          {{props.row.l}}
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script>
let columns = [
  { name: 'flag', label: '', field: 'flag' },
  { name: 'pts', label: 'pts', field: 'pts' },
  { name: 'mp', label: 'pj', field: 'mp' },
  { name: 'w', label: 'VIT', field: 'w' },
  { name: 'l', label: 'DER', field: 'l' },
]

export default {
  name: "tableGroup",
  props:{

  },

  data(){
    return{
      columns,

    }
  },

  methods:{

  }
}
</script>

<style scoped>

</style>
