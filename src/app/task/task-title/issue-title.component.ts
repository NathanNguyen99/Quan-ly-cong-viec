import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from 'src/app/Shared/Models/task.model';
import { ProductService } from 'src/app/Shared/Services/product.service';
import { ProjectService } from '../../Shared/project.service';

@Component({
  selector: 'issue-title',
  templateUrl: './issue-title.component.html',
  styleUrls: ['./issue-title.component.scss']
})
export class IssueTitleComponent implements OnChanges {
  @Input() task: Task;
  titleControl: FormControl;

  constructor(private _productService: ProductService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const issueChange = changes.task;
    if (issueChange.currentValue !== issueChange.previousValue) {
      this.titleControl = new FormControl(this.task.name);
    }
  }

  onBlur() {
    this._productService.updateTask({
      ...this.task,
      name: this.titleControl.value
    });
  }
}
