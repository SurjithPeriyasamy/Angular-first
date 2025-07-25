import { NgModule } from '@angular/core';

import { App } from './app';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [App, HeaderComponent, UserComponent],
  bootstrap: [App],
  imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {}
