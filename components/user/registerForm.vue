<template>
  <el-form :model="registerForm" ref="registerForm" :rules="rules" class="form">
    <el-form-item class="form-item" prop="username">
      <el-input v-model="registerForm.username" placeholder="用户名手机"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="captcha">
      <el-input placeholder="验证码" v-model="registerForm.captcha">
        <template slot="append">
          <el-button @click="getCaptcha">发送验证码</el-button>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="nickname">
      <el-input placeholder="你的名字" v-model="registerForm.nickname"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="password">
      <el-input placeholder="密码" v-model="registerForm.password" type="password"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="checkPassword">
      <el-input placeholder="确认密码" v-model="registerForm.checkPassword" type="password"></el-input>
    </el-form-item>

    <el-button class="submit" type="primary" @click.native="registerClick">注册</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    const checkPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        username: "",
        nickname: "",
        captcha: "",
        password: "",
        checkPassword: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            pattern: /^1\d{10}$/,
            message: "请输入合法的电话号码",
            trigger: "blur"
          }
        ],
        captcha: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        nickname: [
          { required: true, message: "请输入你想要的名字", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        checkPassword: [{ validator: checkPassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    getCaptcha() {
      console.log(this.registerForm.username);
      this.$axios({
        url: "/captchas",
        method: "POST",
        data: { tel: this.registerForm.username }
      }).then(res => {
        const { code } = res.data;
        this.$alert("模拟验证码为" + code, "提示");
      });
    },
    registerClick() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          const {checkPassword,...rest}=this.registerForm
          this.$axios({
            url: "/accounts/register",
            method: "POST",
            data:rest
          }).then(res=>{
            console.log(res)
            if(res.request.status===200){
              this.$message.success('注册成功')
              // 调用登录 自动登录
              this.$store.commit('user/setUserInof',res.data)
              // 跳转
              this.$router.push('/')
            }
          })
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less">
.form {
  padding: 25px;
  .form-item {
    margin-bottom: 20px;
  }
  .form-text {
    text-align: right;
    font-size: 12px;
    color: #409eff;
  }
  .submit {
    width: 100%;
    margin-top: 10px;
  }
}
</style>