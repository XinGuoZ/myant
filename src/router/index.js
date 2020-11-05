import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "login",
            component: () =>import("@c/Login/Login")
        },
        {
            path: '/home',
            name: 'home',
            component: ()=>import("@c/Home/Home"),
            hidden: true,
            meta: {
                requireAuth: true
            },
        },

    ]
})
