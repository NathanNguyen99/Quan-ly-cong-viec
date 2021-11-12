import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { faChevronCircleRight, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { subProduct } from '../Shared/Models/subProduct.model';
import { TaskStatus, Task } from '../Shared/Models/task.model';
import { ProductService } from '../Shared/Services/product.service';
import { Observable } from 'rxjs';
import { ProductQuery } from '../Shared/Services/product.query';
import { AuthQuery } from '../Auth/auth.query';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AuthService } from '../Auth/auth.service';
import { LoginPayload } from '../Auth/loginPayload';
@UntilDestroy()
@Component({
  selector: 'app-sub-post',
  templateUrl: './sub-post.component.html',
  styleUrls: ['./sub-post.component.scss']
})
export class SubPostComponent implements OnInit {

  @Input() public subProductItem: subProduct;
  @Output() public setSubProductEdit = new EventEmitter();

  taskStatuses: TaskStatus[] = [
    TaskStatus.SELECTED,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE
  ];

  faChevronCircleRight = faChevronCircleRight;
  faChevronCircleDown = faChevronCircleDown;
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

  constructor(public projectQuery: ProductQuery, public _productservice: ProductService, public authQuery: AuthQuery, private _authService: AuthService) { }

  ngOnInit(): void { 
    this._authService.login(new LoginPayload());
    this._productservice.getProject(); 
    this.alltask$ = this.projectQuery.select("tasks");
  }

  //*ngFor="let task of DoneTasks" [task]="task" (changeStateClicked)="test('#2BD9FE', task.color, DoneTasks)

}
