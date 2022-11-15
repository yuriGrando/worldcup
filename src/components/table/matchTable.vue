<template>
    <q-card
        style="height: 270px"
        class="bg-primary"
    >
        <div class="text-h5 flex flex-center text-white q-pt-lg full-width fontQatar">

            <q-icon
                :name="position > 1 ? 'eva-arrow-ios-back-outline' : ''"
                color="white"
                :class="position > 1 ? 'cursor-pointer':''"
                @click="changeMatches('left')"
            />

            <div class="q-mx-xl text-center">
                <div>
                    Partidas
                </div>
                <div class="q-pa-none text-overline" style="background-color: #881335">
                    {{ `Rodada 0${position}` }}
                </div>
            </div>

            <q-icon
                :name="position < 3 ? 'eva-arrow-ios-forward-outline' : ''"
                color="white"
                :class="position < 3 ? 'cursor-pointer':''"
                @click="changeMatches('right')"
            />

        </div>
        <div
            v-for="match in matchData"
            :key="match._id"
            class="q-py-sm q-pt-md fontQatar"
            style="height: 85px"
        >


            <div class="q-pa-xs row flex flex-center fit" style="background-color: #881335">
                <div class="col-12 text-white text-center" style="font-size: 0.7rem">
                    {{ match.local_date }}
                </div>

                <div class="col-5 items-center q-px-sm justify-between flex">

                    <!-- TIME DA CASA -->

                    <div class="fontQatar text-white" style="font-size:1rem ">
                        {{ match.home_team_en }}
                    </div>
                    <div>
                        <q-avatar
                            size="35px"
                        >
                            <img
                                :src="match.home_flag"
                            />
                        </q-avatar>
                    </div>

                </div>
                <div class="col-2 flex flex-center">
                    <div class="fontQatar text-center text-white" style="font-size:1.3rem ">
                        {{ match.away_score }}
                    </div>
                    <div class="fontQatar q-px-xs text-center text-white" style="font-size:1rem ">
                        X
                    </div>
                    <div class="fontQatar text-center text-white" style="font-size:1.3rem ">
                        {{ match.away_score }}
                    </div>
                </div>


                <!-- TIME DA VISITANTE -->

                <div class="col-5 items-center q-px-sm justify-between flex">

                    <div>
                        <q-avatar
                            size="35px"
                        >
                            <img
                                :src="match.away_flag"
                            />
                        </q-avatar>

                    </div>

                    <div class="fontQatar text-white" style="font-size:1rem ">
                        {{ match.away_team_en }}
                    </div>

                </div>

                <div class="col-12 text-white text-center" style="font-size: 0.7rem">
                    <q-badge
                        :color="match.finished === 'FALSE' ? 'primary' : 'primary'"
                    >
                        {{ match.finished === "FALSE" ? 'Não Realizada' : 'Finalizada' }}
                    </q-badge>
                </div>
            </div>

        </div>


    </q-card>
</template>

<script>
export default {
    name: "matchTable",
    props: {
        matches: Array,
    },
    computed: {
        matchData: function () {
            if (this.position === 1) {
                return this.matches.slice(0, 2);
            } else if (this.position === 2) {
                return this.matches.slice(2, 4);
            } else if (this.position === 3) {
                return this.matches.slice(4, 6);
            }
        }
    },
    data() {
        return {
            position: 1,
        }
    },
    methods: {
        // ======= METODO QUE FILTRA AS POSIÇÕES DO ARRAY =========
        changeMatches(val) {
            if (val === 'left') {
                if (this.position > 1) {
                    this.position = this.position - 1;
                }
            }
            if (val === 'right') {
                if (this.position < 3) {
                    this.position = this.position + 1;
                }
            }
        }
    },
    mounted() {
        console.log(this.match)
    }
}
</script>

<style scoped>
</style>
