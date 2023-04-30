<template>
  <section class="flex flex-col items-center">
    <h2 class="text-2xl font-bold text-center">
      <slot name="title"></slot>
    </h2>

    <form
      @submit.prevent="upsertTask"
      class="border w-full sm:w-3/4 md:w-1/2 px-12 p-4 text-lg"
    >
      <div class="flex flex-col">
        <label class="font-semibold" for="add-name">Name: </label>
        <input
          v-model.trim="task.name"
          class="border rounded-md p-2 bg-gray-50"
          id="add-name"
          required
        />
      </div>
      <div class="mt-5 flex flex-col">
        <label class="font-semibold" for="add-description">Description: </label>
        <textarea
          v-model.trim="task.desc"
          class="border rounded-md p-2 bg-gray-50"
          id="add-description"
          rows="5"
        ></textarea>
      </div>
      <div class="mt-5 flex flex-col">
        <label class="font-semibold" for="select-level">Level: </label>
        <select
          v-model="task.level"
          class="border rounded-md p-2 bg-gray-50"
          id="select-level"
          required
        >
          <option disabled selected>Select level</option>
          <option v-for="val in taskLevel" :key="val">
            {{ val }}
          </option>
        </select>
      </div>
      <div class="mt-5 flex justify-around">
        <router-link :to="{ name: 'home' }">
          <base-button color="blue" icon="leftarrow" size="medium">
            <template #content> Cancel </template>
          </base-button>
        </router-link>
        <base-button color="yellow" icon="plus" size="medium">
          <template #content>
            <slot name="button"> Create </slot>
          </template>
        </base-button>
      </div>
    </form>
  </section>
</template>

<script>
import { taskLevel } from "@/enums/TaskLevel";
import Task from "@/models/Task";
import BaseButton from "./BaseButton.vue";

export default {
  props: {
    currentTask: {
      type: Object,
    },
  },
  data() {
    return {
      taskLevel: taskLevel,
      task: {
        id: 0,
        name: "",
        desc: "",
        level: "",
      },
    };
  },
  methods: {
    upsertTask() {
      const newTask = new Task(this.task.name, this.task.desc, this.task.level);
      this.task.name = "";
      this.task.desc = "";
      this.task.level = "";

      if (this.currentTask) {
        newTask.id = this.currentTask?.id ?? 0;
      }

      this.$emit("upsertTask", newTask);
    },
  },
  created() {
    if (this.currentTask !== undefined) {
      this.task.id = this.currentTask.id;
      this.task.name = this.currentTask.name;
      this.task.desc = this.currentTask.desc;
      this.task.level = this.currentTask.level;
    }
  },
  components: {
    BaseButton,
  },
};
</script>

<style></style>
