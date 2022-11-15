<template>
    <q-table
        :rows="teams"
        :columns="columns"
        row-key="name"
        hide-bottom
        dense
        class="q-py-sm bg-primary fontQatar text-white"
        style="height: 270px"
    >

        <template v-slot:top="props">
            <div class="fit q-pa-sm text-center fontQatar text-h5">
                {{`Grupo ${group}`}}
            </div>
        </template>

        <template v-slot:body="props">
            <q-tr :props="props" class="bg-primary" >

                <q-td key="position" :props="props" style="padding: 0">
                    <div class="q-pa-xs tableRow">
                        <div class="q-mr-sm">
                            {{definePosition(props.row.team_id)}}
                        </div>
                    </div>
                </q-td>

                <q-td key="imgTeam" :props="props" style="padding: 0">
                    <div class="q-pa-xs tableRow">
                        <div class="">
                            <q-img
                                :src="props.row.flag"
                            />
                        </div>

                    </div>
                </q-td>

                <q-td key="team" :props="props" style="padding: 0">
                    <div class="q-pa-xs tableRow">
                        <div class="flex items-center">
                            <div>
                                {{ props.row.name_en}}
                            </div>
                        </div>
                    </div>

                </q-td>

                <q-td key="mp" :props="props" style="padding: 0">
                    <div class="q-pa-xs tableRow">
                        {{ props.row.mp }}
                    </div>
                </q-td>
                <q-td key="w" :props="props" style="padding: 0">
                    <div class="q-pa-xs tableRow">
                        {{ props.row.w }}
                    </div>
                </q-td>
                <q-td key="d" :props="props" style="padding: 0">
                    <div class="q-pa-xs tableRow">
                        {{ props.row.d }}
                    </div>
                </q-td>
                <q-td key="l" :props="props" style="padding: 0">
                    <div class="q-pa-xs tableRow">
                        {{ props.row.l }}
                    </div>
                </q-td>
                <q-td key="gf" :props="props" style="padding: 0">
                    <div class="q-pa-xs tableRow">
                        {{ props.row.gf }}
                    </div>
                </q-td>
                <q-td key="ga" :props="props" style="padding: 0">
                    <div class="q-pa-xs tableRow">
                        {{ props.row.ga }}
                    </div>
                </q-td>
                <q-td key="gd" :props="props" style="padding: 0">
                    <div class="q-pa-xs tableRow" >
                        {{ props.row.gd }}
                    </div>
                </q-td>
                <q-td key="pts" :props="props" style="padding: 0">
                    <div class="q-my-xs q-pa-xs text-primary tableRow" style="background-color: #00cfb7">
                        {{ props.row.pts }}
                    </div>

                </q-td>
            </q-tr>
        </template>
    </q-table>
</template>

<script>
let columns = [
    {name: 'position', label: '', field: 'position', align: 'center'},
    {name: 'imgTeam', label: '', field: 'position', align: 'center'},
    {name: 'team', label: '', field: 'team', align: 'left'},
    {name: 'mp', label: 'J', field: 'mp', align: 'center'},
    {name: 'w', label: 'V', field: 'w', align: 'center'},
    {name: 'd', label: 'E', field: 'd', align: 'center'},
    {name: 'l', label: 'D', field: 'l', align: 'center'},
    {name: 'gf', label: 'GP', field: 'gf', align: 'center'},
    {name: 'ga', label: 'GS', field: 'ga', align: 'center'},
    {name: 'gd', label: 'SG', field: 'gd', align: 'center'},
    {name: 'pts', label: 'PTS', field: 'pts', align: 'center'},
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
            positionValue: 1

        }
    },

    methods: {

        // ====== METODO QUE RETORNA A POSIÇÃO =======
        definePosition(id){
            console.log(id)
            let index = this.teams.findIndex(e => e.team_id === id)
            console.log(index)
            return index + 1
        }

    }
}
</script>

<style scoped>

</style>
