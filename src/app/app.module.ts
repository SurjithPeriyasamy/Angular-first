import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { TasksComponent } from './tasks/tasks';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './shared/card/card';
import { TaskComponent } from './tasks/task/task';
import { NewTaskComponent } from './tasks/new-task/new-task';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    CardComponent,
    TaskComponent,
    NewTaskComponent,
  ],
  bootstrap: [App],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
