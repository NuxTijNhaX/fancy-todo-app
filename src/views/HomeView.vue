<template>
  <div class="home">
    <div class="flex justify-center">
      <div class="w-auto">
        <router-link :to="{ name: 'add-task' }">
          <base-button icon="plus">
            <template v-slot:content> Add Task </template>
          </base-button>
        </router-link>
      </div>
    </div>
    <search-bar class="mt-8"></search-bar>
    <div class="flex justify-center mt-10">
      <hr class="w-2/3" />
    </div>
    <div class="flex justify-center">
      <task-list
        v-if="user"
        class="mt-4"
        :taskList="searchTaskList"
      ></task-list>
      <div v-else>
        <p class="text-3xl mt-10">
          <router-link :to="{ name: 'login' }"><span class="underline text-vue">Login</span></router-link>
          to view all tasks
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

import BaseButton from "@/components/BaseButton.vue";
import SearchBar from "@/components/SearchBar.vue";
import TaskList from "@/components/TaskList.vue";

export default {
  name: "HomeView",
  computed: {
    ...mapGetters(["searchTaskList"]),
    ...mapState(["user"]),
  },
  components: {
    BaseButton,
    SearchBar,
    TaskList,
  },
};
</script>
