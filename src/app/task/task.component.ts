import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() changeStateClicked: EventEmitter<void> = new EventEmitter();

  fromDate!: NgbDateStruct;
  toDate!: NgbDateStruct;
  faSquare = faSquare;

  onchangeStateClicked() {
    this.changeStateClicked.emit()
  }

  returnTitle(colorState:any) {
    switch(colorState) {
      case "#2BD9FE":
        return "ĐANG THỰC HIỆN"
      case "#6bc950":
        return "HOÀN THÀNH"       
      case "#DB504A":
        return "TRỄ HẠN"
      default:
        return "NOTKNOW"
    }
  }


  constructor(private productService: ProductService) {}

  ngOnInit(): void {}
}
