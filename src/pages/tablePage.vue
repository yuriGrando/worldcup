<template>
    <div
        v-for="data in tableData"
        :key="data._id"
        class="row full-width"
    >

        <div class="col-7 q-pa-lg">
            <table-group
                :teams="data.teams"
                :group="data.group"
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
            return this.getStandings
        },

    }

}
</script>

<style scoped>

</style>
