import { NgModule } from '@angular/core';
import { App } from './app';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { TasksComponent } from './tasks/tasks';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [App],
  bootstrap: [App],
  imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent],
})
export class AppModule {}
