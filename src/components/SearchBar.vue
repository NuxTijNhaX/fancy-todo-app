<template>
  <div class="flex justify-center gap-1">
    <input
      @input="searchTask"
      v-model.trim="searchText"
      class="rounded-md border p-2 px-4 text-xl w-2/5 bg-gray-50"
      type="search"
      placeholder="Search task here"
    />
    <!-- <base-button @click.native="searchTask" icon="search" size="medium">
      <template #content> Search </template>
    </base-button> -->
  </div>
</template>

<script>
// import BaseButton from "./BaseButton.vue";

export default {
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    searchTask() {
      this.$emit("search", this.searchText);
    },
  },
  components: {
    // BaseButton,
  },
};
</script>

<style scoped></style>
