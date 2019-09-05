<template>
  <el-form class="form" :model="loginForm" :rules="rules" ref="loginForm">
    <!-- 请输入用户名 -->
    <el-form-item class="form-item" prop="username">
      <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <!-- 请输入密码 -->
    <el-form-item class="form-item" prop="password">
      <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <!-- 忘记密码 -->
    <p class="form-text">
      <nuxt-link to="#">忘记密码</nuxt-link>
    </p>
    <!-- 登录按钮 -->
    <el-button class="submit" type="primary" @click="hanhelClick">登录</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    hanhelClick() {
      console.log(this.loginForm);
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$axios({
            url: "accounts/login",
            method: "POST",
            data: this.loginForm
          }).then(res => {
            console.log(res);
              const data = res.data;
              this.$store.commit("user/setUserInof", data);
              this.$message.success("登录成功");
              this.$router.push("/");
          });
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