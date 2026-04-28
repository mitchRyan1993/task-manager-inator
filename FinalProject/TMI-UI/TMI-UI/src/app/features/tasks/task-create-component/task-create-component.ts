import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../../core/services/task.service';
import { Priority, Status } from '../../../shared/models/task-model';

@Component({
  selector: 'app-task-create-component',
  standalone: false,
  templateUrl: './task-create-component.html',
  styleUrl: './task-create-component.css',
})
export class TaskCreateComponent {

  taskForm: FormGroup;

  priorities = Object.values(Priority);
  statuses = Object.values(Status);
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router
  ) {

    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['Pending', Validators.required],
      priority: ['Low', Validators.required],
      dueDate: ['', Validators.required]
    });

  }

  onSubmit() {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }

    const newTask = {
      ...this.taskForm.value,
      isComplete: false
    };

    this.taskService.createTask(newTask).subscribe(() => {
      this.router.navigate(['/tasks']);
    });

  }
}
