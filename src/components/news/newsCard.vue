<template>
    <q-card
        class="fit"
        style="font-family: Roboto,serif"
        bordered
    >
        <q-img
            src="https://s2.glbimg.com/nOcL9h14s6Yr9tHP3Bm4dSXBw3o=/0x0:1024x699/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/R/l/1vB2GJQIeOPqwcfgrDVg/mane.jpg"
        />

        <q-card-section>
            <div
                style="font-size: 0.7rem"
                class="q-mt-sm q-mb-xs text-grey-6"
            >
                17/11/2022
            </div>

            <div
                style="font-size: 0.7rem"
                class="q-mt-sm q-mb-xs text-bold"
            >
                Sadio Mané, de Senegal, está fora da Copa do Mundo do Catar
            </div>
            <q-btn
                color="grey"
                round
                flat
                dense
                :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="expanded = !expanded"
            />
        </q-card-section>

        <q-slide-transition>
            <div v-show="expanded">
                <q-separator />
                <q-card-section class="text-subitle2">
                    sdasdfgaddsa ds
                    afasdsada
                    fsafsadfsadasdsad
                    sadsadasd
                </q-card-section>
            </div>
        </q-slide-transition>
    </q-card>
</template>

<script>
export default {
    name: "newsCard",
    props:{
        news: Object,
    },

    data(){
        return{
            expanded: false,
        }
    }
}
</script>

<style scoped>

</style>
