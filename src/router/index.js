import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "login",
            component: () =>import("@v/Login")
        },
        {
            path: '/home',
            name: 'home',
            component: ()=>import("@v/Home"),
            hidden: true,
            meta: {
                requireAuth: true
            },
        },

    ]
})
