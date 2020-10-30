import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "main",
            component: () =>import("@v/Main")
        },
        {
            path: '/square',
            name: 'square',
            component: ()=>import("@c/square/square")
        },

    ]
})
