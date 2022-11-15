const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {path: '', component: () => import('pages/IndexPage.vue')}
        ]
    },

    {
        path: "/",
        name: "Home",
        component: () => import("../layouts/MainLayout.vue"),
        children: [
            {
                path: "home",
                component: () => import("../pages/Home/Homepage"),
            },
            {
                path: "matches",
                component: () => import("../pages/Matches/Matches"),
            },
            {
                path: "tables",
                component: () => import("../pages/Tables/Tables"),
            },
            {
                path: "teams",
                component: () => import("../pages/Team/Teams"),
            },
        ],
    },

    {
        path: '/table',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {path: '', component: () => import('pages/tablePage.vue')}
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue')
    }
]

export default routes
