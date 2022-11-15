import {mapActions, mapMutations} from "vuex"


...mapActions('worldCup', ['ActionDoLogin', 'ActionGetStandings', 'ActionGetMatch', 'ActionGetTeam'])
...mapMutations('worldCup', ['SET_STANDINGS', "SET_MATCH", "SET_TEAM"]);

    function getInfo() {
    this.ActionGetTeam().then((res) => {
        localStorage.setItem('team', res.data.data)
        this.SET_TEAM(res.data.data)
        console.log(res.data.data)
    });

    this.ActionGetStandings().then((res) => {
        this.SET_STANDINGS(res.data.data)
        localStorage.setItem('standings', res.data.data)
        console.log(res.data.data)
    });

    this.ActionGetMatch().then((res) => {
        localStorage.setItem('match', res.data.data)
        this.SET_MATCH(res.data.data)
    })
}
