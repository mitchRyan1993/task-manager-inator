import { TaskService } from '../../../core/services/task.service';
import { TaskItem } from '../../../shared/models/task-model';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list-component',
  standalone: false,
  templateUrl: './task-list-component.html',
  styleUrl: './task-list-component.css',
})
export class TaskListComponent {

  private refresh$ = new BehaviorSubject<void>(undefined);
  private filter$ = new BehaviorSubject<string>('All');

  // Observable tracking the tasks, reloading on refresh and filter update
  tasks$: Observable<TaskItem[]> = combineLatest([
    this.refresh$.pipe(
      switchMap(() => this.taskService.getTasks())
    ),
    this.filter$
  ]).pipe(
    map(([tasks, filter]) => {
      if (filter === 'All') return tasks;
      return tasks.filter(t => t.status === filter);
    })
  );

  constructor(private taskService: TaskService, private router: Router) { }

  deleteTask(id: number) {
    const confirmed = confirm('Are you sure you want to delete this task?');

    if (!confirmed) {
      return;
    }

    this.taskService.deleteTask(id).subscribe(() => {
      this.refresh$.next();
    });
  }

  editTask(id: number) {
    this.router.navigate(['/tasks/edit', id]);
  }

  toggleComplete(task: TaskItem) {
    const updatedTask = {
      ...task,
      isComplete: !task.isComplete
    };

    this.taskService.updateTask(updatedTask).subscribe(() => {
      task.isComplete = updatedTask.isComplete;
      this.refresh$.next();
    });
  }

  filterStatus(status: string) {
    this.filter$.next(status);
  }

  showAll() {
    this.filter$.next('All');
  }
}
