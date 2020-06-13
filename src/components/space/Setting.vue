<template>
  <div style="width:1280px;height:100%;backgroundColor:#fff;margin:0 auto;">
    <div class="content">
      <el-card :body-style="{ padding: 0 }">
        <div class="card">
          <el-container style="height:100%">
            <el-aside width="150px">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-menu-item index="1">
                  <i class="el-icon-menu"></i>
                  <span slot="title">更改头像</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon-document"></i>
                  <span slot="title">更改密码</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-setting"></i>
                  <span slot="title">设置昵称</span>
                </el-menu-item>
              </el-menu>
            </el-aside>
            <el-container>
              <el-header >请修改密码</el-header>
              <el-main>
                <el-form>
                  <el-form-item>
                    <el-input label="新密码"/>
                  </el-form-item>
                </el-form>
              </el-main>
            </el-container>
          </el-container>
        </div>
      </el-card>
    </div>
    <div style="height:100px"></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.content {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  .card {
    width: 980px;
    height: 550px;
    .el-aside {
      // height: 100%;
      background-color: #eee;
    }
  }
}
</style>