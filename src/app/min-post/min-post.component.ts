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
    id: '',
  };
  edit = true;
  add = false;
  DoneTasks!: Task[];
  inProgressTasks!: Task[];
  alertTasks!: Task[];


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
