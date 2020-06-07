<template>
  <div class="lunboBox">
      <img
      style="width:550px;height:242px"
        v-for="(item,index) in lunboImg"
        :ref="'img'+index"
        :key="index"
        class="lunboImg"
        :src="item"
        alt
      />
    <div class="iconBox">
      <span
        :ref="'icon'+index"
        @click="handleClick(index)"
        :class="['icon',index==currentIndex?'active':'']"
        v-for="(item,index) in lunboImg"
        :key="index"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lunboImg: [
        "http://localhost:8085/static/lunbo1.jpg",
        "http://localhost:8085/static/lunbo2.jpg",
        "http://localhost:8085/static/lunbo3.png",
        "http://localhost:8085/static/lunbo4.jpg"
      ],
      currentIndex: 0,
      zIndex: -1,
      lunInterval: null
    };
  },
  methods: {
    handleClick(i){
      this.changeImgZ(i)
    },
    changeImgZ(i){
      this.$refs['img'+i][0].style.zIndex = ++this.zIndex
    },
    changeImgTransition(i){
      if(i<currentIndex){
        this.$refs['img'+i][0].style.transform= "translate3d(550px, 0px, 0px)"
      }else if(i=currentIndex){
        this.$refs['img'+i][0].style.transform= "translate3d(0px, 0px, 0px)"
      }else{

      }
    }
    
  }
};
</script>
<style lang="less" scoped>
.lunboBox {
  position: relative;
  top: 20%;
  left: 20%;
  width: 550px;
  height: 252px;
  overflow: hidden;
  .lunboImg {
    position: absolute;
    width: 550px;
    height: 252px;
  }
  .iconBox {
    height: 20px;
    position: absolute;
    z-index: 99999;
    right: 20px;
    bottom: 20px;
    .icon {
    display: inline-block;
    margin-left: 5px;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    }
    .active {
        background-color: pink;
    }
  }
  
  
}
</style>