<template>
  <div>
    <HeadBar :avatar="user&&user.user_header" />
    <div class="project_list">
      <div class="card" v-for="(item,index) in list" :key="index" @click="toDetail">
        <div class="img"></div>
        <div class="text">
          <span>标题</span>
          <span>日期</span>
          <span>地点</span>
          <span>价格</span>
        </div>
      </div>
    </div>
    <el-dialog title="购买" :visible.sync="buyDialog" width="20%">
        <img src="../../assets/img/1.png" alt="" style="width:200px;height:300px;verticalAlign: middle;marginRight:20px">
          <span style="fontSize:30px">￥ {{50}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="buyDialog = false">取 消</el-button>
        <el-button type="warning" @click="buyDialog = false">加入购物车</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import HeadBar from "../tools/headBar/HeadBar";
export default {
  mounted() {
    this.user = JSON.parse(window.sessionStorage.getItem("user"));
  },
  data() {
    return {
      user: null,
      list:[
        '../../assets/img/1.png',
        '../../assets/img/2.png',
        '../../assets/img/3.png',
        '../../assets/img/4.png',
        '../../assets/img/5.png',
        '../../assets/img/6.png',
        '../../assets/img/7.png',
        '../../assets/img/8.png',
        '../../assets/img/9.png',
      ],
      price: 5,
      buyDialog: false
    };
  },
  methods: {
    toDetail() {
      this.buyDialog = true;
    }
  },
  components: {
    HeadBar
  }
};
</script>
<style lang="less" scoped>
.project_list {
  width: 1160px;
  margin: 0 auto;
  .card {
    display: inline-block;
    width: 560px;
    height: 237px;
    margin: 60px 10px 0;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    .text {
      width: 286px;
      height: 237px;
      margin-left: 223px;
      span {
        display: block;
        margin: 20px 0;
      }
    }
    .img {
      position: absolute;
      left: 20px;
      bottom: 20px;
      width: 175px;
      height: 233px;
      background-size: 100%;
      background-image: url("../../assets/img/1.png");
    }
    
  }

}
  
</style>
