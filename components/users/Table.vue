<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :pagination="false"
    :scroll="{ x: 800 }"
  >
    <template slot="status" slot-scope="{ status }">
      <div class="text-base">
        <a-switch :checked="status == 1 ? true : false" />
      </div>
    </template>
    <template slot="action">
      <div>
        <a-dropdown :trigger="['click']" placement="bottomRight">
          <div
            class="ant-dropdown-link flex justify-center cursor-pointer"
            @click="(e) => e.preventDefault()"
          >
            <a-icon type="menu" />
          </div>
          <a-menu slot="overlay">
            <a-menu-item key="1">
              <a class="!flex items-center gap-2">
                <span class="text-base mb-0">Active</span>
              </a>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="1">
              <a class="!flex items-center gap-2">
                <span class="text-base mb-0">Edit</span>
              </a>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="3">
              <a class="!flex items-center gap-2 !text-red-100">
                <span class="text-base mb-0">Delete</span>
              </a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </template>
  </a-table>
</template>

<script>
export default {
  name: "TableUser",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
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
        {
          title: "Status",
          align: "center",
          scopedSlots: { customRender: "status" },
          width: 120,
        },
        {
          title: "Actions",
          align: "center",
          scopedSlots: { customRender: "action" },
        },
      ],
    };
  },

  methods: {},
};
</script>
