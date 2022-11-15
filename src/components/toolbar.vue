<template>
    <q-toolbar
        class="text-white flex flex-center q-pa-sm"
        style="background: radial-gradient(circle, rgba(140,24,78,1) 0%, rgba(114,19,63,1) 8%, rgba(105,17,58,1) 19%, rgba(88,13,48,1) 32%, rgba(77,11,41,1) 46%, rgba(66,8,35,1) 63%, rgba(64,8,34,1) 100%); border-radius: 50% 50% 50% 50% / 0 0 100% 100%"
    >
        <div class="flex flex-center">
            <div class="q-mx-md fontQatar">
                <q-item flat class="button bg-none" to="/">
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"></path>
                            </svg>
                        </div>
                    </div>
                    <span>Home</span>
                </q-item>
            </div>

            <div class="q-mx-md fontQatar">
                <q-item flat class="button bg-none" to="/tables">
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"></path>
                            </svg>
                        </div>
                    </div>
                    <span>Tabela</span>
                </q-item>
            </div>

            <q-btn style="background-color: transparent" type="a" href="/" flat dense>
                <img
                    src="../../public/img/logo_branco.png"
                    alt="Logo_copadomundo"
                    style="width: 60px"
                    class="text-center q-mx-lg"
                >
            </q-btn>

            <div class="q-mx-md fontQatar">
                <q-item flat class="button bg-none" to="/teams">
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"></path>
                            </svg>
                        </div>
                    </div>
                    <span>Times</span>
                </q-item>
            </div>

            <div class="q-mx-md fontQatar">
                <q-item flat class="button bg-none" to="/matches">
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M16.93 17.12L16.13 15.76L17.59 11.39L19 10.92L20 11.67C20 11.7 20 11.75 20 11.81C20 11.88 20.03 11.94 20.03 12C20.03 13.97 19.37 15.71 18.06 17.21L16.93 17.12M9.75 15L8.38 10.97L12 8.43L15.62 10.97L14.25 15H9.75M12 20.03C11.12 20.03 10.29 19.89 9.5 19.61L8.81 18.1L9.47 17H14.58L15.19 18.1L14.5 19.61C13.71 19.89 12.88 20.03 12 20.03M5.94 17.21C5.41 16.59 4.95 15.76 4.56 14.75C4.17 13.73 3.97 12.81 3.97 12C3.97 11.94 4 11.88 4 11.81C4 11.75 4 11.7 4 11.67L5 10.92L6.41 11.39L7.87 15.76L7.07 17.12L5.94 17.21M11 5.29V6.69L7 9.46L5.66 9.04L5.24 7.68C5.68 7 6.33 6.32 7.19 5.66S8.87 4.57 9.65 4.35L11 5.29M14.35 4.35C15.13 4.57 15.95 5 16.81 5.66C17.67 6.32 18.32 7 18.76 7.68L18.34 9.04L17 9.47L13 6.7V5.29L14.35 4.35M4.93 4.93C3 6.89 2 9.25 2 12S3 17.11 4.93 19.07 9.25 22 12 22 17.11 21 19.07 19.07 22 14.75 22 12 21 6.89 19.07 4.93 14.75 2 12 2 6.89 3 4.93 4.93Z"></path>
                            </svg>
                        </div>
                    </div>
                    <span>Partidas</span>
                </q-item>
            </div>
        </div>

    </q-toolbar>
</template>

<script>

export default {
    name: "toolbar",

    data() {
        return {}
    }
}
</script>

<style scoped>
.toolbar-link {
    cursor: pointer;
}

.button {
    font-family: inherit;
    font-size: 16px;
    background: none;
    padding: 1em;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;
}

.button span {
    display: block;
    margin-left: 0.3em;
    margin-top: 0.2em;
    transition: all 0.3s ease-in-out;
}

.button svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
}

.button:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
}

.button:hover svg {
    transform: translateX(2em) scale(1.5);
}

.button:hover span {
    transform: translateX(6em);
}

.button:active {
    transform: scale(0.95);
}

@keyframes fly-1 {
    from {
        transform: translateY(0.1em);
    }

    to {
        transform: translateY(-0.1em);
    }
}

</style>
