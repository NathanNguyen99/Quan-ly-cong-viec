import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { JIssue } from 'src/app/Shared/Models/issue';
import { IssuePriorityIcon } from 'src/app/Shared/Models/issue-priority-icon';
import { User } from 'src/app/Shared/Models/user';
import { ProjectQuery } from 'src/app/Shared/project.query';
import { IssueUtil } from 'src/app/utils/issue';
import { NzModalService } from 'ng-zorro-antd/modal';
import { IssueModalComponent } from '../issue-modal/issue-modal.component';

@Component({
  selector: 'issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.scss']
})
@UntilDestroy()
export class IssueCardComponent implements OnChanges, OnInit {
  @Input() issue: JIssue;
  assignees: User[];
  issueTypeIcon: string;
  priorityIcon: IssuePriorityIcon;

  constructor(private _projectQuery: ProjectQuery, private _modalService: NzModalService) {}

  ngOnInit(): void {
    this._projectQuery.users$.pipe(untilDestroyed(this)).subscribe((users) => {
      this.assignees = this.issue.userIds.map((userId) => users.find((x) => x.id === userId));
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const issueChange = changes.issue;
    if (issueChange?.currentValue !== issueChange.previousValue) {
      this.issueTypeIcon = IssueUtil.getIssueTypeIcon(this.issue.type);
      this.priorityIcon = IssueUtil.getIssuePriorityIcon(this.issue.priority);
    }
  }

  openIssueModal(issueId: string) {
    this._modalService.create({
      nzContent: IssueModalComponent,
      nzWidth: 1040,
      nzClosable: false,
      nzFooter: null,
      nzComponentParams: {
        issue$: this._projectQuery.issueById$(issueId)
      }
    });
  }
}
