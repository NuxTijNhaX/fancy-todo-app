import { taskLevel } from "@/enums/TaskLevel";

function Task(name = 'None', desc = 'None', level = taskLevel.Easy, isCompleted = false) {
    this.id = ++Task.prototype.id;
    this.name = name;
    this.desc = desc;
    this.level = level;
    this.isCompleted = isCompleted;
}

Task.prototype.id = 100;

export default Task;