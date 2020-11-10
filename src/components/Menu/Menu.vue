<template>
    <div style="margin: 30px">
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

                <div class="block">
                    <p>菜单管理</p>
                    <el-tree
                            :data="menuList"
                            show-checkbox
                            node-key="id"
                            default-expand-all
                            :props="defaultProps"
                            :expand-on-click-node="false"
                            @node-click="getMenuById"
                    >
                    </el-tree>
                </div>


            </el-aside>

            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span>
                </el-header>

                <el-main>
                    <el-form :inline="true" :model="menuForm" class="demo-form-inline">
                        <el-form-item label="菜单">
                            <el-input v-model="menuForm.name" placeholder=""></el-input>
                        </el-form-item>
                        <el-form-item label="请求路径（url）">
                            <el-input v-model="menuForm.url" placeholder=""></el-input>
                        </el-form-item>
                        <el-form-item label="文件路径（path）">
                            <el-input v-model="menuForm.path" placeholder=""></el-input>
                        </el-form-item>
                        <el-form-item label="组件名称">
                            <el-input v-model="menuForm.component" placeholder=""></el-input>
                        </el-form-item>
                        <el-form-item label="图标样式">
                            <el-input v-model="menuForm.iconCls" placeholder=""></el-input>
                        </el-form-item>
                        <el-form-item label="激活" >
                            <el-switch v-model="menuForm.enabled"></el-switch>
                        </el-form-item>
                        <el-form-item label="激活" >
                            <el-tree :data="menuList" :ref="tree" node-key="id"  size="small"
                                :highlight-current="true" :check-on-click-node="true"  :props="defaultProps">
                                <span class="custom-tree-node" slot-scope="{ node, data }">
                                    <div class="custom-tree-node-wrapper">
                                        <span class="custom-tree-node-label">
                                            {{ node.label }}
                                        </span>
                                        <span class="operate-btns">                
                                            <dot-dropdown  :events="dropMenuEvents" :data="node" @addNode="addNode" />
                                        </span>
                                    </div>
                                </span>
                            </el-tree>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="addmenuOredit">查询</el-button>
                        </el-form-item>
                    </el-form>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<style>

</style>


<script>
    import DotDropdown from '@c/common/DotDropdown'
    export default {
        name:"Menu",
        data() {
            return {
                menuList:[],
                defaultProps: {
                    children: 'children',
                    label: 'name',
                    id: 'id'
                },
                menuForm:{},
                
 

            }
        },
        defaultProps(){

        },
        methods:{
            loadmeList(){
                this.getRequest('/api/tg/menu/menuTree').then(resp=>{
                    this.menuList=resp.data.data
                })
            },
            getMenuById(node){
                this.menuForm = node

            },
            addmenuOredit(){

            }
        },
        created() {
            this.loadmeList()
        },
        components: { DotDropdown }

    };
</script>
