<template>
  <el-container style="height:100%">
    <el-header height="60px">
      <div class="left">
        <div class="logo">创客中心</div>
        <router-link to="/master">
            <div class="icon">主站</div>
        </router-link>
        
      </div>
      <div class="right">
          <img :src="user&&user.user_header" alt="" class="img">
          <div>
              成为UP主的第{{1}}天
          </div>

      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
        <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>内容管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">稿件管理</el-menu-item>
              <el-menu-item index="2-2">申诉管理</el-menu-item>
              <el-menu-item index="2-3">字幕管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">数据中心</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-document"></i>
            <span slot="title">粉丝管理</span>
          </el-menu-item>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>互动管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">评论管理</el-menu-item>
              <el-menu-item index="5-2">弹幕管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>收益管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1">创作激励</el-menu-item>
              <el-menu-item index="6-2">充电计划</el-menu-item>
              <el-menu-item index="6-3">悬赏计划</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <el-card class="box-card">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="视频投稿" name="first" class="uploadVideo">
              <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或
                  <em>点击上传</em>
                </div>
              </el-upload>
            </el-tab-pane>
            <el-tab-pane label="专栏投稿" name="second">专栏投稿</el-tab-pane>
            <el-tab-pane label="互动视频投稿" name="third">互动视频投稿</el-tab-pane>
            <el-tab-pane label="音频投稿" name="fourth">音频投稿</el-tab-pane>
          </el-tabs>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
    mounted() {
        this.user = JSON.parse(window.sessionStorage.getItem("user"));
    },
  data() {
      
    return {
        user:null,
      activeName: "first"
    };
  }
};
</script>
<style lang="less" scoped>
.el-header {
  background-color: #fff;
  padding-left: 32px;
  padding-right: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    width: 235px;
    height: 39px;
    justify-content: space-between;
    .logo {
      line-height: 39px;
    }
    .icon {
      line-height: 39px;
    }
  }
  .right{
      width: 366px;
      height: 30px;
      display: flex;
       justify-content: space-between;
    .img{
        width: 36px;
        height: 36px;
        border-radius: 50%;
    }
  }
}
.el-aside {
  background-color: #fff;
  height: 100%;
}
.el-main {
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-card {
    width: 1283px;
    height: 767px;
    .uploadVideo {
      display: flex;
      justify-content: center;
      align-items: center;
      .upload-demo {
        width: 830px;
        height: 564px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>