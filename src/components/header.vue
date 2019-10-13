<template>
<el-row>
  <el-col :span="17">
      <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><i class="el-icon-s-home"></i>Home</el-menu-item>
            <el-menu-item index="2"><i class="el-icon-edit"></i>Problems</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-s-data"></i>RankList</el-menu-item>
            <el-menu-item index="4"><i class="el-icon-s-check"></i>Status</el-menu-item>
            <el-menu-item index="5"><i class="el-icon-question"></i>FAQ</el-menu-item>
        </el-menu>
      </div>
  </el-col>
  <el-col :span="7">
      <div class="oj-link" v-if="flag">
        <el-link :underline="false" @click="handleSelect('7')" ><i class="el-icon-s-custom"></i>Sign in</el-link>
        <el-link :underline="false" @click="handleSelect('6')"><i class="el-icon-user"></i>Sign up</el-link>
      </div>
      <div class="oj-link" v-else>

        <el-dropdown>
           <el-link :underline="false">hirasawayui</el-link>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><i class="el-icon-collection"></i>&nbsp;&nbsp;个人中心</el-dropdown-item>
            <el-dropdown-item><i class="el-icon-time"></i>&nbsp;&nbsp;提交历史</el-dropdown-item>
            <el-dropdown-item><i class="el-icon-switch-button"></i>&nbsp;&nbsp;退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
  </el-col>
</el-row>
</template>
<script>

export default {
    name: 'Headerme',
    components: {
    },
    data() {
      return {
           activeIndex:'1',
           flag: true
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        switch(key){
          case "1":
            this.$router.push("/home")
            break
          case "2":
            this.$router.push("/problemlist")
            break
          case "3":
            this.$router.push("/ranklist")
            break
          case "4":
            this.$router.push("/status")
            break
          case "5":
            this.$router.push("/faq")
            break
          case "6":
            this.$router.push("/register")
            break
          case "7":
            this.$router.push("/login")
            break
        }
      }
    }
}
</script>

<style>
.el-menu--horizontal>.el-menu-item{
  height: 50px;
  line-height: 50px;
}
.el-menu.el-menu--horizontal{
  float: left;
}
.oj-link{
  float: right;
}
.el-link{
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
}
</style>
