import { Component, OnInit } from '@angular/core';
import { faChevronCircleRight, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-min-post',
  templateUrl: './min-post.component.html',
  styleUrls: ['./min-post.component.scss']
})
export class MinPostComponent implements OnInit {

  faChevronCircleRight = faChevronCircleRight;
  faChevronCircleDown = faChevronCircleDown;

  public shoud_open = false;

  openChildComponent(){
    this.shoud_open = !this.shoud_open;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
