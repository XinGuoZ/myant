// @vue/component
import { mapState } from 'vuex'
export default {
    name: 'Commonheader',

    data() {
        return {
            userImg: require('@/assets/images/user.png')
        }
    },
    computed: {
        ...mapState({
            current: state => state.tab.currentMenu
        }),

    },
    methods: {
        collapseMenu() {
            this.$store.commit('collapseMenu')
        },
        logOut() {
            // 置空token
            this.$store.commit('clearToken')
            // 清除菜单
            this.$store.commit('clearMenu')
            // 刷新浏览器
            location.reload()
        }
    },


    mixins: [],

    props: {},



    watch: {},

    created () {},

}
