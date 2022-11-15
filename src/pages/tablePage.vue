<template>
    <div>
        TABELA
    </div>
    <div
        v-for="data in table"
        :key="data._id"
        class="row full-width"
    >

        <div class="col-7 q-pa-lg">
            <table-group
                :teams="data.teams"
                :group="data.group"
            />
        </div>

        <div class="col-5 q-pa-lg">
            <match-table
                :matches="matchFilter(data.group)"
            />
        </div>
    </div>


</template>

<script>
import TableGroup from "components/table/tableGroup";
import {mapActions, mapGetters} from "vuex";
import MatchTable from "components/table/matchTable";

export default {
    name: "tablePage",
    components: {MatchTable, TableGroup},
    data() {
        return {
            // ===== VAR TABLE ======
            table: [],
            match: []
        }
    },
    computed: {},
    methods: {
        ...mapActions('worldCup', ['ActionGetStandings', 'ActionGetMatch']),
        // ======= REQUISIÇÃO DA TABELA =========
        getTable() {
            this.ActionGetStandings().then((res) => {
                this.table = res.data.data;
            })
        },
        // ======= REQUISIÇÃO DAS PARTIDAS =========
        getMatch() {
            this.ActionGetMatch().then((res) => {
                this.match = res.data.data;
                console.log('oi', this.match)
            })
        },
        // ======= METODO QUE RETORNA AS PARTIDAS FILTRADAS PRO GRUPO =======
        matchFilter(group) {
            return this.match.filter(e => e.group === group)
        }
    },
    mounted() {
        this.getTable();
        this.getMatch();
    }
}
</script>

<style scoped>
</style>
