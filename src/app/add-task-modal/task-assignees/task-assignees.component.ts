import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/Shared/Models/user';

@Component({
  selector: 'task-assignees',
  templateUrl: './task-assignees.component.html',
  styleUrls: ['./task-assignees.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskAssigneesComponent {
  @Input() control: FormControl;
  @Input() users: User[];

  constructor() {}

  getUser(userId: string): any {
    return this.users.find((user) => user.id === userId);
  }

}
