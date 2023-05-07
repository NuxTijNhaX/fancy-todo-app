<template>
  <div class="add-task">
    <task-info>
      <template #title>
        Add New Task
      </template>
    </task-info>
  </div>
</template>

<script>
import TaskInfo from "@/components/TaskInfo.vue";

export default {
  components: {
    TaskInfo,
  },
};
</script>

<style></style>
