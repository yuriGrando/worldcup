<template>
    <div class="bg-image">
        <q-layout view="hHh lpR fFf" class="flex flex-center">

            <q-header style="background-color: transparent !important;">
                <toolbar/>
            </q-header>

    <q-page-container class="q-pa-xl" style="width: 1200px">
        <router-view />
    </q-page-container>

            <q-footer style="background-color: transparent !important;">
                <footer-page/>
            </q-footer>

        </q-layout>
    </div>
</template>

<script>
import {defineComponent, ref} from 'vue'
import Toolbar from "components/toolbar";
import FooterPage from "components/footerPage";

export default defineComponent({
    name: 'MainLayout',
    components: {
        FooterPage,
        Toolbar,
    },

    setup() {
        return {}
    }
})
</script>
