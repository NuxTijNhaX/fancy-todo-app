import Vue from "vue";
import Vuex from "vuex";
import { taskLevel } from "@/enums/TaskLevel";
import types from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    taskList: [
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
    ],
    searchString: "",
  },
  getters: {
    completedTaskList(state) {
      return state.taskList.filter((task) => task.isCompleted === true);
    },
    searchTaskList: (state) => {
      const searchString = new RegExp(state.searchString, "i");
      return state.taskList.filter((task) => task.name.match(searchString));
    },
    getTaskById: (state) => (id) => {
      return state.taskList.find((task) => task.id === id);
    },
  },
  mutations: {
    [types.DELETE_TASK](state, taskId) {
      const currTaskIndex = state.taskList.findIndex(
        (task) => task.id === taskId
      );
      state.taskList.splice(currTaskIndex, 1);
    },
    [types.UPSERT_TASK](state, task) {
      if (state.taskList.some((e) => e.id === task.id)) {
        let currTask = state.taskList.find((e) => e.id === task.id);

        currTask.name = task.name;
        currTask.desc = task.desc;
        currTask.level = task.level;
        currTask.isCompleted = task.isCompleted;
      } else {
        state.taskList.push(task);
      }
    },
    [types.TOGGLE_TASK](state, taskId) {
      let currTask = state.taskList.find((task) => task.id === taskId);

      currTask.isCompleted = !currTask.isCompleted;
    },
    [types.CHANGE_SEARCH](state, searchString) {
      state.searchString = searchString;
      console.log("ok");
    },
    LOG_IN(state, user) {
      state.user = user ?? null;
    },
    LOG_OUT(state) {
      state.user = null;
    },
  },
  actions: {
    deleteTask({ commit }, taskId) {
      commit(types.DELETE_TASK, taskId);
    },
    upsertTask({ commit }, task) {
      commit(types.UPSERT_TASK, task);
    },
  },
  modules: {},
});
