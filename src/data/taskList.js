import { taskLevel } from "@/enums/TaskLevel";

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

export default taskList;
