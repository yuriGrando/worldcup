<template>
    <div class="q-pa-md fontQatar">
        <q-table
            grid
            :rows="rows"
            :columns="columns"
            row-key="_id"
            hide-header
        >
            <template v-slot:item="props">
                <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
                    <q-card>
                        <q-card-section class="text-center">
                            Calories for
                            <br>
                            <strong>{{ props.row.name }}</strong>
                        </q-card-section>
                        <q-separator></q-separator>
                        <q-card-section class="flex flex-center">
                            <div>{{ props.row.groups }} g</div>
                        </q-card-section>
                    </q-card>
                </div>
            </template>
        </q-table>
    </div>
</template>

<script>

export default {
    name: "teamCard",
    props: {
        teams: Array,
    },

    data(){
        return {
            columns: [
                //{ name: 'flag', label: 'flag', field: 'flag'},
                { name: 'name_en', label: 'name_en', field: 'name_en'},
                { name: 'groups', label: 'groups', field: 'groups'},
            ],
            rows: [
                { name: 'name_en'},
                { groups: 'groups'},
                { flag: 'flag'},
            ]
        }
    },

    mounted() {
        console.log("TIMES", this.teams)
        this.rows.name = this.team.name_en
        console.log("nome", this.rows.name)
        // this.rows.groups.push(this.team.groups)
        // this.rows.flag.push(this.team.flag)

    },
}
</script>

<style lang="sass">
.grid-masonry
    flex-direction: column
    height: 700px
</style>
