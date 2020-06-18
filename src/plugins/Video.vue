 <template>
  
  <div class="all">
    <div class="top">

    </div>
    <div class="bottom">
      <div class="b_left">
        <div class="b_left_top">
          <div class="b_left_top_title">
          <b style="margin-left: 20px; font-size:2rem" >标题</b><br/>
          <span id="style_top" style="height:30px;margin-left: 20px;margin-right: 20px;">类型</span>
          <span id="time_top" style="margin-left: 20px;margin-right: 20px;">时间</span><br/>
          <span id="num_Play" style="margin-left: 20px;margin-right: 20px;">播放量</span>
          <span id="num_bulletScreen" style="margin-left: 20px;margin-right: 20px;">弹幕</span>
         <img id="stop" style="width: 15px;height: 12px" src="./禁止.jpg">
          <span style="margin-left:5px;margin-right: 20px;">未经允许，禁止转载</span>
          </div>
        </div>
        <div class="TV">
        <div  style="border: 0;width:100%;height:85%;float:left; magrin:0px;padding: 0px">
        
            <vue-baberrage
            style="width:700px;height:300px"
            v-show="isShow_danmu"
          :isShow="barrageIsShow"
          :barrageList="barrageList"
          :maxWordCount="maxWordCount"
          :throttleGap="throttleGap"
          :loop="barrageLoop"
          :boxHeight="boxHeight"
          :messageHeight="messageHeight"
          >
          </vue-baberrage>
        
         <video  @click="suspend" id="myVideo" style="width:100%;height:100%;float:left；padding: 0px" controls="controls" src="./缘结神.mp4" type="video/mp4"> 
         </video>
      
        </div>
         <div style="border: 0;width:100%;height:10%; margin:0px;padding:0px 0px;float:left">
         <img v-if="star_like1" @click="suspend" src="./picture/播放/播放.png"  style="width:40px;height:40px;margin-left:10px;padding:0px 0px" alt=""> 
         <img v-if="star_like2"  @click="suspend" src="./picture/播放/暂停.png"  style="width:40px;height:40px;margin-left:10px;padding:0px 0px" alt=""> 
      
      <button class="danmuxianshi" style="margin-left:50px；margin" @click="DanmuIsShow">{{message}}弹幕</button>  
      <div style="width:20%;height=5%;float:right">
      <p style="color:gray;font-size:5%">请选择倍数播放
        <select name="" id="rate">
        <option value="0.5">0.5</option>
        <option value="1" selected="selected">1</option>
        <option value="1.5">1.5</option>
        <option value="2">2</option>
        </select></p>
      </div>
    
  </div>
      </div>
        <div class="btn"> 
          
        <img v-if="click_like1" @click="like" src="./picture/点赞/点赞1.png" style="width:30px;height:30px;margin-left:20px;margin-right:10px" alt="">
        <img v-if="click_like2" @click="like" src="./picture/点赞/点赞2.png" style="width:30px;height:30px;margin-left:20px;margin-right:10px" alt="">
        <span>{{click_number}}</span>
        <img v-if="start_like1" @click="start_num" src="./picture/收藏/收藏1.png" style="width:30px;height:30px;margin-left:20px;margin-right:10px" alt="">
        <img v-if="start_like2" @click="start_num" src="./picture/收藏/收藏2.png" style="width:30px;height:30px;margin-left:20px;margin-right:10px" alt="">
        <span>{{start_number}}</span>
        <img @click="share_num" src="./picture/转发/转发2.png" style="width:30px;height:30px;margin-left:20px;margin-right:10px" alt="">
        <span>{{share_number}}</span>
         
        </div>
        <div class="text">
          <div class="text_one">

          </div>
          <div class='text_two'>
            <b>其他信息：</b>
            <p> 软件：</p>
            <p>BGM: </p>
          </div>
    <ul class="ul_style">
      <li><a href="./">动画</a></li>
    </ul>
        </div>
      </div>
      <div class="b_right">
        <div class="people">
            <img style="width:30%; height: 90px; float:left;  border-radius: 50%" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg" alt="">
       <div style="width:70%;float:left">
        <span  style="margin-top:0px ;margin-left:10px">昵称:</span><br/>
        <span  style="margin-left:10px">个性签名...</span>
       </div>
        </div> 
        <div v-show="advertising_show" onclick="window.open('http://www.baidu.com')" class="advertising">
          <div @click="close_advertising" class="advertising_close" style="width:30px;height:30px;float:right;margin-top:0px;background-color:gray"></div>
        
        </div>
        <div>
          <h2>相关推荐</h2>
        </div>
        <div class="tj">
          <div style="width:100%;height:150px;background-color:white" onclick="window.open('http://www.baidu.com')">
           <img src="./关闭.png" style="height:150px;width:150px;float:left" alt="">
           <div style=""><font size="10px" >1111</font><br/>
           <span><font size="3px" color="gray">作者</font></span><br/>
           <span ><font size="3px" color="gray">{{click_number }}播放量  ·  {{start_number}}弹幕数量</font></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
