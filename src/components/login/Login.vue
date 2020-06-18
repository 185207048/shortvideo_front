<template>
  <div class="back">
    <div class="card">
      <div class="headline">首页</div>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="登陆" name="first">
          <el-form
            style="loginForm"
            :model="ruleLogForm"
            status-icon
            :rules="rules"
            ref="a"
            label-width="70px"
            class="demo-ruleForm"
            label-position="left"
          >
            <el-form-item label="用户名" prop="username">
              <el-input type="text" v-model="ruleLogForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="ruleLogForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login()">提交</el-button>
              <el-button @click="resetLogForm('a')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="second">
          <el-form
            style="loginForm"
            :model="ruleRegForm"
            status-icon
            :rules="rules2"
            ref="b"
            label-width="70px"
            class="demo-ruleForm"
            label-position="left"
          >
            <el-form-item label="用户名" prop="username">
              <el-input type="text" v-model="ruleRegForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="ruleRegForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="passAgain">
              <el-input type="password" v-model="ruleRegForm.passAgain" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="register()">提交</el-button>
              <el-button @click="resetRegForm('b')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleRegForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      activeName: "first",
      ruleLogForm: {
        username: "",
        password: ""
      },
      ruleRegForm: {
        username: "",
        password: "",
        passAgain: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 6, max: 10, message: "长度在 5 个字符以上", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "长度大于6个字符", trigger: "blur" }
        ]
      },
      rules2: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 6, max: 10, message: "长度在 5 个字符以上", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "长度大于6个字符", trigger: "blur" }
        ],
        passAgain: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    login() {
      this.$http
        .post(
          `login?userUsername=${this.ruleLogForm.username}&userPassword=${this.ruleLogForm.password}`
        )
        .then(res => {
          console.log(res);
          if (res.data) {
            let { user } = res.data;
            
            window.localStorage.setItem("user", JSON.stringify(user));
            this.$router.push("/master");
          } else {
            alert("用户名或密码不正确");
          }
        });
    },
    register() {
      this.$refs["b"].validate(valid => {
        if (valid) {
          this.$http
            .post(
              `register?userUsername=${this.ruleRegForm.username}&userPassword=${this.ruleRegForm.password}`
            )
            .then(res => {
              console.log(res);
              if (res.data) {
                let { user } = res.data;
                window.localStorage.setItem("user", user);
                this.$router.push("/master");
              } else {
                alert("用户名或密码不正确");
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetLogForm(a) {
      this.$refs[a].resetFields();
    },
    resetRegForm(b) {
      this.$refs[b].resetFields();
    },
    handleClick() {
      this.$refs["a"].resetFields();
      this.$refs["b"].resetFields();
    }
  }
};
</script>
<style lang="less" scoped>
.back {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/back.png");
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
    background-image: url("../../assets/headline.png");
    background-size: 100%;
  }
  .loginForm {
    width: 150px;
    height: 150px;
  }
}
</style>