<template>
    <div
        v-for="data in tableData"
        :key="data.group"
        class="row full-width"
    >

        <div class="col-7 q-pa-lg">
            <table-group
                :teams="tableData.teams"
                :group="tableData.group"
            />
        </div>
    </div>



</template>

<script>
import TableGroup from "components/table/tableGroup";
import {mapGetters} from "vuex";
export default {
    name: "tablePage",
    components: {TableGroup},

    data(){
        return{
            // ===== VAR TABLE ======


        }
    },

    computed:{
        ...mapGetters('worldCup', ['getTeam', "getMatch", "getStandings"]),

        tableData: function (){
            JSON.parse(localStorage.getItem('standings'))
        },

    }

}
</script>

<style scoped>

</style>
