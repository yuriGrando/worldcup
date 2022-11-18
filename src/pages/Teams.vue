<template>
        <div class="row fit flex flex-center" style="width: calc(100vw - 200px)">
            <q-list
                v-for="team in teams"
                :id="team"
            >
                <team-card
                    :team="team"
                />
            </q-list>
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
                this.teams = res.data.data.sort(
                    (a, b) => (a.name_en < b.name_en ? -1 : a.name_en > b.name_en ? 1 : 0)
                );
                console.log(this.teams)
            })
        },
    },
}
</script>

<style scoped>

</style>
