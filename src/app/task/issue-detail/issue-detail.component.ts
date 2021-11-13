import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { IssueDeleteModalComponent } from '../issue-delete-modal/issue-delete-modal.component';
import { DeleteIssueModel } from '../../Shared/Models/ui-model/delete-issue-model';
import { Task } from 'src/app/Shared/Models/task.model';
import { ProductQuery } from 'src/app/Shared/Services/product.query';
import {
  faCloudUploadAlt,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss']
})
export class IssueDetailComponent implements OnInit{
  @Input() task: Task;
  @Input() isShowFullScreenButton: boolean;
  @Input() isShowCloseButton: boolean;
  @Output() onClosed = new EventEmitter();
  @Output() onOpenIssue = new EventEmitter<string>();
  @Output() onDelete = new EventEmitter<DeleteIssueModel>();

  faCloudUploadAlt = faCloudUploadAlt

  constructor(public productQuery: ProductQuery, private _modalService: NzModalService) {}
  ngOnInit(): void {
    console.log(this.task)
  }

  openDeleteIssueModal() {
    this._modalService.create({
      nzContent: IssueDeleteModalComponent,
      nzClosable: false,
      nzFooter: null,
      nzStyle: {
        top: '140px'
      },
      nzComponentParams: {
        issueId: this.task.id,
        onDelete: this.onDelete
      }
    });
  }

  closeModal() {
    this.onClosed.emit();
  }

  openIssuePage() {
    this.onOpenIssue.emit(this.task.id);
  }
}
