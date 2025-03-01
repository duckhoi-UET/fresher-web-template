<template>
  <div
    class="flex flex-col gap-4 border border-gray-10 bg-gray-40 p-4 rounded-lg"
  >
    <a-input placeholder="Search...">
      <a-icon
        v-model="filter.search"
        slot="prefix"
        type="search"
        style="color: rgba(0, 0, 0, 0.25)"
      />
    </a-input>
    <div class="flex justify-end gap-4">
      <Button ghost text="Search" />
      <Button text="Create new" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/common/Button";
import { cloneDeep } from "lodash";

const filterDefault = {
  search: "",
};

export default {
  name: "UserFilter",

  components: {
    Button,
  },
  data() {
    return {
      filter: cloneDeep(filterDefault),
    };
  },
};
</script>
