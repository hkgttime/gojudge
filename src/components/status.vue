<template>
 <div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      class="set">
      <el-table-column
        prop="no"
        label="#"
        width="80">
      </el-table-column>
      <el-table-column
        prop="user"
        label="User"
        width="120">
      <template slot-scope="scope">
        <a href='#'>{{ scope.row.user }}</a>
      </template>
      </el-table-column>
      <el-table-column
        prop="problem"
        label="Problem">
      <template slot-scope="scope">
        <a href='#'>{{ scope.row.problem }}</a>
      </template>
      </el-table-column>
      <el-table-column
        prop="status"
        label="Judge Status"
        width="150">
      </el-table-column>
      <el-table-column
        prop="runtime"
        label="Run time(ms)"
        width="150">
      </el-table-column>
      <el-table-column
        prop="runmomery"
        label="Memory(kb)"
        width="150">
      </el-table-column>
      <el-table-column
        prop="language"
        label="Language"
        width="150">
      </el-table-column>
      <el-table-column
        prop="submittime"
        label="Submit Time"
        width="150">
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
  name: 'Status',
  components: {
  },
  data() {
      return {
        tableData: [{
          no: 1,
          user:  'hirasawayui',
          problem: '100',
          status: 'Accepted',
          runtime: '100ms',
          language: 'C (gcc 6.4.0)',
          runmomery: '33704',
          submittime: '2019/12/27 20:28:28'
        },{
          no: 1,
          user:  'hirasawayui',
          problem: '100',
          status: 'Accepted',
          runtime: '100ms',
          language: 'C (gcc 6.4.0)',
          runmomery: '33704',
          submittime: '2019/9/27 20:28:28'
        },{
          no: 1,
          user:  'hirasawayui',
          problem: '100',
          status: 'Accepted',
          runtime: '100ms',
          language: 'C (gcc 6.4.0)',
          runmomery: '33704',
          submittime: '2019/9/27 20:28:28'
        }]
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
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

