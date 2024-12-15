import { Injectable, NotFoundException } from "@nestjs/common";
import { Task } from "./task.model";

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private id: number = 1;

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    const result = this.tasks.find((task: Task) => task.id == id);

    if(result) {
      return result;
    } else {
      throw new NotFoundException("Task not found");
    }
  }

  createTask(task: Task): Task {
    const newTask = {id: this.id.toString(), ...task};
    this.tasks.push(newTask);
    this.id += 1;
    return newTask;
  }

  updateTask(id: string, update: Task): Task {
    const taskIndex = this.tasks.findIndex((task: Task) => task?.id == id);
    const theTask = this.tasks[taskIndex];

    if(taskIndex > -1) {
      this.tasks[taskIndex] = {
        ...update,
        id: theTask?.id,
      }
    }

    return this.tasks[taskIndex];
  }

  deleteTask(id: string): Task {
    const taskIndex = this.tasks.findIndex((task: Task) => task?.id == id);
    const theTask = this.tasks[taskIndex];

    this.tasks.splice(taskIndex, 1);

    return theTask;
  }
}
