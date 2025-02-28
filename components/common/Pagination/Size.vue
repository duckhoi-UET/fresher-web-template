<template>
  <div v-if="pagination">
    <p class="text-sm text-gray-700">
      Showing
      <span class="font-medium">{{ pagination?.start }}</span>
      to
      <span class="font-medium">{{ pagination?.end }}</span>
      of
      <span class="font-medium">{{ pagination?.total }}</span>
      results
    </p>
  </div>
</template>

<script>
export default {
  props: {
    pagination: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
