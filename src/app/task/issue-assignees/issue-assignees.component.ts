import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Task } from 'src/app/Shared/Models/task.model';
import { User } from 'src/app/Shared/Models/user';
import { ProductService } from 'src/app/Shared/Services/product.service';
import {
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'issue-assignees',
  templateUrl: './issue-assignees.component.html',
  styleUrls: ['./issue-assignees.component.scss']
})
@UntilDestroy()
export class IssueAssigneesComponent implements OnInit, OnChanges {
  @Input() task: Task;
  @Input() users: User[];
  assignees: User[];

  faPlusCircle = faPlusCircle

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.assignees = this.task.userIds.map((userId) => this.users.find((x) => x.id === userId));
  }

  ngOnChanges(changes: SimpleChanges) {
    const issueChange = changes.task;
    if (this.users && issueChange.currentValue !== issueChange.previousValue) {
      this.assignees = this.task.userIds.map((userId) => this.users.find((x) => x.id === userId));
    }
  }

  removeUser(userId: string) {
    const newUserIds = this.task.userIds.filter((x) => x !== userId);
    this._productService.updateTask({
      ...this.task,
      userIds: newUserIds
    });
  }

  addUserToTask(user: User) {
    this._productService.updateTask({
      ...this.task,
      userIds: [...this.task.userIds, user.id]
    });
  }

  isUserSelected(user: User): boolean {
    return this.task.userIds.includes(user.id);
  }
}
