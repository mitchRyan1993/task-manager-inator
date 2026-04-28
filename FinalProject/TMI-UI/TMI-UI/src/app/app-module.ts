import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { provideHttpClient } from '@angular/common/http';
import { App } from './app';
import { TaskListComponent } from './features/tasks/task-list-component/task-list-component';
import { HomeComponent } from './pages/home-component/home-component';
import { TaskCreateComponent } from './features/tasks/task-create-component/task-create-component';
import { TaskEditComponent } from './features/tasks/task-edit-component/task-edit-component';

@NgModule({
  declarations: [
    App,
    TaskListComponent,
    HomeComponent,
    TaskCreateComponent,
    TaskListComponent,
    TaskEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
