<template>
  <div class="carContent">
    <el-table :data="tableData" class="car">
      <el-table-column label="价格" width="180">
        <template >
          <span style="margin-left: 10px">{{ 500 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品名" width="180">
        <template>
              <el-tag size="medium">{{ '保温杯' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="warning" style="width:200px" round>支付</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
<style lang="less" scoped>
.carContent{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.car{
    width: 1280px;
    margin: 0 auto;
}
</style>