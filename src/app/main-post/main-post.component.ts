import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { faExclamationCircle, faComment } from '@fortawesome/free-solid-svg-icons';@Component({
  selector: 'app-main-post',
  templateUrl: './main-post.component.html',
  styleUrls: ['./main-post.component.scss']
})
export class MainPostComponent {

  faExclamationCircle = faExclamationCircle;
  faComment = faComment;
  date!: {year: number, month: number};
  disabled = true;


  model!: NgbDateStruct;
  constructor() { }

  ngOnInit(): void {
  }

}
