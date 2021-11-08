import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { faChevronCircleRight, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { subProduct } from '../Shared/Models/subProduct.model';
@Component({
  selector: 'app-sub-post',
  templateUrl: './sub-post.component.html',
  styleUrls: ['./sub-post.component.scss']
})
export class SubPostComponent implements OnInit {

  @Input() public subProductItem: subProduct;
  @Output() public setSubProductEdit = new EventEmitter();

  faChevronCircleRight = faChevronCircleRight;
  faChevronCircleDown = faChevronCircleDown;
  fromDate!: NgbDateStruct;
  toDate!: NgbDateStruct;

  public updateMyDate() {
    this.setSubProductEdit.emit(this.subProductItem);
  }

  getPercentage() {
    return (this.subProductItem.doneTask / this.subProductItem.totalTask) * 100
  }

  public shoud_open = false;

  openChildComponent(){
    this.shoud_open = !this.shoud_open;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
