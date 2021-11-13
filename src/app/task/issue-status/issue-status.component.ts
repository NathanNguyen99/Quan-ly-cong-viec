import { Component, Input, OnInit } from '@angular/core';
import { Task, TaskStatus, TaskStatusColors, TaskStatusDisplay } from 'src/app/Shared/Models/task.model';
import { ProductService } from 'src/app/Shared/Services/product.service';
import { ProductQuery } from 'src/app/Shared/Services/product.query';

@Component({
  selector: 'issue-status',
  templateUrl: './issue-status.component.html',
  styleUrls: ['./issue-status.component.scss']
})
export class IssueStatusComponent implements OnInit {
  @Input() task: Task;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TaskStatusDisplay = TaskStatusDisplay;
  TaskStatusColors = TaskStatusColors;

  issueStatuses: IssueStatusValueTitle[];

  constructor(private _productService: ProductService, private _productQuery: ProductQuery) {}

  ngOnInit(): void {
    this.issueStatuses = [
      new IssueStatusValueTitle(TaskStatus.SELECTED),
      new IssueStatusValueTitle(TaskStatus.IN_PROGRESS),
      new IssueStatusValueTitle(TaskStatus.DONE)
    ];
  }

  updateTask(status: TaskStatus) {
    const newPosition = this._productQuery.lastIssuePosition(status);
    this._productService.updateTask({
      ...this.task,
      status,
      listPosition: newPosition + 1
    });
  }

  isStatusSelected(status: TaskStatus) {
    return this.task.status === status;
  }
}

class IssueStatusValueTitle {
  value: TaskStatus;
  label: string;
  constructor(taskStatus: TaskStatus) {
    this.value = taskStatus;
    this.label = TaskStatusDisplay[taskStatus];
  }
}
