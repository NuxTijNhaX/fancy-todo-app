<template>
  <task-info @upsertTask="upsertTask" :currentTask="currentTask">
    <template #title> Edit Task </template>
    <template #button> Update </template>
  </task-info>
</template>

<script>
import TaskInfo from "@/components/TaskInfo.vue";

export default {
  props: {
    taskList: {
      type: Array,
    },
  },
  data() {
    return {
      id: parseInt(this.$route.params.id) ?? 0,
    };
  },
  methods: {
    upsertTask(value) {
      this.$emit("upsertTask", value);
    },
  },
  computed: {
    currentTask() {
      return this.taskList.find((i) => i.id === this.id);
    },
  },
  components: {
    TaskInfo,
  },
};
</script>

<style></style>
