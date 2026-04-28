import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TaskListComponent } from './features/tasks/task-list-component/task-list-component';
import { HomeComponent } from './pages/home-component/home-component';
import { TaskCreateComponent } from './features/tasks/task-create-component/task-create-component';
import { TaskEditComponent } from './features/tasks/task-edit-component/task-edit-component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/create', component: TaskCreateComponent },
  { path: 'tasks/edit/:id', component: TaskEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
