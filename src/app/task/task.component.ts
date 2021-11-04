import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  fromDate!: NgbDateStruct;
  toDate!: NgbDateStruct;
  faSquare = faSquare;
  constructor() { }

  ngOnInit(): void {
  }

}
