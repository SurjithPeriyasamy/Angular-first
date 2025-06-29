import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
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

  isAddTaskStart() {
    this.isAddTask = true;
  }
  onCloseTask() {
    this.isAddTask = false;
  }
}
