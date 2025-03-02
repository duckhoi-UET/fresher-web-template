<template>
  <div class="bg-white p-6 rounded-lg">
    <HeaderPage text="Users list" />
    <UserFilter class="mb-8" @create="handleCreateUser" />
    <TableUser :data="users" @edit="handleEditUser" />
    <div v-if="users?.length" class="mt-3 flex items-center justify-between">
      <PaginationSize :pagination="pagination" />
      <Pagination :total="pagination.total" />
    </div>
    <UserDialog ref="userDialog" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import TableUser from "@/components/users/Table.vue";
import Pagination from "@/components/common/Pagination";
import PaginationSize from "@/components/common/Pagination/Size.vue";
import UserFilter from "@/components/users/Filter.vue";
import HeaderPage from "@/components/common/HeaderPage";
import UserDialog from "@/components/users/Dialog.vue";

export default {
  name: "Users",
  components: {
    TableUser,
    Pagination,
    PaginationSize,
    UserFilter,
    HeaderPage,
    UserDialog,
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
  computed: {
    ...mapState(["users"]),
  },
  created() {},
  methods: {
    handleEditUser(user) {
      this.$refs.userDialog.open(user);
    },
    handleCreateUser() {
      this.$refs.userDialog.open();
    },
  },
};
</script>
