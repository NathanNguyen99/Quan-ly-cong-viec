import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  ModalDismissReasons,
  NgbActiveModal,
  NgbDateStruct,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import {
  faSquare,
  faGripVertical,
  faTrashAlt,
  faPen,
} from '@fortawesome/free-solid-svg-icons';
import {
  Task,
  TaskStatus,
  TaskStatusColors,
  TaskStatusDisplay,
} from '../Shared/Models/task.model';
import { ProductService } from '../Shared/Services/product.service';
import { User } from '../Shared/Models/user';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ProductQuery } from '../Shared/Services/product.query';
import { DeleteIssueModel } from '../Shared/Models/ui-model/delete-issue-model';
import { Observable } from 'rxjs';
import { IssueModalComponent } from './issue-modal/issue-modal.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
@UntilDestroy()
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() changeStateClicked: EventEmitter<void> = new EventEmitter();

  fromDate!: NgbDateStruct;
  toDate!: NgbDateStruct;
  faSquare = faSquare;
  faTrashAlt = faTrashAlt;
  faGripVertical = faGripVertical;
  faPen = faPen;
  onchangeStateClicked() {
    this.changeStateClicked.emit();
  }

  TaskStatusDisplay = TaskStatusDisplay;
  TaskStatusColors = TaskStatusColors;

  constructor(
    public activeModal: NgbActiveModal,
    private productService: ProductService,
    public _productQuery: ProductQuery,
    private _modalService: NzModalService,
    private modalService: NgbModal
  ) {}
  //ngOnInit(): void {}
  //Below are new modification
  assignees: User[];
  issueTypeIcon: string;
  //priorityIcon: IssuePriorityIcon;

  task$: Observable<Task>;
  ngOnInit(): void {
    this.issueStatuses = [
      new IssueStatusValueTitle(TaskStatus.TODO),
      new IssueStatusValueTitle(TaskStatus.SELECTED),
      new IssueStatusValueTitle(TaskStatus.IN_PROGRESS),
      new IssueStatusValueTitle(TaskStatus.DONE),
    ];
    this._productQuery.users$.pipe(untilDestroyed(this)).subscribe((users) => {
      this.assignees = this.task.userIds.map((userId) =>
        users.find((x) => x.id === userId)
      );
    });
    this.task$ = this._productQuery.issueById$(this.task.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const issueChange = changes.task;
    if (issueChange?.currentValue !== issueChange.previousValue) {
      //this.issueTypeIcon = IssueUtil.getIssueTypeIcon(this.task.type);
    }
  }

  // open2(taskId: string) {
  //   const modalRef = this.modalService.open(TaskModalComponent);
  //   modalRef.componentInstance.task$ = this._productQuery.issueById$(taskId);
  // }

  isVisible = false;
  isOkLoading = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  closeModal() {
    this.activeModal.dismiss('Cross click');
  }

  // openIssuePage(issueId: string) {
  //   this.closeModal();
  //   this._router.navigate(['project', 'issue', issueId]);
  // }

  deleteTask(issueId: string) {
    this.productService.deleteTask(issueId);
    this.modalService.dismissAll('cross click');
  }

  closeResult = '';
  open(content: any, size: string) {
    this.modalService.open(content, { size: size }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  issueStatuses: IssueStatusValueTitle[];

  isStatusSelected(status: TaskStatus) {
    return this.task.status === status;
  }

  updateTask(status: TaskStatus) {
    const newPosition = this._productQuery.lastIssuePosition(status);
    this.productService.updateTask({
      ...this.task,
      status,
      listPosition: newPosition + 1,
    });
  }

  openIssueModal(issueId: string) {
    this._modalService.create({
      nzContent: IssueModalComponent,
      nzWidth: 1040,
      nzClosable: false,
      nzFooter: null,
      nzComponentParams: {
        task$: this._productQuery.issueById$(issueId)
      }
    });
  }
}
// [[],[]]
class IssueStatusValueTitle {
  value: TaskStatus;
  label: string;
  constructor(taskStatus: TaskStatus) {
    this.value = taskStatus;
    this.label = TaskStatusDisplay[taskStatus];
  }
}
