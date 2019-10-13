 <template>
 <el-row :gutter="24">
      <el-col :span="14">
        <div class="oj-home-tit"><h4 class="oj-home-h4"><i class="el-icon-info"></i>&nbsp;&nbsp;&nbsp;&nbsp;公告</h4></div>
        <div class="oj-home-box">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="title"
              label="标题">
              <template slot-scope="scope">
                <a href='#'>{{ scope.row.title }}</a>
              </template>
            </el-table-column>
            <el-table-column
              prop="date"
              label="日期"
              width="200">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="10">
          <div class="oj-home-tit"><h4 class="oj-home-h4"><i class="el-icon-chat-line-square"></i>&nbsp;&nbsp;&nbsp;&nbsp;一言（ヒトコト）</h4></div>
          <div class="oj-home-box">
            <span class="oj-home-span">{{ hitokoto }}</span>
            <span class="from oj-home-span">{{ from }}</span>
          </div>
          <div class="mid"></div>
      </el-col>
      <el-col :span="10">
          <div class="oj-home-tit"><h4 class="oj-home-h4"><i class="el-icon-chat-dot-square"></i>&nbsp;&nbsp;&nbsp;&nbsp;最近更新</h4></div>
          <div class="oj-home-box">
            <el-table
            :data="upData"
            style="width: 100%">
            <el-table-column
              prop="title"
              label="标题">
              <template slot-scope="scope">
                <a href='#'>{{ scope.row.title }}</a>
              </template>
            </el-table-column>
            <el-table-column
              prop="date"
              label="日期"
              width="200">
            </el-table-column>
          </el-table>
          </div>
          <div class="mid"></div>
      </el-col>
      <el-col :span="10">
          <div class="oj-home-tit"><h4 class="oj-home-h4"><i class="el-icon-coffee-cup"></i>&nbsp;&nbsp;&nbsp;&nbsp;友情链接</h4></div>
          <div class="oj-home-box">
              <ul>
                <li><a href="http://www.z26198.com">作者的个人博客</a></li>
              </ul>
          </div>
          <div class="mid"></div>
      </el-col>
</el-row>
  </template>

<script>

export default {
    name: 'Home',
    components: {
    },
    data(){
      return{
        tableData:[
          {
            title: 'LibreOJ NOI Round #2 排行榜',
            date: '2019-07-15'
          },
          {
            title: 'LibreOJ NOI Round #2 排行榜',
            date: '2019-07-15'
          },
          {
            title: 'LibreOJ NOI Round #2 排行榜',
            date: '2019-07-15'
          },
          {
            title: 'LibreOJ NOI Round #2 排行榜',
            date: '2019-07-15'
          },
          {
            title: 'LibreOJ NOI Round #2 排行榜',
            date: '2019-07-15'
          },
          {
            title: 'LibreOJ NOI Round #2 排行榜',
            date: '2019-07-15'
          },
          {
            title: 'LibreOJ NOI Round #2 排行榜',
            date: '2019-07-15'
          },
          {
            title: 'LibreOJ NOI Round #2 排行榜',
            date: '2019-07-15'
          },
          {
            title: 'LibreOJ NOI Round #2 排行榜',
            date: '2019-07-15'
          },
          {
            title: 'LibreOJ NOI Round #2 排行榜',
            date: '2019-07-15'
          }
        ],
        upData:[
          {
            title: 'LibreOJ NOI Round #2 排行榜',
            date: '2019-07-15'
          },
          {
            title: 'LibreOJ NOI Round #2 排行榜',
            date: '2019-07-15'
          },
          {
            title: 'LibreOJ NOI Round #2 排行榜',
            date: '2019-07-15'
          }
        ],
        hitokoto: '知识是很美的，它们可以让你不出家门就了解这世上的许多事',
        from: '--妖精的尾巴'
      }
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
.from{
  margin-top: 15px;
  text-align: right;
  font-size: 0.8em
}
.mid{
  height: 20px;
}
</style>
