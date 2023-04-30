<template>
  <div>
    <h2 class="text-2xl font-bold text-center">Delete Task</h2>
    <div class="mt-5">
      <p class="text-center text-xl">
        Do you want to delete task '<span class="font-bold">{{
          task.name
        }}</span
        >'?
      </p>
      <p class="text-center">The action cannot be undone.</p>
      <div>
        <router-link
          class="flex justify-center gap-10 mt-5"
          :to="{ name: 'home' }"
        >
          <base-button icon="leftarrow" size="medium" color="blue">
            <template #content> Cancel </template>
          </base-button>
          <base-button
            @click.native="deleteTask"
            icon="delete"
            size="medium"
            color="red"
          >
            <template #content> Delete </template>
          </base-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  props: {
    taskList: {
      type: Array,
    },
  },
  data() {
    return {
      task: null,
    };
  },
  methods: {
    deleteTask() {
      this.$emit("deleteTask", this.task.id);
    },
  },
  created() {
    this.task = this.taskList.find(
      (el) => el.id === parseInt(this.$route.params.id)
    );
  },
  components: {
    BaseButton,
  },
};
</script>

<style></style>
BaseButton
