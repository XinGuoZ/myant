<template>
<div style="width:120px">
    <el-dropdown trigger="click" class="custom-tree-menu" size="small" >
        <i class="el-icon-more rotate " />
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for='(item,index) in events' :key="index" :divided="index >0" @click.native="clickMenu(item)">
                {{item.label}}
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</div>
    
</template>
<script>
export default {
  props: {
    events: {
      type: Array,
      default: function() {
        return [
          {
            label: '新建同级',
            funcName: 'addNode'
          },
          {
            label: '编辑',
            funcName: 'editNode'
          },
          {
            label: '删除',
            funcName: 'deleteNode'
          }
        ]
      }
    },
    // 注入数据
    data: {
      type: Object
    }
  },
  methods: {
    clickMenu(item) {
        debugger
      this.$emit(item.funcName, this.data)
    }
  }
}