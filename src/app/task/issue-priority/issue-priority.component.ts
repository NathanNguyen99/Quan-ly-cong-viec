import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { JIssue, IssuePriority } from '../../Shared/Models/issue';
import { IssuePriorityIcon } from 'src/app/Shared/Models/issue-priority-icon';
import { IssueUtil } from 'src/app/utils/issue';
import { ProjectService } from 'src/app/Shared/project.service';
import { ProjectConst } from '../../Config/const';

@Component({
  selector: 'issue-priority',
  templateUrl: './issue-priority.component.html',
  styleUrls: ['./issue-priority.component.scss']
})
export class IssuePriorityComponent implements OnInit, OnChanges {
  @Input() issue: JIssue;

  selectedPriority: IssuePriority;
  get selectedPriorityIcon() {
    return IssueUtil.getIssuePriorityIcon(this.selectedPriority);
  }

  priorities: IssuePriorityIcon[];

  constructor(private _projectService: ProjectService) {}

  ngOnInit() {
    this.priorities = ProjectConst.PrioritiesWithIcon;
  }

  ngOnChanges(): void {
    this.selectedPriority = this.issue?.priority;
  }

  isPrioritySelected(priority: IssuePriority) {
    return priority === this.selectedPriority;
  }

  updateIssue(priority: IssuePriority) {
    this.selectedPriority = priority;
    this._projectService.updateIssue({
      ...this.issue,
      priority: this.selectedPriority
    });
  }
}
