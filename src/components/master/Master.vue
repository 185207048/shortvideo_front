<template>
  <div>
    <div class="header">
      <div class="m_banner">
        <HeadBar :avatar="user&&user.user_header" />
      </div>
      <div class="m_wrapper">
        <div class="primaryPageTab">
          <ul>
            <li>首页</li>
            <li>动态</li>
            <li>排行榜</li>
          </ul>
        </div>
        <span class="tab-line-itnl"></span>
        <div class="primaryChannelMenu">
          <span>
            <div>动画</div>
            <em>999</em>
          </span>
          <span>
            <div>番剧</div>
            <em>999</em>
          </span>
          <span>
            <div>番剧</div>
            <em>999</em>
          </span>
          <span>
            <div>番剧</div>
            <em>999</em>
          </span>
          <span>
            <div>番剧</div>
            <em>999</em>
          </span>
          <span>
            <div>番剧</div>
            <em>999</em>
          </span>
          <span>
            <div>番剧</div>
            <em>999</em>
          </span>
          <span>
            <div>番剧</div>
            <em>999</em>
          </span>
          <span>
            <div>番剧</div>
            <em>999</em>
          </span>
          <span>
            <div>番剧</div>
            <em>999</em>
          </span>
          <span>
            <div>番剧</div>
            <em>999</em>
          </span>
          <span>
            <div>番剧</div>
            <em>999</em>
          </span>
          <span>
            <div>番剧</div>
            <em>999</em>
          </span>
          <span>
            <div>番剧</div>
            <em>999</em>
          </span>
          <span>
            <div>番剧</div>
            <em>999</em>
          </span>
          <span>
            <div>番剧</div>
            <em>999</em>
          </span>
          <span>
            <div>番剧</div>
            <em>999</em>
          </span>
          <span>
            <div>番剧</div>
            <em>999</em>
          </span>
        </div>
        <span class="tab-line-itnl"></span>
        <div class="primaryFriendshipLink"></div>
      </div>
    </div>
    <div class="reportFirst1">
      <div style="width:550px;height:242px">
        <el-carousel trigger="click" height="242px" arrow="never">
        <el-carousel-item  v-for="(item,index) in lunboImg" :key="index">
          <img style="width:550px;height:242px" :src="item"/>
        </el-carousel-item>
      </el-carousel>
      </div>
      
      <div class="recommend-box">
        <VideoShow v-for="(item,index) in img1" :img="item" :key="index" />
      </div>
    </div>
    <VideoModel v-for="(item,index) in vModel" :imgList="img2" :rightImg="rightImg" :key="index" />
  </div>
</template>
<script>
import HeadBar from "../tools/headBar/HeadBar";
import VideoShow from "../tools/video/VideoShow";
import VideoModel from "../tools/video/VideoModel";
export default {
  mounted() {
    this.user = JSON.parse(window.sessionStorage.getItem("user"));
  },
  data() {
    return {
      vlist: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      vModel: [1, 2, 3],
      user: null,
      lunboImg: [
        "http://localhost:8085/static/lunbo1.jpg",
        "http://localhost:8085/static/lunbo2.jpg",
        "http://localhost:8085/static/lunbo3.png",
        "http://localhost:8085/static/lunbo4.jpg"
      ],
      img1: [
        "http://localhost:8085/static/lunbo1.jpg",
        "http://localhost:8085/static/lunbo2.jpg",
        "http://localhost:8085/static/lunbo3.png",
        "http://localhost:8085/static/lunbo4.jpg",
        "http://localhost:8085/static/lunbo1.jpg",
        "http://localhost:8085/static/lunbo2.jpg",
        "http://localhost:8085/static/lunbo3.png",
        "http://localhost:8085/static/lunbo4.jpg",
        "http://localhost:8085/static/lunbo1.jpg",
        "http://localhost:8085/static/lunbo2.jpg",
      ],
      img2:[
        "http://localhost:8085/static/lunbo1.jpg",
        "http://localhost:8085/static/lunbo2.jpg",
        "http://localhost:8085/static/lunbo3.png",
        "http://localhost:8085/static/lunbo4.jpg",
        "http://localhost:8085/static/lunbo1.jpg",
        "http://localhost:8085/static/lunbo2.jpg",
        "http://localhost:8085/static/lunbo3.png",
        "http://localhost:8085/static/lunbo4.jpg",
        "http://localhost:8085/static/lunbo1.jpg",
        "http://localhost:8085/static/lunbo2.jpg",
        "http://localhost:8085/static/lunbo1.jpg",
        "http://localhost:8085/static/lunbo2.jpg",
      ],
      rightImg:[
        "http://localhost:8085/static/lunbo5.png",
        "http://localhost:8085/static/lunbo6.jpg",
        ]
    };
  },
  components: {
    HeadBar,
    VideoShow,
    VideoModel
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.mini_header {
  background: none;
  /deep/ a {
    color: #fff;
  }
}
.header {
  width: 100%;
  height: 288px;
  .m_banner {
    width: 100%;
    height: 180px;
    box-shadow: inset 0 0 100px #111;
    background-position: center 0;
    margin-left: calc(- (1903px - 100%) / 2);
    background-image: url("http://localhost:8085/static/masterBack.png");
  }
  .m_wrapper {
    width: 1630px;
    height: 108px;
    margin: auto;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 20px 0;
    .tab-line-itnl {
      border-left: 1px solid #e7e7e7;
      margin: 0 20px;
      height: 46px;
    }
    .primaryPageTab {
      width: 198px;
      ul {
        display: flex;
        li {
          line-height: 68px;
          width: 66px;
          height: 68px;
        }
      }
    }
    .primaryChannelMenu {
      width: 1077px;
      display: flex;
      flex-wrap: wrap;
      span {
        width: 102px;
        height: 34px;
        padding-right: 50px;
        display: flex;
        align-items: center;
        div {
          line-height: 34px;
          font-size: 14px;
        }
        em {
          font-style: normal;
          font-size: 12px;
          background: #73c9e5;
          border-radius: 2px;
          color: #fff;
          margin-left: 1px;
          height: 12px;
          text-align: center;
        }
      }
    }
    .primaryFriendshipLink {
      width: 289px;
    }
  }
}
.reportFirst1 {
  width: 1630px;
  height: 242px;
  margin: 0 auto 40px;
  display: flex;
  justify-content: space-between;
  .lunbo {
    width: 550px;
    height: 242px;
  }
}
.recommend-box {
  width: 1070px;
  height: 242px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
