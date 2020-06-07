<template>
  <div class="video-card-reco">
    <router-link to="/video">
    <img  :src="img"/>
    </router-link>
  </div>
</template>
<script>
export default {
  props:['img'],
  methods:{

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