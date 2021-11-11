import { Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { IssueStatus } from '../Shared/Models/issue';
import { ProjectQuery } from '../Shared/project.query';
import { AuthQuery } from '../Auth/auth.query';
import { ProjectService } from '../Shared/project.service';
@UntilDestroy()
@Component({
  selector: 'board-dnd',
  templateUrl: './board-dnd.component.html',
  styleUrls: ['./board-dnd.component.scss']
})
export class BoardDndComponent implements OnInit {
  constructor(private _projectService: ProjectService, public projectQuery: ProjectQuery, public authQuery: AuthQuery) {}
  issueStatuses: IssueStatus[] = [
    IssueStatus.SELECTED,
    IssueStatus.IN_PROGRESS,
    IssueStatus.DONE
  ];

  ngOnInit(): void {
    this._projectService.setLoading(true);
    this._projectService.getProject();
  }

}
