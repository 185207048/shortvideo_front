<template>
  <div class="video_model">
    <div class="left">
      <div class="title">这里是分类视频</div>
      <div class="content">
        <div class="card" v-for="(item,index) in imgList" :key="index">
          <VideoShow :img="item" />
          <div class="up"></div>
        </div>
      </div>
    </div>
    <div class="right">
      <ModelRight :rightImg="rightImg"/>
    </div>
  </div>
</template>
<script>
import VideoShow from "./VideoShow";
import ModelRight from "./ModelRight";
export default {
  data() {
    return {
    };
  },
  props:['imgList','rightImg'],
  components: {
    VideoShow,
    ModelRight
  }
};
</script>
<style lang="less" scoped>
.video_model {
  width: 1630px;

  display: flex;
  justify-content: space-between;
  margin: 0 auto 40px;
  .left {
    width: 1286px;
    .title {
      height: 36px;
      margin: 0 0 16px;
    }
    .content {
        width: 1286px;
        height: 404px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .card {
        width: 206px;
        height: 190px;

        .up {
          width: 206px;
          height: 64px;
          background-color: coral;
        }
      }
    }
  }
  .right {
    width: 320px;
    height: 456px;
  }
}
</style>