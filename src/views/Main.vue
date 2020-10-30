<template>
    <el-container>
        <el-header>
            <CommonHeader/>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <CommonAside/>
            </el-aside>
            <el-main>Main</el-main>
        </el-container>
    </el-container>

</template>

<script>
    import CommonHeader from '@c/commonHeader/CommonHeader'
    import CommonAside from '@c/commonAside/commonAside'
    export default {
        components: {
            CommonHeader,
            CommonAside,
        }
    }
</script>

<style lang="scss" scoped>
    .el-header {
        background-color: $theme-color;
    }
    .el-main {
        padding-top: 0;
    }
</style>
