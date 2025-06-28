import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task';
import { NewTaskComponent } from './new-task/new-task';
import { NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

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
  constructor(private tasksService: TasksService) {}
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId!);
  }
  onCompleteTask(taskId: string) {
    this.tasksService.deleteTask(taskId);
  }

  isAddTaskStart() {
    this.isAddTask = true;
  }
  onEndTask() {
    this.isAddTask = false;
  }
  OnAddtask(task: NewTask) {
    this.tasksService.addTask(task, this.userId!);
    this.onEndTask();
  }
}
