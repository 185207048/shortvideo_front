<template>
  <div class="video-card-reco">
    <router-link :to="{path:'/video',query:{video}}" >
    <img  :src="video.videoHref.split('^')[0]"/>
    </router-link>
  </div>
</template>
<script>
export default {
  props:['video'],
  mounted(){
    console.log(this.video)
  }
};
</script>
<style lang="less" scoped>
.video-card-reco {
  width: 206px;
  height: 116px;
  margin-bottom: 10px;
  img{
    width: 206px;
    height: 116px;
    cursor: pointer;
  }
}
</style>