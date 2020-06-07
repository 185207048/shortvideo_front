<template>
  <div class="mini_header">
    <div>
      <ul class="nav-link">
        <li class="item">
          <a href>主站</a>
        </li>
        <li class="item">
          <a href>番剧</a>
        </li>
        <li class="item">
          <a href>游戏中心</a>
        </li>
        <li class="item">
          <a href>直播</a>
        </li>
        <li class="item">
          <router-link to="/peripheral">会员购</router-link>
        </li>
        <li class="item">
          <a href>漫画</a>
        </li>
        <li class="item">
          <a href>赛事</a>
        </li>
      </ul>
    </div>
    <div class="nav-search">
      <form action>
        <input type="text" />
        <div>
          <button class="iconfont icon-search"></button>
        </div>
      </form>
    </div>
    <div class="nav-user">
      <ul class="icon" v-if="avatar">
        <li class="item">
          <router-link to="/space">
            <img :src="avatar" alt />
          </router-link>
        </li>
        <li class="item">
          <a href>大会员</a>
        </li>
        <li class="item">
          <a href>消息</a>
        </li>
        <li class="item">
          <a href>动态</a>
        </li>
        <li class="item">
          <a href>收藏</a>
        </li>
        <li class="item">
          <a href>历史</a>
        </li>
        <li class="item">
          <a href>创作中心</a>
        </li>
      </ul>
      <div v-else class="logout">
        <div class="item">
          <span>
            <router-link to="/login">
              <img src="//static.hdslb.com/images/akari.jpg" alt />登录
            </router-link>
          </span>
        </div>
        <div class="item">
          <a href="" class="regi">注册</a>
        </div>
      </div>
      <span class="tg" @click="tougao">投稿</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["avatar"],
  methods: {
    tougao(){
      
    }
  }
};
</script>
<style lang="less" scoped>
.mini_header {
  width: 100%;
  height: 56px;
  padding: 10px 24px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  .nav-link {
    width: 512px;
    height: 36px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
  .nav-search {
    width: 500px;
    margin: 0 10px;
    form {
      position: relative;
      padding-left: 16px;
      padding-right: 36px;
      border: 1px solid #e7e7e7;
      background-color: #eee;
      input {
        width: 100%;
        line-height: 34px;
        overflow: hidden;
        text-align: start;
        font-size: 14px;
        background-color: #eee;
      }
      div {
        position: absolute;
        right: 0;
        top: 0;
        width: 48px;
        vertical-align: baseline;
        cursor: pointer;
        :hover {
          color: #00a1d6;
        }
        height: 36px;
        line-height: 26px;
        text-align: center;
        background-color: #e7e7e7;
        button {
          border-radius: 2px;
          cursor: pointer;
          background: none;
          position: absolute;
          right: 16px;
          top: 8px;
          border: none;
          outline: none;
          width: 16px;
          height: 20px;
        }
      }
    }
  }
  .nav-user {
    display: flex;
    justify-content: space-between;
    img {
      width: 36px;
      height: 36px;
      margin-right: 10px;
      border-radius: 50%;
    }
    a {
      font-size: 14px;
    }
    .icon {
      display: flex;
      align-items: center;
      width: 340px;
      flex-shrink: 0;
    }
    .logout {
      width: 117px;
      height: 36px;
      display: flex;
      align-items: center;
      .item {
        span {
          width: 65px;
          height: 32px;
          display: inline-block;
          color: #fff;
          font-size: 14px;
          line-height: 32px;
          img {
            display: inline-block;
            width: 32px;
            height: 32px;
            line-height: 32px;
            margin-right: 5px;
            vertical-align: middle;
            border-radius: 50%;
          }
        }
        .regi{
          display: inline-block;
          font-size: 14px;
          line-height: 32px;
          width: 28px;
        }
      }
    }
    .tg {
      cursor: pointer;
      position: relative;
      color: #fff;
      font-size: 14px;
      display: block;
      width: 100px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      background: #fb7299;
      border-radius: 2px;
      margin-left: 14px;
    }
  }
  .item {
    margin-left: 12px;
  }
}
</style>