<template>
  <div class="back">
    <div class="card">
      <div class="headline">注册</div>
      <el-form
        style="loginForm"
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="a"
        label-width="70px"
        class="demo-ruleForm"
        label-position="left"
        >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off" id="username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认" prop="password">
          <el-input type="password" v-model="ruleForm.repassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="password">
          <el-input type="password" v-model="ruleForm.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register">提交</el-button>
          <el-button @click="resetForm('a')">重置</el-button>
          
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
// import Register from "../../util/util.js"
import axios from 'axios'
export default {
  
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        phone:""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 6, max: 10, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "长度大于6个字符", trigger: "blur" }
        
        ],
        repassword: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "长度大于6个字符", trigger: "blur" }
        
        ],
        phone:[
          { required: true, message: "请输入电话", trigger: "blur" },
          { min: 6, message: "电话格式不正确", trigger: "blur" }
        ]

      }
    };
  },
  methods: {
    
    register(){
      let data = new FormData();
      data.append("user_username",this.ruleForm.username);
      data.append("user_password",this.ruleForm.password);
      data.append("user_phone",this.ruleForm.phone);
      axios.post("http://localhost:8084/user/register",data)
        .then(res=>{
            if(res.data){
              this.$router.push({name:'/master'})
            }          
        })
    },
  }
};
</script>
<style lang="less" scoped>


.back{
    width:100%;
    height:100%;
    background-image:url('../../assets/back.png')
}
.card {
  width: 600px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -300px;
  margin-top: -200px;
  background-color: #fffa;
  .headline {
    line-height: 80px;
    width: 300px;
    height: 100px;
    text-align: center;
    font-size: 30px;
    background-image: url('../../assets/headline.png');
    background-size: 100%;
  }
  .loginForm {
    width: 180px;
    height: 150px;
  }
}
</style>