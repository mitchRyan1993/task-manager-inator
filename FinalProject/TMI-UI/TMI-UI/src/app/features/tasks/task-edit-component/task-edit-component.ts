import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../../core/services/task.service';
import { Priority, Status } from '../../../shared/models/task-model';

@Component({
  selector: 'app-task-edit-component',
  standalone: false,
  templateUrl: './task-edit-component.html',
  styleUrl: './task-edit-component.css',
})
export class TaskEditComponent {
  taskForm: FormGroup;
  taskId!: number;
  priorities = Object.values(Priority);
  statuses = Object.values(Status);

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      priority: ['', Validators.required],
      dueDate: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadTask();
  }

  loadTask() {
    this.taskService.getTaskById(this.taskId).subscribe(task => {
      this.taskForm.patchValue({
        title: task.title,
        description: task.description,
        status: task.status,
        priority: task.priority,
        dueDate: task.dueDate
      });
    });
  }

  onSubmit() {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }

    const updatedTask = {
      ...this.taskForm.value,
      id: this.taskId
    };

    this.taskService.updateTask(updatedTask).subscribe(() => {
      this.router.navigate(['/tasks']);
    });
  }

  cancel() {
    this.router.navigate(['/tasks']);
  }

}
