import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTaskComponent {
  task?: Task;
  @Output() close = new EventEmitter();
  onEndTask() {
    this.close.emit();
  }
}
