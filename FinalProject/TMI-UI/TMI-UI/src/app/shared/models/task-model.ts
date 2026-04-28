export interface TaskItem {
  id: number;
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  created: Date;
  dueDate: Date;
  isComplete: boolean;
}

export enum Status {
  PENDING = 'Pending',
  IN_PROGRESS = 'InProgress',
  COMPLETED = 'Completed',
  BLOCKED = 'Blocked',
  REJECTED = 'Rejected',
  ARCHIVED = 'Archived'
}

export enum Priority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  CRITICAL = 'Critical'
}
