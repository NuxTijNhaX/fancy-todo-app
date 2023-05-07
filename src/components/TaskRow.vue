<template>
  <tr>
    <td>
      <input v-model="isCompleted" type="checkbox" @click="completeTask" />
    </td>
    <td :class="lineThroughClass">
      {{ task.name }}
    </td>
    <td :class="lineThroughClass">
      {{ task.desc }}
    </td>
    <td class="text-center" :class="lineThroughClass">
      <span class="border px-1 rounded-md" :class="levelColor[task.level]">{{
        task.level
      }}</span>
    </td>
    <td class="flex justify-center gap-1">
      <router-link :to="{ name: 'edit-task', params: { id: task.id } }">
        <my-button color="orange" icon="edit" size="small" />
      </router-link>
      <router-link :to="{ name: 'delete-task', params: { id: task.id } }">
        <my-button color="red" icon="delete" size="small" />
      </router-link>
    </td>
  </tr>
</template>

<script>
import types from '@/store/mutation-types';
import MyButton from "./BaseButton.vue";

export default {
  props: {
    task: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      levelColor: {
        easy: "border-green-500 text-green-700",
        medium: "border-yellow-500 text-yellow-700",
        hard: "border-red-500 text-red-600",
      },
      isCompleted: this.task.isCompleted,
    };
  },
  methods: {
    completeTask() {
      this.$store.commit(types.TOGGLE_TASK, this.task.id);
    },
  },
  computed: {
    lineThroughClass() {
      return {
        "line-through text-gray-500": this.isCompleted,
      };
    },
  },
  components: {
    MyButton,
  },
};
</script>

<style scoped></style>
