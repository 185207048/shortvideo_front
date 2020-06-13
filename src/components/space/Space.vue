<template>
  <div style="background-color:	#F7F7F7">
    <HeadBar :avatar="user&&user.user_header"/>
    <div class="h">
      <div class="h_inner">
        <div class="h_user">
          <div class="h_info">
            <div class="h_avatar">
              <img
                :src="user&&user.user_header"
              />
            </div>
            <div class="h_basic">
              <div class="h_name">{{user&&user.user_name}}</div>
              <div class="h_input">
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="navigator">
      <div class="wrapper">
        <div class="n_inner">
          <div class="n_tab_link">
            <router-link :to="{ name: 'home'}">
              <span class="iconfont icon-zhuye"></span>
              <span class="n_text">主页</span>
            </router-link>
            <a href>
              <span class="iconfont icon-dianshi"></span>
              <span class="n_text">投稿</span>
            </a>
            <router-link :to="{ name: 'dynamic'}">
              <span class="iconfont icon-tubiaozhizuomoban-"></span>
              <span class="n_text">动态</span>
            </router-link>
            <a href>
              <span class="iconfont icon-shipin"></span>
              <span class="n_text">频道</span>
            </a>
            <a href>
              <span class="iconfont icon-dingyue"></span>
              <span class="n_text">订阅</span>
            </a>
            <router-link :to="{name:'shopcar'}">
              <span class="iconfont icon-shoucang"></span>
              <span class="n_text">购物车</span>
            </router-link>
            <router-link :to="{name:'setting'}">
              <span class="iconfont icon-shezhi"></span>
              <span class="n_text">设置</span>
            </router-link>
          </div>
          <div class="n_statistics">
            <a href>
              <p>关注数</p>
              <p>99</p>
            </a>
            <a href>
              <p>粉丝数</p>
              <p>99</p>
            </a>
            <a href>
              <p>播放数</p>
              <p>99</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
  
<script>
import HeadBar from '../tools/headBar/HeadBar'
export default {
  data(){
    return{
      user:null
    }
  },
  mounted(){
    this.user = JSON.parse(window.sessionStorage.getItem('user'))
    console.log(this.user)
  },
  components:{
    HeadBar
  }
};
</script>
  
<style lang='less' scoped>

.h {
  height: 200px;
  width: 100%;

  .h_inner {
    width: 1280px;
    height: 200px;
    margin: auto;
    padding: 116px 0 0;
    background-image: url("https://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png@2200w_400h_1o.webp");
    .h_user {
      width: 1280px;
      height: 84px;
      .h_info {
        width: 1280px;
        height: 84px;
        margin-left: 20px;
        padding-bottom: 16px;
        .h_avatar {
          width: 68px;
          height: 68px;
          border: 2px solid #fff;
          border-radius: 50%;
          display: inline-block;
          vertical-align: top;
          img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
          }
        }
        .h_basic {
          display: inline-block;
          margin-top: 10px;
          margin-left: 20px;
          height: 54px;
          width: 735px;
          .h_name {
            width: 90px;
            height: 18px;
            line-height: 18px;
            color: #fff;
          }
          .h_input {
            width: 735px;
            height: 26px;
            margin-top: 8px;

            input {
              background: none;
            }
          }
        }
      }
    }
  }
}
.navigator {
  width: 100%;
  height: 66px;
  margin: 0 0 10px;
  .wrapper {
    width: 1280px;
    height: 66px;
    margin: auto;
    background-color: #fff;
    .n_inner {
      padding: 0 20px;
      .n_tab_link {
        width: 600px;
        height: 66px;
        display: inline-block;
        a {
          width: 50px;
          height: 66px;
          margin-right: 31px;
          line-height: 66px;
        }
      }
      .n_statistics {
        width: 174px;
        height: 66px;
        float: right;
        ::after {
          clear: both;
        }
        a {
          width: 58px;
          height: 66px;
          padding: 10px 0;
          float: left;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
      }
    }
  }
}
</style>
  