<template>
  <div class="flex flex-col gap-6">
    <div class="bg-white p-4 rounded-xl shadow-md text-center">
      <h3>Total users</h3>
      <h1 class="font-bold text-2xl my-2">1500</h1>
      <p class="text-green-30 font-medium">10%</p>
      <p>+150 today</p>
    </div>
    <div class="grid grid-cols-2 gap-8">
      <div class="bg-white p-4 rounded-xl shadow-md">
        <div class="flex justify-between items-center">
          <h3>Total users logged in during the day</h3>
        </div>
        <h1 class="font-bold text-2xl my-2">100</h1>
      </div>
      <div class="bg-white p-4 rounded-xl shadow-md">
        <div class="flex justify-between items-center">
          <h3>Total users logged in during the month</h3>
        </div>
        <h1 class="font-bold text-2xl my-2">500</h1>
      </div>
    </div>
    <HeaderPage
      text="List of users not active in the last 7 days"
      customClass="mb-0"
    />
    <TableDashboard />
    <div
      class="mt-3 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-3"
    >
      <PaginationSize :pagination="pagination" />
      <Pagination />
    </div>
  </div>
</template>

<script>
import HeaderPage from "@/components/common/HeaderPage";
import TableDashboard from "@/components/dashboard/Table.vue";
import Pagination from "@/components/common/Pagination";
import PaginationSize from "@/components/common/Pagination/Size.vue";
export default {
  name: "Dashboard",
  components: {
    TableDashboard,
    Pagination,
    PaginationSize,
    HeaderPage,
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
