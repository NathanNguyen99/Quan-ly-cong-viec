import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Task } from 'src/app/Shared/Models/task.model';
import { FormControl } from '@angular/forms';
import { ProductService } from 'src/app/Shared/Services/product.service';

@Component({
  selector: 'issue-description',
  templateUrl: './issue-description.component.html',
  styleUrls: ['./issue-description.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IssueDescriptionComponent implements OnChanges {
  @Input() task: Task;
  descriptionControl: FormControl;

  constructor(private _productService: ProductService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const taskChange = changes.task;
    if (taskChange.currentValue !== taskChange.previousValue) {
      this.descriptionControl = new FormControl(this.task.description);
    }
  }

  onBlur() {
    this._productService.updateTask({
      ...this.task,
      description: this.descriptionControl.value
    });
  }
}
