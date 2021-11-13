import { Component, Input  } from '@angular/core';
import { Task } from 'src/app/Shared/Models/task.model';

@Component({
  selector: 'issue-comments',
  templateUrl: './issue-comments.component.html',
  styleUrls: ['./issue-comments.component.scss']
})
export class IssueCommentsComponent {
  @Input() task: Task;

  constructor() {}
}
