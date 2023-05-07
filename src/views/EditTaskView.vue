<template>
  <task-info :currentTask="currentTask">
    <template #title> Edit Task </template>
    <template #button> Update </template>
  </task-info>
</template>

<script>
import TaskInfo from "@/components/TaskInfo.vue";

export default {
  data() {
    return {
      id: 0,
    };
  },
  created() {
    this.id = parseInt(this.$route.params.id) ?? 0;
  },
  computed: {
    currentTask() {
      return this.$store.getters.getTaskById(this.id);
    },
  },
  components: {
    TaskInfo,
  },
};
</script>

<style></style>
