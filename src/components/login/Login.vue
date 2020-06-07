<template>
  <div class="back">
    <div class="card">
      <div class="headline">登录</div>
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
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('a')">提交</el-button>
          <el-button @click="resetForm('a')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 6, max: 10, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "长度大于6个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    login(a) {
      this.$refs[a].validate(async valid => {
          if(valid){
                let res =  await this.$http.get('user/login',{params:{
                      user_username:this.ruleForm.username,
                      user_password:this.ruleForm.password
                }})
                if(res.data.status==20003) return alert(res.data.content)
                window.sessionStorage.setItem('user',JSON.stringify(res.data))
                console.log(res.data)
                this.$router.push({name:'/master'})
          }
      });
    },
    resetForm(a) {
      this.$refs[a].resetFields();
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
    width: 150px;
    height: 150px;
  }
}
</style>