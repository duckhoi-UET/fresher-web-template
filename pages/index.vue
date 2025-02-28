<template>
  <div class="flex flex-col gap-6">
    <div class="bg-white p-4 rounded-xl shadow-md text-center">
      <h3>Total Sales</h3>
      <h1 class="font-bold text-2xl my-2">$ 6,789</h1>
      <p class="text-green-30 font-medium">10%</p>
      <p>+$150 today</p>
    </div>
    <div class="grid grid-cols-2 gap-8">
      <div
        v-for="item in 2"
        :key="item"
        class="bg-white p-4 rounded-xl shadow-md"
      >
        <div class="flex justify-between items-center">
          <h3>Total Sales</h3>
        </div>
        <h1 class="font-bold text-2xl my-2">$ 6,789</h1>
        <div class="flex items-center">
          <span class="text-green-30 font-medium flex items-center"> 10% </span>
          <span>+$150 today</span>
        </div>
      </div>
    </div>
    <div>
      <TableDashboard />
      <div
        class="mt-3 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-3"
      >
        <PaginationSize :pagination="pagination" />
        <Pagination />
      </div>
    </div>
  </div>
</template>

<script>
import TableDashboard from "@/components/dashboard/Table.vue";
import Pagination from "@/components/common/Pagination";
import PaginationSize from "@/components/common/Pagination/Size.vue";
export default {
  name: "Dashboard",
  components: {
    TableDashboard,
    Pagination,
    PaginationSize,
  },
  data() {
    return {
      pagination: {
        start: 1,
        end: 5,
        total: 100,
      },
    };
  },
};
</script>
