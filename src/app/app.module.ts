import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { TasksComponent } from './tasks/tasks';
import { BrowserModule } from '@angular/platform-browser';
import { TaskComponent } from './tasks/task/task';
import { NewTaskComponent } from './tasks/new-task/new-task';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
  ],
  bootstrap: [App],
  imports: [BrowserModule, FormsModule, SharedModule],
})
export class AppModule {}
