<template>
    <div style="padding: 30px">
        <el-container style="height: 900px; border: 1px solid #eee">
            <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
                <div class="block">
                        <p>管理员组</p>
                        <el-tree
                        :data="groupList"
                        show-checkbox
                        node-key="id"
                        default-expand-all
                        :props="defaultProps"
                        :expand-on-click-node="false"
                        >
                        <span class="custom-tree-node" slot-scope="{ node, data }">
                            <span @click="getUsers(data)">{{ node.label }}</span>
                            <span>
                            <el-button
                                type="text"
                                size="mini"
                                @click="() => append(data)">
                                添加
                            </el-button>
                            <el-button
                                type="text"
                                size="mini"
                                @click="() => remove(node, data)">
                                删除
                            </el-button>
                            </span>
                        </span>
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
                        <span >{{groupName}}</span>
                    </el-dropdown>
                    
                </el-header>

                <el-main>
                    <el-table :data="userData">
                        <el-table-column  label="头像" width="140">
                             <template slot-scope="scope">
                                 <el-col :span="12">
                                    
                                    <div class="demo-basic--circle">
                                        <div class="block"><el-avatar shape="square" :size="50" :src="scope.row.userface"></el-avatar></div>
                                        <div class="block" v-for="size in sizeList" :key="size">
                                        </div>
                                    </div>
                                </el-col> 
                            </template>
                        </el-table-column>
                        <el-table-column prop="name" label="姓名" width="120">
                        </el-table-column>
                        <el-table-column prop="phone" label="手机号码" width="140">
                        </el-table-column>
                        <el-table-column prop="telephone" label="住宅电话" width="140">
                        </el-table-column>
                        <el-table-column prop="address" label="联系地址" width="120">
                        </el-table-column>
                        <el-table-column prop="username" label="用户名" width="140">
                        </el-table-column>
                        <el-table-column prop="createAt" label="日期" width="140">
                        </el-table-column>
                    
                    </el-table>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    let id = 1000;
    export default {
        name: "Manager",

        data(){
            return {
                groupName: '',
                groupNameId:'',
                groupList:[],
                defaultProps: {
                    children: 'childGroup',
                    label: 'name',
                    id: 'id'
                },
                userData:[]
            }
               
        },
        methods:{
            loadGroupList() {
                this.getRequest('/api/tg/group/loadGroupList').then(resp=>{
                    this.groupList.push(resp.data.data)
                })
            },
             remove(node, data) {

                 this.$confirm('是否删除', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(()=>{
                    this.postRequest('api/tg/group/delGroup/'+data.id).then(resp=>{
                        const parent = node.parent;
                        const children = parent.data.childGroup || parent.data;
                        const index = children.findIndex(d => d.id === data.id);
                        children.splice(index, 1);
                    })
                })
            },
             append(data) {
               
                this.$prompt('请输名称', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    }).then(({ value }) => {
                        debugger
                       
                        const queryParam  = {name:value,parentId:data.id};
                        this.postRequestJson('api/tg/group/addGroup',queryParam).then(resp=>{
                             const newChild = { id: resp.data.data.id,name:value,childGroup: [] };
                             if (!data.childGroup) {
                                this.$set(data, 'childGroup', []);
                            }
                            data.childGroup.push(newChild);
                        })
                       
                        this.$message({
                            type: 'success',
                            message: '请输名称: ' + value
                        });
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '取消输入'
                        });       
                    });
               
            },
            getUsers(data) {
                this.groupNameId = data.id
                this.groupName = data.name
                this.getRequest('api/tg/userInfo/getUsersByDeptId/'+data.id).then(resp=>{
                    this.userData = resp.data.data
                })
            }
      },
        created(){
            this.loadGroupList()
        },
        
    }


</script>

<style scoped>
    .el-header {
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
    .groupList {
        padding: 10px;
    }

    .groupList .gnode {
        padding: 25px;
    }
    .btn i{
        margin-left: 3px;
    }
</style>
