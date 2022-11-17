const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {path: '', component: () => import('pages/IndexPage.vue')}
        ]
    },

    {
        path: "/matches",
        component: () => import("../layouts/MainLayout.vue"),
        children: [
            {path: '', component: () => import("../pages/Matches"),},
        ],
    },

    {
        path: "/table",
        component: () => import("../layouts/MainLayout.vue"),
        children: [
            {path: '', component: () => import('pages/tablePage.vue'),},
        ],
    },

    {
        path: "/teams",
        component: () => import("../layouts/MainLayout.vue"),
        children: [
            {path: '', component: () => import("../pages/Teams"),},
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue')
    },
]

export default routes
