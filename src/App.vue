<template>
 <el-container class="oj-container">
  <el-header style="height: 50px">
    <el-row :gutter="24">
      <el-col :span="18" :offset="3">
        <headerme></headerme>
      </el-col>
    </el-row>
  </el-header>
  <el-main v-loading="loading">
    <el-row>
      <el-col :span="18" :offset="3">
       <router-view></router-view>
      </el-col>
    </el-row>
  </el-main>
  <el-divider></el-divider>
  <el-footer>
    <el-row :gutter="24">
      <el-col :span="10" :offset="7">
          <span class="oj-cent oj-span">GOJUDGE Powered by <a href="http://www.z26198.com">Z26198</a>.</span>
      </el-col>
    </el-row>
  </el-footer>
</el-container>
</template>

<script>

import Headerme from './components/header'

export default {
  name: 'app',
  components: {
      Headerme
  },
  data(){
    return{
      loading: false
    }
  }
};
</script>

<style>
.el-header{
  border-bottom: 1px solid #e6e6e6;
}
.oj-container{
  min-width: 1160px;
}
.oj-cent{
  text-align: center;
  line-height: 40px
}
.oj-span{
  display: block;
  font-size: 14px;
  color: #909399
}
</style>
