<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
//主页 视频详情页 周边主页 周边详情页 购物车 支付完成 登录 注册 
// 个人主页 个人信息查询 视频上传 收藏 订单查询 个人视频查询
// 贴吧主页 帖子页 
// 贴吧审核 用户审核 周边审核 视频审核 周边上传 视频上传

export default {
  name: 'app',
}
</script>

<style>
html{
  height: 100%;
  width: 100%;
}
body{
  width: 100%;
  height: 100%;
  background-color: #eee;
  position: relative;
}
#app{
  height: 100%;
  width: 100%;
}
*{
  margin: 0;
  padding: 0;
  border: none;
    box-sizing: border-box;
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
}
</style>
