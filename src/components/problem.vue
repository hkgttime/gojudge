<template>
    <el-row :gutter="24">
      <el-col>
        <h3 class="oj-problem-h3">[Jeremy Wu]冒险之路，平凡之路</h3>
      </el-col>
      <el-col :span="12" offset="6">
        <el-tag
        v-for="tag in tags"
        :key="tag.id"
        type="info"
        class="oj-prb-tag">
            {{ tag.tit}}：{{ tag.info }}
        </el-tag>
      </el-col>
      <el-col>
        <div class="mid"></div>
        <div class="oj-prb-tit"><h4 class="oj-prb-h4"><i class="el-icon-info"></i>&nbsp;&nbsp;&nbsp;&nbsp;题目描述</h4></div>
        <div class="oj-prb-box">
          <span>给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。</span>
        </div>
      </el-col>
      <el-col>
        <div class="mid"></div>
        <div class="oj-prb-tit"><h4 class="oj-prb-h4"><i class="el-icon-info"></i>&nbsp;&nbsp;&nbsp;&nbsp;输入格式</h4></div>
        <div class="oj-prb-box">
          <span>对于操作 3、4、5、6 每行输出一个数，表示对应答案</span>
        </div>
      </el-col>
      <el-col>
        <div class="mid"></div>
        <div class="oj-prb-tit"><h4 class="oj-prb-h4"><i class="el-icon-info"></i>&nbsp;&nbsp;&nbsp;&nbsp;输出格式</h4></div>
        <div class="oj-prb-box">
          <span>因为无重复字符的最长子串是 "wke"，所以其长度为 3。
              请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串
              因为无重复字符的最长子串是 "wke"，所以其长度为 3。
              请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串</span>
        </div>
      </el-col>
      <el-col>
        <div class="mid"></div>
        <div class="oj-prb-tit"><h4 class="oj-prb-h4"><i class="el-icon-info"></i>&nbsp;&nbsp;&nbsp;&nbsp;样例</h4></div>
        <div class="oj-prb-box">
          <h4>样例输入</h4>
          <div class="oj-input-box">
          <span>对于操作 3、4、5、6 每行输出一个数，表示对应答案</span>
        </div>
        <h4>样例输出</h4>
          <div class="oj-input-box">
             <span>对于操作 3、4、5、6 每行输出一个数，表示对应答案</span>
          </div>
        </div>
      </el-col>
      <el-col>
        <div class="mid"></div>
        <div class="oj-prb-tit">
          <el-dropdown>
            <el-link :underline="false">hirasawayui</el-link>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><i class="el-icon-collection"></i>&nbsp;&nbsp;个人中心</el-dropdown-item>
              <el-dropdown-item><i class="el-icon-time"></i>&nbsp;&nbsp;提交历史</el-dropdown-item>
              <el-dropdown-item><i class="el-icon-switch-button"></i>&nbsp;&nbsp;退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        </div>
        <div class="oj-prb-box">
            <el-input
              type="textarea"
              :rows="12"
              placeholder="请输入内容"
              v-model="textarea">
            </el-input>
            <div class="mid"></div>
            <div>
              <el-button type="info"><i class="el-icon-upload"></i>&nbsp;&nbsp;提交解答</el-button>
              <el-button type="info"><i class="el-icon-video-play"></i>&nbsp;&nbsp;执行代码</el-button>
            </div>
        </div>
      </el-col>
    </el-row>
</template>

<script>

export default {
    name: 'Problem',
    components: {
    },
    data(){
      return{
        tags: [
        {
          id: 1,
          tit: '内存限制',
          info: '512 MiB'
        },
        {
          id: 2,
          tit: '时间限制',
          info: '2000 ms'
        },
        {
          id: 3,
          tit: '题目类型',
          info: '传统'
        },
        {
          id: 4,
          tit: '上传者',
          info: '匿名'
        }
      ],
      textarea: ''
      }
    }
}
</script>

<style>
.oj-problem-h3{
  display: block;
  text-align: center
}
.oj-prb-box{
  border: 1px solid #d4d4d5;
  border-radius: 0 0 .28571429rem .28571429rem;
  padding: 20px;
  border-top: none
}
.oj-prb-tit{
  background: #f3f4f5;
  border: 1px solid #d4d4d5;
  border-radius: .28571429rem .28571429rem 0 0;
  padding: 0 10px
}
.oj-prb-h4{
  margin: 7px;
  color: #909399
}
.oj-prb-span{
  display: block;
  font-size: 14px;
  color: #909399
}
.from{
  margin-top: 15px;
  text-align: right;
  font-size: 0.8em
}
.mid{
  height: 20px;
}
.oj-prb-tag{
  margin: 5px
}
.oj-input-box{
  border: 1px solid #d4d4d5;
  border-radius: .28571429rem .28571429rem;
  padding: 20px
}
</style>
