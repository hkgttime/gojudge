<template>
 <div>
    <el-table
      v-loading="loading"
      :data="tableData"
      stripe
      style="width: 100%"
      class="set">
      <el-table-column
        prop="id"
        label="#"
        width="80">
      </el-table-column>
      <el-table-column
        prop="user"
        label="User"
        width="120">
      <template slot-scope="scope">
        <a href='javascript:;' @click="toUserinfo(scope.row)">{{ scope.row.user }}</a>
      </template>
      </el-table-column>
      <el-table-column
        prop="motto"
        label="Motto">
      </el-table-column>
      <el-table-column
        prop="ratio"
        label="Ratio(Solve/Submit)"
        width="180">
      </el-table-column>
    </el-table>
    <div class="block"></div>
    <div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[30, 40, 50]"
        :page-size="40"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
    </el-pagination>
  </div>
</div>
</template>

<script>

export default {
  name: 'RankList',
  components: {
  },
  data() {
      return {
        tableData: [{
          id: 1,
          user:  'mio',
          motto: '我什么时候才能像你一样优秀',
          ratio: '39.20% (432/1102)',
        },{
          id: 1,
          user:  'hirasawayui',
          motto: '我什么时候才能像你一样优秀',
          ratio: '39.20% (432/1102)',
        },{
          id: 1,
          user:  'gakki',
          motto: '我什么时候才能像你一样优秀',
          ratio: '39.20% (432/1102)',
        },{
          id: 1,
          user:  'hikari',
          motto: '我什么时候才能像你一样优秀',
          ratio: '39.20% (432/1102)',
        },{
          id: 1,
          user:  'jerry',
          motto: '我什么时候才能像你一样优秀',
          ratio: '39.20% (432/1102)',
        },{
          id: 1,
          user:  'tom',
          motto: '我什么时候才能像你一样优秀',
          ratio: '39.20% (432/1102)',
        }],
        loading: false
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      toUserinfo(tabdata){
          this.$router.push({ path: `/userinfo/${ tabdata.user }` })
      }
    }

};
</script>

<style>
.set{
  font-size: 12px;
}
.block{
  margin: 20px
}
</style>

