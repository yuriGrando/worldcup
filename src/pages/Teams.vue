<template>
        <div
            v-for="team in teams"
            :key="team._id"
        >
            <team-card
                :teams="team"
            />
        </div>
</template>

<script>
import teamCard from "components/teams/teamCard";
import {mapActions} from "vuex";

export default {
    name: "Teams",
    components: {teamCard},

    data() {
        return {
            teams: [],
        }
    },
    mounted() {
        this.getTeams();
    },

    methods: {
        ...mapActions('worldCup', ['ActionGetTeam']),
        // ======= REQUISIÇÃO DOS TIMES =========
        getTeams() {
            this.ActionGetTeam().then((res) => {
                this.teams = res.data.data;
                console.log(this.teams)
            })
        },
    },
}
</script>

<style scoped>

</style>
