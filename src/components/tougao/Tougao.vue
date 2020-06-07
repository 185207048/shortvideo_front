<template>
    <el-container>
  <el-header height="60px">
      <div class="left">
          <div class="logo">创客中心</div>
          <div class="icon">主站</div>
      </div>
      <div class="right">

      </div>
  </el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside> <el-main>Main</el-main>
  </el-container>
</el-container>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.el-header{
    background-color: #fff;
    padding-left: 32px;
    padding-right: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
        display: flex;
        width: 235px;
        height: 39px;
    justify-content: space-between;
    .logo{
        line-height: 39px;
    }
    .icon{
        line-height: 39px;
    }
    }
}
</style>