import { Component,EventEmitter, Output, OnInit, Input } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import {
  faExclamationCircle,
  faComment, faChevronCircleRight, faChevronCircleDown
} from '@fortawesome/free-solid-svg-icons';
import { Product } from '../Shared/Models/product.model';
@Component({
  selector: 'app-main-post',
  templateUrl: './main-post.component.html',
  styleUrls: ['./main-post.component.scss'],
})
export class MainPostComponent {

  @Input() public productItem: Product;
  @Output() public productEdit = new EventEmitter();
  // Icon
  faExclamationCircle = faExclamationCircle;
  faComment = faComment;
  faChevronCircleRight = faChevronCircleRight;
  faChevronCircleDown = faChevronCircleDown;

  date!: { year: number; month: number };
  disabled = true;

  fromDate!: NgbDateStruct;
  toDate!: NgbDateStruct;

  constructor(private modalService: NgbModal) {}

  public updateMyDate() {
    this.productEdit.emit(this.productItem);
  }


  // Function to calculate days left
  calculateDiff() {
    if(this.fromDate == null || this.toDate == null) {
      return "Không"
    }
    var admission = moment(this.fromDate, 'DD-MM-YYYY');
    var discharge = moment(this.toDate, 'DD-MM-YYYY');
    return discharge.diff(admission, 'days');
  }

  public shoud_open = false;

  openChildComponent(){
    this.shoud_open = !this.shoud_open;
  }
  

  ngOnInit(): void {}
}
