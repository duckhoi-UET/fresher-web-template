<template>
  <Table :columns="columns" :data="data" />
</template>

<script>
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
          title: "Name",
          dataIndex: "name",
          sorter: (a, b) => a.name.length - b.name.length,
          sortDirections: ["descend", "ascend"],
        },
        {
          title: "Age",
          dataIndex: "age",
          sorter: (a, b) => a.age - b.age,
          sortDirections: ["descend", "ascend"],
        },
        {
          title: "Address",
          dataIndex: "address",
          sorter: (a, b) => a.address.length - b.address.length,
          sortDirections: ["descend", "ascend"],
        },
      ],

      data: [
        {
          key: "1",
          name: "John Brown",
          age: 32,
          address: "New York No. 1 Lake Park",
        },
        {
          key: "2",
          name: "Jim Green",
          age: 42,
          address: "London No. 1 Lake Park",
        },
        {
          key: "3",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. 1 Lake Park",
        },
        {
          key: "4",
          name: "Jim Red",
          age: 32,
          address: "London No. 2 Lake Park",
        },
      ],
    };
  },
};
</script>
