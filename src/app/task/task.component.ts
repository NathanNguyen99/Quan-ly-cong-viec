import { Component, Input, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../Shared/Models/task.model';
import { ProductService } from '../Shared/Services/product.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() public task: Task;
  
  fromDate!: NgbDateStruct;
  toDate!: NgbDateStruct;
  faSquare = faSquare;


  constructor(private productService: ProductService) {}

  ngOnInit(): void {}
}
