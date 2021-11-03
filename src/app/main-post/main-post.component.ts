import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import {
  faExclamationCircle,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-main-post',
  templateUrl: './main-post.component.html',
  styleUrls: ['./main-post.component.scss'],
})
export class MainPostComponent {
  faExclamationCircle = faExclamationCircle;
  faComment = faComment;

  date!: { year: number; month: number };
  disabled = true;

  fromDate!: NgbDateStruct;
  toDate!: NgbDateStruct;

  calculateDiff() {
    if(this.fromDate == null || this.toDate == null) {
      return "Không"
    }
    var admission = moment(this.fromDate, 'DD-MM-YYYY');
    var discharge = moment(this.toDate, 'DD-MM-YYYY');
    return discharge.diff(admission, 'days');
  }

  constructor() {}

  ngOnInit(): void {}
}
