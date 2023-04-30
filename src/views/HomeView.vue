<template>
  <div class="home">
    <div class="flex justify-center">
      <div class="w-auto">
        <router-link :to="{name : 'add-task'}">
          <base-button icon="plus">
          <template v-slot:content> Add Task </template>
        </base-button>
      </router-link>
    </div>
  </div>
    <search-bar @search="searchTask" class="mt-8"></search-bar>
    <div class="flex justify-center mt-10">
      <hr class="w-2/3" />
    </div>
    <div class="flex justify-center">
      <task-list
        @completeTask="completeTask"
        class="mt-4"
        :taskList="filterBySearch"
      ></task-list>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import SearchBar from "@/components/SearchBar.vue";
import TaskList from "@/components/TaskList.vue";

export default {
  name: "HomeView",
  props: {
    taskList: {
      type: Array,
    },
  },
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    searchTask(value) {
      this.searchText = value;
    },
    completeTask(value) {
      this.$emit("completeTask", value);
    },
  },
  computed: {
    filterBySearch() {
      let filter = new RegExp(this.searchText, "i");
      return this.taskList.filter((task) => task.name.match(filter));
    },
  },
  components: {
    BaseButton,
    SearchBar,
    TaskList,
  },
};
</script>
