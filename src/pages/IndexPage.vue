<template>
    <div class="flex flex-center fontQatar" style="height: calc(100vh - 150px)">
        <div class="row fit">
            <div class="col-3">
                <q-scroll-area style="height: calc(100vh - 150px)">

                    <div class="q-pa-md" v-for="c in 10" :key="c">
                        <news-card/>
                    </div>

                </q-scroll-area>


            </div>
            <div class="col-8 flex column q-pa-md ">

                <div class="col-7 row">

                    <div class="col-6">

                        <div class="text-center">
                            <img
                                alt="App da Copa do Mundo"
                                src="https://upload.wikimedia.org/wikipedia/pt/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                                style=" height: 150px"
                            >
                        </div>

                        <div class="">
                            <div class="text-h6 text-center q-my-md">
                                Começa em:
                            </div>
                            <div class="flex flex-center text-primary">
                                <q-item class="flex flex-center text-center">
                                    <q-item-section>
                                        <span class="timer">{{ d }}</span>
                                        <span class="words text-subtitle1 q-pt-md">dias</span>
                                    </q-item-section>
                                </q-item>

                                <q-item class="flex flex-center text-center">
                                    <q-item-section>
                                        <span class="timer">{{ h }}</span>
                                        <span class="words text-subtitle1 q-pt-md">horas</span>
                                    </q-item-section>
                                </q-item>

                                <q-item class="flex flex-center text-center">
                                    <q-item-section>
                                        <span class="timer">{{ m }}</span>
                                        <span class="words text-subtitle1 q-pt-md">minutos</span>
                                    </q-item-section>
                                </q-item>

                            </div>
                        </div>

                    </div>

                    <div class="col-6">
                        <div class="flex flex-center">
                            <div class="q-pa-xs row flex flex-center fit" style="background-color: #881335">
                                <div class="col-12 text-white text-center" style="font-size: 0.7rem">
                                    {{ "10/10/10" }}
                                </div>

                                <div class="col-5 items-center q-px-sm justify-between flex">


                                    <div class="fontQatar text-white" style="font-size:1rem">
                                        {{ "BRASIL" }}
                                    </div>
                                    <div>
                                        <q-avatar color="white" size="35px"></q-avatar>
                                    </div>
                                </div>


                                <div class="col-2 flex flex-center">
                                    <div class="fontQatar text-center text-white" style="font-size:1.3rem ">
                                        {{ "0" }}
                                    </div>
                                    <div class="fontQatar q-px-xs text-center text-white" style="font-size:1rem ">
                                        X
                                    </div>
                                    <div class="fontQatar text-center text-white" style="font-size:1.3rem ">
                                        {{ "0" }}
                                    </div>
                                </div>


                                <div class="col-5 items-center q-px-sm justify-between flex">
                                    <div>
                                        <q-avatar size="35px" color="white"></q-avatar>
                                    </div>
                                    <div class="fontQatar text-white" style="font-size:1rem">
                                        {{ "BRASIL" }}
                                    </div>
                                </div>

                                <div class="col-12 text-white text-center" style="font-size: 0.7rem">
                                    <q-badge color='primary'> {{ 'Finalizada' }} </q-badge>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div class="col items-end">
                    <table-group
                        :teams="tableTest"
                        :group="'A'"
                    />

                </div>


            </div>
        </div>
        <!--<div style="width: 80%">
            <div class="row flex flex-center">
                <div class="flex flex-center col" style="max-width: 30%">
                    <img
                        alt="App da Copa do Mundo"
                        src="https://upload.wikimedia.org/wikipedia/pt/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                        style=" height: 200px"
                    >
                </div>

                <div>
                    <div class="flex flex-center">
                        <q-item class="flex flex-center text-center">
                            <q-item-section>
                                <span class="timer text-h5">{{ d }}</span>
                                <span class="words text-subtitle1 q-pt-md">dias</span>
                            </q-item-section>
                        </q-item>

                        <q-item class="flex flex-center text-center">
                            <q-item-section>
                                <span class="timer text-h5">{{ h }}</span>
                                <span class="words text-subtitle1 q-pt-md">horas</span>
                            </q-item-section>
                        </q-item>

                        <q-item class="flex flex-center text-center">
                            <q-item-section>
                                <span class="timer text-h5">{{ m }}</span>
                                <span class="words text-subtitle1 q-pt-md">minutos</span>
                            </q-item-section>
                        </q-item>

                        <q-item class="flex flex-center text-center">
                            <q-item-section>
                                <span class="timer text-h5">{{ s }}</span>
                                <span class="words text-subtitle1 q-pt-md">segundos</span>
                            </q-item-section>
                        </q-item>
                    </div>

                    <div class="flex flex-center q-pt-md">
                        <div class="q-pa-xs row flex flex-center fit" style="background-color: #881335">
                            <div class="col-12 text-white text-center" style="font-size: 0.7rem">
                                {{ "10/10/10" }}
                            </div>

                            <div class="col-5 items-center q-px-sm justify-between flex">


                                <div class="fontQatar text-white" style="font-size:1rem">
                                    {{ "BRASIL" }}
                                </div>
                                <div>
                                    <q-avatar color="white" size="35px"></q-avatar>
                                </div>
                            </div>


                            <div class="col-2 flex flex-center">
                                <div class="fontQatar text-center text-white" style="font-size:1.3rem ">
                                    {{ "0" }}
                                </div>
                                <div class="fontQatar q-px-xs text-center text-white" style="font-size:1rem ">
                                    X
                                </div>
                                <div class="fontQatar text-center text-white" style="font-size:1.3rem ">
                                    {{ "0" }}
                                </div>
                            </div>


                            <div class="col-5 items-center q-px-sm justify-between flex">
                                <div>
                                    <q-avatar size="35px" color="white"></q-avatar>
                                </div>
                                <div class="fontQatar text-white" style="font-size:1rem">
                                    {{ "BRASIL" }}
                                </div>
                            </div>

                            <div class="col-12 text-white text-center" style="font-size: 0.7rem">
                                <q-badge color='primary'> {{ 'Finalizada' }} </q-badge>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import {mapActions, mapMutations} from "vuex";
