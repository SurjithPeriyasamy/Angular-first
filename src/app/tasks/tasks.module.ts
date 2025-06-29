import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks';
import { TaskComponent } from './task/task';
import { NewTaskComponent } from './new-task/new-task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}
