import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faChevronCircleRight, faChevronCircleDown, faPlusCircle, faPen } from '@fortawesome/free-solid-svg-icons';
import { subProduct } from '../Shared/Models/subProduct.model';
import { TaskStatus, Task } from '../Shared/Models/task.model';
import { ProductService } from '../Shared/Services/product.service';
import { Observable } from 'rxjs';
import { ProductQuery } from '../Shared/Services/product.query';
import { AuthQuery } from '../Auth/auth.query';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AuthService } from '../Auth/auth.service';
import { LoginPayload } from '../Auth/loginPayload';
import { User } from '../Shared/Models/user';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddTaskModalComponent } from '../add-task-modal/add-task-modal.component';
@UntilDestroy()
@Component({
  selector: 'app-sub-post',
  templateUrl: './sub-post.component.html',
  styleUrls: ['./sub-post.component.scss']
})
@UntilDestroy()
export class SubPostComponent implements OnInit {

  @Input() public subProductItem: subProduct;
  @Output() public setSubProductEdit = new EventEmitter();


  taskStatuses: TaskStatus[] = [
    TaskStatus.SELECTED,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,  
    TaskStatus.TODO,
  ];

  faChevronCircleRight = faChevronCircleRight;
  faChevronCircleDown = faChevronCircleDown;
  faPlusCircle = faPlusCircle;
  faPen = faPen;
  fromDate!: NgbDateStruct;
  toDate!: NgbDateStruct;

  public updateMyDate() {
    this.setSubProductEdit.emit(this.subProductItem);
  }

  getPercentage() {
    return (this.getDoneTask / this.getAllTask) * 100
  }

  public shoud_open = false;

  openChildComponent(){
    this.shoud_open = !this.shoud_open;
  }

  open(content:any, size:string) {
    this.modalService.open(content, { size: size })
  }

  openCreateIssueModal() {
    this._modalService.create({
      nzContent: AddTaskModalComponent,
      nzClosable: false,
      nzFooter: null,
      nzWidth: 700
    });
  }

  tasks: Task[] = [];
  //tasks$=this.projectQuery.issueByStatusSorted$(taskStatuses[]) 
  alltask$ : Observable<Task[]>;

  get getAllTask():number {
    this.alltask$.subscribe(data => this.tasks = data)
    return this.tasks.length
  }

  get getDoneTask(): number {
    let filterDone = this.tasks.filter((x) => x.status === "Done")
    return filterDone.length
  }

  constructor(private _modalService: NzModalService, private modalService: NgbModal, public projectQuery: ProductQuery, public _productservice: ProductService, public authQuery: AuthQuery, private _authService: AuthService) { }
  assignees: User[];

  ngOnInit(): void { 
    this._authService.login(new LoginPayload());
    this._productservice.getProject(); 
    this.alltask$ = this.projectQuery.select("tasks");

    

    this.projectQuery.users$.pipe(untilDestroyed(this)).subscribe((users) => {
      this.assignees = users;
    });
  }

  //*ngFor="let task of DoneTasks" [task]="task" (changeStateClicked)="test('#2BD9FE', task.color, DoneTasks)

}
