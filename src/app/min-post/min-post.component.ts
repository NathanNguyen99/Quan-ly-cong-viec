import { Component, OnInit } from '@angular/core';
import {
  faChevronCircleRight,
  faChevronCircleDown,
} from '@fortawesome/free-solid-svg-icons';
import { Task } from '../Shared/Models/task.model';
import { ProductService } from '../Shared/Services/product.service';

@Component({
  selector: 'app-min-post',
  templateUrl: './min-post.component.html',
  styleUrls: ['./min-post.component.scss'],
})
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

  task = {
    name: '',
    fromDate: '',
    toDate: '',
    id: 0,
    color: ''
  };
  edit = true;
  add = false;
  DoneTasks!: Task[];
  inProgressTasks!: Task[];
  alertTasks!: Task[];

  
  addTask(taskname: string, task:Task,) {
    const data = {
      id: task.id,
      name: task.name,
      fromDate: task.fromDate,
      toDate: task.toDate,
      color: task.color
    };
    this.productService.createTask(taskname, data).subscribe(response => {
      console.log("Create: "+ response)
    });
  }

  removeTask(taskname: string, task: Task) {
    const id = task.id;
    console.log(task)
    this.productService.deleteTask(taskname, id).subscribe(subproduct => console.log("Delete" + subproduct));
  }

  test(color:any, parentColor: any, task:any) {
    // Example/ current: Dang thuc hien -> new: Hoan thanh
    if(color != parentColor) {
      switch(color) {
        case "#2BD9FE":
          this.addTask("inProgressTaskSection", task)
          this.inProgressTask()
          break;
        case "#6bc950":
          this.addTask("doneTaskSection", task)  
          this.getDoneTask()
          break;    
        case "#DB504A":
          this.addTask("alertTaskSection", task)
          this.alertTask()      
          break;
      } 
      switch(parentColor) {
        case "#2BD9FE":
          this.removeTask("inProgressTaskSection", task)
          this.inProgressTask()
          break;
        case "#6bc950":
          this.removeTask("doneTaskSection", task)  
          this.getDoneTask()
          break;
        case "#DB504A":
          this.removeTask("alertTaskSection", task)    
          this.alertTask()      
          break;
      }  
    }
  }

  private getDoneTask() {
    this.productService
      .getTask("doneTaskSection")
      .subscribe((data) => (this.DoneTasks = data));
  }

  private inProgressTask() {
    this.productService
      .getTask("inProgressTaskSection")
      .subscribe((data) => (this.inProgressTasks = data));
  }

  private alertTask() {
    this.productService
      .getTask("alertTaskSection")
      .subscribe((data) => (this.alertTasks = data));
  }

  constructor(private productService: ProductService) {}

  ngOnInit(): void {this.getDoneTask(); this.inProgressTask(); this.alertTask()}
}
