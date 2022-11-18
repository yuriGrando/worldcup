<template>
        <q-item class="q-px-sm q-pt-lg fontQatar">
            <q-card class="bg-white text-center" style="height: 250px; width: 190px">
                <div class="effect q-pb-md">
                    <q-img :src="team.flag" style="width: 120px; height: 120px; border: solid 2px #8c184e; border-radius: 50%;"></q-img>
                </div>
                <div>
                    <q-item-section style="font-size: 1.3em"> {{ team.name_en }}</q-item-section>
                    <q-item-section> {{ "Grupo: " + team.groups }}</q-item-section>
                </div>
            </q-card>
        </q-item>
</template>

<script>

export default {
    name: "teamCard",
    props: {
        team: Array,
    },

    data() {
        return {}
    },

    mounted() {
        console.log("TIMES", this.team)
    },
}
</script>

<style>
.q-card {
    position: relative;
    height: 250px;
    padding: 2rem;
    border-radius: 8px;
    transition: all .25s ease-in-out;
}

.q-card:hover {
    box-shadow: 0 4px 20px #400822;
}

.q-card:hover .effect {
    transform: translateY(-5%);
}

.effect {
    transition: all .25s ease-in-out;
}

.effect::after {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out 0s;
}
</style>
