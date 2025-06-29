import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId?: string;
  @Output() close = new EventEmitter();
  @Output() add = new EventEmitter<NewTask>();

  private tasksService = inject(TasksService);
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';
  onCloseTask() {
    this.close.emit();
  }
  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
      },
      this.userId!
    );
    this.close.emit();
  }
}