// eslint-disable-next-line no-unused-vars
import { vueBaberrage, MESSAGE_TYPE } from 'vue-baberrage';
Vue.use(vueBaberrage);
export default {
  data() {
return {
  msg: '王帅~',
  barrageIsShow: true,
  messageHeight: 3,
  boxHeight: 100,
  barrageLoop: true,
  maxWordCount: 3,
  throttleGap: 5000,
  barrageList: [],
  message: "显示",

        isShow_danmu : true,
        advertising_show: true,
        star_like:1,
        star_like1:true,
        star_like2:false,
        click_like:1,
        click_like1:true,
        click_like2:false,
        click_number:1,
        start_like: 1,
        start_like1:true,
        start_like2:false,
        start_number: 2,
        share_like:1,
        share_like1:true,
        share_like2:false,
        share_number: 3,
    };
},
mounted() {
 this.addToList();
 },
  methods : {
    DanmuIsShow() {
      this.isShow_danmu =! this.isShow_danmu;
      if(this.isShow_danmu==true){
        this.message = "关闭";
      }else{
        this.message = "显示";
      }
    },
    addToList(){
      // eslint-disable-next-line no-unused-vars
      let list = [
        {
          id:1,
          avatar:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
          msg: this.msg,
          time: 3,
          barrageStyle: 'red'
        }, {
          id:2,
          avatar:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
          msg: this.msg,
          time: 6,
          barrageStyle: 'red'
        }, {
          id:3,
          avatar:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
          msg: this.msg,
          time: 4,
          barrageStyle: 'red'
        }
      ];
       list.forEach((v) => {
  this.barrageList.push({
   id: v.id,
   avatar: v.avatar,
   msg: v.msg,
   time: v.time,
   type: MESSAGE_TYPE.NORMAL,
   barrageStyle: v.barrageStyle
  });
  });
    }
    ,
     suspend(){
           var myVideo = document.getElementById("myVideo");
           var sel = document.getElementById("rate");
           sel.addEventListener('change', function () {
             myVideo.playbackRate = this.value;
            
              });
           if (myVideo.paused) {
             this.star_like1 =!this.star_like1;
        this.star_like2 =!this.star_like2;
        this.star_like = this.star_like-1;
               myVideo.play();
           }else if (myVideo.play()) {
             this.star_like1 =!this.star_like1;
             this.star_like2 =!this.star_like2;
              this.star_like = this.star_like+1;
               myVideo.pause();    
           }
           myVideo=document.getElementById("myVideo");
            myVideo.ontimeupdate=function(){
            console.log(this.currentTime,this.duration);
            this.videoTime = document.getElementById("myVideo").duration.innerHtml
            };
            },
      chose_rate(){
          var sel = document.getElementById('rate');
          sel.addEventListener('change',function(){
            // eslint-disable-next-line no-undef
            myVideo.playbackRate=this.value;
            // eslint-disable-next-line no-undef
            myVideo.play;
          })
      },
      
    like(){
    if( this.click_like==1){
        this.click_like1 =! this.click_like1;
        this.click_like2 =! this.click_like2;
        this.click_like =this.click_like-1;
        this.click_number = this.click_number+1;
    }else{
       this.click_like1 =! this.click_like1;
        this.click_like2 =! this.click_like2;
      this.click_like  =this.click_like+1;
       this.click_number = this.click_number-1;
    }
    },
    start_num(){
     if( this.start_like==1){
        this.start_like1 =! this.start_like1;
        this.start_like2 =! this.start_like2;
        this.start_like =this.start_like-1;
        this.start_number = this.start_number+1;
    }else{
       this.start_like1 =! this.start_like1;
        this.start_like2 =! this.start_like2;
        this.start_like =this.start_like+1;
       this.start_number = this.start_number-1;
    }
    },
    share_num(){   
        this.share_number = this.share_number+1;
    },
    close_advertising:function(){
      this.advertising_show =! this.advertising_show;
    },
  }
}
</script>

