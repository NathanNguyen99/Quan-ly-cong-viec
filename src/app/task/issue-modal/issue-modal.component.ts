import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/Shared/Models/task.model';
import { ProductService } from 'src/app/Shared/Services/product.service';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';
import { DeleteIssueModel } from 'src/app/Shared/Models/ui-model/delete-issue-model';

@Component({
  selector: 'issue-modal',
  templateUrl: './issue-modal.component.html',
  styleUrls: ['./issue-modal.component.scss']
})
export class IssueModalComponent {
  @Input() task$: Observable<Task>;

  constructor(
    private _modal: NzModalRef,
    private _router: Router,
    private _productService: ProductService
  ) {}

  closeModal() {
    this._modal.close();
  }

  openIssuePage(issueId: string) {
    this.closeModal();
    this._router.navigate(['project', 'issue', issueId]);
  }

  deleteIssue({ issueId: taskId, deleteModalRef }: DeleteIssueModel) {
    this._productService.deleteTask(taskId);
    deleteModalRef.close();
    this.closeModal();
  }
}
