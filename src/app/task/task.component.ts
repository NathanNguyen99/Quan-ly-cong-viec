import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../Shared/Models/task.model';
import { ProductService } from '../Shared/Services/product.service';
import { JIssue } from '../Shared/Models/issue';
import { User } from '../Shared/Models/user';
import { IssuePriorityIcon } from '../Shared/Models/issue-priority-icon';
import { ProjectQuery } from '../Shared/project.query';
import { NzModalService } from 'ng-zorro-antd/modal';
import { IssueUtil } from '../utils/issue';
import { IssueModalComponent } from './issue-modal/issue-modal.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() public task: Task;
  @Output() changeStateClicked: EventEmitter<void> = new EventEmitter();

  fromDate!: NgbDateStruct;
  toDate!: NgbDateStruct;
  faSquare = faSquare;

  onchangeStateClicked() {
    this.changeStateClicked.emit()
  }

  returnTitle(colorState:any) {
    switch(colorState) {
      case "#2BD9FE":
        return "ĐANG THỰC HIỆN"
      case "#6bc950":
        return "HOÀN THÀNH"       
      case "#DB504A":
        return "TRỄ HẠN"
      default:
        return "NOTKNOW"
    }
  }

  constructor(private productService: ProductService,private _projectQuery: ProjectQuery, private _modalService: NzModalService) {}
  ngOnInit(): void {}
  //Below are new modification 
  // @Input() issue: JIssue;
  // assignees: User[];
  // issueTypeIcon: string;
  // priorityIcon: IssuePriorityIcon;


  // ngOnInit(): void {
  //   this._projectQuery.users$.pipe(untilDestroyed(this)).subscribe((users) => {
  //     this.assignees = this.issue.userIds.map((userId) => users.find((x) => x.id === userId));
  //   });
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   const issueChange = changes.issue;
  //   if (issueChange?.currentValue !== issueChange.previousValue) {
  //     this.issueTypeIcon = IssueUtil.getIssueTypeIcon(this.issue.type);
  //     this.priorityIcon = IssueUtil.getIssuePriorityIcon(this.issue.priority);
  //   }
  // }

  // openIssueModal(issueId: string) {
  //   this._modalService.create({
  //     nzContent: IssueModalComponent,
  //     nzWidth: 1040,
  //     nzClosable: false,
  //     nzFooter: null,
  //     nzComponentParams: {
  //       issue$: this._projectQuery.issueById$(issueId)
  //     }
  //   });
  // }

}
