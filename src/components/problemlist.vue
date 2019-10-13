<template>
 <div>
    <el-table
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
        prop="problem"
        label="Problem">
      <template slot-scope="scope">
        <a href='javascript:;' @click="toProblem(scope.row)">{{ scope.row.problem }}</a>
      </template>
      </el-table-column>
      <el-table-column
        prop="ratio"
        label="Ratio(Solve/Submit)"
        width="180">
      </el-table-column>
      <el-table-column
        prop="type"
        label="Type"
        width="180">
      <template slot-scope="scope">
        <a href='javascript:;'>{{ scope.row.type }}</a>
      </template>
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
  name: 'ProblemList',
  components: {
  },
  data() {
      return {
        tableData: [{
          id: 100,
          problem: '[Jeremy Wu]冒险之路，平凡之路',
          ratio: '39.20% (432/1102)',
          type: '数组排序'
        },{
          id: 2,
          problem: '[Jeremy Wu]冒险之路，平凡之路',
          ratio: '39.20% (432/1102)',
          type: '数组排序'
        },{
          id: 3,
          problem: '[Jeremy Wu]冒险之路，平凡之路',
          ratio: '39.20% (432/1102)',
          type: '数组排序'
        },{
          id: 4,
          problem: '[Jeremy Wu]冒险之路，平凡之路',
          ratio: '39.20% (432/1102)',
          type: '数组排序'
        }],
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      toProblem(tabdata){
        this.$router.push({ path: `/problem/${ tabdata.id }` })
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
