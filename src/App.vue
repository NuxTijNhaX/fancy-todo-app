<template>
  <div>
    <header>
      <h1
        class="text-vue text-7xl font-bold text-center p-10"
      >
        Todo App
      </h1>
    </header>
    <main>
      <router-view
        :taskList="taskList"
        @upsertTask="upsertTask"
        @completeTask="completeTask"
        @deleteTask="deleteTask"
      ></router-view>
    </main>
  </div>
</template>

<script>
import { taskLevel } from "./enums/TaskLevel";

const taskList = [
  {
    id: 1,
    name: "Learn Vue",
    desc: "Learn component, router",
    level: taskLevel.Easy,
    isCompleted: true,
  },
  {
    id: 2,
    name: "Learn Vue",
    desc: "Learn Vuex",
    level: taskLevel.Medium,
    isCompleted: false,
  },
  {
    id: 3,
    name: "Learn Nuxt",
    desc: "Create a first API",
    level: taskLevel.Hard,
    isCompleted: false,
  },
];

export default {
  name: "App",
  data() {
    return {
      taskList: [...taskList],
      color: "blue",
    };
  },
  methods: {
    upsertTask(task) {
      if (this.isTaskExisted(task.id)) {
        const currTask = this.taskList.find((i) => i.id === task.id);
        currTask.name = task.name;
        currTask.desc = task.desc;
        currTask.level = task.level;
        currTask.isCompleted = task.isCompleted;

      } else {
        this.taskList.push(task);
      }
    },
    isTaskExisted(id) {
      return this.taskList.some((task) => task.id === id);
    },
    completeTask(id) {
      const currTask = this.taskList.find((i) => i.id === id);
      currTask.isCompleted = !currTask.isCompleted;
    },
    deleteTask(id) {
      let index = this.taskList.findIndex((el) => el.id === id);
      this.taskList.splice(index, 1);
    },
  },
};
</script>

<style>
.bg-red {
  background-color: red;
}
.bg-blue {
  background-color: blue;
}
.bg-yellow {
  background-color: yellow;
}
.bg-orange {
  background-color: orange;
}
</style>
