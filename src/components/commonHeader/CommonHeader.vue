<template>
    <header>
        <div class="l-content">
            <el-breadcrumb separator="">
                <el-breadcrumb-item v-for="(value, key, index) in menus" >
                    {{value.name}}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="r-content">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link"><img :src="userImg" class="user"/></span>
                <el-dropdown-menu slot="dropdown" size="mini">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <!-- .native修饰符表示使用的是原生的事件 -->
                    <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script >
    import { mapState } from 'vuex'
    export default {
        name: 'Commonheader',

        data() {
            return {
                userImg: require('@/assets/images/user.png'),
                menus:[

                ]
            }
        },
        computed: {

        },
        methods: {
            getall(){
                this.$http.post('/api/classification/getAllClassificaton', this.userImg).then(res =>{
                    this.menus =res.data.data
                })
            }
        },


        mixins: [],

        props: {},

        mounted() {
            this.getall()
        },

        watch: {},

        created () {

        },

    }

</script>

<style lang="scss" scoped>
    header {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
    }
    .l-content {
        display: flex;
        align-items: center;
        .el-button {
            margin-right: 20px;
        }
    }
    .r-content {
        .user {
            height: 40px;
            background-size: 100%;
            border-radius: 50%;
        }
    }
</style>
<style lang="scss">
    .el-breadcrumb__item {
        .el-breadcrumb__inner {
            color: #666;
            font-weight: normal;
        }
        &:last-child {
            .el-breadcrumb__inner {
                color: #fff;
            }
        }
    }
    // .el-breadcrumb__inner a,
    // .el-breadcrumb__inner.is-link {
    //   color: white !important;
    // }
</style>