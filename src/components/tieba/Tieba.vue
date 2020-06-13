<template>
  <div style="height:100%">
    <Header :avatar="user&&user.user_header" />
    <div class="outbody">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
      >
        <el-menu-item index="1">游戏</el-menu-item>
        <el-menu-item index="2">汽车</el-menu-item>
        <el-menu-item index="3">学习</el-menu-item>
        <el-menu-item index="4">财经</el-menu-item>
      </el-menu>
      <div style="height:1000px;">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%;marginTop:20px"
          @row-click="toInnerBar"
        >
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="发帖人" width="180"></el-table-column>
          <el-table-column prop="address" label="标题" width="1000">
            <template v-slot="scope">
                <el-link type="primary">{{scope.row.address}}</el-link>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <el-pagination
        :page-size="20"
        :pager-count="11"
        background
        layout="prev, pager, next"
        :total="100"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import Header from "../tools/headBar/HeadBar";
export default {
  mounted() {
    this.user = JSON.parse(window.sessionStorage.getItem("user"));
  },
  components: {
    Header
  },
  data() {
    return {
      activeIndex: "2",
      tableData: [
        {
          date: "2016-05-02",
          name: "a",
          address: "啊啊啊啊"
        },
        {
          date: "2016-05-04",
          name: "b",
          address: "不不不不不"
        },
        {
          date: "2016-05-01",
          name: "c",
          address: "冲冲冲"
        },
        {
          date: "2016-05-03",
          name: "d",
          address: "嘟嘟嘟嘟"
        }
      ]
    };
  },
  methods:{
      toInnerBar(){
          console.log('aaa')
      }
  }
};
</script>
<style lang="less" scoped>
.outbody {
  width: 70%;
  height: 70px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.el-menu-demo {
  width: 100%;
}
</style>