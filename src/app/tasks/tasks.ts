import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task';
import { NewTask } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent {
  @Input({ required: true }) userId?: string;
  @Input({ required: true }) name?: string;
  isAddTask = false;
  tasks = dummyTasks;
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  isAddTaskStart() {
    this.isAddTask = true;
  }
  onEndTask() {
    this.isAddTask = false;
  }
  OnAddtask(task: NewTask) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId!,
      ...task,
    });
    this.onEndTask();
  }
}
