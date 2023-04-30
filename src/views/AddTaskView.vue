<template>
  <div class="add-task">
    <task-info @upsertTask="upsertTask">
      <template #title>
        Add New Task
      </template>
    </task-info>
  </div>
</template>

<script>
import TaskInfo from "@/components/TaskInfo.vue";

export default {
  methods: {
    upsertTask(val) {
      this.$emit("upsertTask", val);
    }
  },
  components: {
    TaskInfo,
  },
};
</script>

<style></style>
