import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { faChevronCircleRight, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sub-post',
  templateUrl: './sub-post.component.html',
  styleUrls: ['./sub-post.component.scss']
})
export class SubPostComponent implements OnInit {

  faChevronCircleRight = faChevronCircleRight;
  faChevronCircleDown = faChevronCircleDown;
  fromDate!: NgbDateStruct;
  toDate!: NgbDateStruct;


  public shoud_open = false;

  openChildComponent(){
    this.shoud_open = !this.shoud_open;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
