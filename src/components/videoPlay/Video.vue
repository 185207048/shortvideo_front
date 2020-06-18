 <template>
  <div class="all">
    <div class="top">
      <HeadBar :avatar="this.user||null" />
    </div>

    <el-container>
      <el-main>
        <div style="display:flex;justifyContent: center;alignItems: center;flexDirection:column">
          <vue-baberrage
      :isShow= "barrageIsShow"
      :barrageList = "barrageList"
      :loop = "barrageLoop"
      style="width:800px;height:300px"
      >
    </vue-baberrage>
          <video
            id="myVideo"
            width="800px"
            height="500px"
            controls="controls"
            :src="videoHref&&videoHref.split('^')[1]"
            type="video/mp4"
          ></video>
          <div>
            <el-input style="width:400px !important" placeholder="请输入弹幕" v-model="myDanmu" />
            <el-button type="primary" @click="addToList">发送</el-button>
          </div>

          <div>
            <span>点赞 |</span>
            <span>投币 |</span>
            <span>收藏</span>
          </div>
        </div>
      </el-main>
      <el-aside width="400px">
        <el-card :body-style="{width:'300px',height:'400px'}">
          <div>
            <div>视频信息</div>
            <span>作者：{{'小小'}}</span>
            <img src="//static.hdslb.com/images/akari.jpg" style="width:150px;height:150px" alt />
            <div>简介</div>
            <h3>aaaaaaaaaa</h3>
          </div>
        </el-card>
        <el-card :body-style="{width:'300px',height:'450px'}">
          <div
            style="borderBottom:1px solid #a1a1a1;width:300px;height:150px"
            @click="toBuy"
            v-for="(item,index) in newZhoubian"
            :key="index"
          >
            <img src="../../assets/img/1.png" style="width:100px;height:100px" alt />
            <span>好吃的好玩的都有</span>
          </div>
        </el-card>
      </el-aside>
    </el-container>
  </div>
</template>
<script>
import Vue from "vue";
// eslint-disable-next-line no-unused-vars
import HeadBar from "../tools/headBar/HeadBar";
import { vueBaberrage, MESSAGE_TYPE } from "vue-baberrage";
Vue.use(vueBaberrage);
export default {
  mounted() {
    let { videoHref } = this.$route.query.video;
    this.videoHref = videoHref;
    this.user = JSON.parse(window.localStorage.getItem("user"));
    this.getZhoubian();
  },
  data() {
    return {
      msg: 'Hello vue-baberrage',
      barrageIsShow: true,
      currentId : 0,
      barrageLoop: false,
      barrageList: [],
      myDanmu: "",
      zhoubian: [
        "../../assets/img/1.png",
        "../../assets/img/2.png",
        "../../assets/img/3.png",
        "../../assets/img/4.png",
        "../../assets/img/5.png",
        "../../assets/img/6.png",
        "../../assets/img/7.png",
        "../../assets/img/8.png",
        "../../assets/img/9.png"
      ],
      newZhoubian: [],
      videoHref: "",
      user: null
    };
  },
  methods: {
    addToList() {
      this.barrageList.push({
        id: ++this.currentId,
        avatar: "./static/avatar.jpg",
        msg: this.myDanmu,
        time: 5,
        type: MESSAGE_TYPE.NORMAL
      });
      this.myDanmu = "";
    },
    getZhoubian() {
      for (let i = 0; i < 3; i++) {
        this.newZhoubian.push(
          this.zhoubian[Math.floor(Math.random() * this.zhoubian.length)]
        );
      }
      console.log(this.newZhoubian);
    },
    toBuy() {
      this.$router.push("/peripheral");
    }
  },
  components: {
    HeadBar
  }
};
</script>
 <style>
.aside {
  background-color: #fff;
}
</style>
