<template>
  <div class="flex justify-center gap-1">
    <input
      @input="searchTask"
      class="rounded-md border p-2 px-4 text-xl w-4/5 md:w-2/5 bg-gray-50"
      type="search"
      placeholder="Search task here"
    />
  </div>
</template>

<script>
import types from "@/store/mutation-types";

export default {
  methods: {
    searchTask(e) {
      this.$store.commit(types.CHANGE_SEARCH, e.target.value);
    },
  },
};
</script>

<style scoped></style>
