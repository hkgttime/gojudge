<template>
<el-row :gutter="20">
  <el-col :span="10" :offset="7">
      <h2>Sign in</h2>
  </el-col>
  <el-col :span="10" :offset="7">
    <div class="oj-login-base oj-login-from">
      <el-input
        placeholder="用户名"
        v-model="username"
        type="text"
        clearable>
        <i
        class="el-icon-user el-input__icon"
        slot="prefix">
      </i>
      </el-input>
      <div class="middle"></div>
      <el-input
        placeholder="密码"
        v-model="password"
        type="password"
        clearable>
        <i
        class="el-icon-lock el-input__icon"
        slot="prefix">
      </i>
      </el-input>
      <div class="middle"></div>
      <el-button type="info" :loading="loading" class="oj-button">登录</el-button>
    </div>
  </el-col>
  <el-col :span="10" :offset="7">
    <div class="middle"></div>
    <div class="oj-login-base oj-login-link"></div>
  </el-col>
</el-row>
</template>

<script>

export default {
    name: 'Login',
    components: {
    },
    data(){
      return{
        username: '',
        password: '',
        loading: false
      }
    }
};
</script>

<style>
.oj-login-base{
  padding: 20px;
  border: 1px solid #e6e6e6;
  border-radius: .28571429rem;
}
.oj-login-from{
  box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
}
.middle{
 height: 20px;
}
.oj-button{
  width: 100%
}
h2{
  display: block;
	text-align: center;
/*   color: #909399; */
}
.oj-login-link{
  background: #f8f8f9
}
</style>
