<template>
<el-row :gutter="20">
  <el-col :span="10" :offset="7">
      <h2>Sign up</h2>
  </el-col>
  <el-col :span="10" :offset="7">
    <div class="oj-registered-base oj-registered-from">
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
        placeholder="邮箱"
        v-model="mail"
        type="email"
        clearable>
        <i
        class="el-icon-message el-input__icon"
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
      <el-input
        placeholder="确认密码"
        v-model="password"
        type="password"
        clearable>
        <i
        class="el-icon-lock el-input__icon"
        slot="prefix">
      </i>
      </el-input>
      <div class="middle"></div>
       <el-button type="info" :loading="loading" class="oj-button">确认注册</el-button>
    </div>
  </el-col>
</el-row>
</template>

<script>

export default {
    name: 'registered',
    components: {
    },
    data(){
      return{
        username: '',
        password: '',
        mail: '',
        loading: false
      }
    }
};
</script>

<style>
.oj-registered-base{
  padding: 20px;
  border: 1px solid #e6e6e6;
  border-radius: .28571429rem;
}
.oj-registered-from{
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
	text-align: center
}
.oj-registered-link{
  background: #f8f8f9
}
</style>
