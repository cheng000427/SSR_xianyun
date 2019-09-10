<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <flightsFilters :data="cacheFlightsData" @setDataLists="setDataLists" />

        <!-- 航班头部布局 -->
        <div>
          <flightsListHead />
        </div>

        <!-- 航班信息 -->
        <div>
          <flightsItem v-for="(item,index) in dataList" :key="index" :data="item" />

          <!-- 分页 -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageIndex"
            :page-sizes="[3, 5, 7, 9]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </div>

      <!-- 侧边栏 -->
      <flightsAside/>
    </el-row>
  </section>
</template>

<script>
import flightsListHead from "@/components/air/flightsListHead.vue";
import flightsItem from "@/components/air/flightsItem.vue";
import flightsFilters from "@/components/air/flightsFilters.vue";
import flightsAside from "@/components/air/flightsAside.vue";

export default {
  data() {
    return {
      // 航班总数据
      flightsData: {
        flights: [],
        info: {},
        options: {}
      },
      cacheFlightsData: {
        flights: [],
        info: {},
        options: {}
      },
      dataList: [],
      //   总页数
      total: 0,
      //   当前页数
      pageIndex: 1,
      // 显示条数
      pageSize: 3,
      aa: []
    };
  },
  components: {
    flightsListHead,
    flightsItem,
    flightsFilters,
    flightsAside
  },
  watch:{
    $route(){
      this.getData()
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData(){
      //   航班数据
    this.$axios({
      url: "/airs",
      params: this.$route.query
    }).then(res => {
      console.log(123,res.data);
      this.flightsData = res.data;
      // console.log(this.flightsData.flights);
      this.total=res.data.flights.length
      // console.log(this.total)
      this.cacheFlightsData = { ...res.data };
      this.setDataList();
    });
    },
    setDataLists(arr) {
      // this.pageIndex=1
      this.flightsData.flights = arr
      this.setDataList()
      this.total=arr.length
    },
    setDataList() {
      // 开始
      const state = (this.pageIndex - 1) * this.pageSize;
      const end = state + this.pageSize;
      this.dataList = this.flightsData.flights.slice(state, end);
    },
    //   分页
    // 切换条数触发
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.pageIndex = 1;
      this.setDataList();
    },
    // 切换页数触发
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pageIndex = val;
      this.setDataList();
    }
  }
};
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
</style>