<style lang="less" scoped>

.baberrage-top{
  height: 300px;
}

.baberrage-lane{
  height: 300px;
}
.baberrage-bottom{
  height: 300px;
}
.barrages-drop {
  height: 300px;
 .blue {
 border-radius: 100px;
 background: #e6ff75;
 color: #fff;
 }
 .green {
 border-radius: 100px;
 background: #75ffcd;
 color: #fff;
 }
 .red {
 border-radius: 100px;
 background: #e68fba;
 color: #fff;
 }
 .yellow {
 border-radius: 100px;
 background: #dfc795;
 color: #fff;
 }
 .baberrage-stage {
 position: absolute;
 width: 300px;
 height: 212px;
 overflow: hidden;
 top: 0;
 margin-top: 130px;
 }
}

.all{
    height: 100%;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
    background: antiquewhite;
    padding: 0
}
.top{
  width: 100%;
  height: 250px;
  background: url("./背景.jpg") no-repeat;
  background-size:1400px 300px;
  background-position: 0 -50px;
  overflow:hidden;
}
.top img{
  height: 100%;
  width: 100%;
}
.bottom{
  display: flex
}
.bottom>.b_left{
  height:1200px;
  width: 65%;
  background:rgb(230, 203, 255);
  padding: 10px;
}
.bottom>.b_right{
  height: 1220px;
  width: 35%;
  background:rgb(241, 216, 216);
}
.bottom>.b_left div{
  margin: 10px auto;
  width: 85%;
}
.bottom>.b_left>.b_left_top{
  height:150px;
  background: white;
  background-color: aqua;
}
.bottom>.b_left>.b_left_top>.b_left_top_title{
        height: 50%;
        margin: 0px auto;
}
.TV{
  width: 650px;
  height: 500px;
  background: black;
}


.btn{
  background: rgb(255, 255, 255);
}
.bottom>.b_left>.btn>.icon{
  margin-left: 20px;
}
.bottom>.b_left>.btn>.danmuxianshi{
  margin-left: 20px;
}
.bottom>.b_left>.btn.save{
  width: 100px;
  height: 100px;
}
.bottom>.b_left>.text{
  height: 400px;
  background: rgb(196, 248, 211);
}
.bottom>.b_left>.text>.ul_style{
  list-style: none;
  list-style-type: border;
}
/* ------------------------------- */
.bottom>.b_right div{
  width: 85%;
  margin: 10px auto;
}
.people{
  height: 100px;
  background:white;
}


.advertising{
  height: 300px;
  background: url("./preview.jpg");
  background-size: cover;
}
.advertising_close{
  background: url("./关闭.png");
  background-size: cover;
}
.tj{
  height: 700px;
  background: rgb(234, 181, 241)
}
 video::-webkit-media-controls-play-button {
        display: none;
    }

</style>
