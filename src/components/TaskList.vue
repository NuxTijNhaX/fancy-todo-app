<template>
  <table class="w-11/12 sm:w-9/12 md:w-3/5">
    <thead>
      <tr>
        <th class="w-1/12"></th>
        <th class="w-3/12 text-left">Name</th>
        <th class="w-4/12 text-left">Description</th>
        <th class="w-2/12">Level</th>
        <th class="w-2/12">Actions</th>
      </tr>
    </thead>
    <tbody>
      <task-row v-for="task in taskList" :key="task.id" :task="task"></task-row>
    </tbody>
  </table>
</template>

<script>
import TaskRow from "./TaskRow.vue";

export default {
  props: {
    taskList: {
      type: Array,
    },
  },
  components: {
    TaskRow,
  },
};
</script>

<style scoped></style>
