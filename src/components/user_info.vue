<template>
  <el-row :gutter="24">
      <el-col :span="14">
        <div class="oj-home-tit"><h4 class="oj-home-h4"><i class="el-icon-tickets"></i>&nbsp;&nbsp;&nbsp;&nbsp;个人资料</h4></div>
         <div class="oj-home-box">
           <div v-for="o in 4" :key="o" class="text item">
              <div class="oj-uinfo-span"> {{'列表内容 ' + o }} </div>
              <div class="oj-uinfo-span"> {{'列表内容 ' + o }} </div>
             <!--  <el-divider class="oj-uinfo-divider-horizontal"></el-divider> -->
            </div>
         </div>
      </el-col>
      <el-col :span="10">

      </el-col>
</el-row>
</template>

<script>

export default {
    name: 'UserInfo',
    components: {
    }
}
</script>

<style>
.oj-home-box{
  border: 1px solid #d4d4d5;
  border-radius: 0 0 .28571429rem .28571429rem;
  padding: 10px;
  border-top: none
}
.oj-home-tit{
  background: #f3f4f5;
  border: 1px solid #d4d4d5;
  border-radius: .28571429rem .28571429rem 0 0;
  padding: 0 10px
}
.oj-home-h4{
  margin: 7px;
  color: #909399
}
.oj-home-span{
  display: block;
  font-size: 14px;
  color: #909399
}
.mid{
  height: 20px;
}
.oj-uinfo-divider-horizontal{
  margin: 15px 0
}
.oj-uinfo-span{
  line-height: 20px
}
</style>
