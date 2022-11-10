<template>
    <q-table
        :title="`Grupo ${group}`"
        :rows="teams"
        :columns="columns"
        row-key="name"
        hide-bottom
        class="q-pa-sm"
    >
        <template v-slot:body="props">
            <q-tr :props="props">
                <q-td key="team" :props="props">
                    <div class="flex items-center fontQatar">
                        <div class="q-mr-sm">
                            1
                        </div>

                        <q-avatar class="q-mr-sm">
                            <img :src="props.row.flag" alt="flag">
                        </q-avatar>

                        <div>
                            {{ props.row.name_en}}
                        </div>
                    </div>
                </q-td>
                <q-td key="pts" :props="props">
                    {{ props.row.pts }}
                </q-td>
                <q-td key="mp" :props="props">
                    {{ props.row.mp }}
                </q-td>
                <q-td key="w" :props="props">
                    {{ props.row.w }}
                </q-td>
                <q-td key="d" :props="props">
                    {{ props.row.d }}
                </q-td>
                <q-td key="l" :props="props">
                    {{ props.row.l }}
                </q-td>
                <q-td key="gf" :props="props">
                    {{ props.row.gf }}
                </q-td>
                <q-td key="ga" :props="props">
                    {{ props.row.ga }}
                </q-td>
                <q-td key="gd" :props="props">
                    {{ props.row.gd }}
                </q-td>
            </q-tr>
        </template>
    </q-table>
</template>

<script>
let columns = [
    {name: 'team', label: 'Equipe', field: 'team', align: 'left'},
    {name: 'pts', label: 'pts', field: 'pts'},
    {name: 'mp', label: 'pj', field: 'mp'},
    {name: 'w', label: 'VIT', field: 'w'},
    {name: 'd', label: 'E', field: 'd'},
    {name: 'l', label: 'DER', field: 'l'},
    {name: 'gf', label: 'GM', field: 'gf'},
    {name: 'ga', label: 'GC', field: 'ga'},
    {name: 'gd', label: 'SG', field: 'gd'},
]

export default {
    name: "tableGroup",
    props: {
        teams: Array,
        group: String,
    },

    data() {
        return {
            columns,

        }
    },

    methods: {

    }
}
</script>

<style scoped>

</style>
