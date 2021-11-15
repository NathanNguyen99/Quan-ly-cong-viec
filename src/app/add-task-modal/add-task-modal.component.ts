import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Task, TaskStatus } from '../Shared/Models/task.model';
import { User } from '../Shared/Models/user';
import { ProductQuery } from '../Shared/Services/product.query';
import { ProductService } from '../Shared/Services/product.service';
import { DateUtil } from '../utils/date';
import { TaskUtil } from '../utils/task';
import { NoWhitespaceValidator } from '../validators/no-whitespace.validator';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss']
})
export class AddTaskModalComponent implements OnInit {
  faCalendarCheck = faCalendarCheck
  assignees$: Observable<User[]>;
  taskForm: FormGroup;

  get f() {
    return this.taskForm?.controls; 
  }

  constructor(
    private _fb: FormBuilder,
    private _modalRef: NzModalRef,
    private _productService: ProductService,
    private _productQuery: ProductQuery,
    private msg: NzMessageService) {}

  ngOnInit(): void {
    this.initForm();
    // this.reporterUsers$ = this._productQuery.users$.pipe(
    //   untilDestroyed(this),
    //   tap((users) => {
    //     const [user] = users;
    //     if (user) {
    //       this.f.reporterId.patchValue(user.id);
    //     }
    //   })
    // );

    this.assignees$ = this._productQuery.users$;
  }

  initForm() {
    this.taskForm = this._fb.group({
      //type: [IssueType.TASK],
      //priority: [IssuePriority.MEDIUM],
      
      name: ['', NoWhitespaceValidator()],
      description: [''],
      fromDate: [''],
      toDate: [''],
      //reporterId: [''],
      userIds: [[]]
    });
  }

  //Missing close modal overhere

  submitForm() {
    if (this.taskForm.invalid) {
      return;
    }
    const now = DateUtil.getNow();
    const task: Task = {
      ...this.taskForm.getRawValue(),
      id: TaskUtil.getRandomId(),
      status: TaskStatus.TODO,
      createdAt: now,
      updatedAt: now
    };

    this._productService.updateTask(task);
    this.closeModal();
  }

  cancel() {
    this.closeModal();
  }

  closeModal() {
    this._modalRef.close();
  }

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }

}
