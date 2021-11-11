import { Component, Input, OnInit } from '@angular/core';
import {
  faChevronCircleRight,
  faChevronCircleDown,
} from '@fortawesome/free-solid-svg-icons';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { Observable, combineLatest } from 'rxjs';
import { FilterQuery } from '../Shared/filter.query';
import { FilterState } from '../Shared/filter.store';
import { Task, TaskStatus, TaskStatusColors, TaskStatusDisplay } from '../Shared/Models/task.model';
import { ProductService } from '../Shared/Services/product.service';
import { TaskUtil } from '../utils/task';

@Component({
  selector: '[app-min-post]',
  templateUrl: './min-post.component.html',
  styleUrls: ['./min-post.component.scss'],
})

@UntilDestroy()
export class MinPostComponent implements OnInit {
  faChevronCircleRight = faChevronCircleRight;
  faChevronCircleDown = faChevronCircleDown;

  public getDoneTask_open = false;
  public inProgressTask_open = false;
  public alertTask_open = false;

  getDoneTask_openFunc() {
    this.getDoneTask_open = !this.getDoneTask_open;
  }
  inProgressTask_openFunc() {
    this.inProgressTask_open = !this.inProgressTask_open;
  }
  alertTask_openFunc() {
    this.alertTask_open = !this.alertTask_open;
  }

  TaskStatusDisplay = TaskStatusDisplay;
  TaskStatusColors = TaskStatusColors;

  @Input() status: TaskStatus;
  //
  @Input() tasks$: Observable<Task[]>;
  @Input() currentUserId: string;
  tasks: Task[] = [];
  constructor(private _productService: ProductService, private _filterQuery: FilterQuery) {}

  ngOnInit(): void {
    combineLatest([this.tasks$, this._filterQuery.all$])
      .pipe(untilDestroyed(this))
      .subscribe(([issues, filter]) => {
        console.log(this.tasks$)
        this.tasks = this.filterIssues(issues, filter);
        console.log("Issue here" + this.tasks)
      });
      
  }

  get tasksCount(): number {
    return this.tasks.length;
  }
  
  filterIssues(issues: Task[], filter: FilterState): Task[] {
    const { onlyMyIssue, ignoreResolved, searchTerm, userIds } = filter;
    return issues.filter((issue) => {
      const isMatchTerm = searchTerm ? TaskUtil.searchString(issue.name, searchTerm) : true;

      const isIncludeUsers = userIds.length
        ? issue.userIds.some((userId) => userIds.includes(userId))
        : true;

      const isMyIssue = onlyMyIssue
        ? this.currentUserId && issue.userIds.includes(this.currentUserId)
        : true;

      const isIgnoreResolved = ignoreResolved ? issue.status !== TaskStatus.DONE : true;

      return isMatchTerm && isIncludeUsers && isMyIssue && isIgnoreResolved;
    }); 
  }

  // task = {
  //   name: '',
  //   fromDate: '',
  //   toDate: '',
  //   id: 0,
  //   color: ''
  // };
  // edit = true;
  // add = false;
  // DoneTasks!: Task[];
  // inProgressTasks!: Task[];
  // alertTasks!: Task[];

  // get DoneTasksCount(): number {
  //   return this.DoneTasks.length;
  // }
  // get inProgressTasksCount(): number {
  //   return this.inProgressTasks.length;
  // }
  // get alertTasksCount(): number {
  //   return this.alertTasks.length;
  // }
  
  // addTask(taskname: string, task:Task,) {
  //   const data = {
  //     id: task.id,
  //     name: task.name,
  //     fromDate: task.fromDate,
  //     toDate: task.toDate,
  //     color: task.color
  //   };
  //   this.productService.createTask(taskname, data).subscribe(response => {
  //     console.log("Create: "+ response)
  //   });
  // }

  // removeTask(taskname: string, task: Task) {
  //   const id = task.id;
  //   console.log(task)
  //   this.productService.deleteTask(taskname, id).subscribe(subproduct => console.log("Delete" + subproduct));
  // }

  // test(color:any, parentColor: any, task:any) {
  //   // Example/ current: Dang thuc hien -> new: Hoan thanh
  //   if(color != parentColor) {
  //     switch(color) {
  //       case "#2BD9FE":
  //         this.addTask("inProgressTaskSection", task)
  //         this.inProgressTask()
  //         break;
  //       case "#6bc950":
  //         this.addTask("doneTaskSection", task)  
  //         this.getDoneTask()
  //         break;    
  //       case "#DB504A":
  //         this.addTask("alertTaskSection", task)
  //         this.alertTask()      
  //         break;
  //     } 
  //     switch(parentColor) {
  //       case "#2BD9FE":
  //         this.removeTask("inProgressTaskSection", task)
  //         this.inProgressTask()
  //         break;
  //       case "#6bc950":
  //         this.removeTask("doneTaskSection", task)  
  //         this.getDoneTask()
  //         break;
  //       case "#DB504A":
  //         this.removeTask("alertTaskSection", task)    
  //         this.alertTask()      
  //         break;
  //     }  
  //   }
  // }

  // private getDoneTask() {
  //   this.productService
  //     .getTask("doneTaskSection")
  //     .subscribe((data) => (this.DoneTasks = data));
  // }

  // private inProgressTask() {
  //   this.productService
  //     .getTask("inProgressTaskSection")
  //     .subscribe((data) => (this.inProgressTasks = data));
  // }

  // private alertTask() {
  //   this.productService
  //     .getTask("alertTaskSection")
  //     .subscribe((data) => (this.alertTasks = data));
  // }

  // constructor(private productService: ProductService) {}

  // ngOnInit(): void {this.getDoneTask(); this.inProgressTask(); this.alertTask()}
}
