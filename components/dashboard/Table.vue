<template>
  <Table :columns="columns" :data="users" />
</template>

<script>
import { mapState } from "vuex";
import Table from "@/components/common/Table";
export default {
  name: "TableDashboard",
  components: {
    Table,
  },
  data() {
    return {
      columns: [
        {
          title: "Email",
          dataIndex: "email",
          fixed: "left",
          sorter: (a, b) => a.email.length - b.email.length,
          sortDirections: ["descend", "ascend"],
        },
        {
          title: "Time login",
          dataIndex: "time_login",
          sorter: (a, b) => a.time_login - b.time_login,
          sortDirections: ["descend", "ascend"],
        },
        {
          title: "Ip Address",
          dataIndex: "ip_address",
          sorter: (a, b) => a.ip_address.length - b.ip_address.length,
          sortDirections: ["descend", "ascend"],
        },
        {
          title: "Device info",
          dataIndex: "device_info",
          sorter: (a, b) => a.device_info.length - b.device_info.length,
          sortDirections: ["descend", "ascend"],
        },
      ],
    };
  },
  computed: {
    ...mapState(["users"]),
  },
};
</script>