import TableGroup from "components/table/tableGroup";
import NewsCard from "components/news/newsCard";

export default defineComponent({
    name: 'IndexPage',
    components: {NewsCard, TableGroup},
    data() {
        return {
            d: '00',
            h: '00',
            m: '00',
            s: '00',

            // ===== TABLE GROUP =====
            table : [],
            groupSelect: 0,
            tableTest: []
        }
    },

    computed: {
        groupFilter: function (){
            console.log(this.table)
            return this.table
        }
    },


    watch: {
        d() {
        },
        h() {
        },
        m() {
        },
        s() {
        }
    },

    methods: {
        ...mapActions('worldCup', ['ActionDoLogin', 'ActionGetStandings', 'ActionGetMatch', 'ActionGetTeam']),

        // ======= REQUISIÇÃO DA TABELA =========
        getTable() {
            this.ActionGetStandings().then((res) => {
                this.table = res.data.data;
                this.tableTest = res.data.data[0].teams
            })
        },

        updateTimer() {
            let future = Date.parse("November 20, 2022 13:00:00");
            let now = new Date();
            let diff = future - now;

            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
            let hours = Math.floor(diff / (1000 * 60 * 60));
            let min = Math.floor(diff / (1000 * 60));
            let secs = Math.floor(diff / 1000);

            this.d = '0' + days;
            this.h = hours - days * 24;
            this.m = min - hours * 60;
            this.s = secs - min * 60;
        },
    },

    mounted() {

        this.getTable();

        setInterval(this.updateTimer, 1000)
    },
})

</script>

<style>

.timer {
    display: block;
    font-size: 3em;
    text-shadow: 0 0 5px #ffffff;
}

.words {
    display: block;
    font-size: 1.5em;
    text-shadow: 0 0 10px #ffffff;
}

</style>
