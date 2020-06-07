<template>
    <div>
        <div class="top"></div>
        <div style="width:320px;height:400px">
        <el-carousel trigger="click" height="242px" arrow="never">
        <el-carousel-item  v-for="(item,index) in rightImg" :key="index">
          <img style="width:330px;height:340px" :src="item"/>
        </el-carousel-item>
      </el-carousel>
      </div>
    </div>
    
</template>
<script>
export default {
    props:['rightImg']
}
</script>
<style lang="less" scoped>
.top{
    width: 304px;
    height: 36px;
    margin: 0 16px 16px 0;
}
img{
    width: 320px;
    height: 330px;
}

</style>